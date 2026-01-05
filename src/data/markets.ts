import type { Entity, Relationship } from '../types';

// 金融市场领域实体
export const marketEntities: Entity[] = [
    // === 股票市场子类 ===
    {
        id: 'market-equity',
        name: { zh: '股票市场', en: 'Equity Markets' },
        description: { zh: '股票发行和交易的市场', en: 'Markets for equity securities' },
        domain: 'markets', category: 'primary', icon: '📈',
        tags: ['stock', 'equity']
    },
    {
        id: 'market-equity-main',
        name: { zh: '主板市场', en: 'Main Board' },
        description: { zh: '大型成熟企业上市交易的市场', en: 'Market for large established companies' },
        domain: 'markets', category: 'equity', icon: '🏢',
        tags: ['main-board', 'blue-chip']
    },
    {
        id: 'market-equity-gem',
        name: { zh: '创业板/GEM', en: 'Growth Enterprise Market' },
        description: { zh: '成长型企业上市的市场', en: 'Market for growth enterprises' },
        domain: 'markets', category: 'equity', icon: '🚀',
        tags: ['gem', 'growth']
    },
    {
        id: 'market-equity-star',
        name: { zh: '科创板', en: 'STAR Market' },
        description: { zh: '科技创新企业的资本市场', en: 'Market for tech innovation companies' },
        domain: 'markets', category: 'equity', icon: '⭐',
        tags: ['star', 'tech', 'innovation']
    },
    {
        id: 'market-otc',
        name: { zh: '场外市场/OTC', en: 'OTC Markets' },
        description: { zh: '非交易所的分散交易市场', en: 'Over-the-counter decentralized markets' },
        domain: 'markets', category: 'equity', icon: '🔗',
        tags: ['otc', 'off-exchange']
    },

    // === 债券市场子类 ===
    {
        id: 'market-bond',
        name: { zh: '债券市场', en: 'Bond Markets' },
        description: { zh: '债券发行和交易的市场', en: 'Markets for debt securities' },
        domain: 'markets', category: 'primary', icon: '📜',
        tags: ['bond', 'debt']
    },
    {
        id: 'market-bond-gov',
        name: { zh: '国债市场', en: 'Government Bond Market' },
        description: { zh: '政府债券交易市场', en: 'Market for government debt securities' },
        domain: 'markets', category: 'bond', icon: '🏛️',
        tags: ['treasury', 'sovereign']
    },
    {
        id: 'market-bond-corp',
        name: { zh: '企业债市场', en: 'Corporate Bond Market' },
        description: { zh: '企业债券交易市场', en: 'Market for corporate debt' },
        domain: 'markets', category: 'bond', icon: '🏭',
        tags: ['corporate', 'credit']
    },
    {
        id: 'market-bond-muni',
        name: { zh: '地方债市场', en: 'Municipal Bond Market' },
        description: { zh: '地方政府债券市场', en: 'Market for municipal bonds' },
        domain: 'markets', category: 'bond', icon: '🏙️',
        tags: ['municipal', 'local-gov']
    },

    // === 外汇市场 ===
    {
        id: 'market-forex',
        name: { zh: '外汇市场', en: 'Forex Markets' },
        description: { zh: '全球货币兑换市场', en: 'Global currency exchange market' },
        domain: 'markets', category: 'primary', icon: '💱',
        tags: ['forex', 'fx', 'currency']
    },
    {
        id: 'market-forex-spot',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: '即时交割的外汇交易', en: 'Immediate delivery forex transactions' },
        domain: 'markets', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate']
    },
    {
        id: 'market-forex-forward',
        name: { zh: '远期外汇', en: 'Forward Forex' },
        description: { zh: '约定未来交割的外汇交易', en: 'Future delivery forex contracts' },
        domain: 'markets', category: 'forex', icon: '📅',
        tags: ['forward', 'future']
    },

    // === 货币市场 ===
    {
        id: 'market-money',
        name: { zh: '货币市场', en: 'Money Markets' },
        description: { zh: '短期资金借贷市场', en: 'Short-term lending markets' },
        domain: 'markets', category: 'primary', icon: '💵',
        tags: ['money-market', 'short-term']
    },
    {
        id: 'market-interbank',
        name: { zh: '同业拆借市场', en: 'Interbank Market' },
        description: { zh: '银行间短期资金借贷', en: 'Bank-to-bank short-term lending' },
        domain: 'markets', category: 'money', icon: '🏦',
        tags: ['interbank', 'libor', 'shibor']
    },
    {
        id: 'market-repo',
        name: { zh: '回购市场', en: 'Repo Market' },
        description: { zh: '证券回购协议市场', en: 'Repurchase agreement market' },
        domain: 'markets', category: 'money', icon: '🔄',
        tags: ['repo', 'reverse-repo']
    },

    // === 衍生品市场 ===
    {
        id: 'market-derivatives',
        name: { zh: '衍生品市场', en: 'Derivatives Markets' },
        description: { zh: '金融衍生工具交易市场', en: 'Markets for derivative instruments' },
        domain: 'markets', category: 'primary', icon: '🎯',
        tags: ['derivatives']
    },
    {
        id: 'market-futures',
        name: { zh: '期货市场', en: 'Futures Markets' },
        description: { zh: '标准化期货合约交易', en: 'Standardized futures trading' },
        domain: 'markets', category: 'derivatives', icon: '📊',
        tags: ['futures', 'commodities']
    },
    {
        id: 'market-options',
        name: { zh: '期权市场', en: 'Options Markets' },
        description: { zh: '期权合约交易市场', en: 'Options contracts trading' },
        domain: 'markets', category: 'derivatives', icon: '🎲',
        tags: ['options', 'calls', 'puts']
    },
    {
        id: 'market-swaps',
        name: { zh: '互换市场', en: 'Swaps Markets' },
        description: { zh: '利率、货币互换交易', en: 'Interest rate and currency swaps' },
        domain: 'markets', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds']
    },
    {
        id: 'market-structured',
        name: { zh: '结构化产品市场', en: 'Structured Products Market' },
        description: { zh: '结构化衍生品和收益凭证的发行与交易市场', en: 'Market for structured derivatives and income certificates' },
        domain: 'markets', category: 'derivatives', icon: '🧩',
        tags: ['structured', 'autocallable', 'certificates']
    },
    {
        id: 'market-otc-derivatives',
        name: { zh: '场外衍生品市场', en: 'OTC Derivatives Market' },
        description: { zh: '非交易所的定制化衍生品交易市场', en: 'Over-the-counter customized derivatives trading' },
        domain: 'markets', category: 'derivatives', icon: '🤝',
        tags: ['otc', 'bespoke', 'bilateral']
    },

    // === 商品市场 ===
    {
        id: 'market-commodities',
        name: { zh: '大宗商品市场', en: 'Commodities Markets' },
        description: { zh: '实物商品交易市场', en: 'Physical commodities trading' },
        domain: 'markets', category: 'primary', icon: '🛢️',
        tags: ['commodities']
    },
    {
        id: 'market-precious-metals',
        name: { zh: '贵金属市场', en: 'Precious Metals' },
        description: { zh: '黄金、白银等贵金属交易', en: 'Gold, silver trading' },
        domain: 'markets', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum']
    },
    {
        id: 'market-energy',
        name: { zh: '能源市场', en: 'Energy Markets' },
        description: { zh: '石油、天然气等能源交易', en: 'Oil, natural gas trading' },
        domain: 'markets', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy']
    },

    // === 加密货币市场 ===
    {
        id: 'market-crypto',
        name: { zh: '加密货币市场', en: 'Cryptocurrency Markets' },
        description: { zh: '数字资产交易市场', en: 'Digital asset trading' },
        domain: 'markets', category: 'emerging', icon: '₿',
        tags: ['crypto', 'bitcoin', 'blockchain']
    },
    {
        id: 'market-defi',
        name: { zh: 'DeFi市场', en: 'DeFi Markets' },
        description: { zh: '去中心化金融协议', en: 'Decentralized finance protocols' },
        domain: 'markets', category: 'crypto', icon: '🔗',
        tags: ['defi', 'dex', 'yield']
    },

    // === 主要股票指数 ===
    {
        id: 'market-index-sp500',
        name: { zh: '标普500', en: 'S&P 500' },
        description: { zh: '美国500家大型上市公司指数，全球最重要的股市基准', en: 'Index of 500 large US companies, most important global equity benchmark' },
        domain: 'markets', category: 'index', icon: '🇺🇸',
        tags: ['sp500', 'usa', 'benchmark']
    },
    {
        id: 'market-index-djia',
        name: { zh: '道琼斯工业指数', en: 'Dow Jones Industrial Average' },
        description: { zh: '美国30家蓝筹股价格加权指数', en: 'Price-weighted index of 30 US blue-chip stocks' },
        domain: 'markets', category: 'index', icon: '🏭',
        tags: ['djia', 'dow', 'blue-chip']
    },
    {
        id: 'market-index-nasdaq',
        name: { zh: '纳斯达克综合指数', en: 'NASDAQ Composite' },
        description: { zh: '纳斯达克交易所全部上市公司综合指数', en: 'Index of all NASDAQ listed companies' },
        domain: 'markets', category: 'index', icon: '💻',
        tags: ['nasdaq', 'tech', 'composite']
    },
    {
        id: 'market-index-csi300',
        name: { zh: '沪深300', en: 'CSI 300' },
        description: { zh: '沪深两市300只大盘股指数，A股核心基准', en: 'Index of 300 large-cap A-shares, core China equity benchmark' },
        domain: 'markets', category: 'index', icon: '🇨🇳',
        tags: ['csi300', 'china', 'a-share']
    },
    {
        id: 'market-index-csi500',
        name: { zh: '中证500', en: 'CSI 500' },
        description: { zh: '沪深两市500只中盘股指数', en: 'Index of 500 mid-cap A-shares' },
        domain: 'markets', category: 'index', icon: '🇨🇳',
        tags: ['csi500', 'china', 'mid-cap']
    },
    {
        id: 'market-index-hsi',
        name: { zh: '恒生指数', en: 'Hang Seng Index' },
        description: { zh: '香港50只大型股票指数', en: 'Index of 50 largest Hong Kong stocks' },
        domain: 'markets', category: 'index', icon: '🇭🇰',
        tags: ['hsi', 'hong-kong', 'blue-chip']
    },
    {
        id: 'market-index-nikkei',
        name: { zh: '日经225', en: 'Nikkei 225' },
        description: { zh: '东京证交所225只大型股票指数', en: 'Index of 225 largest Tokyo Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇯🇵',
        tags: ['nikkei', 'japan', 'tse']
    },
    {
        id: 'market-index-ftse100',
        name: { zh: '富时100', en: 'FTSE 100' },
        description: { zh: '伦敦证交所100只大型股票指数', en: 'Index of 100 largest London Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇬🇧',
        tags: ['ftse', 'uk', 'lse']
    },
    {
        id: 'market-index-vix',
        name: { zh: 'VIX恐慌指数', en: 'VIX Volatility Index' },
        description: { zh: '标普500期权隐含波动率指数，衡量市场恐慌程度', en: 'S&P 500 implied volatility index, measures market fear' },
        domain: 'markets', category: 'index', icon: '📉',
        tags: ['vix', 'volatility', 'fear-index']
    }
];

// 金融市场内部关系
export const marketRelationships: Relationship[] = [
    // 股票市场层级
    { id: 'mr-1', source: 'market-equity', target: 'market-equity-main', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-2', source: 'market-equity', target: 'market-equity-gem', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-3', source: 'market-equity', target: 'market-equity-star', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-4', source: 'market-equity', target: 'market-otc', type: 'provides', strength: 2, bidirectional: false },

    // 债券市场层级
    { id: 'mr-5', source: 'market-bond', target: 'market-bond-gov', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-6', source: 'market-bond', target: 'market-bond-corp', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-7', source: 'market-bond', target: 'market-bond-muni', type: 'provides', strength: 2, bidirectional: false },

    // 外汇市场层级
    { id: 'mr-8', source: 'market-forex', target: 'market-forex-spot', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-9', source: 'market-forex', target: 'market-forex-forward', type: 'provides', strength: 2, bidirectional: false },

    // 货币市场层级
    { id: 'mr-10', source: 'market-money', target: 'market-interbank', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-11', source: 'market-money', target: 'market-repo', type: 'provides', strength: 3, bidirectional: false },

    // 衍生品市场层级
    { id: 'mr-12', source: 'market-derivatives', target: 'market-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-13', source: 'market-derivatives', target: 'market-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-14', source: 'market-derivatives', target: 'market-swaps', type: 'provides', strength: 2, bidirectional: false },
    { id: 'mr-22', source: 'market-derivatives', target: 'market-structured', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-23', source: 'market-derivatives', target: 'market-otc-derivatives', type: 'provides', strength: 2, bidirectional: false },


    // 商品市场层级
    { id: 'mr-15', source: 'market-commodities', target: 'market-precious-metals', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-16', source: 'market-commodities', target: 'market-energy', type: 'provides', strength: 3, bidirectional: false },

    // 加密市场层级
    { id: 'mr-17', source: 'market-crypto', target: 'market-defi', type: 'provides', strength: 2, bidirectional: false },

    // 市场间关联
    { id: 'mr-18', source: 'market-futures', target: 'market-commodities', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'mr-19', source: 'market-options', target: 'market-equity', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'mr-20', source: 'market-swaps', target: 'market-bond', type: 'derives_from', strength: 2, bidirectional: false },
    { id: 'mr-21', source: 'market-forex-forward', target: 'market-derivatives', type: 'depends_on', strength: 2, bidirectional: false },

    // 指数与市场关系
    { id: 'mr-24', source: 'market-equity', target: 'market-index-sp500', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-25', source: 'market-equity', target: 'market-index-djia', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-26', source: 'market-equity', target: 'market-index-nasdaq', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-27', source: 'market-equity', target: 'market-index-csi300', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-28', source: 'market-equity', target: 'market-index-csi500', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-29', source: 'market-equity', target: 'market-index-hsi', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-30', source: 'market-equity', target: 'market-index-nikkei', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-31', source: 'market-equity', target: 'market-index-ftse100', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-32', source: 'market-derivatives', target: 'market-index-vix', type: 'provides', strength: 3, bidirectional: false },

    // 指数间影响关系
    { id: 'mr-33', source: 'market-index-sp500', target: 'market-index-csi300', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mr-34', source: 'market-index-sp500', target: 'market-index-hsi', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mr-35', source: 'market-index-sp500', target: 'market-index-nikkei', type: 'influences', strength: 2, bidirectional: false }
];
