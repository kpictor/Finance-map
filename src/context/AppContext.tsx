import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { Entity, Domain, Language, Relationship } from '../types';
import { sampleData } from '../data/sampleData';

// 应用状态接口
interface AppState {
    language: Language;
    selectedDomain: Domain | null;
    selectedEntity: Entity | null;
    searchQuery: string;
    hoveredEntity: Entity | null;
    expandedNodes: Set<string>;  // 已展开的父节点ID
    maxLevel: 1 | 2 | 3;  // 显示的最大层级深度
}

// 应用上下文接口
interface AppContextType extends AppState {
    // 数据
    entities: Entity[];
    relationships: Relationship[];
    filteredEntities: Entity[];
    filteredRelationships: Relationship[];
    visibleEntities: Entity[];      // 考虑展开状态后的可见实体
    visibleRelationships: Relationship[];  // 考虑展开状态后的可见关系
    stats: {
        total: number;
        markets: number;
        institutions: number;
        instruments: number;
        macro: number;
        relationships: number;
    };

    // 操作
    setLanguage: (lang: Language) => void;
    setSelectedDomain: (domain: Domain | null) => void;
    setSelectedEntity: (entity: Entity | null) => void;
    setSearchQuery: (query: string) => void;
    setHoveredEntity: (entity: Entity | null) => void;
    toggleExpand: (entityId: string) => void;  // 切换节点展开/收缩
    expandAll: () => void;     // 展开全部
    collapseAll: () => void;   // 收缩全部
    setMaxLevel: (level: 1 | 2 | 3) => void;  // 设置显示层级
    resetFilters: () => void;
}

// 创建上下文
const AppContext = createContext<AppContextType | null>(null);

// Provider 组件
interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const { i18n } = useTranslation();

    // 应用状态
    const [language, setLanguageState] = useState<Language>(
        (i18n.language?.startsWith('zh') ? 'zh' : 'en') as Language
    );
    const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
    const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredEntity, setHoveredEntity] = useState<Entity | null>(null);

    // 展开状态 - 默认展开所有节点 (Fix: 150/167 count mismatch)
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => {
        const allIds = sampleData.entities.map(e => e.id);
        return new Set(allIds);
    });

    // 显示层级深度 - 默认显示所有层级
    const [maxLevel, setMaxLevel] = useState<1 | 2 | 3>(3);

    // 切换语言
    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        i18n.changeLanguage(lang);
    }, [i18n]);

    // 切换节点展开/收缩
    const toggleExpand = useCallback((entityId: string) => {
        setExpandedNodes(prev => {
            const next = new Set(prev);
            if (next.has(entityId)) {
                next.delete(entityId);
            } else {
                next.add(entityId);
            }
            return next;
        });
    }, []);

    // 展开全部
    const expandAll = useCallback(() => {
        const level1Ids = sampleData.entities
            .filter(e => e.level === 1)
            .map(e => e.id);
        setExpandedNodes(new Set(level1Ids));
    }, []);

    // 收缩全部
    const collapseAll = useCallback(() => {
        setExpandedNodes(new Set());
    }, []);

    // 重置过滤器
    const resetFilters = useCallback(() => {
        setSelectedDomain(null);
        setSearchQuery('');
        setSelectedEntity(null);
        expandAll();
    }, [expandAll]);

    // 过滤实体（按域和搜索词）
    const filteredEntities = useMemo(() => {
        let entities = sampleData.entities;

        // 按领域过滤
        if (selectedDomain) {
            entities = entities.filter(e => e.domain === selectedDomain);
        }

        // 按搜索词过滤
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            entities = entities.filter(e =>
                e.name.zh.toLowerCase().includes(query) ||
                e.name.en.toLowerCase().includes(query) ||
                e.tags?.some(tag => tag.toLowerCase().includes(query))
            );
        }

        return entities;
    }, [selectedDomain, searchQuery]);

    // 可见实体（考虑展开状态和层级限制）
    // 逻辑：节点可见当且仅当其所有祖先节点都已展开且level<=maxLevel
    const visibleEntities = useMemo(() => {
        // 如果有搜索词，显示所有匹配结果（不考虑展开状态和层级）
        if (searchQuery.trim()) {
            return filteredEntities;
        }

        // 首先按层级过滤
        const levelFiltered = filteredEntities.filter(e =>
            (e.level || 2) <= maxLevel
        );

        // 构建id到entity的映射，用于快速查找父节点
        const entityMap = new Map(levelFiltered.map(e => [e.id, e]));

        // 检查一个节点的所有祖先是否都已展开
        const isAncestorsExpanded = (entity: Entity): boolean => {
            // 顶级节点(level 1)或无父节点的节点总是可见
            if (entity.level === 1 || !entity.parentId) {
                return true;
            }

            // 检查父节点是否展开 + 父节点的祖先是否都展开（递归）
            const parent = entityMap.get(entity.parentId);
            if (!parent) {
                // 父节点不存在（可能被过滤掉了），节点不可见
                return false;
            }

            // 父节点必须在expandedNodes中，且父节点的祖先也必须都展开
            return expandedNodes.has(entity.parentId) && isAncestorsExpanded(parent);
        };

        return levelFiltered.filter(isAncestorsExpanded);
    }, [filteredEntities, expandedNodes, searchQuery, maxLevel]);

    // 过滤关系（基于filteredEntities）
    const filteredRelationships = useMemo(() => {
        const entityIds = new Set(filteredEntities.map(e => e.id));
        return sampleData.relationships.filter(
            r => entityIds.has(r.source) && entityIds.has(r.target)
        );
    }, [filteredEntities]);

    // 可见关系（基于visibleEntities）
    const visibleRelationships = useMemo(() => {
        const entityIds = new Set(visibleEntities.map(e => e.id));
        return sampleData.relationships.filter(
            r => entityIds.has(r.source) && entityIds.has(r.target)
        );
    }, [visibleEntities]);

    // 统计信息
    const stats = useMemo(() => ({
        total: sampleData.entities.length,
        markets: sampleData.entities.filter(e => e.domain === 'markets').length,
        institutions: sampleData.entities.filter(e => e.domain === 'institutions').length,
        instruments: sampleData.entities.filter(e => e.domain === 'instruments').length,
        macro: sampleData.entities.filter(e => e.domain === 'macro').length,
        relationships: sampleData.relationships.length
    }), []);

    // 上下文值
    const value = useMemo<AppContextType>(() => ({
        // 状态
        language,
        selectedDomain,
        selectedEntity,
        searchQuery,
        hoveredEntity,
        expandedNodes,
        maxLevel,

        // 数据
        entities: sampleData.entities,
        relationships: sampleData.relationships,
        filteredEntities,
        filteredRelationships,
        visibleEntities,
        visibleRelationships,
        stats,

        // 操作
        setLanguage,
        setSelectedDomain,
        setSelectedEntity,
        setSearchQuery,
        setHoveredEntity,
        toggleExpand,
        expandAll,
        collapseAll,
        setMaxLevel,
        resetFilters
    }), [
        language, selectedDomain, selectedEntity, searchQuery, hoveredEntity, expandedNodes, maxLevel,
        filteredEntities, filteredRelationships, visibleEntities, visibleRelationships,
        stats, setLanguage, toggleExpand, expandAll, collapseAll, resetFilters
    ]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// Hook 用于消费上下文
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
}

export default AppContext;

