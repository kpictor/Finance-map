import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
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
}

// 应用上下文接口
interface AppContextType extends AppState {
    // 数据
    entities: Entity[];
    relationships: Relationship[];
    filteredEntities: Entity[];
    filteredRelationships: Relationship[];
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

    // 切换语言
    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        i18n.changeLanguage(lang);
    }, [i18n]);

    // 重置过滤器
    const resetFilters = useCallback(() => {
        setSelectedDomain(null);
        setSearchQuery('');
        setSelectedEntity(null);
    }, []);

    // 过滤实体
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

    // 过滤关系
    const filteredRelationships = useMemo(() => {
        const entityIds = new Set(filteredEntities.map(e => e.id));
        return sampleData.relationships.filter(
            r => entityIds.has(r.source) && entityIds.has(r.target)
        );
    }, [filteredEntities]);

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

        // 数据
        entities: sampleData.entities,
        relationships: sampleData.relationships,
        filteredEntities,
        filteredRelationships,
        stats,

        // 操作
        setLanguage,
        setSelectedDomain,
        setSelectedEntity,
        setSearchQuery,
        setHoveredEntity,
        resetFilters
    }), [
        language, selectedDomain, selectedEntity, searchQuery, hoveredEntity,
        filteredEntities, filteredRelationships, stats, setLanguage, resetFilters
    ]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// Hook 用于消费上下文
export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
}

export default AppContext;
