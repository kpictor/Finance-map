import type { Entity, Relationship } from '../types';

// 金融工具领域实体
export const instrumentEntities: Entity[] = [
    // === 权益类工具 ===
    {
        id: 'instr-stock',
        name: { zh: '股票', en: 'Stocks' },
        description: { zh: '公司所有权份额证券', en: 'Equity ownership securities' },
        domain: 'instruments', category: 'equity', icon: '📈',
        tags: ['stock', 'equity']
    },
    {
        id: 'instr-common-stock',
        name: { zh: '普通股', en: 'Common Stock' },
        description: { zh: '具有投票权的标准股票', en: 'Standard shares with voting rights' },
        domain: 'instruments', category: 'equity', icon: '📊',
        tags: ['common', 'voting']
    },
    {
        id: 'instr-preferred-stock',
        name: { zh: '优先股', en: 'Preferred Stock' },
        description: { zh: '优先分红的混合证券', en: 'Hybrid securities with dividend priority' },
        domain: 'instruments', category: 'equity', icon: '⭐',
        tags: ['preferred', 'dividend']
    },
    {
        id: 'instr-adr',
        name: { zh: '存托凭证', en: 'ADR/GDR' },
        description: { zh: '代表外国股票的本地证券', en: 'Local securities representing foreign stocks' },
        domain: 'instruments', category: 'equity', icon: '🌐',
        tags: ['adr', 'gdr', 'cross-border']
    },

    // === 固定收益类 ===
    {
        id: 'instr-bond',
        name: { zh: '债券', en: 'Bonds' },
        description: { zh: '固定收益债务证券', en: 'Fixed-income debt securities' },
        domain: 'instruments', category: 'fixed-income', icon: '📜',
        tags: ['bond', 'debt']
    },
    {
        id: 'instr-gov-bond',
        name: { zh: '国债', en: 'Government Bonds' },
        description: { zh: '政府发行的债券', en: 'Bonds issued by governments' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['treasury', 'sovereign']
    },
    {
        id: 'instr-corp-bond',
        name: { zh: '企业债', en: 'Corporate Bonds' },
        description: { zh: '企业发行的债券', en: 'Bonds issued by corporations' },
        domain: 'instruments', category: 'fixed-income', icon: '🏭',
        tags: ['corporate', 'credit']
    },
    {
        id: 'instr-convertible',
        name: { zh: '可转债', en: 'Convertible Bonds' },
        description: { zh: '可转换为股票的债券', en: 'Bonds convertible to equity' },
        domain: 'instruments', category: 'fixed-income', icon: '🔄',
        tags: ['convertible', 'hybrid']
    },
    {
        id: 'instr-mbs',
        name: { zh: 'MBS/ABS', en: 'MBS/ABS' },
        description: { zh: '资产支持证券', en: 'Asset-backed securities' },
        domain: 'instruments', category: 'structured', icon: '🏠',
        tags: ['mbs', 'abs', 'securitization']
    },

    // === 衍生品 ===
    {
        id: 'instr-futures',
        name: { zh: '期货', en: 'Futures' },
        description: { zh: '标准化远期合约', en: 'Standardized forward contracts' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['futures']
    },
    {
        id: 'instr-index-futures',
        name: { zh: '股指期货', en: 'Index Futures' },
        description: { zh: '股票指数期货合约', en: 'Stock index futures' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['index', 'equity-futures']
    },
    {
        id: 'instr-commodity-futures',
        name: { zh: '商品期货', en: 'Commodity Futures' },
        description: { zh: '大宗商品期货合约', en: 'Commodity futures contracts' },
        domain: 'instruments', category: 'derivatives', icon: '🛢️',
        tags: ['commodity', 'physical']
    },
    {
        id: 'instr-options',
        name: { zh: '期权', en: 'Options' },
        description: { zh: '买卖权利合约', en: 'Rights to buy or sell' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['options', 'call', 'put']
    },
    {
        id: 'instr-swaps',
        name: { zh: '互换', en: 'Swaps' },
        description: { zh: '现金流交换合约', en: 'Cash flow exchange contracts' },
        domain: 'instruments', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds']
    },
    {
        id: 'instr-forwards',
        name: { zh: '远期', en: 'Forwards' },
        description: { zh: '非标准化远期合约', en: 'Customized forward contracts' },
        domain: 'instruments', category: 'derivatives', icon: '📅',
        tags: ['forwards', 'otc']
    },

    // === 基金产品 ===
    {
        id: 'instr-etf',
        name: { zh: 'ETF', en: 'ETFs' },
        description: { zh: '交易所交易基金', en: 'Exchange-Traded Funds' },
        domain: 'instruments', category: 'fund', icon: '📦',
        tags: ['etf', 'passive']
    },
    {
        id: 'instr-index-fund',
        name: { zh: '指数基金', en: 'Index Funds' },
        description: { zh: '跟踪指数的被动基金', en: 'Passive funds tracking indices' },
        domain: 'instruments', category: 'fund', icon: '📊',
        tags: ['index', 'passive']
    },
    {
        id: 'instr-money-fund',
        name: { zh: '货币基金', en: 'Money Market Funds' },
        description: { zh: '投资短期债务的基金', en: 'Funds investing in short-term debt' },
        domain: 'instruments', category: 'fund', icon: '💵',
        tags: ['money-market', 'cash']
    },
    {
        id: 'instr-reit',
        name: { zh: 'REITs', en: 'REITs' },
        description: { zh: '房地产投资信托', en: 'Real Estate Investment Trusts' },
        domain: 'instruments', category: 'alternatives', icon: '🏢',
        tags: ['reit', 'real-estate']
    },

    // === 结构化产品 ===
    {
        id: 'instr-structured',
        name: { zh: '结构化产品', en: 'Structured Products' },
        description: { zh: '基于衍生品构建的复合金融产品，通常由固定收益与期权组合而成', en: 'Complex financial products built on derivatives, typically combining fixed income with options' },
        domain: 'instruments', category: 'structured', icon: '🧩',
        tags: ['structured', 'hybrid', 'derivatives']
    },
    {
        id: 'instr-exotic-options',
        name: { zh: '奇异期权', en: 'Exotic Options' },
        description: { zh: '具有复杂收益结构的非标准期权，如障碍期权、亚式期权等', en: 'Non-standard options with complex payoff structures, such as barrier options and Asian options' },
        domain: 'instruments', category: 'derivatives', icon: '🎰',
        tags: ['exotic', 'barrier', 'asian', 'options']
    },
    {
        id: 'instr-snowball',
        name: { zh: '雪球期权', en: 'Snowball Options' },
        description: { zh: '自动敲入敲出结构产品，投资者卖出看跌期权获取票息，具有路径依赖特性', en: 'Autocallable barrier products where investors sell put options for coupon income, with path-dependent payoffs' },
        domain: 'instruments', category: 'structured', icon: '❄️',
        tags: ['snowball', 'autocallable', 'barrier', 'knock-in', 'knock-out']
    },
    {
        id: 'instr-phoenix',
        name: { zh: '凤凰期权', en: 'Phoenix Notes' },
        description: { zh: '带有定期派息和敲入敲出机制的结构化产品，比雪球更频繁派发票息', en: 'Structured products with periodic coupon payments and knock-in/out mechanisms, more frequent payouts than snowball' },
        domain: 'instruments', category: 'structured', icon: '🦅',
        tags: ['phoenix', 'autocallable', 'coupon']
    },
    {
        id: 'instr-sharkfin',
        name: { zh: '鲨鱼鳍期权', en: 'Shark Fin Options' },
        description: { zh: '收益上限封顶的障碍期权，标的涨至障碍价时收益被锁定', en: 'Barrier options with capped returns, payoff is locked when underlying hits barrier price' },
        domain: 'instruments', category: 'structured', icon: '🦈',
        tags: ['sharkfin', 'barrier', 'capped']
    },
    {
        id: 'instr-income-cert',
        name: { zh: '收益凭证', en: 'Income Certificates' },
        description: { zh: '券商发行的本金保障型或浮动收益型产品，通常挂钩标的资产表现', en: 'Securities firm-issued products with principal protection or floating returns, typically linked to underlying assets' },
        domain: 'instruments', category: 'structured', icon: '📋',
        tags: ['certificate', 'securities', 'linked']
    },
    {
        id: 'instr-fcn',
        name: { zh: 'FCN固定票息票据', en: 'Fixed Coupon Notes' },
        description: { zh: '提供固定票息的挂钩型票据，到期收益取决于标的资产价格', en: 'Linked notes providing fixed coupons, maturity payoff depends on underlying asset price' },
        domain: 'instruments', category: 'structured', icon: '💳',
        tags: ['fcn', 'coupon', 'linked-note']
    },
    {
        id: 'instr-dcn',
        name: { zh: 'DCN折价票据', en: 'Discount Certificates' },
        description: { zh: '以折扣价格购买、收益封顶的结构化产品，类似卖出看涨期权', en: 'Structured products bought at discount with capped upside, similar to selling covered calls' },
        domain: 'instruments', category: 'structured', icon: '🏷️',
        tags: ['dcn', 'discount', 'capped']
    },

    // === 另类投资 ===
    {
        id: 'instr-pe',
        name: { zh: '私募股权', en: 'Private Equity' },
        description: { zh: '非上市公司股权投资', en: 'Investment in private companies' },
        domain: 'instruments', category: 'alternatives', icon: '💰',
        tags: ['pe', 'buyout']
    },
    {
        id: 'instr-vc',
        name: { zh: '风险投资', en: 'Venture Capital' },
        description: { zh: '早期创业公司投资', en: 'Early-stage company investment' },
        domain: 'instruments', category: 'alternatives', icon: '🚀',
        tags: ['vc', 'startup']
    },
    {
        id: 'instr-hedge-fund',
        name: { zh: '对冲基金策略', en: 'Hedge Fund Strategies' },
        description: { zh: '多元化对冲策略', en: 'Diversified hedging strategies' },
        domain: 'instruments', category: 'alternatives', icon: '🎲',
        tags: ['hedge', 'alpha']
    }
];

// 金融工具关系
export const instrumentRelationships: Relationship[] = [
    // 股票层级
    { id: 'inr-1', source: 'instr-stock', target: 'instr-common-stock', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-2', source: 'instr-stock', target: 'instr-preferred-stock', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-3', source: 'instr-stock', target: 'instr-adr', type: 'provides', strength: 2, bidirectional: false },

    // 债券层级
    { id: 'inr-4', source: 'instr-bond', target: 'instr-gov-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-5', source: 'instr-bond', target: 'instr-corp-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-6', source: 'instr-bond', target: 'instr-convertible', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-7', source: 'instr-bond', target: 'instr-mbs', type: 'provides', strength: 2, bidirectional: false },

    // 期货层级
    { id: 'inr-8', source: 'instr-futures', target: 'instr-index-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-9', source: 'instr-futures', target: 'instr-commodity-futures', type: 'provides', strength: 3, bidirectional: false },

    // 衍生关系
    { id: 'inr-10', source: 'instr-options', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-11', source: 'instr-index-futures', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-12', source: 'instr-convertible', target: 'instr-stock', type: 'derives_from', strength: 2, bidirectional: false },
    { id: 'inr-13', source: 'instr-convertible', target: 'instr-bond', type: 'derives_from', strength: 2, bidirectional: false },

    // 结构化产品层级关系
    { id: 'inr-17', source: 'instr-options', target: 'instr-exotic-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-18', source: 'instr-structured', target: 'instr-snowball', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-19', source: 'instr-structured', target: 'instr-phoenix', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-20', source: 'instr-structured', target: 'instr-sharkfin', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-21', source: 'instr-structured', target: 'instr-income-cert', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-22', source: 'instr-structured', target: 'instr-fcn', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-23', source: 'instr-structured', target: 'instr-dcn', type: 'provides', strength: 2, bidirectional: false },

    // 结构化产品衍生关系
    { id: 'inr-24', source: 'instr-snowball', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-25', source: 'instr-phoenix', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-26', source: 'instr-sharkfin', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-27', source: 'instr-snowball', target: 'instr-index-futures', type: 'derives_from', strength: 2, bidirectional: false },
    { id: 'inr-28', source: 'instr-exotic-options', target: 'instr-options', type: 'derives_from', strength: 3, bidirectional: false },

    // 基金投资关系
    { id: 'inr-14', source: 'instr-etf', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-15', source: 'instr-index-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-16', source: 'instr-money-fund', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false }
];
