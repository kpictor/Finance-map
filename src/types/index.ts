// 金融体系图谱 - 核心类型定义
// Financial System Map - Core Type Definitions

// 语言支持
export type Language = 'zh' | 'en';

// 多语言文本
export interface LocalizedText {
  zh: string;
  en: string;
}

// 四大领域
export type Domain = 'markets' | 'institutions' | 'instruments' | 'macro';

// 领域配置
export const DomainConfig: Record<Domain, {
  name: LocalizedText;
  color: string;
  icon: string;
}> = {
  markets: {
    name: { zh: '金融市场', en: 'Financial Markets' },
    color: '#3b82f6',  // blue
    icon: '📈'
  },
  institutions: {
    name: { zh: '金融机构', en: 'Financial Institutions' },
    color: '#10b981',  // green
    icon: '🏦'
  },
  instruments: {
    name: { zh: '金融工具', en: 'Financial Instruments' },
    color: '#f59e0b',  // amber
    icon: '📊'
  },
  macro: {
    name: { zh: '宏观经济', en: 'Macroeconomics' },
    color: '#8b5cf6',  // purple
    icon: '🌐'
  }
};

// 基础实体
export interface Entity {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  domain: Domain;
  category: string;
  subcategory?: string;
  icon?: string;
  tags?: string[];
  details?: LocalizedText;
}

// 关系类型
export type RelationType =
  | 'regulates'        // 监管
  | 'issues'           // 发行
  | 'trades'           // 交易
  | 'invests'          // 投资
  | 'influences'       // 影响
  | 'depends_on'       // 依赖
  | 'derives_from'     // 衍生
  | 'competes_with'    // 竞争
  | 'cooperates_with'  // 合作
  | 'provides'         // 提供
  | 'uses';            // 使用

// 关系类型中文映射
export const RelationTypeNames: Record<RelationType, LocalizedText> = {
  regulates: { zh: '监管', en: 'regulates' },
  issues: { zh: '发行', en: 'issues' },
  trades: { zh: '交易', en: 'trades' },
  invests: { zh: '投资', en: 'invests' },
  influences: { zh: '影响', en: 'influences' },
  depends_on: { zh: '依赖', en: 'depends on' },
  derives_from: { zh: '衍生自', en: 'derives from' },
  competes_with: { zh: '竞争', en: 'competes with' },
  cooperates_with: { zh: '合作', en: 'cooperates with' },
  provides: { zh: '提供', en: 'provides' },
  uses: { zh: '使用', en: 'uses' }
};

// 关系
export interface Relationship {
  id: string;
  source: string;      // Entity ID
  target: string;      // Entity ID
  type: RelationType;
  label?: LocalizedText;
  strength: 1 | 2 | 3; // 关系强度: 1=弱, 2=中, 3=强
  bidirectional: boolean;
  explanation?: LocalizedText; // 关系解释: 为什么存在这种关系
}

// 图数据
export interface GraphData {
  entities: Entity[];
  relationships: Relationship[];
}

// D3 可视化节点
export interface GraphNode extends Entity {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  vx?: number;
  vy?: number;
}

// D3 可视化连线
export interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  relationship: Relationship;
}

// 应用状态
export interface AppState {
  language: Language;
  selectedDomain: Domain | null;
  selectedEntity: Entity | null;
  searchQuery: string;
  hoveredEntity: Entity | null;
}
