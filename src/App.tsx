import './i18n';
import { AppProvider, useAppContext } from './context/AppContext';
import { Header } from './components/Layout';
import { ForceGraph } from './components/Visualization';
import { EntityPanel } from './components/EntityPanel';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { Domain, RiskLevel } from './types';
import { DomainConfig, RiskLevelConfig } from './types';
import './App.css';

// 主应用内容组件
function AppContent() {
  const {
    language,
    selectedDomain,
    selectedEntity,
    hoveredEntity,
    filteredEntities,
    filteredRelationships,
    entities,
    relationships,
    stats,
    setSelectedDomain,
    setSearchQuery,
    setSelectedEntity,
    setHoveredEntity,
    resetFilters
  } = useAppContext();

  return (
    <div className="app">
      <Header />

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
                {entities.filter(e => e.domain === key).length}
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
          onEntityClick={setSelectedEntity}
          onEntityHover={setHoveredEntity}
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
          relationships={relationships}
          entities={entities}
          onClose={() => setSelectedEntity(null)}
          onEntitySelect={setSelectedEntity}
        />

        {/* 控制按钮 */}
        <div className="graph-controls">
          <button title={language === 'zh' ? '重置视图' : 'Reset View'}>↺</button>
          <button
            title={language === 'zh' ? '显示全部' : 'Show All'}
            onClick={resetFilters}
          >
            ⊕
          </button>
        </div>
      </main>
    </div>
  );
}

// 应用入口 - 包装 Provider 和 ErrorBoundary
function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
