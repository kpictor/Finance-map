import type { Entity, Relationship } from '../types';

// 宏观经济领域实体
export const macroEntities: Entity[] = [
    // === 货币政策 ===
    {
        id: 'macro-monetary',
        name: { zh: '货币政策', en: 'Monetary Policy' },
        description: { zh: '央行调控货币供应和利率', en: 'Central bank money supply and rate control' },
        domain: 'macro', category: 'policy', icon: '💰',
        tags: ['monetary', 'central-bank'],
        level: 1
    },
    {
        id: 'macro-interest-rate',
        name: { zh: '利率政策', en: 'Interest Rate Policy' },
        description: { zh: '基准利率调整', en: 'Benchmark rate adjustments' },
        domain: 'macro', category: 'monetary', icon: '📊',
        tags: ['interest-rate', 'benchmark'],
        level: 2, parentId: 'macro-monetary'
    },
    {
        id: 'macro-reserve-req',
        name: { zh: '准备金率', en: 'Reserve Requirements' },
        description: { zh: '银行存款准备金要求', en: 'Bank deposit reserve requirements' },
        domain: 'macro', category: 'monetary', icon: '🏦',
        tags: ['rrr', 'reserves'],
        level: 2, parentId: 'macro-monetary'
    },
    {
        id: 'macro-open-market',
        name: { zh: '公开市场操作', en: 'Open Market Operations' },
        description: { zh: '央行买卖证券', en: 'Central bank securities trading' },
        domain: 'macro', category: 'monetary', icon: '🔄',
        tags: ['omo', 'liquidity'],
        level: 2, parentId: 'macro-monetary'
    },
    {
        id: 'macro-qe',
        name: { zh: '量化宽松', en: 'Quantitative Easing' },
        description: { zh: '非常规货币政策，央行大规模购买资产', en: 'Unconventional monetary policy, central bank large-scale asset purchases' },
        domain: 'macro', category: 'monetary', icon: '💵',
        tags: ['qe', 'unconventional'],
        level: 2, parentId: 'macro-monetary'
    },
    {
        // 华尔街说明: MLF是中国人民银行的核心政策工具，影响LPR定价
        id: 'macro-mlf',
        name: { zh: 'MLF/SLF', en: 'Medium/Short-term Lending Facility' },
        description: {
            zh: '中期借贷便利(MLF)是央行向商业银行提供的中期基础货币，是LPR定价的锚',
            en: 'Medium-term Lending Facility provides base money to banks, anchors LPR pricing in China'
        },
        domain: 'macro', category: 'monetary', icon: '🏦',
        tags: ['mlf', 'slf', 'lpr', 'pboc'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: 'MLF利率调整直接影响LPR(贷款市场报价利率)，进而影响房贷和企业贷款利率',
            en: 'MLF rate adjustments directly affect LPR, which then influences mortgage and corporate loan rates'
        }
    },
    {
        // 华尔街说明: 美林投资时钟是经济周期与资产配置的经典框架，由美林证券2004年提出
        id: 'macro-merrill-clock',
        name: { zh: '美林投资时钟', en: 'Merrill Lynch Investment Clock' },
        description: {
            zh: '经济周期与资产配置经典框架：复苏→股票，过热→商品，滞涨→现金，衰退→债券',
            en: 'Classic cycle-allocation framework: Recovery→Stocks, Overheat→Commodities, Stagflation→Cash, Recession→Bonds'
        },
        domain: 'macro', category: 'theory', icon: '🕐',
        tags: ['merrill', 'allocation', 'cycle', 'strategy'],
        level: 1,
        details: {
            zh: '根据经济增长(上行/下行)和通胀(上升/下降)将经济分为四阶段，每阶段有最优配置资产类别',
            en: 'Divides economy into four phases based on growth and inflation direction, each with optimal asset class'
        }
    },
    {
        // 华尔街说明: 收益率曲线倒挂是最可靠的衰退预警信号之一
        id: 'macro-yield-curve',
        name: { zh: '收益率曲线', en: 'Yield Curve' },
        description: {
            zh: '不同期限债券收益率的曲线，倒挂(短>长)是衰退预警信号',
            en: 'Curve of bond yields across maturities, inversion (short>long) signals recession'
        },
        domain: 'macro', category: 'indicators', icon: '📈',
        tags: ['yield-curve', 'inversion', 'recession', '2s10s'],
        level: 1,
        details: {
            zh: '2年期与10年期美债利差(2s10s)倒挂历史上预测了每一次美国衰退，领先时间6-18个月',
            en: '2s10s Treasury spread inversion has predicted every US recession, with 6-18 month lead time'
        }
    },

    // === 财政政策 ===
    {
        id: 'macro-fiscal',
        name: { zh: '财政政策', en: 'Fiscal Policy' },
        description: { zh: '政府税收和支出政策', en: 'Government tax and spending policy' },
        domain: 'macro', category: 'policy', icon: '🏛️',
        tags: ['fiscal', 'government'],
        level: 1
    },
    {
        id: 'macro-tax',
        name: { zh: '税收政策', en: 'Tax Policy' },
        description: { zh: '税率和税制调整', en: 'Tax rate and system adjustments' },
        domain: 'macro', category: 'fiscal', icon: '📋',
        tags: ['tax', 'revenue'],
        level: 2, parentId: 'macro-fiscal'
    },
    {
        id: 'macro-spending',
        name: { zh: '政府支出', en: 'Government Spending' },
        description: { zh: '财政支出和投资', en: 'Fiscal expenditure and investment' },
        domain: 'macro', category: 'fiscal', icon: '💸',
        tags: ['spending', 'investment'],
        level: 2, parentId: 'macro-fiscal'
    },
    {
        id: 'macro-deficit',
        name: { zh: '财政赤字/盈余', en: 'Fiscal Deficit/Surplus' },
        description: { zh: '政府收支差额', en: 'Government budget balance' },
        domain: 'macro', category: 'fiscal', icon: '📉',
        tags: ['deficit', 'budget'],
        level: 2, parentId: 'macro-fiscal'
    },

    // === 经济指标 ===
    {
        id: 'macro-indicators',
        name: { zh: '经济指标', en: 'Economic Indicators' },
        description: { zh: '衡量经济健康的数据', en: 'Data measuring economic health' },
        domain: 'macro', category: 'data', icon: '📊',
        tags: ['indicators', 'data'],
        level: 1
    },
    {
        id: 'macro-gdp',
        name: { zh: 'GDP', en: 'GDP' },
        description: { zh: '国内生产总值', en: 'Gross Domestic Product' },
        domain: 'macro', category: 'indicators', icon: '📈',
        tags: ['gdp', 'growth'],
        level: 2, parentId: 'macro-indicators'
    },
    {
        id: 'macro-cpi',
        name: { zh: 'CPI/通胀', en: 'CPI/Inflation' },
        description: { zh: '消费者物价指数', en: 'Consumer Price Index' },
        domain: 'macro', category: 'indicators', icon: '🔥',
        tags: ['cpi', 'inflation'],
        level: 2, parentId: 'macro-indicators'
    },
    {
        id: 'macro-pmi',
        name: { zh: 'PMI', en: 'PMI' },
        description: { zh: '采购经理人指数', en: 'Purchasing Managers Index' },
        domain: 'macro', category: 'indicators', icon: '🏭',
        tags: ['pmi', 'manufacturing'],
        level: 2, parentId: 'macro-indicators'
    },
    {
        id: 'macro-employment',
        name: { zh: '就业数据', en: 'Employment Data' },
        description: { zh: '失业率和就业数据', en: 'Unemployment and job data' },
        domain: 'macro', category: 'indicators', icon: '👷',
        tags: ['employment', 'jobs', 'nfp'],
        level: 2, parentId: 'macro-indicators'
    },

    // === 经济周期 ===
    {
        id: 'macro-cycles',
        name: { zh: '经济周期', en: 'Economic Cycles' },
        description: { zh: '经济活动周期性波动', en: 'Cyclical economic fluctuations' },
        domain: 'macro', category: 'theory', icon: '🔄',
        tags: ['cycle', 'business-cycle'],
        level: 1
    },
    {
        id: 'macro-recession',
        name: { zh: '衰退', en: 'Recession' },
        description: { zh: '经济活动收缩期', en: 'Economic contraction period' },
        domain: 'macro', category: 'cycle', icon: '📉',
        tags: ['recession', 'downturn'],
        level: 2, parentId: 'macro-cycles'
    },
    {
        id: 'macro-expansion',
        name: { zh: '扩张', en: 'Expansion' },
        description: { zh: '经济活动增长期', en: 'Economic growth period' },
        domain: 'macro', category: 'cycle', icon: '📈',
        tags: ['expansion', 'growth'],
        level: 2, parentId: 'macro-cycles'
    },

    // === 国际金融 ===
    {
        id: 'macro-international',
        name: { zh: '国际金融', en: 'International Finance' },
        description: { zh: '跨境金融关系', en: 'Cross-border financial relations' },
        domain: 'macro', category: 'international', icon: '🌍',
        tags: ['international', 'global'],
        level: 1
    },
    {
        id: 'macro-fx-regime',
        name: { zh: '汇率制度', en: 'FX Regime' },
        description: { zh: '货币汇率政策安排', en: 'Currency exchange rate arrangements' },
        domain: 'macro', category: 'international', icon: '💱',
        tags: ['fx', 'exchange-rate'],
        level: 2, parentId: 'macro-international'
    },
    {
        id: 'macro-capital-flows',
        name: { zh: '资本流动', en: 'Capital Flows' },
        description: { zh: '跨境资本流动', en: 'Cross-border capital movements' },
        domain: 'macro', category: 'international', icon: '🌊',
        tags: ['capital', 'flows', 'fdi'],
        level: 2, parentId: 'macro-international'
    },
    {
        id: 'macro-bop',
        name: { zh: '国际收支', en: 'Balance of Payments' },
        description: { zh: '国家对外经济交易记录', en: 'Record of external transactions' },
        domain: 'macro', category: 'international', icon: '⚖️',
        tags: ['bop', 'current-account'],
        level: 2, parentId: 'macro-international'
    },

    // === 金融风险 ===
    {
        id: 'macro-risk',
        name: { zh: '系统性风险', en: 'Systemic Risk' },
        description: { zh: '金融系统整体风险', en: 'Financial system-wide risk' },
        domain: 'macro', category: 'risk', icon: '⚠️',
        tags: ['systemic', 'financial-stability'],
        level: 1
    },
    {
        id: 'macro-crisis',
        name: { zh: '金融危机', en: 'Financial Crises' },
        description: { zh: '金融市场严重动荡', en: 'Severe financial market turmoil' },
        domain: 'macro', category: 'risk', icon: '💥',
        tags: ['crisis', 'contagion'],
        level: 2, parentId: 'macro-risk'
    }
];

// 宏观经济关系
export const macroRelationships: Relationship[] = [
    // 货币政策层级
    { id: 'mcr-1', source: 'macro-monetary', target: 'macro-interest-rate', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-2', source: 'macro-monetary', target: 'macro-reserve-req', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-3', source: 'macro-monetary', target: 'macro-open-market', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-4', source: 'macro-monetary', target: 'macro-qe', type: 'provides', strength: 2, bidirectional: false },
    { id: 'mcr-21', source: 'macro-monetary', target: 'macro-mlf', type: 'provides', strength: 3, bidirectional: false },

    // 财政政策层级
    { id: 'mcr-5', source: 'macro-fiscal', target: 'macro-tax', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-6', source: 'macro-fiscal', target: 'macro-spending', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-7', source: 'macro-fiscal', target: 'macro-deficit', type: 'provides', strength: 2, bidirectional: false },

    // 经济指标层级
    { id: 'mcr-8', source: 'macro-indicators', target: 'macro-gdp', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-9', source: 'macro-indicators', target: 'macro-cpi', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-10', source: 'macro-indicators', target: 'macro-pmi', type: 'provides', strength: 2, bidirectional: false },
    { id: 'mcr-11', source: 'macro-indicators', target: 'macro-employment', type: 'provides', strength: 3, bidirectional: false },

    // 周期层级
    { id: 'mcr-12', source: 'macro-cycles', target: 'macro-recession', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-13', source: 'macro-cycles', target: 'macro-expansion', type: 'provides', strength: 3, bidirectional: false },

    // 国际金融层级
    { id: 'mcr-14', source: 'macro-international', target: 'macro-fx-regime', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-15', source: 'macro-international', target: 'macro-capital-flows', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-16', source: 'macro-international', target: 'macro-bop', type: 'provides', strength: 2, bidirectional: false },

    // 风险层级
    { id: 'mcr-22', source: 'macro-risk', target: 'macro-crisis', type: 'provides', strength: 3, bidirectional: false },

    // 政策影响
    { id: 'mcr-17', source: 'macro-interest-rate', target: 'macro-cpi', type: 'influences', strength: 3, bidirectional: false },
    { id: 'mcr-18', source: 'macro-fiscal', target: 'macro-gdp', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-19', source: 'macro-cycles', target: 'macro-crisis', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-20', source: 'macro-risk', target: 'macro-crisis', type: 'influences', strength: 3, bidirectional: false }
];
