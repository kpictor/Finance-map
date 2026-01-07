import type { Entity, Relationship } from '../types';

// 金融市场领域实体
export const marketEntities: Entity[] = [
    // === 一级市场 (Primary Market) - 证券发行市场 ===
    {
        // 华尔街说明: 一级市场是资本形成的源头，投行在其中扮演承销商角色
        id: 'market-primary',
        name: { zh: '一级市场', en: 'Primary Market' },
        description: {
            zh: '证券首次发行的市场，企业通过此市场筹集资金。投资者直接从发行人购买新发行的证券。',
            en: 'The market where securities are created. Companies raise capital by selling new securities directly to investors.'
        },
        domain: 'markets', category: 'fundamental', icon: '🎯',
        tags: ['primary', 'issuance', 'IPO', '发行'],
        level: 1,
        details: {
            zh: '一级市场运作流程：发行人→承销商(投行)→路演(Roadshow)→定价→配售→上市。承销方式分为包销(Underwriting)和代销(Best Efforts)',
            en: 'Primary market flow: Issuer → Underwriter (IB) → Roadshow → Pricing → Allocation → Listing. Methods: Underwriting (firm commitment) vs Best Efforts'
        }
    },
    {
        // 华尔街说明: 2021年全球IPO市场规模创历史新高，SPAC热潮推动了大量上市
        id: 'market-ipo',
        name: { zh: 'IPO市场', en: 'IPO Market' },
        description: {
            zh: '首次公开发行股票的市场，私有企业通过IPO变成公众公司。2021年全球IPO筹资额创历史新高',
            en: 'Initial Public Offering market where private companies go public. 2021 saw record global IPO fundraising'
        },
        domain: 'markets', category: 'primary-equity', icon: '🎉',
        tags: ['ipo', 'listing', '上市', 'spac'],
        level: 2, parentId: 'market-primary',
        details: {
            zh: '2021年IPO热潮：全球IPO筹资超6000亿美元，SPAC(特殊目的收购公司)贡献约1/4。2022年后市场急剧降温，回归价值理性',
            en: '2021 IPO boom: Global IPO raised $600B+, SPACs contributed ~25%. Market cooled significantly in 2022, returning to value focus'
        }
    },
    {
        id: 'market-bond-issuance',
        name: { zh: '债券发行市场', en: 'Bond Issuance Market' },
        description: {
            zh: '政府或企业首次发行债券筹集资金的市场',
            en: 'Market where governments and corporations issue bonds to raise capital'
        },
        domain: 'markets', category: 'primary-bond', icon: '📜',
        tags: ['bond-issuance', '债券发行'],
        level: 2, parentId: 'market-primary',
        details: {
            zh: '全球债券市场规模超130万亿美元，美国国债是最大单一品种。债券发行需信用评级，投资级(BBB-以上)与高收益级(BB+以下)差异显著',
            en: 'Global bond market exceeds $130T, US Treasuries the largest segment. Bond issuance requires credit ratings; IG (BBB- and above) vs HY (BB+ and below)'
        }
    },
    {
        id: 'market-private-placement',
        name: { zh: '私募发行', en: 'Private Placement' },
        description: {
            zh: '向特定投资者非公开发行证券，如定向增发、私募债',
            en: 'Non-public securities offering to selected investors'
        },
        domain: 'markets', category: 'primary-private', icon: '🔒',
        tags: ['private-placement', '定增', '私募'],
        level: 2, parentId: 'market-primary',
        details: {
            zh: '私募优势：发行成本低、披露要求少、灵活性高。缺点：流动性差。美国Reg D(私募豁免)每年融资规模超2万亿美元',
            en: 'Private placement benefits: lower costs, less disclosure, flexible. Drawback: illiquid. US Reg D (private exemption) enables $2T+ annual fundraising'
        }
    },

    // === 二级市场 (Secondary Market) - 证券交易市场 ===
    {
        // 华尔街说明: 二级市场提供流动性，使投资者能随时买卖，这是一级市场能正常运作的前提
        id: 'market-secondary',
        name: { zh: '二级市场', en: 'Secondary Market' },
        description: {
            zh: '已发行证券进行交易的市场。投资者之间买卖证券，资金不流向发行企业。',
            en: 'Market where previously issued securities are traded between investors. Funds do not go to the issuing company.'
        },
        domain: 'markets', category: 'fundamental', icon: '🔄',
        tags: ['secondary', 'trading', '交易'],
        level: 1,
        details: {
            zh: '二级市场的流动性是一级市场能正常运作的前提。没有流动性，投资者不会愿意认购新发证券',
            en: 'Secondary market liquidity is prerequisite for primary market functioning. Without liquidity, investors won\'t subscribe to new issues'
        }
    },

    // === 股票市场 (属于二级市场) ===
    {
        // 华尔街说明: 全球股市总市值超100万亿美元，美股占比超40%
        id: 'market-equity',
        name: { zh: '股票市场', en: 'Equity Markets' },
        description: {
            zh: '股票交易的市场，全球股市总市值超100万亿美元，美国股市占比约40%',
            en: 'Markets for trading equity securities; global market cap exceeds $100 trillion, US markets account for ~40%'
        },
        domain: 'markets', category: 'secondary-equity', icon: '📈',
        tags: ['stock', 'equity', 'nyse', 'nasdaq'],
        level: 2, parentId: 'market-secondary',
        details: {
            zh: '全球前三大股票交易所：NYSE($25T+市值)、NASDAQ($21T+)、上交所/深交所(A股$10T+)。交易时段差异让全球股市24小时联动',
            en: 'Top 3 exchanges: NYSE ($25T+ cap), NASDAQ ($21T+), Shanghai/Shenzhen ($10T+). Time zone differences enable 24-hour global trading'
        }
    },
    {
        id: 'market-equity-main',
        name: { zh: '主板市场', en: 'Main Board' },
        description: { zh: '大型成熟企业上市交易的市场', en: 'Market for large established companies' },
        domain: 'markets', category: 'equity', icon: '🏢',
        tags: ['main-board', 'blue-chip'],
        level: 3, parentId: 'market-equity'
    },
    {
        id: 'market-equity-gem',
        name: { zh: '创业板/GEM', en: 'Growth Enterprise Market' },
        description: { zh: '成长型企业上市的市场', en: 'Market for growth enterprises' },
        domain: 'markets', category: 'equity', icon: '🚀',
        tags: ['gem', 'growth'],
        level: 3, parentId: 'market-equity'
    },
    {
        id: 'market-equity-star',
        name: { zh: '科创板', en: 'STAR Market' },
        description: { zh: '科技创新企业的资本市场', en: 'Market for tech innovation companies' },
        domain: 'markets', category: 'equity', icon: '⭐',
        tags: ['star', 'tech', 'innovation'],
        level: 3, parentId: 'market-equity'
    },
    {
        id: 'market-otc',
        name: { zh: '场外市场/OTC', en: 'OTC Markets' },
        description: { zh: '非交易所的分散交易市场', en: 'Over-the-counter decentralized markets' },
        domain: 'markets', category: 'equity', icon: '🔗',
        tags: ['otc', 'off-exchange'],
        level: 3, parentId: 'market-equity'
    },

    // === 债券市场 (属于二级市场) ===
    {
        // 华尔街说明: 债券市场规模远超股票市场，但流动性较差
        id: 'market-bond',
        name: { zh: '债券市场', en: 'Bond Markets' },
        description: {
            zh: '债券交易的市场，全球规模超130万亿美元，远超股票市场',
            en: 'Markets for trading debt securities; global size exceeds $130 trillion, larger than equity markets'
        },
        domain: 'markets', category: 'secondary-bond', icon: '📜',
        tags: ['bond', 'debt', 'fixed-income'],
        level: 2, parentId: 'market-secondary',
        details: {
            zh: '债券市场特点：以OTC交易为主、流动性低于股票、机构投资者为主。中国银行间债市规模远超交易所债市',
            en: 'Bond market characteristics: primarily OTC, less liquid than equities, dominated by institutional investors'
        }
    },
    {
        id: 'market-bond-gov',
        name: { zh: '国债市场', en: 'Government Bond Market' },
        description: { zh: '政府债券交易市场', en: 'Market for government debt securities' },
        domain: 'markets', category: 'bond', icon: '🏛️',
        tags: ['treasury', 'sovereign'],
        level: 3, parentId: 'market-bond'
    },
    {
        id: 'market-bond-corp',
        name: { zh: '企业债市场', en: 'Corporate Bond Market' },
        description: { zh: '企业债券交易市场', en: 'Market for corporate debt' },
        domain: 'markets', category: 'bond', icon: '🏭',
        tags: ['corporate', 'credit'],
        level: 3, parentId: 'market-bond'
    },
    {
        id: 'market-bond-muni',
        name: { zh: '地方债市场', en: 'Municipal Bond Market' },
        description: { zh: '地方政府债券市场', en: 'Market for municipal bonds' },
        domain: 'markets', category: 'bond', icon: '🏙️',
        tags: ['municipal', 'local-gov'],
        level: 3, parentId: 'market-bond'
    },

    // === 外汇市场 ===
    {
        id: 'market-forex',
        name: { zh: '外汇市场', en: 'Forex Markets' },
        description: { zh: '全球货币兑换市场', en: 'Global currency exchange market' },
        domain: 'markets', category: 'primary', icon: '💱',
        tags: ['forex', 'fx', 'currency'],
        level: 1
    },
    {
        id: 'market-forex-spot',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: '即时交割的外汇交易', en: 'Immediate delivery forex transactions' },
        domain: 'markets', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate'],
        level: 2, parentId: 'market-forex'
    },
    {
        id: 'market-forex-forward',
        name: { zh: '远期外汇', en: 'Forward Forex' },
        description: { zh: '约定未来交割的外汇交易', en: 'Future delivery forex contracts' },
        domain: 'markets', category: 'forex', icon: '📅',
        tags: ['forward', 'future'],
        level: 2, parentId: 'market-forex'
    },

    // === 货币市场 ===
    {
        id: 'market-money',
        name: { zh: '货币市场', en: 'Money Markets' },
        description: { zh: '短期资金借贷市场', en: 'Short-term lending markets' },
        domain: 'markets', category: 'primary', icon: '💵',
        tags: ['money-market', 'short-term'],
        level: 1
    },
    {
        id: 'market-interbank',
        name: { zh: '同业拆借市场', en: 'Interbank Market' },
        description: { zh: '银行间短期资金借贷', en: 'Bank-to-bank short-term lending' },
        domain: 'markets', category: 'money', icon: '🏦',
        tags: ['interbank', 'libor', 'shibor'],
        level: 2, parentId: 'market-money'
    },
    {
        id: 'market-repo',
        name: { zh: '回购市场', en: 'Repo Market' },
        description: { zh: '证券回购协议市场', en: 'Repurchase agreement market' },
        domain: 'markets', category: 'money', icon: '🔄',
        tags: ['repo', 'reverse-repo'],
        level: 2, parentId: 'market-money'
    },

    // === 衍生品市场 ===
    {
        id: 'market-derivatives',
        name: { zh: '衍生品市场', en: 'Derivatives Markets' },
        description: { zh: '金融衍生工具交易市场', en: 'Markets for derivative instruments' },
        domain: 'markets', category: 'primary', icon: '🎯',
        tags: ['derivatives'],
        level: 1
    },
    {
        id: 'market-futures',
        name: { zh: '期货市场', en: 'Futures Markets' },
        description: { zh: '标准化期货合约交易', en: 'Standardized futures trading' },
        domain: 'markets', category: 'derivatives', icon: '📊',
        tags: ['futures', 'commodities'],
        level: 2, parentId: 'market-derivatives'
    },
    {
        id: 'market-options',
        name: { zh: '期权市场', en: 'Options Markets' },
        description: { zh: '期权合约交易市场', en: 'Options contracts trading' },
        domain: 'markets', category: 'derivatives', icon: '🎲',
        tags: ['options', 'calls', 'puts'],
        level: 2, parentId: 'market-derivatives'
    },
    {
        id: 'market-swaps',
        name: { zh: '互换市场', en: 'Swaps Markets' },
        description: { zh: '利率、货币互换交易', en: 'Interest rate and currency swaps' },
        domain: 'markets', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds'],
        level: 2, parentId: 'market-derivatives'
    },
    {
        id: 'market-structured',
        name: { zh: '结构化产品市场', en: 'Structured Products Market' },
        description: { zh: '结构化衍生品和收益凭证的发行与交易市场', en: 'Market for structured derivatives and income certificates' },
        domain: 'markets', category: 'derivatives', icon: '🧩',
        tags: ['structured', 'autocallable', 'certificates'],
        level: 2, parentId: 'market-derivatives'
    },
    {
        id: 'market-otc-derivatives',
        name: { zh: '场外衍生品市场', en: 'OTC Derivatives Market' },
        description: { zh: '非交易所的定制化衍生品交易市场', en: 'Over-the-counter customized derivatives trading' },
        domain: 'markets', category: 'derivatives', icon: '🤝',
        tags: ['otc', 'bespoke', 'bilateral'],
        level: 2, parentId: 'market-derivatives'
    },

    // === 商品市场 ===
    {
        id: 'market-commodities',
        name: { zh: '大宗商品市场', en: 'Commodities Markets' },
        description: { zh: '实物商品交易市场', en: 'Physical commodities trading' },
        domain: 'markets', category: 'primary', icon: '🛢️',
        tags: ['commodities'],
        level: 1
    },
    {
        id: 'market-precious-metals',
        name: { zh: '贵金属市场', en: 'Precious Metals' },
        description: { zh: '黄金、白银等贵金属交易', en: 'Gold, silver trading' },
        domain: 'markets', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum'],
        level: 2, parentId: 'market-commodities'
    },
    {
        id: 'market-energy',
        name: { zh: '能源市场', en: 'Energy Markets' },
        description: { zh: '石油、天然气等能源交易', en: 'Oil, natural gas trading' },
        domain: 'markets', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy'],
        level: 2, parentId: 'market-commodities'
    },

    // === 加密货币市场 ===
    {
        id: 'market-crypto',
        name: { zh: '加密货币市场', en: 'Cryptocurrency Markets' },
        description: { zh: '数字资产交易市场', en: 'Digital asset trading' },
        domain: 'markets', category: 'emerging', icon: '₿',
        tags: ['crypto', 'bitcoin', 'blockchain'],
        level: 1
    },
    {
        id: 'market-defi',
        name: { zh: 'DeFi市场', en: 'DeFi Markets' },
        description: { zh: '去中心化金融协议', en: 'Decentralized finance protocols' },
        domain: 'markets', category: 'crypto', icon: '🔗',
        tags: ['defi', 'dex', 'yield'],
        level: 2, parentId: 'market-crypto'
    },

    // === 主要股票指数 ===
    {
        id: 'market-index-sp500',
        name: { zh: '标普500', en: 'S&P 500' },
        description: { zh: '美国500家大型上市公司指数，全球最重要的股市基准', en: 'Index of 500 large US companies, most important global equity benchmark' },
        domain: 'markets', category: 'index', icon: '🇺🇸',
        tags: ['sp500', 'usa', 'benchmark'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-djia',
        name: { zh: '道琼斯工业指数', en: 'Dow Jones Industrial Average' },
        description: { zh: '美国30家蓝筹股价格加权指数', en: 'Price-weighted index of 30 US blue-chip stocks' },
        domain: 'markets', category: 'index', icon: '🏭',
        tags: ['djia', 'dow', 'blue-chip'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-nasdaq',
        name: { zh: '纳斯达克综合指数', en: 'NASDAQ Composite' },
        description: { zh: '纳斯达克交易所全部上市公司综合指数', en: 'Index of all NASDAQ listed companies' },
        domain: 'markets', category: 'index', icon: '💻',
        tags: ['nasdaq', 'tech', 'composite'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-csi300',
        name: { zh: '沪深300', en: 'CSI 300' },
        description: { zh: '沪深两市300只大盘股指数，A股核心基准', en: 'Index of 300 large-cap A-shares, core China equity benchmark' },
        domain: 'markets', category: 'index', icon: '🇨🇳',
        tags: ['csi300', 'china', 'a-share'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-csi500',
        name: { zh: '中证500', en: 'CSI 500' },
        description: { zh: '沪深两市500只中盘股指数', en: 'Index of 500 mid-cap A-shares' },
        domain: 'markets', category: 'index', icon: '🇨🇳',
        tags: ['csi500', 'china', 'mid-cap'],
        level: 2, parentId: 'market-equity'
    },
    {
        // 华尔街说明: 中证1000是雪球产品最常挂钩的标的之一，小盘股波动大，票息高
        id: 'market-index-csi1000',
        name: { zh: '中证1000', en: 'CSI 1000' },
        description: {
            zh: '沪深两市1000只小盘股指数，雪球产品最常挂钩标的，波动大票息高',
            en: 'Index of 1000 small-cap A-shares, commonly linked to snowball products due to high volatility'
        },
        domain: 'markets', category: 'index', icon: '🇨🇳',
        tags: ['csi1000', 'china', 'small-cap', 'snowball'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-hsi',
        name: { zh: '恒生指数', en: 'Hang Seng Index' },
        description: { zh: '香港50只大型股票指数', en: 'Index of 50 largest Hong Kong stocks' },
        domain: 'markets', category: 'index', icon: '🇭🇰',
        tags: ['hsi', 'hong-kong', 'blue-chip'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-nikkei',
        name: { zh: '日经225', en: 'Nikkei 225' },
        description: { zh: '东京证交所225只大型股票指数', en: 'Index of 225 largest Tokyo Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇯🇵',
        tags: ['nikkei', 'japan', 'tse'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-ftse100',
        name: { zh: '富时100', en: 'FTSE 100' },
        description: { zh: '伦敦证交所100只大型股票指数', en: 'Index of 100 largest London Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇬🇧',
        tags: ['ftse', 'uk', 'lse'],
        level: 2, parentId: 'market-equity'
    },
    {
        id: 'market-index-vix',
        name: { zh: 'VIX恐慌指数', en: 'VIX Volatility Index' },
        description: { zh: '标普500期权隐含波动率指数，衡量市场恐慌程度', en: 'S&P 500 implied volatility index, measures market fear' },
        domain: 'markets', category: 'index', icon: '📉',
        tags: ['vix', 'volatility', 'fear-index'],
        level: 2, parentId: 'market-derivatives'
    }
];

// 金融市场内部关系
export const marketRelationships: Relationship[] = [
    // === 一级/二级市场结构关系 ===
    // 一级市场层级
    { id: 'mr-p1', source: 'market-primary', target: 'market-ipo', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-p2', source: 'market-primary', target: 'market-bond-issuance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-p3', source: 'market-primary', target: 'market-private-placement', type: 'provides', strength: 3, bidirectional: false },

    // 二级市场层级
    { id: 'mr-s1', source: 'market-secondary', target: 'market-equity', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-s2', source: 'market-secondary', target: 'market-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-s3', source: 'market-secondary', target: 'market-forex', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-s4', source: 'market-secondary', target: 'market-derivatives', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mr-s5', source: 'market-secondary', target: 'market-commodities', type: 'provides', strength: 3, bidirectional: false },

    // 一级→二级市场流动关系（发行后进入交易）
    {
        id: 'mr-flow1', source: 'market-ipo', target: 'market-equity', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: 'IPO发行的股票进入二级市场交易', en: 'IPO stocks enter secondary market for trading' }
    },
    {
        id: 'mr-flow2', source: 'market-bond-issuance', target: 'market-bond', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: '发行的债券进入二级市场交易', en: 'Issued bonds enter secondary market for trading' }
    },

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
    { id: 'mr-35', source: 'market-index-sp500', target: 'market-index-nikkei', type: 'influences', strength: 2, bidirectional: false },

    // === 深度审查修复：补充中证1000层级关系 ===
    { id: 'mr-36', source: 'market-equity', target: 'market-index-csi1000', type: 'provides', strength: 3, bidirectional: false }
];
