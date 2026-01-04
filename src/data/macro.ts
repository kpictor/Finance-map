import type { Entity, Relationship } from '../types';

// 宏观经济领域实体
export const macroEntities: Entity[] = [
    // === 货币政策 ===
    {
        id: 'macro-monetary',
        name: { zh: '货币政策', en: 'Monetary Policy' },
        description: { zh: '央行调控货币供应和利率', en: 'Central bank money supply and rate control' },
        domain: 'macro', category: 'policy', icon: '💰',
        tags: ['monetary', 'central-bank']
    },
    {
        id: 'macro-interest-rate',
        name: { zh: '利率政策', en: 'Interest Rate Policy' },
        description: { zh: '基准利率调整', en: 'Benchmark rate adjustments' },
        domain: 'macro', category: 'monetary', icon: '📊',
        tags: ['interest-rate', 'benchmark']
    },
    {
        id: 'macro-reserve-req',
        name: { zh: '准备金率', en: 'Reserve Requirements' },
        description: { zh: '银行存款准备金要求', en: 'Bank deposit reserve requirements' },
        domain: 'macro', category: 'monetary', icon: '🏦',
        tags: ['rrr', 'reserves']
    },
    {
        id: 'macro-open-market',
        name: { zh: '公开市场操作', en: 'Open Market Operations' },
        description: { zh: '央行买卖证券', en: 'Central bank securities trading' },
        domain: 'macro', category: 'monetary', icon: '🔄',
        tags: ['omo', 'liquidity']
    },
    {
        id: 'macro-qe',
        name: { zh: '量化宽松', en: 'Quantitative Easing' },
        description: { zh: '非常规货币政策', en: 'Unconventional monetary policy' },
        domain: 'macro', category: 'monetary', icon: '💵',
        tags: ['qe', 'unconventional']
    },

    // === 财政政策 ===
    {
        id: 'macro-fiscal',
        name: { zh: '财政政策', en: 'Fiscal Policy' },
        description: { zh: '政府税收和支出政策', en: 'Government tax and spending policy' },
        domain: 'macro', category: 'policy', icon: '🏛️',
        tags: ['fiscal', 'government']
    },
    {
        id: 'macro-tax',
        name: { zh: '税收政策', en: 'Tax Policy' },
        description: { zh: '税率和税制调整', en: 'Tax rate and system adjustments' },
        domain: 'macro', category: 'fiscal', icon: '📋',
        tags: ['tax', 'revenue']
    },
    {
        id: 'macro-spending',
        name: { zh: '政府支出', en: 'Government Spending' },
        description: { zh: '财政支出和投资', en: 'Fiscal expenditure and investment' },
        domain: 'macro', category: 'fiscal', icon: '💸',
        tags: ['spending', 'investment']
    },
    {
        id: 'macro-deficit',
        name: { zh: '财政赤字/盈余', en: 'Fiscal Deficit/Surplus' },
        description: { zh: '政府收支差额', en: 'Government budget balance' },
        domain: 'macro', category: 'fiscal', icon: '📉',
        tags: ['deficit', 'budget']
    },

    // === 经济指标 ===
    {
        id: 'macro-indicators',
        name: { zh: '经济指标', en: 'Economic Indicators' },
        description: { zh: '衡量经济健康的数据', en: 'Data measuring economic health' },
        domain: 'macro', category: 'data', icon: '📊',
        tags: ['indicators', 'data']
    },
    {
        id: 'macro-gdp',
        name: { zh: 'GDP', en: 'GDP' },
        description: { zh: '国内生产总值', en: 'Gross Domestic Product' },
        domain: 'macro', category: 'indicators', icon: '📈',
        tags: ['gdp', 'growth']
    },
    {
        id: 'macro-cpi',
        name: { zh: 'CPI/通胀', en: 'CPI/Inflation' },
        description: { zh: '消费者物价指数', en: 'Consumer Price Index' },
        domain: 'macro', category: 'indicators', icon: '🔥',
        tags: ['cpi', 'inflation']
    },
    {
        id: 'macro-pmi',
        name: { zh: 'PMI', en: 'PMI' },
        description: { zh: '采购经理人指数', en: 'Purchasing Managers Index' },
        domain: 'macro', category: 'indicators', icon: '🏭',
        tags: ['pmi', 'manufacturing']
    },
    {
        id: 'macro-employment',
        name: { zh: '就业数据', en: 'Employment Data' },
        description: { zh: '失业率和就业数据', en: 'Unemployment and job data' },
        domain: 'macro', category: 'indicators', icon: '👷',
        tags: ['employment', 'jobs', 'nfp']
    },

    // === 经济周期 ===
    {
        id: 'macro-cycles',
        name: { zh: '经济周期', en: 'Economic Cycles' },
        description: { zh: '经济活动周期性波动', en: 'Cyclical economic fluctuations' },
        domain: 'macro', category: 'theory', icon: '🔄',
        tags: ['cycle', 'business-cycle']
    },
    {
        id: 'macro-recession',
        name: { zh: '衰退', en: 'Recession' },
        description: { zh: '经济活动收缩期', en: 'Economic contraction period' },
        domain: 'macro', category: 'cycle', icon: '📉',
        tags: ['recession', 'downturn']
    },
    {
        id: 'macro-expansion',
        name: { zh: '扩张', en: 'Expansion' },
        description: { zh: '经济活动增长期', en: 'Economic growth period' },
        domain: 'macro', category: 'cycle', icon: '📈',
        tags: ['expansion', 'growth']
    },

    // === 国际金融 ===
    {
        id: 'macro-international',
        name: { zh: '国际金融', en: 'International Finance' },
        description: { zh: '跨境金融关系', en: 'Cross-border financial relations' },
        domain: 'macro', category: 'international', icon: '🌍',
        tags: ['international', 'global']
    },
    {
        id: 'macro-fx-regime',
        name: { zh: '汇率制度', en: 'FX Regime' },
        description: { zh: '货币汇率政策安排', en: 'Currency exchange rate arrangements' },
        domain: 'macro', category: 'international', icon: '💱',
        tags: ['fx', 'exchange-rate']
    },
    {
        id: 'macro-capital-flows',
        name: { zh: '资本流动', en: 'Capital Flows' },
        description: { zh: '跨境资本流动', en: 'Cross-border capital movements' },
        domain: 'macro', category: 'international', icon: '🌊',
        tags: ['capital', 'flows', 'fdi']
    },
    {
        id: 'macro-bop',
        name: { zh: '国际收支', en: 'Balance of Payments' },
        description: { zh: '国家对外经济交易记录', en: 'Record of external transactions' },
        domain: 'macro', category: 'international', icon: '⚖️',
        tags: ['bop', 'current-account']
    },

    // === 金融风险 ===
    {
        id: 'macro-risk',
        name: { zh: '系统性风险', en: 'Systemic Risk' },
        description: { zh: '金融系统整体风险', en: 'Financial system-wide risk' },
        domain: 'macro', category: 'risk', icon: '⚠️',
        tags: ['systemic', 'financial-stability']
    },
    {
        id: 'macro-crisis',
        name: { zh: '金融危机', en: 'Financial Crises' },
        description: { zh: '金融市场严重动荡', en: 'Severe financial market turmoil' },
        domain: 'macro', category: 'risk', icon: '💥',
        tags: ['crisis', 'contagion']
    }
];

// 宏观经济关系
export const macroRelationships: Relationship[] = [
    // 货币政策层级
    { id: 'mcr-1', source: 'macro-monetary', target: 'macro-interest-rate', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-2', source: 'macro-monetary', target: 'macro-reserve-req', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-3', source: 'macro-monetary', target: 'macro-open-market', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-4', source: 'macro-monetary', target: 'macro-qe', type: 'provides', strength: 2, bidirectional: false },

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

    // 政策影响
    { id: 'mcr-17', source: 'macro-interest-rate', target: 'macro-cpi', type: 'influences', strength: 3, bidirectional: false },
    { id: 'mcr-18', source: 'macro-fiscal', target: 'macro-gdp', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-19', source: 'macro-cycles', target: 'macro-crisis', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-20', source: 'macro-risk', target: 'macro-crisis', type: 'influences', strength: 3, bidirectional: false }
];
