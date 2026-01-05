import { useRef, useEffect, useCallback } from 'react';
import type { MutableRefObject } from 'react';
import * as d3 from 'd3';

interface UseZoomOptions {
    minScale?: number;
    maxScale?: number;
    onZoom?: (transform: d3.ZoomTransform) => void;
}

interface ZoomReturn {
    zoomBehavior: d3.ZoomBehavior<SVGSVGElement, unknown> | null;
    currentTransform: MutableRefObject<d3.ZoomTransform>;
    resetZoom: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    zoomTo: (scale: number) => void;
}

/**
 * Hook 用于管理 D3 缩放行为
 * @param svgRef - SVG 元素的 ref
 * @param containerRef - 需要应用变换的容器 ref（通常是 g 元素的选择器）
 * @param options - 配置选项
 */
export function useZoom(
    svgRef: MutableRefObject<SVGSVGElement | null>,
    options: UseZoomOptions = {}
): ZoomReturn {
    const {
        minScale = 0.2,
        maxScale = 4,
        onZoom
    } = options;

    const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
    const currentTransform = useRef<d3.ZoomTransform>(d3.zoomIdentity);

    // 初始化缩放行为
    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([minScale, maxScale])
            .on('zoom', (event) => {
                currentTransform.current = event.transform;
                // 查找并变换 graph-container
                svg.select('.graph-container').attr('transform', event.transform);
                onZoom?.(event.transform);
            });

        svg.call(zoom);
        zoomRef.current = zoom;

        return () => {
            svg.on('.zoom', null);
        };
    }, [svgRef, minScale, maxScale, onZoom]);

    // 重置缩放
    const resetZoom = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(500)
            .call(zoomRef.current.transform, d3.zoomIdentity);
    }, [svgRef]);

    // 放大
    const zoomIn = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(300)
            .call(zoomRef.current.scaleBy, 1.3);
    }, [svgRef]);

    // 缩小
    const zoomOut = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(300)
            .call(zoomRef.current.scaleBy, 0.7);
    }, [svgRef]);

    // 缩放到指定比例
    const zoomTo = useCallback((scale: number) => {
        if (!svgRef.current || !zoomRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.transition()
            .duration(300)
            .call(zoomRef.current.scaleTo, scale);
    }, [svgRef]);

    return {
        zoomBehavior: zoomRef.current,
        currentTransform,
        resetZoom,
        zoomIn,
        zoomOut,
        zoomTo
    };
}

export default useZoom;
