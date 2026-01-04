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

// 风险等级 (IBKR样式4级分类)
export type RiskLevel = 'L1' | 'L2' | 'L3' | 'L4';

// 风险等级配置
export const RiskLevelConfig: Record<RiskLevel, {
  name: LocalizedText;
  description: LocalizedText;
  color: string;
  icon: string;
}> = {
  L1: {
    name: { zh: '保守型', en: 'Conservative' },
    description: {
      zh: '低风险产品，追求本金安全和稳定收益，适合风险厨恶型投资者',
      en: 'Low risk products, seeking capital preservation and stable returns, suitable for risk-averse investors'
    },
    color: '#059669',  // emerald-600 - 深绿色
    icon: '🛡️'
  },
  L2: {
    name: { zh: '稳健型', en: 'Moderate' },
    description: {
      zh: '中低风险产品，平衡风险与收益，可接受一定波动',
      en: 'Medium-low risk products, balancing risk and return, accepting moderate volatility'
    },
    color: '#2563eb',  // blue-600 - 深蓝色
    icon: '⚖️'
  },
  L3: {
    name: { zh: '成长型', en: 'Aggressive' },
    description: {
      zh: '中高风险产品，追求资本增值，可能损失部分本金',
      en: 'Medium-high risk products, pursuing capital appreciation, potential partial principal loss'
    },
    color: '#9333ea',  // purple-600 - 紫色 (完全避开黄色)
    icon: '📈'
  },
  L4: {
    name: { zh: '投机型', en: 'Speculative' },
    description: {
      zh: '高风险产品，可能损失全部本金甚至更多，仅适合专业投资者',
      en: 'High risk products, potential loss of entire principal or more, only for professional investors'
    },
    color: '#dc2626',  // red-600 - 深红色
    icon: '⚠️'
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
  riskLevel?: RiskLevel;  // 风险等级 (L1-L4)
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
