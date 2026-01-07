import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { Entity, Relationship, GraphNode, GraphLink, Language, RelationType } from '../../types';
import { DomainConfig, RiskLevelConfig, RelationTypeConfig } from '../../types';
import { useDimensions } from '../../hooks';
import { useAppContext } from '../../context/AppContext';
import './ForceGraph.css';

interface ForceGraphProps {
    entities: Entity[];
    relationships: Relationship[];
    language: Language;
    selectedEntity: Entity | null;
    expandedNodes: Set<string>;  // 已展开的父节点
    onEntityClick: (entity: Entity | null) => void;
    onEntityHover: (entity: Entity | null) => void;
    onEntityDoubleClick: (entity: Entity) => void;  // 双击展开/收缩
}

// 根据层级获取节点半径
const getNodeRadius = (level?: 1 | 2 | 3): number => {
    switch (level) {
        case 1: return 42;  // 顶级概念 - 大节点
        case 2: return 28;  // 二级概念 - 中节点
        case 3: return 20;  // 三级概念 - 小节点
        default: return 28; // 默认中等大小
    }
};

// 根据层级获取字体大小
const getFontSize = (level?: 1 | 2 | 3): number => {
    switch (level) {
        case 1: return 24;
        case 2: return 18;
        case 3: return 14;
        default: return 18;
    }
};

// 域聚类中心位置
const getDomainCenter = (domain: string, width: number, height: number): { x: number; y: number } => {
    const positions: Record<string, { x: number; y: number }> = {
        markets: { x: width * 0.25, y: height * 0.3 },
        institutions: { x: width * 0.75, y: height * 0.3 },
        instruments: { x: width * 0.25, y: height * 0.7 },
        macro: { x: width * 0.75, y: height * 0.7 }
    };
    return positions[domain] || { x: width / 2, y: height / 2 };
};

export const ForceGraph: React.FC<ForceGraphProps> = ({
    entities,
    relationships,
    language,
    selectedEntity,
    onEntityClick,
    onEntityHover,
    onEntityDoubleClick
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const zoomRef = useRef<any>(null);  // 存储d3 zoom behavior
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const svgSelectionRef = useRef<any>(null);  // 存储svg selection

    // 获取层级控制状态
    const { maxLevel, setMaxLevel } = useAppContext();

    // 使用 refs 存储回调函数，避免重新渲染
    const onEntityClickRef = useRef(onEntityClick);
    const onEntityHoverRef = useRef(onEntityHover);
    const onEntityDoubleClickRef = useRef(onEntityDoubleClick);
    onEntityClickRef.current = onEntityClick;
    onEntityHoverRef.current = onEntityHover;
    onEntityDoubleClickRef.current = onEntityDoubleClick;

    // 使用 useDimensions hook 处理尺寸监听
    const dimensions = useDimensions(containerRef, { minWidth: 800, minHeight: 500 });

    // 创建和更新力导向图
    useEffect(() => {
        if (!svgRef.current || entities.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const { width, height } = dimensions;

        // 创建缩放行为 - 支持滚轮和触摸缩放
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.3, 3])  // 缩放范围: 30% - 300%
            .on('zoom', (event) => {
                container.attr('transform', event.transform);
            });

        // 保存zoom引用到ref以便缩放按钮使用
        zoomRef.current = zoom;
        svgSelectionRef.current = svg;

        svg.call(zoom)
            .on('dblclick.zoom', null); // 禁用双击缩放

        // 创建主容器
        const container = svg.append('g').attr('class', 'graph-container');

        // 准备数据
        const nodes: GraphNode[] = entities.map(e => ({ ...e }));
        const links: GraphLink[] = relationships.map(r => ({
            source: r.source,
            target: r.target,
            relationship: r
        }));

        // 创建域聚类力
        const forceCluster = (alpha: number) => {
            for (const node of nodes) {
                const center = getDomainCenter(node.domain, width, height);
                const k = alpha * 0.15; // 聚类强度
                node.vx = (node.vx || 0) + (center.x - (node.x || 0)) * k;
                node.vy = (node.vy || 0) + (center.y - (node.y || 0)) * k;
            }
        };

        // 创建力模拟 - 优化参数
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink<GraphNode, GraphLink>(links)
                .id(d => d.id)
                .distance(d => {
                    // 层级关系（provides）距离较短，其他关系适中
                    const isHierarchy = d.relationship.type === 'provides';
                    const baseDistance = isHierarchy ? 80 : 150;
                    return baseDistance / (d.relationship.strength || 1);
                })
            )
            .force('charge', d3.forceManyBody()
                .strength(d => {
                    // 顶级节点排斥力更强
                    const node = d as GraphNode;
                    return node.level === 1 ? -600 : -300;
                })
            )
            .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
            .force('collision', d3.forceCollide<GraphNode>()
                .radius(d => getNodeRadius(d.level) + 15)
            )
            .force('cluster', forceCluster);

        // 创建箭头标记 - 为不同大小节点创建
        const defs = svg.append('defs');

        Object.entries(DomainConfig).forEach(([domain, config]) => {
            // 大节点箭头
            defs.append('marker')
                .attr('id', `arrow-${domain}-lg`)
                .attr('viewBox', '0 -5 10 10')
                .attr('refX', 45)
                .attr('refY', 0)
                .attr('markerWidth', 6)
                .attr('markerHeight', 6)
                .attr('orient', 'auto')
                .append('path')
                .attr('fill', config.color)
                .attr('d', 'M0,-5L10,0L0,5');

            // 中节点箭头
            defs.append('marker')
                .attr('id', `arrow-${domain}-md`)
                .attr('viewBox', '0 -5 10 10')
                .attr('refX', 32)
                .attr('refY', 0)
                .attr('markerWidth', 5)
                .attr('markerHeight', 5)
                .attr('orient', 'auto')
                .append('path')
                .attr('fill', config.color)
                .attr('d', 'M0,-5L10,0L0,5');

            // 小节点箭头
            defs.append('marker')
                .attr('id', `arrow-${domain}-sm`)
                .attr('viewBox', '0 -5 10 10')
                .attr('refX', 24)
                .attr('refY', 0)
                .attr('markerWidth', 4)
                .attr('markerHeight', 4)
                .attr('orient', 'auto')
                .append('path')
                .attr('fill', config.color)
                .attr('d', 'M0,-5L10,0L0,5');
        });

        // 创建连线 - 根据关系类型着色
        const link = container.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('class', d => `link link-${d.relationship.type}`)
            .attr('stroke', d => {
                // 使用关系类型颜色
                const relationType = d.relationship.type as RelationType;
                return RelationTypeConfig[relationType]?.color || '#999';
            })
            .attr('stroke-opacity', d => {
                // 层级关系线更淡
                const isHierarchy = d.relationship.type === 'provides';
                return isHierarchy ? 0.4 : 0.6 + (d.relationship.strength * 0.1);
            })
            .attr('stroke-width', d => {
                // 层级关系线更细，其他根据强度
                const isHierarchy = d.relationship.type === 'provides';
                return isHierarchy ? 1.5 : Math.max(1.5, d.relationship.strength * 1.2);
            })
            .attr('stroke-dasharray', d => {
                // 层级关系用虚线，影响关系用点线
                if (d.relationship.type === 'provides') return '4,4';
                if (d.relationship.type === 'influences') return '2,2';
                return 'none';
            })
            .attr('marker-end', d => {
                const sourceNode = nodes.find(n => n.id === (typeof d.source === 'string' ? d.source : d.source.id));
                const targetNode = nodes.find(n => n.id === (typeof d.target === 'string' ? d.target : d.target.id));
                if (!sourceNode || d.relationship.bidirectional) return null;
                // 根据目标节点大小选择箭头
                const size = targetNode?.level === 1 ? 'lg' : (targetNode?.level === 3 ? 'sm' : 'md');
                return `url(#arrow-${sourceNode.domain}-${size})`;
            });

        // 创建节点组
        const node = container.append('g')
            .attr('class', 'nodes')
            .selectAll<SVGGElement, GraphNode>('g')
            .data(nodes)
            .join('g')
            .attr('class', (d: GraphNode) => `node node-level-${d.level || 2}`)
            .call(d3.drag<SVGGElement, GraphNode>()
                .on('start', (event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on('end', (event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                })
            );

        // 节点背景圆 - 根据层级设置大小
        node.append('circle')
            .attr('r', (d: GraphNode) => getNodeRadius(d.level))
            .attr('fill', (d: GraphNode) => DomainConfig[d.domain].color)
            .attr('class', 'node-circle')
            .attr('stroke', (d: GraphNode) => d.riskLevel ? RiskLevelConfig[d.riskLevel].color : 'transparent')
            .attr('stroke-width', (d: GraphNode) => {
                if (!d.riskLevel) return 0;
                return d.level === 1 ? 6 : (d.level === 3 ? 3 : 4);
            })
            .style('cursor', (d: GraphNode) => d.level === 1 ? 'pointer' : 'default')
            .on('click', (event: MouseEvent, d: GraphNode) => {
                event.stopPropagation();
                event.preventDefault();

                // 单击选中节点
                onEntityClickRef.current(d);
            })
            .on('mouseenter', (_event: MouseEvent, d: GraphNode) => {
                onEntityHoverRef.current(d);
            })
            .on('mouseleave', () => {
                onEntityHoverRef.current(null);
            });

        // 展开/收缩按钮 - 已移除 (Fix: Remove Zoom/Scale)


        // 节点图标 - 根据层级设置字体大小
        node.append('text')
            .attr('class', 'node-icon')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .attr('font-size', (d: GraphNode) => `${getFontSize(d.level)}px`)
            .style('pointer-events', 'none')
            .text((d: GraphNode) => d.icon || DomainConfig[d.domain].icon);

        // 节点标签 - 根据层级调整位置和大小
        node.append('text')
            .attr('class', 'node-label')
            .attr('text-anchor', 'middle')
            .attr('dy', (d: GraphNode) => getNodeRadius(d.level) + 15)
            .attr('font-size', (d: GraphNode) => d.level === 1 ? '13px' : (d.level === 3 ? '10px' : '11px'))
            .attr('font-weight', (d: GraphNode) => d.level === 1 ? '600' : '400')
            .attr('fill', '#374151')
            .text((d: GraphNode) => d.name[language]);

        // 更新位置
        simulation.on('tick', () => {
            link
                .attr('x1', d => (d.source as GraphNode).x || 0)
                .attr('y1', d => (d.source as GraphNode).y || 0)
                .attr('x2', d => (d.target as GraphNode).x || 0)
                .attr('y2', d => (d.target as GraphNode).y || 0);

            node.attr('transform', (d: GraphNode) => `translate(${d.x || 0}, ${d.y || 0})`);
        });

        // 点击背景取消选择
        svg.on('click', () => {
            onEntityClickRef.current(null);
        });

        // 高亮选中的实体
        if (selectedEntity) {
            const connectedIds = new Set<string>();
            connectedIds.add(selectedEntity.id);

            relationships.forEach(r => {
                if (r.source === selectedEntity.id) connectedIds.add(r.target);
                if (r.target === selectedEntity.id) connectedIds.add(r.source);
            });

            node.selectAll('.node-circle')
                .attr('opacity', (d: any) => connectedIds.has(d.id) ? 1 : 0.15);

            node.selectAll('.node-label')
                .attr('opacity', (d: any) => connectedIds.has(d.id) ? 1 : 0.15);

            node.selectAll('.node-icon')
                .attr('opacity', (d: any) => connectedIds.has(d.id) ? 1 : 0.15);

            link.attr('stroke-opacity', (d: any) => {
                const srcId = typeof d.source === 'string' ? d.source : d.source.id;
                const tgtId = typeof d.target === 'string' ? d.target : d.target.id;
                return (srcId === selectedEntity.id || tgtId === selectedEntity.id) ? 0.8 : 0.05;
            });
        }

        return () => {
            simulation.stop();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entities, relationships, dimensions, language, selectedEntity]);

    return (
        <div ref={containerRef} className="force-graph-container">
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />

            {/* 层级控制按钮 */}
            <div className="level-controls">
                <div className="level-label">{language === 'zh' ? '层级' : 'Level'}</div>
                <button
                    className={`level-btn ${maxLevel === 1 ? 'level-btn-active' : ''}`}
                    onClick={() => setMaxLevel(1)}
                    title={language === 'zh' ? '只显示顶级概念' : 'Show top-level only'}
                >
                    L1
                </button>
                <button
                    className={`level-btn ${maxLevel === 2 ? 'level-btn-active' : ''}`}
                    onClick={() => setMaxLevel(2)}
                    title={language === 'zh' ? '显示到二级' : 'Show up to L2'}
                >
                    L2
                </button>
                <button
                    className={`level-btn ${maxLevel === 3 ? 'level-btn-active' : ''}`}
                    onClick={() => setMaxLevel(3)}
                    title={language === 'zh' ? '显示全部层级' : 'Show all levels'}
                >
                    {language === 'zh' ? '全部' : 'All'}
                </button>
            </div>
        </div>
    );
};

export default ForceGraph;

