import { useEffect, useRef, useMemo, useCallback } from 'react';
import * as d3 from 'd3';
import type { Entity, Relationship, GraphNode, GraphLink, Language } from '../../types';
import { DomainConfig, RiskLevelConfig } from '../../types';
import { useDimensions } from '../../hooks';
import './ForceGraph.css';

interface ForceGraphProps {
    entities: Entity[];
    relationships: Relationship[];
    language: Language;
    selectedEntity: Entity | null;
    onEntityClick: (entity: Entity | null) => void;
    onEntityHover: (entity: Entity | null) => void;
    onResetZoom?: () => void;
}

export const ForceGraph: React.FC<ForceGraphProps> = ({
    entities,
    relationships,
    language,
    selectedEntity,
    onEntityClick,
    onEntityHover
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
    const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);

    // 使用 useDimensions hook 处理尺寸监听
    const dimensions = useDimensions(containerRef, { minWidth: 800, minHeight: 500 });

    // 缓存节点和连线数据
    const { nodes, links } = useMemo(() => {
        const nodes: GraphNode[] = entities.map(e => ({ ...e }));
        const links: GraphLink[] = relationships.map(r => ({
            source: r.source,
            target: r.target,
            relationship: r
        }));
        return { nodes, links };
    }, [entities, relationships]);

    // 创建节点 ID 索引以提高查找效率
    const nodeIndex = useMemo(() => {
        return new Map(nodes.map(n => [n.id, n]));
    }, [nodes]);

    // 重置缩放的回调函数
    const resetZoom = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(500)
            .call(zoomRef.current.transform, d3.zoomIdentity);
    }, []);

    // 将 resetZoom 暴露给父组件
    useEffect(() => {
        // 使用 window 事件让父组件可以触发重置
        const handleResetZoom = () => resetZoom();
        window.addEventListener('finance-map-reset-zoom', handleResetZoom);
        return () => window.removeEventListener('finance-map-reset-zoom', handleResetZoom);
    }, [resetZoom]);

    // 创建和更新力导向图
    useEffect(() => {
        if (!svgRef.current || entities.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const { width, height } = dimensions;

        // 创建缩放行为
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.2, 4])
            .on('zoom', (event) => {
                container.attr('transform', event.transform);
            });

        svg.call(zoom);
        zoomRef.current = zoom;

        // 创建主容器
        const container = svg.append('g').attr('class', 'graph-container');

        // 创建力模拟
        const simulation = d3.forceSimulation<GraphNode>(nodes)
            .force('link', d3.forceLink<GraphNode, GraphLink>(links)
                .id(d => d.id)
                .distance(d => 150 / (d.relationship.strength || 1))
            )
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(60));

        simulationRef.current = simulation;

        // 创建箭头标记
        const defs = svg.append('defs');

        Object.entries(DomainConfig).forEach(([domain, config]) => {
            defs.append('marker')
                .attr('id', `arrow-${domain}`)
                .attr('viewBox', '0 -5 10 10')
                .attr('refX', 28)
                .attr('refY', 0)
                .attr('markerWidth', 6)
                .attr('markerHeight', 6)
                .attr('orient', 'auto')
                .append('path')
                .attr('fill', config.color)
                .attr('d', 'M0,-5L10,0L0,5');
        });

        // 获取节点颜色的辅助函数
        const getSourceNode = (d: GraphLink): GraphNode | undefined => {
            const sourceId = typeof d.source === 'string' ? d.source : d.source.id;
            return nodeIndex.get(sourceId);
        };

        // 创建连线
        const link = container.append('g')
            .attr('class', 'links')
            .selectAll<SVGLineElement, GraphLink>('line')
            .data(links)
            .join('line')
            .attr('class', 'link')
            .attr('stroke', d => {
                const sourceNode = getSourceNode(d);
                return sourceNode ? DomainConfig[sourceNode.domain].color : '#999';
            })
            .attr('stroke-opacity', d => 0.3 + (d.relationship.strength * 0.2))
            .attr('stroke-width', d => d.relationship.strength)
            .attr('marker-end', d => {
                const sourceNode = getSourceNode(d);
                return sourceNode && !d.relationship.bidirectional ? `url(#arrow-${sourceNode.domain})` : null;
            });

        // 拖拽行为
        const dragBehavior = d3.drag<SVGGElement, GraphNode>()
            .on('start', (event, d) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on('end', (event, d) => {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            });

        // 创建节点组
        const node = container.append('g')
            .attr('class', 'nodes')
            .selectAll<SVGGElement, GraphNode>('g')
            .data(nodes)
            .join('g')
            .attr('class', 'node')
            .call(dragBehavior);

        // 节点背景圆
        node.append('circle')
            .attr('r', 30)
            .attr('fill', d => DomainConfig[d.domain].color)
            .attr('class', 'node-circle')
            .attr('stroke', d => d.riskLevel ? RiskLevelConfig[d.riskLevel].color : 'transparent')
            .attr('stroke-width', d => d.riskLevel ? 5 : 0)
            .on('click', (event, d) => {
                event.stopPropagation();
                onEntityClick(d);
            })
            .on('mouseenter', (_event, d) => {
                onEntityHover(d);
            })
            .on('mouseleave', () => {
                onEntityHover(null);
            });

        // 节点图标
        node.append('text')
            .attr('class', 'node-icon')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .attr('font-size', '20px')
            .text(d => d.icon || DomainConfig[d.domain].icon);

        // 节点标签
        node.append('text')
            .attr('class', 'node-label')
            .attr('text-anchor', 'middle')
            .attr('dy', 45)
            .attr('font-size', '12px')
            .attr('fill', '#374151')
            .text(d => d.name[language]);

        // 更新位置
        simulation.on('tick', () => {
            link
                .attr('x1', d => (d.source as GraphNode).x || 0)
                .attr('y1', d => (d.source as GraphNode).y || 0)
                .attr('x2', d => (d.target as GraphNode).x || 0)
                .attr('y2', d => (d.target as GraphNode).y || 0);

            node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
        });

        // 点击背景取消选择
        svg.on('click', () => {
            onEntityClick(null);
        });

        // 高亮选中的实体
        if (selectedEntity) {
            const connectedIds = new Set<string>();
            connectedIds.add(selectedEntity.id);

            relationships.forEach(r => {
                if (r.source === selectedEntity.id) connectedIds.add(r.target);
                if (r.target === selectedEntity.id) connectedIds.add(r.source);
            });

            node.selectAll<SVGCircleElement, GraphNode>('.node-circle')
                .attr('opacity', d => connectedIds.has(d.id) ? 1 : 0.2);

            node.selectAll<SVGTextElement, GraphNode>('.node-label')
                .attr('opacity', d => connectedIds.has(d.id) ? 1 : 0.2);

            link.attr('stroke-opacity', d => {
                const srcId = typeof d.source === 'string' ? d.source : (d.source as GraphNode).id;
                const tgtId = typeof d.target === 'string' ? d.target : (d.target as GraphNode).id;
                return (srcId === selectedEntity.id || tgtId === selectedEntity.id) ? 0.8 : 0.1;
            });
        }

        return () => {
            simulation.stop();
        };
    }, [entities, relationships, nodes, links, nodeIndex, dimensions, language, selectedEntity, onEntityClick, onEntityHover]);

    return (
        <div ref={containerRef} className="force-graph-container">
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
        </div>
    );
};

export default ForceGraph;
