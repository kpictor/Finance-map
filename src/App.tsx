import './i18n';
import { AppProvider, useAppContext } from './context/AppContext';
import { Header } from './components/Layout';
import { ForceGraph } from './components/Visualization';
import { EntityPanel } from './components/EntityPanel';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { Domain, RiskLevel, RelationType } from './types';
import { DomainConfig, RiskLevelConfig, RelationTypeConfig } from './types';
import './App.css';

// 主应用内容组件
function AppContent() {
  const {
    language,
    selectedDomain,
    selectedEntity,
    hoveredEntity,
    expandedNodes,
    visibleEntities,
    visibleRelationships,
    entities,
    relationships,
    stats,
    setSelectedDomain,
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
            <span>{language === 'zh' ? '显示' : 'Showing'}: {visibleEntities.length}/{stats.total}</span>
            <span>{language === 'zh' ? '关系' : 'Relations'}: {visibleRelationships.length}</span>
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

          {/* 关系类型图例 */}
          <div className="legend-divider" />
          <h4>{language === 'zh' ? '关系类型' : 'Relation Types'}</h4>
          {(Object.entries(RelationTypeConfig) as [RelationType, typeof RelationTypeConfig[RelationType]][]).map(([type, config]) => (
            <div key={type} className="legend-item relation-legend-item" title={config.description[language]}>
              <span className="legend-line" style={{ background: config.color }} />
              <span className="legend-icon">{config.icon}</span>
              <span>{config.name[language]}</span>
            </div>
          ))}

          {/* 线型说明 */}
          <div className="legend-divider" />
          <h4>{language === 'zh' ? '线型说明' : 'Line Styles'}</h4>
          <div className="legend-item">
            <span className="legend-line-solid" />
            <span>{language === 'zh' ? '实线 = 直接关系' : 'Solid = Direct'}</span>
          </div>
          <div className="legend-item">
            <span className="legend-line-dashed" />
            <span>{language === 'zh' ? '虚线 = 包含/层级' : 'Dashed = Contains'}</span>
          </div>
          <div className="legend-item">
            <span className="legend-line-dotted" />
            <span>{language === 'zh' ? '点线 = 影响关系' : 'Dotted = Influences'}</span>
          </div>


          {/* 展开/收缩说明 - 已移除，默认全部展开 */}
        </div>

        {/* 力导向图 */}
        <ForceGraph
          entities={visibleEntities}
          relationships={visibleRelationships}
          language={language}
          selectedEntity={selectedEntity}
          expandedNodes={expandedNodes}
          onEntityClick={setSelectedEntity}
          onEntityHover={setHoveredEntity}
          onEntityDoubleClick={() => {
            // 双击功能已禁用，保持接口兼容
          }}
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
          <button
            title={language === 'zh' ? '重置' : 'Reset'}
            onClick={resetFilters}
          >
            ↺
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

