import type { Relationship } from '../types';

// Phase 3: 域内关系深化 - 衍生品链、指数成分、机构竞争、市场流动
export const phase3Relationships: Relationship[] = [
    // === instruments域: 衍生品定价链 ===
    {
        id: 'p3-futures-options', source: 'instr-futures', target: 'instr-options-futures', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '期货是期货期权的标的资产，期货价格直接决定期权价值',
            en: 'Futures are the underlying for futures options, futures prices directly determine option value'
        }
    },
    {
        id: 'p3-stock-equity-option', source: 'instr-stock', target: 'instr-equity-options', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '个股是股票期权的标的，期权定价依赖股价和波动率',
            en: 'Individual stocks underlie equity options, option pricing depends on stock price and volatility'
        }
    },
    {
        id: 'p3-bond-cds', source: 'instr-corp-bond', target: 'instr-cds', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: {
            zh: 'CDS是企业债的信用衍生品，用于对冲或投机债券违约风险',
            en: 'CDS is a credit derivative of corporate bonds, hedging or speculating on default risk'
        }
    },
    {
        id: 'p3-irs-bond', source: 'instr-bond', target: 'instr-irs', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: '利率互换定价与债券收益率曲线密切相关',
            en: 'IRS pricing closely relates to bond yield curves'
        }
    },
    {
        id: 'p3-mbs-cmo', source: 'instr-mbs', target: 'instr-clo', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: {
            zh: 'CLO/CDO技术源自MBS证券化，将资产池分层打包',
            en: 'CLO/CDO technology derived from MBS securitization, tranching asset pools'
        }
    },
    {
        id: 'p3-vix-spx', source: 'market-index-sp500', target: 'instr-vix-futures', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: 'VIX(恐慌指数)由标普500期权隐含波动率计算得出',
            en: 'VIX (fear index) is calculated from S&P 500 options implied volatility'
        }
    },
    {
        id: 'p3-warrant-stock', source: 'instr-stock', target: 'instr-warrant', type: 'provides', strength: 2, bidirectional: false,
        explanation: {
            zh: '权证是以股票为标的的权利凭证，价值依赖股价',
            en: 'Warrants are rights certificates on stocks, value depends on stock price'
        }
    },
    {
        id: 'p3-convertible-option', source: 'instr-convertible', target: 'instr-options', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: '可转债包含内嵌的看涨期权，可用期权定价理论估值',
            en: 'Convertibles contain embedded call options, can be valued using option pricing theory'
        }
    },
    {
        id: 'p3-phoenix-snowball', source: 'instr-snowball', target: 'instr-phoenix', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: '凤凰结构是雪球的变体，敲入后转为看涨期权而非持有正股',
            en: 'Phoenix is a snowball variant, converting to call option instead of stock holding on knock-in'
        }
    },
    {
        id: 'p3-fcn-option', source: 'instr-options', target: 'instr-fcn', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: 'FCN(固定票息票据)本质是卖出看跌期权+固定票息',
            en: 'FCN (Fixed Coupon Note) is essentially selling put option + fixed coupon'
        }
    },

    // === markets域: 一级→二级市场流动 ===
    {
        id: 'p3-primary-secondary', source: 'market-primary', target: 'market-secondary', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '一级市场发行的证券进入二级市场流通，为投资者提供退出渠道',
            en: 'Securities issued in primary market enter secondary market for trading, providing exit for investors'
        }
    },
    {
        id: 'p3-ipo-equity', source: 'market-ipo', target: 'market-equity', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: 'IPO是股票进入二级市场的最主要入口',
            en: 'IPO is the main entry point for stocks into secondary market'
        }
    },
    {
        id: 'p3-bond-issue-trade', source: 'market-bond-issuance', target: 'market-bond', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '债券发行后进入二级债券市场交易',
            en: 'Bonds enter secondary bond market for trading after issuance'
        }
    },
    {
        id: 'p3-main-gem', source: 'market-equity-main', target: 'market-equity-gem', type: 'competes_with', strength: 1, bidirectional: true,
        explanation: {
            zh: '主板与创业板在某些企业上市上存在竞争',
            en: 'Main board and GEM compete for certain company listings'
        }
    },
    {
        id: 'p3-star-gem', source: 'market-equity-star', target: 'market-equity-gem', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '科创板与创业板在科技企业上市上竞争激烈',
            en: 'STAR and GEM compete intensely for tech company listings'
        }
    },

    // === institutions域: 机构竞争合作 ===
    {
        id: 'p3-compete-ib-cn', source: 'inst-securities', target: 'inst-investment-bank', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '中国券商与外资投行在跨境业务上竞争',
            en: 'Chinese securities firms compete with foreign investment banks in cross-border business'
        }
    },
    {
        id: 'p3-compete-exchange-cn', source: 'inst-sse', target: 'inst-szse', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '上交所与深交所争夺A股上市资源',
            en: 'SSE and SZSE compete for A-share listing resources'
        }
    },
    {
        id: 'p3-compete-exchange-deriv', source: 'inst-cme', target: 'inst-ice', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: {
            zh: 'CME与ICE在衍生品市场激烈竞争',
            en: 'CME and ICE compete intensely in derivatives markets'
        }
    },
    {
        id: 'p3-compete-rating', source: 'inst-rating', target: 'inst-rating', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '三大评级机构S&P/Moody\'s/Fitch相互竞争市场份额',
            en: 'Big Three rating agencies S&P/Moody\'s/Fitch compete for market share'
        }
    },
    {
        id: 'p3-coop-hkex-sse', source: 'inst-hkex', target: 'inst-sse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: {
            zh: '港交所与上交所通过沪港通互联互通',
            en: 'HKEX and SSE are connected through Stock Connect'
        }
    },
    {
        id: 'p3-coop-hkex-szse', source: 'inst-hkex', target: 'inst-szse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: {
            zh: '港交所与深交所通过深港通互联互通',
            en: 'HKEX and SZSE are connected through Shenzhen-Hong Kong Stock Connect'
        }
    },
    {
        id: 'p3-coop-cb-bank', source: 'inst-central-bank', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '央行通过存款准备金、再贷款等工具监管商业银行',
            en: 'Central bank regulates commercial banks through reserve requirements, relending, etc.'
        }
    },
    {
        id: 'p3-reg-sec-broker', source: 'inst-regulator', target: 'inst-broker', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '证监会监管经纪商的业务行为和风险控制',
            en: 'Securities regulator supervises broker conduct and risk control'
        }
    },
    {
        id: 'p3-reg-sec-fund', source: 'inst-regulator', target: 'inst-fund', type: 'regulates', strength: 3, bidirectional: false,
        explanation: {
            zh: '监管机构对基金公司的投资范围、披露要求等进行监管',
            en: 'Regulators supervise fund companies\' investment scope, disclosure requirements, etc.'
        }
    },

    // === macro域: 政策传导链 ===
    {
        id: 'p3-monetary-rate', source: 'macro-monetary', target: 'macro-interest-rate', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '货币政策的核心工具就是利率调控',
            en: 'Interest rate adjustment is the core tool of monetary policy'
        }
    },
    {
        id: 'p3-rate-inflation', source: 'macro-interest-rate', target: 'macro-cpi', type: 'influences', strength: 3, bidirectional: true,
        explanation: {
            zh: '利率与通胀互相影响：加息抑制通胀，通胀高企则央行加息',
            en: 'Rates and inflation interact: rate hikes suppress inflation, high inflation triggers rate hikes'
        }
    },
    {
        id: 'p3-fiscal-gdp', source: 'macro-fiscal', target: 'macro-gdp', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '财政政策通过政府支出和税收影响GDP增长',
            en: 'Fiscal policy affects GDP growth through government spending and taxation'
        }
    },
    {
        id: 'p3-gdp-employment', source: 'macro-gdp', target: 'macro-employment', type: 'influences', strength: 2, bidirectional: true,
        explanation: {
            zh: 'GDP增长带动就业，就业增长支撑经济(奥肯定律)',
            en: 'GDP growth drives employment, employment supports economy (Okun\'s Law)'
        }
    },
    {
        id: 'p3-cycle-recession', source: 'macro-cycles', target: 'macro-recession', type: 'provides', strength: 2, bidirectional: false,
        explanation: {
            zh: '经济周期包含衰退阶段作为收缩期',
            en: 'Economic cycles include recession as contraction phase'
        }
    },
    {
        id: 'p3-cycle-expansion', source: 'macro-cycles', target: 'macro-expansion', type: 'provides', strength: 2, bidirectional: false,
        explanation: {
            zh: '经济周期包含扩张阶段作为增长期',
            en: 'Economic cycles include expansion as growth phase'
        }
    },
    {
        id: 'p3-risk-crisis', source: 'macro-risk', target: 'macro-crisis', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '系统性风险积累可能引发金融危机',
            en: 'Systemic risk accumulation may trigger financial crisis'
        }
    },
    {
        id: 'p3-crisis-recession', source: 'macro-crisis', target: 'macro-recession', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '金融危机通常导致经济衰退，如2008年次贷危机',
            en: 'Financial crises typically cause recessions, as in 2008 subprime crisis'
        }
    },
    {
        id: 'p3-merrill-cycle', source: 'macro-merrill-clock', target: 'macro-cycles', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: '美林时钟基于经济周期理论设计资产配置策略',
            en: 'Merrill Clock designs asset allocation based on economic cycle theory'
        }
    },
    {
        id: 'p3-international-fx', source: 'macro-international', target: 'macro-fx-regime', type: 'provides', strength: 2, bidirectional: false,
        explanation: {
            zh: '国际金融体系决定各国汇率制度安排',
            en: 'International finance system determines countries\' exchange rate arrangements'
        }
    },
    {
        id: 'p3-country-credit', source: 'macro-counterparty-risk', target: 'macro-credit-risk', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: '交易对手风险本质上是一种特殊的信用风险',
            en: 'Counterparty risk is essentially a specialized form of credit risk'
        }
    },

    // === 指数与成分股关系 ===
    {
        id: 'p3-sp500-stock', source: 'market-index-sp500', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: {
            zh: '标普500指数由500只美国大盘股加权计算',
            en: 'S&P 500 index is weighted calculation of 500 US large-cap stocks'
        }
    },
    {
        id: 'p3-csi300-stock', source: 'market-index-csi300', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: {
            zh: '沪深300指数由A股市值最大的300只股票组成',
            en: 'CSI 300 index comprises 300 largest A-share stocks by market cap'
        }
    },
    {
        id: 'p3-index-etf', source: 'market-equity', target: 'instr-index-fund', type: 'provides', strength: 3, bidirectional: false,
        explanation: {
            zh: '股票市场指数是指数基金的跟踪标的',
            en: 'Equity market indices are tracking targets for index funds'
        }
    },

    // === 基金产品关系 ===
    {
        id: 'p3-etf-index', source: 'instr-etf', target: 'instr-index-fund', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: {
            zh: 'ETF是指数基金的交易所交易版本',
            en: 'ETFs are exchange-traded versions of index funds'
        }
    },
    {
        id: 'p3-mm-low-risk', source: 'instr-money-fund', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '货币基金主要投资于国债、回购等短期高流动性资产',
            en: 'Money market funds mainly invest in T-bills, repos, and other short-term high-liquidity assets'
        }
    },
    {
        id: 'p3-bond-fund-corp', source: 'instr-bond-fund', target: 'instr-corp-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: {
            zh: '债券基金投资于企业债以获取信用利差收益',
            en: 'Bond funds invest in corporate bonds to capture credit spread returns'
        }
    },
    {
        id: 'p3-pe-vc', source: 'instr-pe', target: 'instr-vc', type: 'cooperates_with', strength: 2, bidirectional: true,
        explanation: {
            zh: 'PE与VC在不同阶段投资同一企业，形成投资接力',
            en: 'PE and VC invest in same companies at different stages, forming investment relay'
        }
    },
    {
        id: 'p3-hedge-pe', source: 'instr-hedge-fund', target: 'instr-pe', type: 'competes_with', strength: 1, bidirectional: true,
        explanation: {
            zh: '对冲基金与PE在某些资产类别上存在竞争',
            en: 'Hedge funds and PE compete in certain asset classes'
        }
    }
];
