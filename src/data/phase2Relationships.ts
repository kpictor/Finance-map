import type { Relationship } from '../types';

// Phase 2: 跨域关系增强 - 宏观↔市场、宏观↔机构、机构↔工具
export const phase2Relationships: Relationship[] = [
    // === 宏观→市场 影响关系 ===
    {
        id: 'p2-rate-bond', source: 'macro-interest-rate', target: 'market-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '利率上升导致债券价格下跌，久期越长敏感度越高。这是债券投资最核心的风险',
            en: 'Rising rates cause bond prices to fall, with longer duration meaning higher sensitivity. This is the core bond investment risk'
        }
    },
    {
        id: 'p2-inflation-commodity', source: 'macro-cpi', target: 'market-commodities', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '通胀上升时商品作为实物资产价格上涨，商品是重要的通胀对冲工具',
            en: 'Commodities rise with inflation as real assets, serving as important inflation hedges'
        }
    },
    {
        id: 'p2-recession-gold', source: 'macro-recession', target: 'instr-commodity', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '经济衰退时黄金作为避险资产需求上升，与风险资产呈负相关',
            en: 'Gold demand rises during recessions as safe haven, negatively correlated with risk assets'
        }
    },
    {
        id: 'p2-recession-gov-bond', source: 'macro-recession', target: 'instr-gov-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '衰退期间资金涌入国债避险，国债收益率下降、价格上涨',
            en: 'Funds flow into treasuries during recessions for safety, driving yields down and prices up'
        }
    },
    {
        id: 'p2-qe-equity', source: 'macro-qe', target: 'market-equity', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '量化宽松释放流动性推高资产价格，压低无风险收益率迫使资金流入股市',
            en: 'QE releases liquidity pushing up asset prices, lowering risk-free rates forces funds into equities'
        }
    },
    {
        id: 'p2-pmi-equity', source: 'macro-pmi', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: 'PMI是经济领先指标，PMI上升预示经济扩张，利好股市',
            en: 'PMI is leading indicator, rising PMI signals expansion, positive for equities'
        }
    },
    {
        id: 'p2-yield-curve-equity', source: 'macro-yield-curve', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '收益率曲线倒挂预警衰退，通常领先股市下跌6-18个月',
            en: 'Yield curve inversion signals recession, typically leads equity decline by 6-18 months'
        }
    },
    {
        id: 'p2-fx-exporters', source: 'macro-fx-regime', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '本币贬值利好出口企业，推升出口股股价',
            en: 'Currency depreciation benefits exporters, pushing up export-oriented stock prices'
        }
    },
    {
        id: 'p2-gdp-market', source: 'macro-gdp', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: 'GDP增长与企业盈利正相关，长期驱动股市上涨',
            en: 'GDP growth positively correlates with corporate earnings, driving long-term equity gains'
        }
    },
    {
        id: 'p2-employment-consumer', source: 'macro-employment', target: 'market-equity', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '就业强劲支撑消费，利好消费股和整体经济',
            en: 'Strong employment supports consumption, benefiting consumer stocks and overall economy'
        }
    },

    // === 宏观→机构 影响关系 ===
    {
        id: 'p2-rate-bank-nim', source: 'macro-interest-rate', target: 'inst-commercial-bank', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '利率上升扩大银行净息差(NIM)，短期利好银行盈利',
            en: 'Rising rates widen bank Net Interest Margin (NIM), short-term positive for bank earnings'
        }
    },
    {
        id: 'p2-qe-am-aum', source: 'macro-qe', target: 'inst-fund', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: 'QE推高资产价格，直接增加资管公司的管理规模(AUM)',
            en: 'QE pushes up asset prices, directly increasing asset managers\' AUM'
        }
    },
    {
        id: 'p2-crisis-invest-bank', source: 'macro-crisis', target: 'inst-investment-bank', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '金融危机冲击投行杠杆业务，如2008年雷曼破产',
            en: 'Financial crises hit investment bank leverage, as in Lehman collapse 2008'
        }
    },
    {
        id: 'p2-inflation-insurance', source: 'macro-cpi', target: 'inst-insurance', type: 'influences', strength: 2, bidirectional: false,
        explanation: {
            zh: '高通胀侵蚀保险公司固定收益投资实际回报',
            en: 'High inflation erodes real returns on insurance company fixed income investments'
        }
    },
    {
        id: 'p2-rate-pension', source: 'macro-interest-rate', target: 'inst-pension', type: 'influences', strength: 3, bidirectional: false,
        explanation: {
            zh: '低利率增加养老金负债现值，导致资金缺口扩大',
            en: 'Low rates increase pension liability present value, widening funding gaps'
        }
    },
    {
        id: 'p2-regulation-bank', source: 'macro-fiscal', target: 'inst-commercial-bank', type: 'regulates', strength: 2, bidirectional: false,
        explanation: {
            zh: '财政政策影响银行资本要求和系统重要性银行监管',
            en: 'Fiscal policy affects bank capital requirements and SIFI regulation'
        }
    },

    // === 机构↔工具 交易/发行关系 ===
    {
        id: 'p2-mm-options', source: 'inst-market-maker', target: 'instr-options', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '做市商是期权市场流动性的核心提供者，赚取买卖价差',
            en: 'Market makers are core liquidity providers in options markets, earning bid-ask spread'
        }
    },
    {
        id: 'p2-ib-mbs', source: 'inst-investment-bank', target: 'instr-mbs', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '投行将抵押贷款资产池证券化发行MBS',
            en: 'Investment banks securitize mortgage pools into MBS'
        }
    },
    {
        id: 'p2-broker-cfd', source: 'inst-broker', target: 'instr-cfd', type: 'provides', strength: 2, bidirectional: false,
        explanation: {
            zh: '零售经纪商向客户提供CFD差价合约交易服务',
            en: 'Retail brokers provide CFD trading services to clients'
        }
    },
    {
        id: 'p2-fund-snowball', source: 'inst-securities', target: 'instr-snowball', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '券商资管是雪球结构产品的主要发行方',
            en: 'Securities firms are major issuers of snowball structured products'
        }
    },
    {
        id: 'p2-bank-cd', source: 'inst-commercial-bank', target: 'instr-cd', type: 'issues', strength: 3, bidirectional: false,
        explanation: {
            zh: '银行发行同业存单(NCD)和大额存单作为负债端融资工具',
            en: 'Banks issue NCDs and CDs as liability-side funding instruments'
        }
    },
    {
        id: 'p2-gov-treasury', source: 'inst-central-bank', target: 'instr-gov-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: {
            zh: '央行通过买卖国债进行公开市场操作',
            en: 'Central banks trade government bonds for open market operations'
        }
    },

    // === 竞争/合作关系 ===
    {
        id: 'p2-compete-exchange-us', source: 'inst-nyse', target: 'inst-nasdaq', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: {
            zh: 'NYSE和NASDAQ争夺美股上市公司和交易量',
            en: 'NYSE and NASDAQ compete for US stock listings and trading volume'
        }
    },
    {
        id: 'p2-compete-broker', source: 'inst-broker', target: 'inst-broker', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '经纪商之间竞争激烈，零佣金战争重塑行业格局',
            en: 'Intense broker competition, zero-commission wars reshaping industry'
        }
    },
    {
        id: 'p2-coop-bank-fund', source: 'inst-commercial-bank', target: 'inst-fund', type: 'cooperates_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '银行为基金提供托管、清算和代销服务',
            en: 'Banks provide custody, clearing, and distribution services to funds'
        }
    },
    {
        id: 'p2-coop-ib-rating', source: 'inst-investment-bank', target: 'inst-rating', type: 'cooperates_with', strength: 2, bidirectional: true,
        explanation: {
            zh: '投行聘请评级机构为其承销的债券评级',
            en: 'Investment banks hire rating agencies to rate bonds they underwrite'
        }
    }
];
