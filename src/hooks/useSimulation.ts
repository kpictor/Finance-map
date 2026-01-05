import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import type { GraphNode, GraphLink } from '../types';

interface UseSimulationOptions {
    width: number;
    height: number;
    chargeStrength?: number;
    collisionRadius?: number;
    linkDistance?: (link: GraphLink) => number;
}

interface SimulationReturn {
    simulation: d3.Simulation<GraphNode, GraphLink> | null;
    restart: () => void;
    stop: () => void;
    reheat: (alpha?: number) => void;
}

/**
 * Hook 用于管理 D3 力模拟
 * @param nodes - 节点数据
 * @param links - 连线数据
 * @param options - 配置选项
 */
export function useSimulation(
    nodes: GraphNode[],
    links: GraphLink[],
    options: UseSimulationOptions
): SimulationReturn {
    const {
        width,
        height,
        chargeStrength = -400,
        collisionRadius = 60,
        linkDistance = (d: GraphLink) => 150 / (d.relationship.strength || 1)
    } = options;

    const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);

    // 初始化或更新模拟
    useEffect(() => {
        if (nodes.length === 0) {
            if (simulationRef.current) {
                simulationRef.current.stop();
                simulationRef.current = null;
            }
            return;
        }

        // 创建新的力模拟
        const simulation = d3.forceSimulation<GraphNode>(nodes)
            .force('link', d3.forceLink<GraphNode, GraphLink>(links)
                .id(d => d.id)
                .distance(linkDistance)
            )
            .force('charge', d3.forceManyBody().strength(chargeStrength))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(collisionRadius));

        simulationRef.current = simulation;

        return () => {
            simulation.stop();
        };
    }, [nodes, links, width, height, chargeStrength, collisionRadius, linkDistance]);

    // 重启模拟
    const restart = useCallback(() => {
        if (simulationRef.current) {
            simulationRef.current.alpha(1).restart();
        }
    }, []);

    // 停止模拟
    const stop = useCallback(() => {
        if (simulationRef.current) {
            simulationRef.current.stop();
        }
    }, []);

    // 重新加热模拟
    const reheat = useCallback((alpha = 0.3) => {
        if (simulationRef.current) {
            simulationRef.current.alphaTarget(alpha).restart();
        }
    }, []);

    return {
        simulation: simulationRef.current,
        restart,
        stop,
        reheat
    };
}

export default useSimulation;
