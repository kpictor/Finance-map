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
        level: 3, parentId: 'market-equity',
        details: {
            zh: '上市门槛最高，要求盈利历史/规模/治理。A股主板包括沪主板+深主板',
            en: 'Highest listing bar, requires profitability/scale/governance. A-share main board includes SSE and SZSE main boards'
        }
    },
    {
        id: 'market-equity-gem',
        name: { zh: '创业板/GEM', en: 'Growth Enterprise Market' },
        description: { zh: '成长型企业上市的市场', en: 'Market for growth enterprises' },
        domain: 'markets', category: 'equity', icon: '🚀',
        tags: ['gem', 'growth'],
        level: 3, parentId: 'market-equity',
        details: {
            zh: '深交所创业板2009年设立，注册制改革后门槛降低。宁德时代等明星企业这里起步',
            en: 'SZSE Growth Enterprise Market launched 2009. Listing bar lowered after registration reform. CATL and other stars started here'
        }
    },
    {
        id: 'market-equity-star',
        name: { zh: '科创板', en: 'STAR Market' },
        description: { zh: '科技创新企业的资本市场', en: 'Market for tech innovation companies' },
        domain: 'markets', category: 'equity', icon: '⭐',
        tags: ['star', 'tech', 'innovation'],
        level: 3, parentId: 'market-equity',
        details: {
            zh: '2019年设立，中国注册制试点。允许未盈利企业上市。中芯国际等半导体企业标杆',
            en: '2019 launch, China\'s registration system pilot. Allows pre-profit companies. SMIC and semiconductor firms are flagship'
        }
    },
    {
        id: 'market-otc',
        name: { zh: '场外市场/OTC', en: 'OTC Markets' },
        description: { zh: '非交易所的分散交易市场', en: 'Over-the-counter decentralized markets' },
        domain: 'markets', category: 'equity', icon: '🔗',
        tags: ['otc', 'off-exchange'],
        level: 3, parentId: 'market-equity',
        details: {
            zh: '美国OTC Markets分三层:OTCQX(最优)/OTCQB(创业)/Pink(风险)。中国新三板即北交所前身',
            en: 'US OTC Markets 3 tiers: OTCQX (best)/OTCQB (venture)/Pink (risky). China\'s New Third Board reformed into BSE'
        }
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
        level: 3, parentId: 'market-bond',
        details: {
            zh: '美国国债市场是全球最大单一债券市场($25T+)。中国国债主要在银行间市场交易',
            en: 'US Treasury market is largest single bond market ($25T+). China gov bonds trade mainly in interbank market'
        }
    },
    {
        id: 'market-bond-corp',
        name: { zh: '企业债市场', en: 'Corporate Bond Market' },
        description: { zh: '企业债券交易市场', en: 'Market for corporate debt' },
        domain: 'markets', category: 'bond', icon: '🏭',
        tags: ['corporate', 'credit'],
        level: 3, parentId: 'market-bond',
        details: {
            zh: '企业债由证监会监管，公司债由交易所审核。美国企业债以OTC交易为主',
            en: 'Enterprise bonds regulated by CSRC, corporate bonds by exchanges. US corporate bonds trade mainly OTC'
        }
    },
    {
        id: 'market-bond-muni',
        name: { zh: '地方债市场', en: 'Municipal Bond Market' },
        description: { zh: '地方政府债券市场', en: 'Market for municipal bonds' },
        domain: 'markets', category: 'bond', icon: '🏙️',
        tags: ['municipal', 'local-gov'],
        level: 3, parentId: 'market-bond',
        details: {
            zh: '中国地方政府债2015年后大规模发行，置换城投债。美国市政债享有税收优惠',
            en: 'China local gov bonds surged after 2015, replacing LGFV debt. US munis enjoy tax advantages'
        }
    },

    // === 外汇市场 ===
    {
        id: 'market-forex',
        name: { zh: '外汇市场', en: 'Forex Markets' },
        description: { zh: '全球货币兑换市场', en: 'Global currency exchange market' },
        domain: 'markets', category: 'primary', icon: '💱',
        tags: ['forex', 'fx', 'currency'],
        level: 1,
        details: {
            zh: '全球最大金融市场，日交易量$7.5万亿。主要货币对:EUR/USD、USD/JPY、GBP/USD',
            en: 'World\'s largest market, $7.5T daily volume. Major pairs: EUR/USD, USD/JPY, GBP/USD'
        }
    },
    {
        id: 'market-forex-spot',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: '即时交割的外汇交易', en: 'Immediate delivery forex transactions' },
        domain: 'markets', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate'],
        level: 2, parentId: 'market-forex',
        details: {
            zh: 'T+2交割。即期汇率反映市场对两种货币的即时估值',
            en: 'T+2 settlement. Spot rate reflects market\'s immediate valuation of two currencies'
        }
    },
    {
        id: 'market-forex-forward',
        name: { zh: '远期外汇', en: 'Forward Forex' },
        description: { zh: '约定未来交割的外汇交易', en: 'Future delivery forex contracts' },
        domain: 'markets', category: 'forex', icon: '📅',
        tags: ['forward', 'future'],
        level: 2, parentId: 'market-forex',
        details: {
            zh: '用于对冲汇率风险。历史最有名梦幻交易:1992年索罗斯狙击英镑',
            en: 'Used to hedge FX risk. Most famous trade: Soros shorting GBP in 1992'
        }
    },

    // === 货币市场 ===
    {
        id: 'market-money',
        name: { zh: '货币市场', en: 'Money Markets' },
        description: { zh: '短期资金借贷市场', en: 'Short-term lending markets' },
        domain: 'markets', category: 'primary', icon: '💵',
        tags: ['money-market', 'short-term'],
        level: 1,
        details: {
            zh: '期限通常不超过1年。主要工具:国库券、商业票据(CP)、大额存单(CD)',
            en: 'Maturities typically under 1 year. Main instruments: T-bills, Commercial Paper (CP), Certificates of Deposit (CD)'
        }
    },
    {
        id: 'market-interbank',
        name: { zh: '同业拆借市场', en: 'Interbank Market' },
        description: { zh: '银行间短期资金借贷', en: 'Bank-to-bank short-term lending' },
        domain: 'markets', category: 'money', icon: '🏦',
        tags: ['interbank', 'libor', 'shibor'],
        level: 2, parentId: 'market-money',
        details: {
            zh: 'LIBOR因操纵丑闻被废弃，改用SOFR。中国SHIBOR是市场短期利率基准',
            en: 'LIBOR replaced by SOFR after manipulation scandal. China uses SHIBOR as short-term rate benchmark'
        }
    },
    {
        id: 'market-repo',
        name: { zh: '回购市场', en: 'Repo Market' },
        description: { zh: '证券回购协议市场', en: 'Repurchase agreement market' },
        domain: 'markets', category: 'money', icon: '🔄',
        tags: ['repo', 'reverse-repo'],
        level: 2, parentId: 'market-money',
        details: {
            zh: '回购是以证券为抵押的短期借贷。2019年美国回购市场危机导致美联储紧急注资',
            en: 'Repo is short-term borrowing with securities as collateral. 2019 US repo crisis led to Fed emergency intervention'
        }
    },

    // === 衍生品市场 ===
    {
        id: 'market-derivatives',
        name: { zh: '衍生品市场', en: 'Derivatives Markets' },
        description: { zh: '金融衍生工具交易市场', en: 'Markets for derivative instruments' },
        domain: 'markets', category: 'primary', icon: '🎯',
        tags: ['derivatives'],
        level: 1,
        details: {
            zh: '全球衍生品名义本金超$600万亿。交易所交易+OTC交易，OTC规模更大',
            en: 'Global derivatives notional exceeds $600 trillion. Exchange-traded + OTC, OTC is larger segment'
        }
    },
    {
        id: 'market-futures',
        name: { zh: '期货市场', en: 'Futures Markets' },
        description: { zh: '标准化期货合约交易', en: 'Standardized futures trading' },
        domain: 'markets', category: 'derivatives', icon: '📊',
        tags: ['futures', 'commodities'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: '中国四大期货交易所:上期所/大商所/郑商所/中金所。美国CME全球最大',
            en: 'China\'s 4 futures exchanges: SHFE/DCE/ZCE/CFFEX. US CME is world largest'
        }
    },
    {
        id: 'market-options',
        name: { zh: '期权市场', en: 'Options Markets' },
        description: { zh: '期权合约交易市场', en: 'Options contracts trading' },
        domain: 'markets', category: 'derivatives', icon: '🎲',
        tags: ['options', 'calls', 'puts'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: 'CBOE是期权发源地(1973)。中地在A股期权开放后快速成长，50ETF/300ETF期权最活跃',
            en: 'CBOE is options birthplace (1973). China options grew rapidly after opening; 50ETF/300ETF options most active'
        }
    },
    {
        id: 'market-swaps',
        name: { zh: '互换市场', en: 'Swaps Markets' },
        description: { zh: '利率、货币互换交易', en: 'Interest rate and currency swaps' },
        domain: 'markets', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: '利率互换(IRS)名义本金$400万亿+，是规模最大的衍生品。CDS是2008危机导火索',
            en: 'Interest Rate Swaps (IRS) $400T+ notional, largest derivatives. CDS was 2008 crisis trigger'
        }
    },
    {
        id: 'market-structured',
        name: { zh: '结构化产品市场', en: 'Structured Products Market' },
        description: { zh: '结构化衍生品和收益凭证的发行与交易市场', en: 'Market for structured derivatives and income certificates' },
        domain: 'markets', category: 'derivatives', icon: '🧩',
        tags: ['structured', 'autocallable', 'certificates'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: '中国雪球产品规模曾达万亿，2022年集中敲入事件引发关注',
            en: 'China snowball products peaked at $1T+, 2022 knock-in events raised concerns'
        }
    },
    {
        id: 'market-otc-derivatives',
        name: { zh: '场外衍生品市场', en: 'OTC Derivatives Market' },
        description: { zh: '非交易所的定制化衍生品交易市场', en: 'Over-the-counter customized derivatives trading' },
        domain: 'markets', category: 'derivatives', icon: '🤝',
        tags: ['otc', 'bespoke', 'bilateral'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: 'OTC衍生品规模远超交易所，但违约风险更高。后危机时代强制集中清算',
            en: 'OTC derivatives dwarf exchange-traded but higher default risk. Post-crisis regulations mandate central clearing'
        }
    },

    // === 商品市场 ===
    {
        id: 'market-commodities',
        name: { zh: '大宗商品市场', en: 'Commodities Markets' },
        description: { zh: '实物商品交易市场', en: 'Physical commodities trading' },
        domain: 'markets', category: 'primary', icon: '🛢️',
        tags: ['commodities'],
        level: 1,
        details: {
            zh: '大宗商品分为能源/金属/农产品三大类。石油是最重要的大宗商品',
            en: 'Commodities: energy/metals/agriculture. Oil is the most important commodity'
        }
    },
    {
        id: 'market-precious-metals',
        name: { zh: '贵金属市场', en: 'Precious Metals' },
        description: { zh: '黄金、白银等贵金属交易', en: 'Gold, silver trading' },
        domain: 'markets', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum'],
        level: 2, parentId: 'market-commodities',
        details: {
            zh: '黄金是“避险资产”，COMEX黄金期货是全球基准。中国上海黄金交易所是亚洲最大',
            en: 'Gold is "safe haven asset". COMEX gold futures are global benchmark. Shanghai Gold Exchange is Asia\'s largest'
        }
    },
    {
        id: 'market-energy',
        name: { zh: '能源市场', en: 'Energy Markets' },
        description: { zh: '石油、天然气等能源交易', en: 'Oil, natural gas trading' },
        domain: 'markets', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy'],
        level: 2, parentId: 'market-commodities',
        details: {
            zh: 'WTI(美国)和布伦特(欧洲)是两大原油基准。上海原油期货(人民币计价)2018年上市',
            en: 'WTI (US) and Brent (Europe) are two major crude benchmarks. Shanghai oil futures (RMB-priced) launched 2018'
        }
    },

    // === 加密货币市场 ===
    {
        id: 'market-crypto',
        name: { zh: '加密货币市场', en: 'Cryptocurrency Markets' },
        description: { zh: '数字资产交易市场', en: 'Digital asset trading' },
        domain: 'markets', category: 'emerging', icon: '₿',
        tags: ['crypto', 'bitcoin', 'blockchain'],
        level: 1,
        details: {
            zh: 'BTC市值最高达$1.3万亿。2024年现货BTC ETF获批，加密货币主流化重要一步',
            en: 'BTC market cap peaked at $1.3T. 2024 spot BTC ETF approval was major mainstreaming step'
        }
    },
    {
        id: 'market-defi',
        name: { zh: 'DeFi市场', en: 'DeFi Markets' },
        description: { zh: '去中心化金融协议', en: 'Decentralized finance protocols' },
        domain: 'markets', category: 'crypto', icon: '🔗',
        tags: ['defi', 'dex', 'yield'],
        level: 2, parentId: 'market-crypto',
        details: {
            zh: 'DeFi总锁定价值(TVL)最高达$180B。主要协议:Uniswap/Aave/Compound/MakerDAO',
            en: 'DeFi TVL peaked at $180B. Key protocols: Uniswap/Aave/Compound/MakerDAO'
        }
    },

    // === 主要股票指数 ===
    {
        id: 'market-index-sp500',
        name: { zh: '标普500', en: 'S&P 500' },
        description: { zh: '美国500家大型上市公司指数，全球最重要的股市基准', en: 'Index of 500 large US companies, most important global equity benchmark' },
        domain: 'markets', category: 'index', icon: '🇺🇸',
        tags: ['sp500', 'usa', 'benchmark'],
        level: 2, parentId: 'market-equity',
        details: {
            zh: 'SPY是全球最大ETF($500B+)。标普500医疗/金融/IT占比最高',
            en: 'SPY is world\'s largest ETF ($500B+). S&P 500 healthcare/financials/IT have highest weightings'
        }
    },
    {
        id: 'market-index-djia',
        name: { zh: '道琼斯工业指数', en: 'Dow Jones Industrial Average' },
        description: { zh: '美国30家蓝筹股价格加权指数', en: 'Price-weighted index of 30 US blue-chip stocks' },
        domain: 'markets', category: 'index', icon: '🏭',
        tags: ['djia', 'dow', 'blue-chip'],
        level: 2, parentId: 'market-equity',
        details: {
            zh: '1896年创建，历史最悠久的股指。价格加权而非市值加权，主流度不如标普500',
            en: 'Created 1896, oldest major stock index. Price-weighted not cap-weighted, less mainstream than S&P 500'
        }
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
        level: 2, parentId: 'market-equity',
        details: {
            zh: '剥离沪深300后的中定股，成长性较强但波动也大',
            en: 'Mid-caps after excluding CSI300, higher growth but more volatile'
        }
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
        level: 2, parentId: 'market-equity',
        details: {
            zh: '恒生科技指数包含中概科技股。北水南下通过港股通流入',
            en: 'Hang Seng Tech includes Chinese tech. Northbound flows via Stock Connect'
        }
    },
    {
        id: 'market-index-nikkei',
        name: { zh: '日经225', en: 'Nikkei 225' },
        description: { zh: '东京证交所225只大型股票指数', en: 'Index of 225 largest Tokyo Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇯🇵',
        tags: ['nikkei', 'japan', 'tse'],
        level: 2, parentId: 'market-equity',
        details: {
            zh: '日经在1989年达到历史高点38915点，"失开的三十年"后2024年终于突破',
            en: 'Nikkei hit all-time high 38915 in 1989. Finally broke through in 2024 after "lost 30 years"'
        }
    },
    {
        id: 'market-index-ftse100',
        name: { zh: '富时100', en: 'FTSE 100' },
        description: { zh: '伦敦证交所100只大型股票指数', en: 'Index of 100 largest London Stock Exchange stocks' },
        domain: 'markets', category: 'index', icon: '🇬🇧',
        tags: ['ftse', 'uk', 'lse'],
        level: 2, parentId: 'market-equity',
        details: {
            zh: '"富时"读作"Footsie"。能源/金融/健康行业权重较高',
            en: '"Footsie" pronunciation. Energy/financials/healthcare have high weightings'
        }
    },
    {
        id: 'market-index-vix',
        name: { zh: 'VIX恐慌指数', en: 'VIX Volatility Index' },
        description: { zh: '标普500期权隐含波动率指数，衡量市场恐慌程度', en: 'S&P 500 implied volatility index, measures market fear' },
        domain: 'markets', category: 'index', icon: '📉',
        tags: ['vix', 'volatility', 'fear-index'],
        level: 2, parentId: 'market-derivatives',
        details: {
            zh: 'VIX<20表示市场平静，>30表示恐慌。可通过VXX/UVXY等交易，但长期腐蚀严重',
            en: 'VIX<20 = calm, >30 = fear. Tradable via VXX/UVXY, but severe long-term decay'
        }
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
