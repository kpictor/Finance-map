import { useState, useEffect, RefObject } from 'react';

interface Dimensions {
    width: number;
    height: number;
}

interface UseDimensionsOptions {
    minWidth?: number;
    minHeight?: number;
    debounceMs?: number;
}

/**
 * Hook 用于监听容器尺寸变化
 * @param containerRef - 容器元素的 ref
 * @param options - 配置选项
 * @returns 当前容器尺寸
 */
export function useDimensions(
    containerRef: RefObject<HTMLElement | null>,
    options: UseDimensionsOptions = {}
): Dimensions {
    const { minWidth = 800, minHeight = 500, debounceMs = 100 } = options;

    const [dimensions, setDimensions] = useState<Dimensions>({
        width: minWidth,
        height: minHeight
    });

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const width = Math.max(rect.width, minWidth);
                const height = Math.max(rect.height, minHeight);
                if (width > 0 && height > 0) {
                    setDimensions({ width, height });
                }
            }
        };

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateDimensions, debounceMs);
        };

        // 初始化时延迟调用以确保 DOM 已渲染
        const initTimer = setTimeout(updateDimensions, debounceMs);

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef, minWidth, minHeight, debounceMs]);

    return dimensions;
}

export default useDimensions;
