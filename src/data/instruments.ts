import type { Entity, Relationship } from '../types';

// 金融工具领域实体
export const instrumentEntities: Entity[] = [
    // === 权益类工具 ===
    {
        id: 'instr-stock',
        name: { zh: '股票', en: 'Stocks' },
        description: { zh: '公司所有权份额证券', en: 'Equity ownership securities' },
        domain: 'instruments', category: 'equity', icon: '📈',
        tags: ['stock', 'equity'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-common-stock',
        name: { zh: '普通股', en: 'Common Stock' },
        description: { zh: '具有投票权的标准股票', en: 'Standard shares with voting rights' },
        domain: 'instruments', category: 'equity', icon: '📊',
        tags: ['common', 'voting'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-preferred-stock',
        name: { zh: '优先股', en: 'Preferred Stock' },
        description: { zh: '优先分红的混合证券', en: 'Hybrid securities with dividend priority' },
        domain: 'instruments', category: 'equity', icon: '⭐',
        tags: ['preferred', 'dividend'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-adr',
        name: { zh: '存托凭证', en: 'ADR/GDR' },
        description: { zh: '代表外国股票的本地证券', en: 'Local securities representing foreign stocks' },
        domain: 'instruments', category: 'equity', icon: '🌐',
        tags: ['adr', 'gdr', 'cross-border'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-warrant',
        name: { zh: '权证', en: 'Warrants' },
        description: { zh: '由发行人发行的认购或认沽权利证书，可在交易所交易', en: 'Issuer-issued rights to buy or sell underlying assets, tradable on exchanges' },
        domain: 'instruments', category: 'equity', icon: '📝',
        tags: ['warrant', 'call-warrant', 'put-warrant'],
        riskLevel: 'L4'
    },

    // === 固定收益类 ===
    {
        id: 'instr-bond',
        name: { zh: '债券', en: 'Bonds' },
        description: { zh: '固定收益债务证券', en: 'Fixed-income debt securities' },
        domain: 'instruments', category: 'fixed-income', icon: '📜',
        tags: ['bond', 'debt'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-gov-bond',
        name: { zh: '国债', en: 'Government Bonds' },
        description: { zh: '政府发行的债券', en: 'Bonds issued by governments' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['treasury', 'sovereign'],
        riskLevel: 'L1'
    },
    {
        id: 'instr-corp-bond',
        name: { zh: '企业债', en: 'Corporate Bonds' },
        description: { zh: '企业发行的债券', en: 'Bonds issued by corporations' },
        domain: 'instruments', category: 'fixed-income', icon: '🏭',
        tags: ['corporate', 'credit'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-convertible',
        name: { zh: '可转债', en: 'Convertible Bonds' },
        description: { zh: '可转换为股票的债券', en: 'Bonds convertible to equity' },
        domain: 'instruments', category: 'fixed-income', icon: '🔄',
        tags: ['convertible', 'hybrid'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-mbs',
        name: { zh: 'MBS/ABS', en: 'MBS/ABS' },
        description: { zh: '资产支持证券', en: 'Asset-backed securities' },
        domain: 'instruments', category: 'structured', icon: '🏠',
        tags: ['mbs', 'abs', 'securitization'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-tbill',
        name: { zh: '国库券', en: 'Treasury Bills' },
        description: { zh: '短期政府债务工具，通常期限在一年以内', en: 'Short-term government debt instruments, typically maturing within one year' },
        domain: 'instruments', category: 'fixed-income', icon: '💴',
        tags: ['treasury', 'short-term', 'money-market'],
        riskLevel: 'L1'
    },
    {
        id: 'instr-muni-bond',
        name: { zh: '市政债券', en: 'Municipal Bonds' },
        description: { zh: '地方政府发行的债券，通常享有税收优惠', en: 'Bonds issued by local governments, often with tax advantages' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['municipal', 'tax-exempt'],
        riskLevel: 'L1'
    },
    {
        id: 'instr-cd',
        name: { zh: '大额存单', en: 'Certificates of Deposit' },
        description: { zh: '银行发行的定期存款凭证，可在二级市场交易', en: 'Bank-issued time deposit certificates, tradable in secondary markets' },
        domain: 'instruments', category: 'fixed-income', icon: '🏦',
        tags: ['cd', 'deposit', 'bank'],
        riskLevel: 'L1'
    },

    // === 衍生品 ===
    {
        id: 'instr-futures',
        name: { zh: '期货', en: 'Futures' },
        description: { zh: '标准化远期合约', en: 'Standardized forward contracts' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['futures'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-index-futures',
        name: { zh: '股指期货', en: 'Index Futures' },
        description: { zh: '股票指数期货合约', en: 'Stock index futures' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['index', 'equity-futures'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-commodity-futures',
        name: { zh: '商品期货', en: 'Commodity Futures' },
        description: { zh: '大宗商品期货合约', en: 'Commodity futures contracts' },
        domain: 'instruments', category: 'derivatives', icon: '🛢️',
        tags: ['commodity', 'physical'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-options',
        name: { zh: '期权', en: 'Options' },
        description: { zh: '买卖权利合约', en: 'Rights to buy or sell' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['options', 'call', 'put'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-swaps',
        name: { zh: '互换', en: 'Swaps' },
        description: { zh: '现金流交换合约', en: 'Cash flow exchange contracts' },
        domain: 'instruments', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-forwards',
        name: { zh: '远期', en: 'Forwards' },
        description: { zh: '非标准化远期合约', en: 'Customized forward contracts' },
        domain: 'instruments', category: 'derivatives', icon: '📅',
        tags: ['forwards', 'otc'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-options-futures',
        name: { zh: '期货期权', en: 'Options on Futures' },
        description: { zh: '以期货合约为标的的期权', en: 'Options with futures contracts as underlying' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['options', 'futures', 'fop'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-equity-options',
        name: { zh: '股票期权', en: 'Equity Options' },
        description: { zh: '以个股为标的的期权合约', en: 'Options on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['options', 'stock-options', 'equity'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-index-options',
        name: { zh: '指数期权', en: 'Index Options' },
        description: { zh: '以股票指数为标的的期权合约', en: 'Options on stock indices' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['options', 'index', 'spx'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-cfd',
        name: { zh: '差价合约', en: 'CFDs' },
        description: { zh: '无需持有标的资产即可交易价格变动的合约', en: 'Contracts for difference, trading price movements without owning the underlying' },
        domain: 'instruments', category: 'derivatives', icon: '📉',
        tags: ['cfd', 'leverage', 'margin'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-single-stock-futures',
        name: { zh: '个股期货', en: 'Single Stock Futures' },
        description: { zh: '以单一股票为标的的期货合约', en: 'Futures contracts on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['ssf', 'equity-futures'],
        riskLevel: 'L3'
    },

    // === 外汇工具 ===
    {
        id: 'instr-forex',
        name: { zh: '外汇', en: 'Forex/Currencies' },
        description: { zh: '货币对交易工具', en: 'Currency pair trading instruments' },
        domain: 'instruments', category: 'forex', icon: '💱',
        tags: ['forex', 'fx', 'currency'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-spot-fx',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: 'T+2交割的现货外汇交易', en: 'Spot forex with T+2 settlement' },
        domain: 'instruments', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate', 'fx'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-fx-forwards',
        name: { zh: '外汇远期', en: 'FX Forwards' },
        description: { zh: '约定未来日期和汇率的外汇交易', en: 'Forex transactions with future settlement dates and rates' },
        domain: 'instruments', category: 'forex', icon: '📅',
        tags: ['forward', 'fx', 'hedge'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-fx-options',
        name: { zh: '外汇期权', en: 'FX Options' },
        description: { zh: '以货币对为标的的期权合约', en: 'Options on currency pairs' },
        domain: 'instruments', category: 'forex', icon: '🎯',
        tags: ['options', 'fx', 'currency'],
        riskLevel: 'L4'
    },

    // === 波动率产品 ===
    {
        id: 'instr-volatility',
        name: { zh: '波动率产品', en: 'Volatility Products' },
        description: { zh: '基于市场波动率的交易产品', en: 'Trading products based on market volatility' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['volatility', 'vix', 'variance'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-vix-futures',
        name: { zh: 'VIX期货', en: 'VIX Futures' },
        description: { zh: '基于CBOE波动率指数的期货合约', en: 'Futures on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['vix', 'futures', 'volatility'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-vix-options',
        name: { zh: 'VIX期权', en: 'VIX Options' },
        description: { zh: '基于CBOE波动率指数的期权合约', en: 'Options on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['vix', 'options', 'volatility'],
        riskLevel: 'L4'
    },

    // === 商品 ===
    {
        id: 'instr-commodity',
        name: { zh: '大宗商品', en: 'Commodities' },
        description: { zh: '可交易的实物商品或商品合约', en: 'Tradable physical commodities or commodity contracts' },
        domain: 'instruments', category: 'commodities', icon: '🛢️',
        tags: ['commodity', 'physical'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-precious-metals',
        name: { zh: '贵金属', en: 'Precious Metals' },
        description: { zh: '黄金、白银、铂金等贵金属投资', en: 'Gold, silver, platinum investment' },
        domain: 'instruments', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-energy',
        name: { zh: '能源', en: 'Energy' },
        description: { zh: '原油、天然气等能源商品', en: 'Crude oil, natural gas and other energy commodities' },
        domain: 'instruments', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-agriculture',
        name: { zh: '农产品', en: 'Agricultural Products' },
        description: { zh: '谷物、大豆、咖啡等农产品期货', en: 'Grains, soybeans, coffee and other agricultural futures' },
        domain: 'instruments', category: 'commodities', icon: '🌾',
        tags: ['agriculture', 'grains', 'softs'],
        riskLevel: 'L3'
    },

    // === 预测市场 ===
    {
        id: 'instr-forecast',
        name: { zh: '预测合约', en: 'Forecast Contracts' },
        description: { zh: '基于政治、经济、气候等事件的预测市场合约', en: 'Prediction market contracts on political, economic, and climate events' },
        domain: 'instruments', category: 'alternatives', icon: '🔮',
        tags: ['forecast', 'prediction', 'events'],
        riskLevel: 'L4'
    },

    // === 加密货币 ===
    {
        id: 'instr-crypto',
        name: { zh: '加密货币', en: 'Cryptocurrencies' },
        description: { zh: '比特币、以太坊等数字资产', en: 'Bitcoin, Ethereum and other digital assets' },
        domain: 'instruments', category: 'crypto', icon: '₿',
        tags: ['crypto', 'bitcoin', 'ethereum'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-crypto-futures',
        name: { zh: '加密货币期货', en: 'Crypto Futures' },
        description: { zh: '以加密货币为标的的期货合约', en: 'Futures contracts on cryptocurrencies' },
        domain: 'instruments', category: 'crypto', icon: '📊',
        tags: ['crypto', 'futures', 'btc'],
        riskLevel: 'L4'
    },

    // === 基金产品 ===
    {
        id: 'instr-etf',
        name: { zh: 'ETF', en: 'ETFs' },
        description: { zh: '交易所交易基金', en: 'Exchange-Traded Funds' },
        domain: 'instruments', category: 'fund', icon: '📦',
        tags: ['etf', 'passive'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-index-fund',
        name: { zh: '指数基金', en: 'Index Funds' },
        description: { zh: '跟踪指数的被动基金', en: 'Passive funds tracking indices' },
        domain: 'instruments', category: 'fund', icon: '📊',
        tags: ['index', 'passive'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-money-fund',
        name: { zh: '货币基金', en: 'Money Market Funds' },
        description: { zh: '投资短期债务的基金', en: 'Funds investing in short-term debt' },
        domain: 'instruments', category: 'fund', icon: '💵',
        tags: ['money-market', 'cash'],
        riskLevel: 'L1'
    },
    {
        id: 'instr-reit',
        name: { zh: 'REITs', en: 'REITs' },
        description: { zh: '房地产投资信托', en: 'Real Estate Investment Trusts' },
        domain: 'instruments', category: 'alternatives', icon: '🏢',
        tags: ['reit', 'real-estate'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-mutual-fund',
        name: { zh: '共同基金', en: 'Mutual Funds' },
        description: { zh: '由专业管理人管理的集合投资工具', en: 'Pooled investment vehicles managed by professional managers' },
        domain: 'instruments', category: 'fund', icon: '💼',
        tags: ['mutual-fund', 'active', 'managed'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-bond-fund',
        name: { zh: '债券基金', en: 'Bond Funds' },
        domain: 'instruments', category: 'fund', icon: '📜',
        tags: ['bond-fund', 'fixed-income'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-sector-fund',
        name: { zh: '行业基金', en: 'Sector Funds' },
        description: { zh: '专注于特定行业或领域的基金', en: 'Funds focused on specific sectors or industries' },
        domain: 'instruments', category: 'fund', icon: '🏭',
        tags: ['sector', 'thematic'],
        riskLevel: 'L3'
    },
    {
        id: 'instr-closed-end-fund',
        name: { zh: '封闭式基金', en: 'Closed-End Funds' },
        description: { zh: '固定份额、可在交易所交易的投资基金，不接受申购赎回', en: 'Fixed-share investment funds tradable on exchanges, no subscriptions or redemptions' },
        domain: 'instruments', category: 'fund', icon: '🔒',
        tags: ['closed-end', 'listed', 'cef'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-open-end-fund',
        name: { zh: '开放式基金', en: 'Open-End Funds' },
        description: { zh: '可随时申购赎回的投资基金，份额随资金流动变化', en: 'Investment funds allowing subscriptions and redemptions at any time' },
        domain: 'instruments', category: 'fund', icon: '🔓',
        tags: ['open-end', 'redemption'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-lof',
        name: { zh: 'LOF基金', en: 'Listed Open-End Funds' },
        description: { zh: '可在交易所上市交易的开放式基金，兼具申购赎回和二级市场交易功能', en: 'Open-end funds listed on exchanges, combining subscription/redemption with secondary market trading' },
        domain: 'instruments', category: 'fund', icon: '📊',
        tags: ['lof', 'listed', 'open-end'],
        riskLevel: 'L2'
    },
    {
        id: 'instr-fof',
        name: { zh: 'FOF基金', en: 'Fund of Funds' },
        description: { zh: '投资于其他基金的基金，通过分散投资降低风险', en: 'Funds that invest in other funds, reducing risk through diversification' },
        domain: 'instruments', category: 'fund', icon: '🎯',
        tags: ['fof', 'multi-manager', 'diversified'],
        riskLevel: 'L2'
    },

    // === 结构化产品 ===
    {
        id: 'instr-structured',
        name: { zh: '结构化产品', en: 'Structured Products' },
        description: { zh: '基于衍生品构建的复合金融产品，通常由固定收益与期权组合而成', en: 'Complex financial products built on derivatives, typically combining fixed income with options' },
        domain: 'instruments', category: 'structured', icon: '🧩',
        tags: ['structured', 'hybrid', 'derivatives'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-exotic-options',
        name: { zh: '奇异期权', en: 'Exotic Options' },
        description: { zh: '具有复杂收益结构的非标准期权，如障碍期权、亚式期权等', en: 'Non-standard options with complex payoff structures, such as barrier options and Asian options' },
        domain: 'instruments', category: 'derivatives', icon: '🎰',
        tags: ['exotic', 'barrier', 'asian', 'options'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-snowball',
        name: { zh: '雪球期权', en: 'Snowball Options' },
        description: { zh: '自动敲入敲出结构产品，投资者卖出看跌期权获取票息，具有路径依赖特性', en: 'Autocallable barrier products where investors sell put options for coupon income, with path-dependent payoffs' },
        domain: 'instruments', category: 'structured', icon: '❄️',
        tags: ['snowball', 'autocallable', 'barrier', 'knock-in', 'knock-out'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-phoenix',
        name: { zh: '凤凰期权', en: 'Phoenix Notes' },
        description: { zh: '带有定期派息和敲入敲出机制的结构化产品，比雪球更频繁派发票息', en: 'Structured products with periodic coupon payments and knock-in/out mechanisms, more frequent payouts than snowball' },
        domain: 'instruments', category: 'structured', icon: '🦅',
        tags: ['phoenix', 'autocallable', 'coupon'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-sharkfin',
        name: { zh: '鲨鱼鳍期权', en: 'Shark Fin Options' },
        description: { zh: '收益上限封顶的障碍期权，标的涨至障碍价时收益被锁定', en: 'Barrier options with capped returns, payoff is locked when underlying hits barrier price' },
        domain: 'instruments', category: 'structured', icon: '🦈',
        tags: ['sharkfin', 'barrier', 'capped'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-income-cert',
        name: { zh: '收益凭证', en: 'Income Certificates' },
        description: { zh: '券商发行的本金保障型或浮动收益型产品，通常挂钩标的资产表现', en: 'Securities firm-issued products with principal protection or floating returns, typically linked to underlying assets' },
        domain: 'instruments', category: 'structured', icon: '📋',
        tags: ['certificate', 'securities', 'linked'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-fcn',
        name: { zh: 'FCN固定票息票据', en: 'Fixed Coupon Notes' },
        description: { zh: '提供固定票息的挂钩型票据，到期收益取决于标的资产价格', en: 'Linked notes providing fixed coupons, maturity payoff depends on underlying asset price' },
        domain: 'instruments', category: 'structured', icon: '💳',
        tags: ['fcn', 'coupon', 'linked-note'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-dcn',
        name: { zh: 'DCN折价票据', en: 'Discount Certificates' },
        description: { zh: '以折扣价格购买、收益封顶的结构化产品，类似卖出看涨期权', en: 'Structured products bought at discount with capped upside, similar to selling covered calls' },
        domain: 'instruments', category: 'structured', icon: '🏷️',
        tags: ['dcn', 'discount', 'capped'],
        riskLevel: 'L4'
    },

    // === 另类投资 ===
    {
        id: 'instr-pe',
        name: { zh: '私募股权', en: 'Private Equity' },
        description: { zh: '非上市公司股权投资', en: 'Investment in private companies' },
        domain: 'instruments', category: 'alternatives', icon: '💰',
        tags: ['pe', 'buyout'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-vc',
        name: { zh: '风险投资', en: 'Venture Capital' },
        description: { zh: '早期创业公司投资', en: 'Early-stage company investment' },
        domain: 'instruments', category: 'alternatives', icon: '🚀',
        tags: ['vc', 'startup'],
        riskLevel: 'L4'
    },
    {
        id: 'instr-hedge-fund',
        name: { zh: '对冲基金策略', en: 'Hedge Fund Strategies' },
        description: { zh: '多元化对冲策略', en: 'Diversified hedging strategies' },
        domain: 'instruments', category: 'alternatives', icon: '🎲',
        tags: ['hedge', 'alpha'],
        riskLevel: 'L4'
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
    { id: 'inr-16', source: 'instr-money-fund', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false },

    // 新增股票层级
    { id: 'inr-29', source: 'instr-stock', target: 'instr-warrant', type: 'provides', strength: 2, bidirectional: false },

    // 新增债券层级
    { id: 'inr-30', source: 'instr-gov-bond', target: 'instr-tbill', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-31', source: 'instr-bond', target: 'instr-muni-bond', type: 'provides', strength: 2, bidirectional: false },

    // 期权层级
    { id: 'inr-32', source: 'instr-options', target: 'instr-equity-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-33', source: 'instr-options', target: 'instr-index-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-34', source: 'instr-options', target: 'instr-options-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-35', source: 'instr-options', target: 'instr-fx-options', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-36', source: 'instr-options', target: 'instr-vix-options', type: 'provides', strength: 2, bidirectional: false },

    // 期货层级
    { id: 'inr-37', source: 'instr-futures', target: 'instr-single-stock-futures', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-38', source: 'instr-futures', target: 'instr-vix-futures', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-39', source: 'instr-futures', target: 'instr-crypto-futures', type: 'provides', strength: 2, bidirectional: false },

    // 外汇层级
    { id: 'inr-40', source: 'instr-forex', target: 'instr-spot-fx', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-41', source: 'instr-forex', target: 'instr-fx-forwards', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-42', source: 'instr-forex', target: 'instr-fx-options', type: 'provides', strength: 2, bidirectional: false },

    // 波动率产品层级
    { id: 'inr-43', source: 'instr-volatility', target: 'instr-vix-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-44', source: 'instr-volatility', target: 'instr-vix-options', type: 'provides', strength: 3, bidirectional: false },

    // 商品层级
    { id: 'inr-45', source: 'instr-commodity', target: 'instr-precious-metals', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-46', source: 'instr-commodity', target: 'instr-energy', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-47', source: 'instr-commodity', target: 'instr-agriculture', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-48', source: 'instr-commodity-futures', target: 'instr-commodity', type: 'derives_from', strength: 3, bidirectional: false },

    // 加密货币层级
    { id: 'inr-49', source: 'instr-crypto', target: 'instr-crypto-futures', type: 'provides', strength: 3, bidirectional: false },

    // CFD关系
    { id: 'inr-50', source: 'instr-cfd', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-51', source: 'instr-cfd', target: 'instr-forex', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-52', source: 'instr-cfd', target: 'instr-commodity', type: 'derives_from', strength: 2, bidirectional: false },

    // 基金层级
    { id: 'inr-53', source: 'instr-mutual-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-54', source: 'instr-mutual-fund', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-55', source: 'instr-bond-fund', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-56', source: 'instr-sector-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },

    // 新增基金类型层级
    { id: 'inr-57', source: 'instr-mutual-fund', target: 'instr-closed-end-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-58', source: 'instr-mutual-fund', target: 'instr-open-end-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-59', source: 'instr-open-end-fund', target: 'instr-lof', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-60', source: 'instr-mutual-fund', target: 'instr-fof', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-61', source: 'instr-fof', target: 'instr-mutual-fund', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-62', source: 'instr-closed-end-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-63', source: 'instr-closed-end-fund', target: 'instr-bond', type: 'invests', strength: 2, bidirectional: false }
];
