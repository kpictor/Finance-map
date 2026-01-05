import type { Relationship } from '../types';

// 跨领域关系 - 连接不同领域之间的实体（含解释）
export const crossDomainRelationships: Relationship[] = [
    // === 中央银行相关 ===
    {
        id: 'cd-1', source: 'inst-central-bank', target: 'market-money', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '中央银行通过公开市场操作、准备金要求等工具直接调控货币市场的流动性和利率水平',
            en: 'Central banks directly regulate money market liquidity and interest rates through open market operations and reserve requirements'
        }
    },
    {
        id: 'cd-2', source: 'inst-central-bank', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '中央银行通过外汇储备管理和汇率政策影响外汇市场，必要时进行外汇干预',
            en: 'Central banks influence forex markets through foreign reserve management and exchange rate policies, intervening when necessary'
        }
    },
    {
        id: 'cd-3', source: 'inst-pboc', target: 'market-interbank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '中国人民银行制定同业拆借利率指导（如SHIBOR），监管银行间市场交易行为',
            en: 'PBOC sets interbank lending rate guidance (e.g., SHIBOR) and supervises interbank market transactions'
        }
    },
    {
        id: 'cd-4', source: 'inst-fed', target: 'macro-interest-rate', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '美联储通过FOMC会议决定联邦基金利率目标，这是全球最重要的基准利率之一',
            en: 'The Fed determines the federal funds rate target through FOMC meetings, one of the most important global benchmark rates'
        }
    },

    // === 商业银行相关 ===
    {
        id: 'cd-5', source: 'inst-commercial-bank', target: 'market-money', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '商业银行是货币市场的核心参与者，通过同业拆借和回购交易管理日常流动性',
            en: 'Commercial banks are core money market participants, managing daily liquidity through interbank lending and repo transactions'
        }
    },
    {
        id: 'cd-6', source: 'inst-commercial-bank', target: 'market-bond', type: 'trades', strength: 2, bidirectional: true,
        explanation: {
            zh: '商业银行持有大量债券作为流动性储备和投资收益来源',
            en: 'Commercial banks hold substantial bonds as liquidity reserves and investment income sources'
        }
    },
    {
        id: 'cd-7', source: 'inst-commercial-bank', target: 'market-forex', type: 'trades', strength: 2, bidirectional: true,
        explanation: {
            zh: '商业银行为客户提供外汇兑换服务，同时进行自营外汇交易和风险对冲',
            en: 'Commercial banks provide forex services to clients while conducting proprietary trading and hedging'
        }
    },
    {
        id: 'cd-8', source: 'inst-commercial-bank', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '国债是银行最安全的资产配置选择，用于满足流动性覆盖率(LCR)等监管要求',
            en: 'Government bonds are banks\' safest asset allocation, meeting regulatory requirements like Liquidity Coverage Ratio (LCR)'
        }
    },

    // === 投资银行相关 ===
    {
        id: 'cd-9', source: 'inst-investment-bank', target: 'market-equity', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '投资银行是股票市场的做市商和主要交易商，提供流动性并促进价格发现',
            en: 'Investment banks are market makers and principal traders in equity markets, providing liquidity and facilitating price discovery'
        }
    },
    {
        id: 'cd-10', source: 'inst-investment-bank', target: 'market-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '投资银行是债券一级市场的承销商和二级市场的主要交易商',
            en: 'Investment banks are underwriters in primary bond markets and principal dealers in secondary markets'
        }
    },
    {
        id: 'cd-11', source: 'inst-investment-bank', target: 'instr-stock', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '投资银行帮助企业进行IPO和增发，负责定价、路演和配售等承销工作',
            en: 'Investment banks help companies with IPOs and follow-on offerings, handling pricing, roadshows, and allocation'
        }
    },
    {
        id: 'cd-12', source: 'inst-investment-bank', target: 'instr-corp-bond', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '投资银行为企业设计债券结构、确定发行条款并向投资者销售',
            en: 'Investment banks design bond structures, determine issuance terms, and distribute to investors for corporations'
        }
    },

    // === 基金公司相关 ===
    {
        id: 'cd-16', source: 'inst-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '基金公司代表投资者进行专业化股票投资，是股票市场最大的机构投资者群体之一',
            en: 'Fund companies make professional stock investments on behalf of investors, among the largest institutional investor groups'
        }
    },
    {
        id: 'cd-17', source: 'inst-fund', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '债券基金是固定收益市场的重要买方力量，帮助投资者分散信用风险',
            en: 'Bond funds are significant buyers in fixed income markets, helping investors diversify credit risk'
        }
    },
    {
        id: 'cd-18', source: 'inst-fund', target: 'instr-etf', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '基金公司创建和管理ETF产品，通过授权参与者机制维持ETF价格与净值的一致性',
            en: 'Fund companies create and manage ETF products, maintaining price-NAV alignment through authorized participant mechanisms'
        }
    },
    {
        id: 'cd-21', source: 'inst-pension', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '养老金需要长期稳定回报以匹配未来负债，国债提供了最可靠的现金流',
            en: 'Pension funds need stable long-term returns to match future liabilities; government bonds provide the most reliable cash flows'
        }
    },

    // === 保险公司相关 ===
    {
        id: 'cd-23', source: 'inst-insurance', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '保险公司用债券投资产生的稳定收益来覆盖保单承诺的赔付义务',
            en: 'Insurance companies use stable bond income to cover policy payout obligations'
        }
    },
    {
        id: 'cd-25', source: 'inst-insurance', target: 'instr-reit', type: 'invests', strength: 2, bidirectional: false,
        explanation: {
            zh: '保险公司投资REITs以获取房地产收益同时保持流动性，比直接持有房产更灵活',
            en: 'Insurers invest in REITs for real estate exposure with liquidity, more flexible than direct property ownership'
        }
    },

    // === 监管机构相关 ===
    {
        id: 'cd-26', source: 'inst-csrc', target: 'market-equity', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '证监会负责股票发行审核、上市公司监管、打击内幕交易等，维护市场公平',
            en: 'Securities regulators handle IPO reviews, listed company supervision, and combat insider trading to maintain market fairness'
        }
    },
    {
        id: 'cd-28', source: 'inst-exchange', target: 'market-equity', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '交易所提供标准化的交易场所、撮合系统和清算服务，确保交易安全高效',
            en: 'Exchanges provide standardized trading venues, matching systems, and clearing services for safe and efficient trading'
        }
    },
    {
        id: 'cd-31', source: 'inst-rating', target: 'instr-corp-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '评级机构的信用评级直接影响债券定价和投资者购买意愿，是债券市场的"看门人"',
            en: 'Credit ratings directly affect bond pricing and investor appetite; rating agencies are the "gatekeepers" of bond markets'
        }
    },

    // === 市场与工具的关系 ===
    {
        id: 'cd-33', source: 'market-equity', target: 'instr-stock', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '股票是股票市场交易的核心标的物，市场为股票提供流动性和价格发现功能',
            en: 'Stocks are the core traded assets in equity markets; markets provide liquidity and price discovery for stocks'
        }
    },
    {
        id: 'cd-35', source: 'market-bond', target: 'instr-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '债券市场为各类债券工具提供发行和二级交易的平台',
            en: 'Bond markets provide platforms for issuance and secondary trading of various debt instruments'
        }
    },
    {
        id: 'cd-38', source: 'market-derivatives', target: 'instr-futures', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '期货合约在衍生品交易所进行标准化交易，实现风险转移和价格发现',
            en: 'Futures contracts trade on derivatives exchanges in standardized form, enabling risk transfer and price discovery'
        }
    },

    // === 宏观与市场/机构的关系 ===
    {
        id: 'cd-45', source: 'inst-central-bank', target: 'macro-monetary', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '中央银行是货币政策的制定者和执行者，通过各种政策工具调控经济',
            en: 'Central banks formulate and implement monetary policy, regulating the economy through various policy tools'
        }
    },
    {
        id: 'cd-46', source: 'macro-monetary', target: 'market-money', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '货币政策直接决定货币市场的利率水平和流动性状况',
            en: 'Monetary policy directly determines interest rate levels and liquidity conditions in money markets'
        }
    },
    {
        id: 'cd-47', source: 'macro-interest-rate', target: 'market-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '利率变动与债券价格呈反向关系：利率上升时债券价格下跌，反之亦然',
            en: 'Interest rates and bond prices move inversely: when rates rise, bond prices fall, and vice versa'
        }
    },
    {
        id: 'cd-50', source: 'macro-qe', target: 'instr-gov-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '量化宽松期间央行大规模购买国债，压低长期利率并向市场注入流动性',
            en: 'During QE, central banks buy government bonds massively, suppressing long-term rates and injecting liquidity'
        }
    },
    {
        id: 'cd-51', source: 'macro-fiscal', target: 'market-bond-gov', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '财政赤字需要通过发行国债融资，赤字规模直接影响国债市场供给',
            en: 'Fiscal deficits are financed through government bond issuance; deficit size directly affects treasury supply'
        }
    },
    {
        id: 'cd-55', source: 'macro-cpi', target: 'macro-monetary', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '通胀率是央行制定货币政策的核心参考指标，通胀目标制是现代央行的主流框架',
            en: 'Inflation is the core reference for monetary policy; inflation targeting is the mainstream framework for modern central banks'
        }
    },
    {
        id: 'cd-57', source: 'macro-cycles', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '经济周期阶段决定企业盈利预期，进而影响股票估值和市场走势',
            en: 'Economic cycle stages determine corporate earnings expectations, consequently affecting stock valuations and market trends'
        }
    },
    {
        id: 'cd-61', source: 'macro-crisis', target: 'market-equity', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '金融危机导致风险偏好急剧下降，股票市场往往首当其冲遭受抛售',
            en: 'Financial crises cause sharp risk appetite decline; equity markets are often the first to suffer selloffs'
        }
    },
    {
        id: 'cd-62', source: 'macro-crisis', target: 'inst-commercial-bank', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '银行在金融危机中面临信用损失、流动性枯竭和挤兑风险，可能需要政府救助',
            en: 'Banks face credit losses, liquidity crunch, and run risks during crises, potentially requiring government bailouts'
        }
    },

    // === 结构化产品相关 ===
    {
        id: 'cd-65', source: 'inst-investment-bank', target: 'instr-structured', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '投资银行/券商是结构化产品的主要设计者和发行方，通过对冲交易管理风险敞口',
            en: 'Investment banks/securities firms are primary designers and issuers of structured products, managing risk exposure through hedging'
        }
    },
    {
        id: 'cd-66', source: 'inst-investment-bank', target: 'instr-snowball', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '券商发行雪球产品并作为投资者的对手方，通过股指期货等工具对冲Delta风险',
            en: 'Securities firms issue snowball products as counterparties to investors, hedging Delta risk via index futures'
        }
    },
    {
        id: 'cd-67', source: 'market-structured', target: 'instr-structured', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '结构化产品市场提供雪球、凤凰、鲨鱼鳍等产品的发行和流通平台',
            en: 'Structured products market provides issuance and circulation platforms for snowball, phoenix, shark fin products'
        }
    },
    {
        id: 'cd-68', source: 'market-otc-derivatives', target: 'instr-exotic-options', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '奇异期权大多在场外市场定制交易，根据投资者需求设计个性化条款',
            en: 'Exotic options are mostly traded OTC with customized terms designed for investor-specific needs'
        }
    },
    {
        id: 'cd-69', source: 'instr-snowball', target: 'instr-index-futures', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: {
            zh: '雪球产品通常挂钩股票指数（如中证500、沪深300），标的指数表现决定敲入敲出条件',
            en: 'Snowball products typically link to stock indices (e.g., CSI 500, CSI 300), with index performance determining knock-in/out conditions'
        }
    },
    {
        id: 'cd-70', source: 'macro-volatility', target: 'instr-snowball', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '市场波动率是结构化产品定价的核心因子，高波动率环境下雪球票息更高但风险也更大',
            en: 'Market volatility is the core pricing factor for structured products; higher volatility means higher coupons but greater risk'
        }
    },
    {
        id: 'cd-71', source: 'inst-csrc', target: 'market-structured', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '证监会监管结构化产品的销售适当性、信息披露和投资者准入门槛',
            en: 'Securities regulators oversee suitability, disclosure, and investor qualification requirements for structured products'
        }
    },

    // === IBKR相关产品跨域关系 ===
    {
        id: 'cd-72', source: 'market-forex', target: 'instr-forex', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '外汇市场提供货币对的即期、远期和期权交易平台',
            en: 'Forex markets provide platforms for spot, forward, and options trading on currency pairs'
        }
    },
    {
        id: 'cd-73', source: 'market-futures', target: 'instr-vix-futures', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '期货交易所（如CBOE）提供VIX期货合约的标准化交易',
            en: 'Futures exchanges (e.g., CBOE) provide standardized trading of VIX futures contracts'
        }
    },
    {
        id: 'cd-74', source: 'market-options', target: 'instr-equity-options', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '期权交易所提供股票期权的集中交易和清算服务',
            en: 'Options exchanges provide centralized trading and clearing services for equity options'
        }
    },
    {
        id: 'cd-75', source: 'market-commodities', target: 'instr-commodity', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '商品交易所提供贵金属、能源和农产品的期货和现货交易',
            en: 'Commodity exchanges provide futures and spot trading for precious metals, energy, and agricultural products'
        }
    },
    {
        id: 'cd-76', source: 'market-crypto', target: 'instr-crypto', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '加密货币交易所提供数字资产的现货和衍生品交易',
            en: 'Cryptocurrency exchanges provide spot and derivatives trading for digital assets'
        }
    },
    {
        id: 'cd-77', source: 'inst-fund', target: 'instr-mutual-fund', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '基金公司创建和管理共同基金产品，为投资者提供专业化资产管理',
            en: 'Fund companies create and manage mutual funds, providing professional asset management for investors'
        }
    },
    {
        id: 'cd-78', source: 'inst-commercial-bank', target: 'instr-cd', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '商业银行发行大额存单作为吸收存款和提供投资收益的工具',
            en: 'Commercial banks issue certificates of deposit to attract deposits and provide investment returns'
        }
    },

    // === 宏观经济到指数的传导 ===
    {
        id: 'cd-80', source: 'macro-interest-rate', target: 'market-index-sp500', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '利率上升提高企业融资成本和折现率，压制股票估值；降息则有利于股市上涨',
            en: 'Rising rates increase borrowing costs and discount rates, suppressing valuations; rate cuts favor equity rallies'
        }
    },
    {
        id: 'cd-81', source: 'macro-cpi', target: 'market-index-sp500', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '高通胀侵蚀企业利润和消费者购买力，影响股市表现；温和通胀则有利于企业提价',
            en: 'High inflation erodes profits and consumer purchasing power; moderate inflation allows pricing power'
        }
    },
    {
        id: 'cd-82', source: 'macro-employment', target: 'market-index-sp500', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '就业数据反映经济健康程度，强劲就业推动消费和企业盈利，利好股市',
            en: 'Employment data reflects economic health; strong jobs boost consumption and earnings, benefiting stocks'
        }
    },
    {
        id: 'cd-83', source: 'macro-crisis', target: 'market-index-vix', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '金融危机期间市场恐慌情绪急剧上升，VIX指数飙升反映投资者避险需求',
            en: 'VIX spikes during crises as market panic rises, reflecting investor flight to safety'
        }
    },
    {
        id: 'cd-84', source: 'macro-recession', target: 'market-index-sp500', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '经济衰退导致企业盈利下滑，股市通常提前3-6个月反映衰退预期',
            en: 'Recessions hurt corporate earnings; markets typically price in recession 3-6 months ahead'
        }
    },
    {
        id: 'cd-85', source: 'macro-qe', target: 'market-index-sp500', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '量化宽松向市场注入流动性，推动风险资产价格上涨，利好股市',
            en: 'QE injects liquidity into markets, pushing up risk asset prices and benefiting equities'
        }
    },
    {
        id: 'cd-86', source: 'macro-interest-rate', target: 'market-index-csi300', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '中国央行利率政策影响A股流动性和估值水平，降息通常利好股市',
            en: 'PBOC rate policy affects A-share liquidity and valuations; rate cuts typically boost stocks'
        }
    },

    // === 交易所与市场/指数关联 ===
    {
        id: 'cd-87', source: 'inst-nyse', target: 'market-index-djia', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '道琼斯工业指数成分股主要在纽约证交所上市交易',
            en: 'Dow Jones Industrial Average components are primarily listed and traded on NYSE'
        }
    },
    {
        id: 'cd-88', source: 'inst-nasdaq', target: 'market-index-nasdaq', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '纳斯达克综合指数反映纳斯达克交易所全部上市公司的整体表现',
            en: 'NASDAQ Composite reflects overall performance of all NASDAQ-listed companies'
        }
    },
    {
        id: 'cd-89', source: 'inst-sse', target: 'market-index-csi300', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '沪深300指数包含上海证交所大部分大盘股，是A股核心基准',
            en: 'CSI 300 includes most SSE large-caps, serving as core A-share benchmark'
        }
    },
    {
        id: 'cd-90', source: 'inst-hkex', target: 'market-index-hsi', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '恒生指数由香港交易所设计和维护，反映港股核心表现',
            en: 'Hang Seng Index is designed and maintained by HKEX, reflecting core HK stock performance'
        }
    }
];
