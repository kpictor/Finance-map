import type { Relationship } from '../types';

// Phase 1: 核心缺失关系 - uses 和 depends_on
export const phase1Relationships: Relationship[] = [
    // === uses 关系 (工具使用) ===
    {
        id: 'cd-uses-hedge-options', source: 'inst-private-fund', target: 'instr-options', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '对冲基金广泛使用期权进行方向性交易、波动率套利和风险对冲',
            en: 'Hedge funds extensively use options for directional trades, volatility arbitrage, and hedging'
        }
    },
    {
        id: 'cd-uses-bank-irs', source: 'inst-commercial-bank', target: 'instr-irs', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '商业银行使用利率互换管理资产负债的利率错配风险',
            en: 'Commercial banks use IRS to manage interest rate mismatch between assets and liabilities'
        }
    },
    {
        id: 'cd-uses-corp-fx-forward', source: 'inst-commercial-bank', target: 'instr-fx-forwards', type: 'uses', strength: 2, bidirectional: false,
        explanation: {
            zh: '企业通过银行使用外汇远期锁定汇率，对冲跨境贸易的汇率风险',
            en: 'Corporates use FX forwards via banks to lock exchange rates, hedging cross-border trade FX risk'
        }
    },
    {
        id: 'cd-uses-carry-forex', source: 'macro-carry-trade', target: 'market-forex', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '套息交易策略主要通过即期外汇市场建立货币头寸',
            en: 'Carry trade strategies primarily establish currency positions through spot FX market'
        }
    },
    {
        id: 'cd-uses-mm-stock', source: 'inst-market-maker', target: 'instr-stock', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '做市商使用高频交易技术在股票市场提供持续的买卖报价',
            en: 'Market makers use HFT technology to provide continuous bid-ask quotes in equity markets'
        }
    },
    {
        id: 'cd-uses-pension-bond', source: 'inst-pension', target: 'instr-bond', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '养老金使用长久期债券匹配其远期负债，实现资产负债久期匹配',
            en: 'Pension funds use long-duration bonds to match long-term liabilities for ALM duration matching'
        }
    },
    {
        id: 'cd-uses-insure-mbs', source: 'inst-insurance', target: 'instr-mbs', type: 'uses', strength: 2, bidirectional: false,
        explanation: {
            zh: '保险公司使用MBS作为稳定现金流来源，匹配保险赔付义务',
            en: 'Insurance companies use MBS as stable cash flow source, matching insurance payout obligations'
        }
    },
    {
        id: 'cd-uses-etf-futures', source: 'inst-fund', target: 'instr-index-futures', type: 'uses', strength: 2, bidirectional: false,
        explanation: {
            zh: '指数基金使用股指期货进行现金管理和快速建仓',
            en: 'Index funds use index futures for cash equitization and rapid position building'
        }
    },
    {
        id: 'cd-uses-rating-bond', source: 'inst-rating', target: 'instr-corp-bond', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '评级机构通过分析企业债为债券市场提供信用评级服务',
            en: 'Rating agencies provide credit rating services to bond markets by analyzing corporate bonds'
        }
    },
    {
        id: 'cd-uses-snowball-index', source: 'instr-snowball', target: 'market-index-csi500', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '雪球结构产品常挂钩中证500/1000指数作为标的资产',
            en: 'Snowball products often link to CSI 500/1000 indices as underlying assets'
        }
    },
    {
        id: 'cd-uses-arb-etf', source: 'inst-market-maker', target: 'instr-etf', type: 'uses', strength: 3, bidirectional: false,
        explanation: {
            zh: '做市商使用ETF申赎套利机制保持ETF价格与净值的一致性',
            en: 'Market makers use ETF creation/redemption arbitrage to maintain ETF price-NAV alignment'
        }
    },
    {
        id: 'cd-uses-dupont-equity', source: 'macro-dupont', target: 'instr-stock', type: 'uses', strength: 2, bidirectional: false,
        explanation: {
            zh: '杜邦分析框架用于分解股票投资中ROE的驱动因素',
            en: 'DuPont analysis framework is used to decompose ROE drivers in equity investing'
        }
    },
    {
        id: 'cd-uses-ccp-futures', source: 'macro-counterparty-risk', target: 'instr-futures', type: 'uses', strength: 2, bidirectional: false,
        explanation: {
            zh: '中央清算对手方(CCP)使用期货保证金制度管理交易对手风险',
            en: 'CCPs use futures margin system to manage counterparty risk'
        }
    },

    // === depends_on 关系 (依赖关系) ===
    {
        id: 'cd-dep-option-stock', source: 'instr-options', target: 'instr-stock', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: '股票期权的价值完全依赖于标的股票的价格走势',
            en: 'Stock options value entirely depends on underlying stock price movement'
        }
    },
    {
        id: 'cd-dep-futures-spot', source: 'instr-futures', target: 'instr-commodity', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: '商品期货价格通过无套利关系依赖于现货价格和持有成本',
            en: 'Commodity futures prices depend on spot prices and carry costs through no-arbitrage relationship'
        }
    },
    {
        id: 'cd-dep-etf-nav', source: 'instr-etf', target: 'instr-stock', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: 'ETF净值(NAV)取决于其持有的一篮子股票的价值',
            en: 'ETF NAV depends on the value of underlying basket of stocks it holds'
        }
    },
    {
        id: 'cd-dep-corp-rate', source: 'instr-corp-bond', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: '企业债收益率=无风险利率+信用利差，依赖于基准利率水平',
            en: 'Corporate bond yield = risk-free rate + credit spread, depends on benchmark rate level'
        }
    },
    {
        id: 'cd-dep-cfd-stock', source: 'instr-cfd', target: 'instr-stock', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: 'CFD(差价合约)的价值直接跟踪标的股票价格变动',
            en: 'CFD value directly tracks underlying stock price movements'
        }
    },
    {
        id: 'cd-dep-convertible-stock', source: 'instr-convertible', target: 'instr-stock', type: 'depends_on', strength: 2, bidirectional: false,
        explanation: {
            zh: '可转债的转股价值依赖于正股价格，正股上涨则转股价值提升',
            en: 'Convertible bond conversion value depends on stock price; rising stock increases conversion value'
        }
    },
    {
        id: 'cd-dep-mbs-rate', source: 'instr-mbs', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: 'MBS提前还款风险高度依赖利率环境，降息时再融资导致提前还款增加',
            en: 'MBS prepayment risk highly depends on rate environment; rate cuts cause refinancing and prepayments'
        }
    },
    {
        id: 'cd-dep-carry-rate', source: 'macro-carry-trade', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: '套息交易收益取决于两国利差，利差收窄(如2024日元加息)导致平仓',
            en: 'Carry trade returns depend on rate differential; narrowing spread (like 2024 BOJ hike) triggers unwind'
        }
    },
    {
        id: 'cd-dep-lpr-mlf', source: 'macro-mlf', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: {
            zh: 'LPR定价依赖于MLF利率，MLF是LPR的定价锚',
            en: 'LPR pricing depends on MLF rate, which serves as the anchor for LPR'
        }
    }
];
