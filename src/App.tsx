import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { Header } from './components/Layout';
import { ForceGraph } from './components/Visualization';
import { EntityPanel } from './components/EntityPanel';
import { sampleData } from './data/sampleData';
import type { Entity, Domain, Language, RiskLevel } from './types';
import { DomainConfig, RiskLevelConfig } from './types';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  // 应用状态
  const [language, setLanguage] = useState<Language>(
    (i18n.language?.startsWith('zh') ? 'zh' : 'en') as Language
  );
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredEntity, setHoveredEntity] = useState<Entity | null>(null);

  // 切换语言
  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }, [i18n]);

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

  // 处理实体点击
  const handleEntityClick = useCallback((entity: Entity | null) => {
    setSelectedEntity(entity);
  }, []);

  // 处理实体悬停
  const handleEntityHover = useCallback((entity: Entity | null) => {
    setHoveredEntity(entity);
  }, []);

  // 获取统计信息
  const stats = useMemo(() => ({
    total: sampleData.entities.length,
    markets: sampleData.entities.filter(e => e.domain === 'markets').length,
    institutions: sampleData.entities.filter(e => e.domain === 'institutions').length,
    instruments: sampleData.entities.filter(e => e.domain === 'instruments').length,
    macro: sampleData.entities.filter(e => e.domain === 'macro').length,
    relationships: sampleData.relationships.length
  }), []);

  return (
    <div className="app">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        selectedDomain={selectedDomain}
        onDomainChange={setSelectedDomain}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="app-main">
        {/* 图例 */}
        <div className="graph-legend">
          <h4>{language === 'zh' ? '图例' : 'Legend'}</h4>
          {(Object.entries(DomainConfig) as [Domain, typeof DomainConfig[Domain]][]).map(([key, config]) => (
            <div
              key={key}
              className={`legend-item ${selectedDomain === key ? 'active' : ''}`}
              onClick={() => setSelectedDomain(selectedDomain === key ? null : key)}
            >
              <span className="legend-dot" style={{ background: config.color }} />
              <span className="legend-icon">{config.icon}</span>
              <span>{config.name[language]}</span>
              <span className="legend-count">
                {sampleData.entities.filter(e => e.domain === key).length}
              </span>
            </div>
          ))}
          <div className="legend-divider" />
          <div className="legend-stats">
            <span>{language === 'zh' ? '实体' : 'Entities'}: {stats.total}</span>
            <span>{language === 'zh' ? '关系' : 'Relations'}: {stats.relationships}</span>
          </div>

          {/* 风险等级图例 */}
          <div className="legend-divider" />
          <h4>{language === 'zh' ? '风险等级' : 'Risk Levels'}</h4>
          {(Object.entries(RiskLevelConfig) as [RiskLevel, typeof RiskLevelConfig[RiskLevel]][]).map(([level, config]) => (
            <div key={level} className="legend-item risk-legend-item">
              <span className="legend-dot" style={{ background: config.color }} />
              <span className="legend-icon">{config.icon}</span>
              <span>{config.name[language]}</span>
            </div>
          ))}
        </div>

        {/* 力导向图 */}
        <ForceGraph
          entities={filteredEntities}
          relationships={filteredRelationships}
          language={language}
          selectedEntity={selectedEntity}
          onEntityClick={handleEntityClick}
          onEntityHover={handleEntityHover}
        />

        {/* 悬停提示 */}
        {hoveredEntity && !selectedEntity && (
          <div className="hover-tooltip">
            <div className="tooltip-header">
              <span className="tooltip-icon" style={{ background: DomainConfig[hoveredEntity.domain].color }}>
                {hoveredEntity.icon || DomainConfig[hoveredEntity.domain].icon}
              </span>
              <span className="tooltip-name">{hoveredEntity.name[language]}</span>
            </div>
            <p className="tooltip-desc">{hoveredEntity.description[language]}</p>
          </div>
        )}

        {/* 实体详情面板 */}
        <EntityPanel
          entity={selectedEntity}
          language={language}
          relationships={sampleData.relationships}
          entities={sampleData.entities}
          onClose={() => setSelectedEntity(null)}
          onEntitySelect={handleEntityClick}
        />

        {/* 控制按钮 */}
        <div className="graph-controls">
          <button title={language === 'zh' ? '重置视图' : 'Reset View'}>↺</button>
          <button
            title={language === 'zh' ? '显示全部' : 'Show All'}
            onClick={() => {
              setSelectedDomain(null);
              setSearchQuery('');
              setSelectedEntity(null);
            }}
          >
            ⊕
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
