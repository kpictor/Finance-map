// 金融体系图谱 - 核心类型定义
// Financial System Map - Core Type Definitions

// 语言支持
export type Language = 'zh' | 'en';

// 多语言文本
export interface LocalizedText {
  zh: string;
  en: string;
}

// 五大领域 (5-Domain Model)
export type Domain = 'markets' | 'institutions' | 'instruments' | 'macro' | 'infrastructure';

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
  },
  infrastructure: {
    name: { zh: '金融基础设施', en: 'Financial Infrastructure' },
    color: '#ec4899',  // pink
    icon: '🔧'
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

// ========================================
// 交易场所分类 (Trading Venue)
// 华尔街说明: 场内(Exchange)产品受交易所监管，标准化、透明度高；
// 场外(OTC)产品定制化程度高但对手方风险大。
// 这是2008年金融危机后多德-弗兰克法案监管改革的核心区分。
// ========================================
export type TradingVenue = 'exchange' | 'otc' | 'hybrid';

export const TradingVenueConfig: Record<TradingVenue, {
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  color: string;
}> = {
  exchange: {
    name: { zh: '场内交易', en: 'Exchange-traded' },
    description: {
      zh: '在交易所集中撮合、清算，标准化合约，透明度高，受严格监管',
      en: 'Centralized matching and clearing on exchanges, standardized contracts, high transparency, strictly regulated'
    },
    icon: '🏛️',
    color: '#3b82f6'  // blue
  },
  otc: {
    name: { zh: '场外交易', en: 'Over-the-Counter' },
    description: {
      zh: '双边协商、定制化合约，灵活性高但存在对手方风险',
      en: 'Bilateral negotiation, customized contracts, flexible but with counterparty risk'
    },
    icon: '🤝',
    color: '#f59e0b'  // amber
  },
  hybrid: {
    name: { zh: '混合交易', en: 'Hybrid' },
    description: {
      zh: '场内场外均可交易，如部分债券和外汇产品',
      en: 'Tradable on both exchange and OTC, such as some bonds and forex products'
    },
    icon: '🔄',
    color: '#8b5cf6'  // purple
  }
};

// ========================================
// 流动性分级 (Liquidity Level)
// 华尔街说明: 流动性决定了"能否卖得出去"。
// 2020年3月疫情恐慌期间，即使美国国债(最高流动性)也出现流动性枯竭，
// 低流动性资产将被迫以大幅折价抛售。流动性溢价是重要的风险补偿。
// ========================================
export type LiquidityLevel = 'high' | 'medium' | 'low';

export const LiquidityLevelConfig: Record<LiquidityLevel, {
  name: LocalizedText;
  description: LocalizedText;
  examples: LocalizedText;
  icon: string;
  color: string;
}> = {
  high: {
    name: { zh: '高流动性', en: 'High Liquidity' },
    description: {
      zh: 'T+0/T+1可变现，买卖价差小，大额交易对价格影响小',
      en: 'T+0/T+1 settlement, narrow bid-ask spread, large trades have minimal price impact'
    },
    examples: { zh: '大盘股、国债、主流ETF', en: 'Large-cap stocks, Treasuries, mainstream ETFs' },
    icon: '💧',
    color: '#3b82f6'  // blue
  },
  medium: {
    name: { zh: '中等流动性', en: 'Medium Liquidity' },
    description: {
      zh: '数日至数周变现，可能有一定价格冲击',
      en: 'Days to weeks to liquidate, may have some price impact'
    },
    examples: { zh: '企业债、小盘股、非主流ETF', en: 'Corporate bonds, small caps, non-mainstream ETFs' },
    icon: '💦',
    color: '#f59e0b'  // amber
  },
  low: {
    name: { zh: '低流动性', en: 'Low Liquidity' },
    description: {
      zh: '数月至数年变现，可能大幅折价，存在流动性陷阱风险',
      en: 'Months to years to liquidate, potential significant discount, liquidity trap risk'
    },
    examples: { zh: 'PE/VC、房产、收藏品、非上市股权', en: 'PE/VC, real estate, collectibles, unlisted equity' },
    icon: '🧊',
    color: '#ef4444'  // red
  }
};

// ========================================
// 投资者适当性分类 (Investor Suitability)
// 华尔街说明: 中国《证券期货投资者适当性管理办法》、
// 美国SEC "Accredited Investor" 规则的映射。
// 雪球等结构化产品仅限合格投资者，监管红线不可逾越。
// ========================================
export type InvestorType = 'retail' | 'professional' | 'qualified';

export const InvestorTypeConfig: Record<InvestorType, {
  name: LocalizedText;
  description: LocalizedText;
  requirements: LocalizedText;
  icon: string;
  color: string;
}> = {
  retail: {
    name: { zh: '普通投资者', en: 'Retail Investor' },
    description: {
      zh: '可投资公开市场产品，如股票、公募基金、场内ETF',
      en: 'Can invest in public market products like stocks, mutual funds, exchange-traded ETFs'
    },
    requirements: { zh: '无特殊要求', en: 'No special requirements' },
    icon: '👤',
    color: '#10b981'  // green
  },
  professional: {
    name: { zh: '专业投资者', en: 'Professional Investor' },
    description: {
      zh: '可投资部分复杂产品，如场外期权、收益凭证',
      en: 'Can invest in some complex products like OTC options, income certificates'
    },
    requirements: {
      zh: '金融资产≥300万或最近3年年收入≥50万',
      en: 'Financial assets ≥3M CNY or annual income ≥500K for last 3 years'
    },
    icon: '👔',
    color: '#3b82f6'  // blue
  },
  qualified: {
    name: { zh: '合格投资者', en: 'Qualified/Accredited Investor' },
    description: {
      zh: '可投资私募基金、对冲基金、雪球等高风险产品',
      en: 'Can invest in private funds, hedge funds, snowball and other high-risk products'
    },
    requirements: {
      zh: '金融资产≥500万或最近3年年收入≥50万且金融资产≥300万',
      en: 'Financial assets ≥5M CNY or combination of income and assets requirements'
    },
    icon: '🎩',
    color: '#8b5cf6'  // purple
  }
};

// 层级深度
export type EntityLevel = 1 | 2 | 3;

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
  riskLevel?: RiskLevel;        // 风险等级 (L1-L4)
  level?: EntityLevel;          // 层级深度: 1=顶级概念, 2=二级, 3=三级
  parentId?: string;            // 父节点ID，用于层级收缩
  // === 新增架构级分类 ===
  tradingVenue?: TradingVenue;  // 交易场所: 场内/场外/混合
  liquidity?: LiquidityLevel;   // 流动性: 高/中/低
  investorType?: InvestorType;  // 投资者适当性: 零售/专业/合格
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
  | 'provides'         // 提供（已废弃，用 hosts/offers/enables 替代）
  | 'uses'             // 使用
  // === 新增关系类型 (v2.0) ===
  | 'hosts'            // 提供场所（交易所→市场）
  | 'offers'           // 提供产品（基金→投资者）
  | 'enables'          // 提供基础设施（SWIFT→支付）
  | 'clears'           // 清算（清算所→交易）
  | 'settles'          // 结算（托管行→证券）
  | 'lists'            // 上市（交易所→证券）
  | 'benchmarks';      // 定价基准（LIBOR→利率产品）

// 关系类型配置（含颜色和图标）
export const RelationTypeConfig: Record<RelationType, {
  name: LocalizedText;
  color: string;
  icon: string;
  description: LocalizedText;
}> = {
  regulates: {
    name: { zh: '监管', en: 'Regulates' },
    color: '#dc2626',  // red
    icon: '🏛️',
    description: { zh: '监管机构对金融活动的管理', en: 'Regulatory oversight of financial activities' }
  },
  issues: {
    name: { zh: '发行', en: 'Issues' },
    color: '#16a34a',  // green
    icon: '📤',
    description: { zh: '机构发行金融产品', en: 'Institution issues financial products' }
  },
  trades: {
    name: { zh: '交易', en: 'Trades' },
    color: '#2563eb',  // blue
    icon: '🔄',
    description: { zh: '在市场中进行买卖活动', en: 'Trading activities in markets' }
  },
  invests: {
    name: { zh: '投资', en: 'Invests' },
    color: '#ca8a04',  // yellow
    icon: '💰',
    description: { zh: '资金投入获取收益', en: 'Capital allocation for returns' }
  },
  influences: {
    name: { zh: '影响', en: 'Influences' },
    color: '#9333ea',  // purple
    icon: '📊',
    description: { zh: '间接作用或影响', en: 'Indirect impact or effect' }
  },
  depends_on: {
    name: { zh: '依赖', en: 'Depends on' },
    color: '#64748b',  // slate
    icon: '🔗',
    description: { zh: '需要其他要素支持', en: 'Requires support from other elements' }
  },
  derives_from: {
    name: { zh: '衍生自', en: 'Derives from' },
    color: '#f97316',  // orange
    icon: '🔀',
    description: { zh: '基于基础资产创建', en: 'Created based on underlying assets' }
  },
  competes_with: {
    name: { zh: '竞争', en: 'Competes' },
    color: '#ef4444',  // red light
    icon: '⚔️',
    description: { zh: '争夺市场份额', en: 'Competing for market share' }
  },
  cooperates_with: {
    name: { zh: '合作', en: 'Cooperates' },
    color: '#06b6d4',  // cyan
    icon: '🤝',
    description: { zh: '共同开展业务', en: 'Working together on business' }
  },
  provides: {
    name: { zh: '包含', en: 'Includes' },
    color: '#94a3b8',  // gray
    icon: '📁',
    description: { zh: '层级包含关系（已废弃，请用 hosts/offers/enables）', en: 'Hierarchical containment (deprecated, use hosts/offers/enables)' }
  },
  uses: {
    name: { zh: '使用', en: 'Uses' },
    color: '#78716c',  // stone
    icon: '🔧',
    description: { zh: '作为工具或服务使用', en: 'Used as tool or service' }
  },
  // === 新增关系类型配置 ===
  hosts: {
    name: { zh: '托管/场所', en: 'Hosts' },
    color: '#0ea5e9',  // sky
    icon: '🏢',
    description: { zh: '提供交易场所（交易所→市场）', en: 'Provides trading venue (exchange → market)' }
  },
  offers: {
    name: { zh: '提供产品', en: 'Offers' },
    color: '#22c55e',  // green
    icon: '🎁',
    description: { zh: '向客户提供产品/服务（基金→投资者）', en: 'Offers products/services to clients (fund → investor)' }
  },
  enables: {
    name: { zh: '赋能', en: 'Enables' },
    color: '#a855f7',  // purple
    icon: '⚡',
    description: { zh: '提供基础设施能力（SWIFT→支付）', en: 'Provides infrastructure capability (SWIFT → payment)' }
  },
  clears: {
    name: { zh: '清算', en: 'Clears' },
    color: '#14b8a6',  // teal
    icon: '🔄',
    description: { zh: '作为中央对手方清算交易', en: 'Clears transactions as central counterparty' }
  },
  settles: {
    name: { zh: '结算', en: 'Settles' },
    color: '#8b5cf6',  // violet
    icon: '✅',
    description: { zh: '完成证券和资金的最终交割', en: 'Completes final delivery of securities and funds' }
  },
  lists: {
    name: { zh: '上市', en: 'Lists' },
    color: '#f59e0b',  // amber
    icon: '📋',
    description: { zh: '证券在交易所上市交易', en: 'Securities listed for trading on exchange' }
  },
  benchmarks: {
    name: { zh: '定价基准', en: 'Benchmarks' },
    color: '#ec4899',  // pink
    icon: '📏',
    description: { zh: '作为其他产品的定价参考', en: 'Serves as pricing reference for other products' }
  }
};

// 关系类型名称映射（简化版，向后兼容）
export const RelationTypeNames: Record<RelationType, LocalizedText> = Object.fromEntries(
  Object.entries(RelationTypeConfig).map(([key, config]) => [key, config.name])
) as Record<RelationType, LocalizedText>;

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
