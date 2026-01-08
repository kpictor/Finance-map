import type { Entity, Relationship } from '../types';

// 宏观经济领域实体
export const macroEntities: Entity[] = [
    // === 货币政策 ===
    {
        id: 'macro-monetary',
        name: { zh: '货币政策', en: 'Monetary Policy' },
        description: { zh: '央行调控货币供应和利率', en: 'Central bank money supply and rate control' },
        domain: 'macro', category: 'policy', icon: '💰',
        tags: ['monetary', 'central-bank'],
        level: 1,
        details: {
            zh: '美联储的双重使命:稳定物价+充分就业。中国央行目标更多:M2增速、汇率、金融风险',
            en: 'Fed dual mandate: price stability + full employment. PBOC has more targets: M2 growth, FX rate, financial risk'
        }
    },
    {
        id: 'macro-interest-rate',
        name: { zh: '利率政策', en: 'Interest Rate Policy' },
        description: { zh: '基准利率调整', en: 'Benchmark rate adjustments' },
        domain: 'macro', category: 'monetary', icon: '📊',
        tags: ['interest-rate', 'benchmark'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: '美联储FFR(Federal Funds Rate)是全球利率基准，影响各国货币政策方向',
            en: 'Fed Funds Rate (FFR) is global benchmark, influences monetary policy direction worldwide'
        }
    },
    {
        id: 'macro-reserve-req',
        name: { zh: '准备金率', en: 'Reserve Requirements' },
        description: { zh: '银行存款准备金要求', en: 'Bank deposit reserve requirements' },
        domain: 'macro', category: 'monetary', icon: '🏦',
        tags: ['rrr', 'reserves'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: '中国大型银行准备金率约6.5%，中小银行5%。每降准0.5%释放纥5000亿流动性。美国已取消准备金要求',
            en: 'China RRR ~6.5% (large banks)/5% (small banks). Each 0.5% cut releases ~500B yuan. US has eliminated reserve requirements'
        }
    },
    {
        id: 'macro-open-market',
        name: { zh: '公开市场操作', en: 'Open Market Operations' },
        description: { zh: '央行买卖证券', en: 'Central bank securities trading' },
        domain: 'macro', category: 'monetary', icon: '🔄',
        tags: ['omo', 'liquidity'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: '中国每日通过逆回购(7天/14天)调节短期流动性。美联储买卖国债影响市场利率',
            en: 'China daily adjusts liquidity via reverse repo (7d/14d). Fed buys/sells Treasuries to influence rates'
        }
    },
    {
        id: 'macro-qe',
        name: { zh: '量化宽松', en: 'Quantitative Easing' },
        description: { zh: '非常规货币政策，央行大规模购买资产', en: 'Unconventional monetary policy, central bank large-scale asset purchases' },
        domain: 'macro', category: 'monetary', icon: '💵',
        tags: ['qe', 'unconventional'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: '2008-2022美联储资产负债表从$0.9T膨胀到$9T。QT(Quantitative Tightening)为反向操作',
            en: 'Fed balance sheet grew from $0.9T to $9T (2008-2022). QT (Quantitative Tightening) is the reverse'
        }
    },
    {
        // 华尔街说明: MLF是中国人民银行的核心政策工具，影响LPR定价
        id: 'macro-mlf',
        name: { zh: 'MLF/SLF', en: 'Medium/Short-term Lending Facility' },
        description: {
            zh: '中期借贷便利(MLF)是央行向商业银行提供的中期基础货币，是LPR定价的锚',
            en: 'Medium-term Lending Facility provides base money to banks, anchors LPR pricing in China'
        },
        domain: 'macro', category: 'monetary', icon: '🏦',
        tags: ['mlf', 'slf', 'lpr', 'pboc'],
        level: 2, parentId: 'macro-monetary',
        details: {
            zh: 'LPR分两档:1年期LPR(企业短贷/消费贷基准)、5年期以上LPR(房贷基准)。降息时常"非对称"调整',
            en: 'LPR has 2 tenors: 1Y LPR (corporate/consumer loans), 5Y+ LPR (mortgage benchmark). Rate cuts often asymmetric'
        }
    },
    {
        // 华尔街说明: 美林投资时钟是经济周期与资产配置的经典框架，由美林证券2004年提出
        id: 'macro-merrill-clock',
        name: { zh: '美林投资时钟', en: 'Merrill Lynch Investment Clock' },
        description: {
            zh: '经济周期与资产配置经典框架：复苏→股票，过热→商品，滞涨→现金，衰退→债券',
            en: 'Classic cycle-allocation framework: Recovery→Stocks, Overheat→Commodities, Stagflation→Cash, Recession→Bonds'
        },
        domain: 'macro', category: 'theory', icon: '🕐',
        tags: ['merrill', 'allocation', 'cycle', 'strategy'],
        level: 1,
        details: {
            zh: '根据经济增长(上行/下行)和通胀(上升/下降)将经济分为四阶段，每阶段有最优配置资产类别',
            en: 'Divides economy into four phases based on growth and inflation direction, each with optimal asset class'
        }
    },
    {
        // 华尔街说明: 收益率曲线倒挂是最可靠的衰退预警信号之一
        id: 'macro-yield-curve',
        name: { zh: '收益率曲线', en: 'Yield Curve' },
        description: {
            zh: '不同期限债券收益率的曲线，倒挂(短>长)是衰退预警信号',
            en: 'Curve of bond yields across maturities, inversion (short>long) signals recession'
        },
        domain: 'macro', category: 'indicators', icon: '📈',
        tags: ['yield-curve', 'inversion', 'recession', '2s10s'],
        level: 1,
        details: {
            zh: '2年期与10年期美债利差(2s10s)倒挂历史上预测了每一次美国衰退，领先时间6-18个月',
            en: '2s10s Treasury spread inversion has predicted every US recession, with 6-18 month lead time'
        }
    },
    {
        // 华尔街说明: 杜邦分析是ROE分解的经典框架
        id: 'macro-dupont',
        name: { zh: '杜邦分析', en: 'DuPont Analysis' },
        description: {
            zh: 'ROE分解为净利润率×资产周转率×权益乘数三因子',
            en: 'ROE decomposition into Net Margin × Asset Turnover × Equity Multiplier'
        },
        domain: 'macro', category: 'theory', icon: '📊',
        tags: ['dupont', 'roe', 'margin', 'turnover', 'leverage'],
        level: 1,
        details: {
            zh: 'ROE = 净利润率 × 资产周转率 × 权益乘数。银行靠高杠杆、零售靠高周转、科技靠高利润率',
            en: 'ROE = Net Margin × Asset Turnover × Equity Multiplier. Banks: high leverage; Retail: high turnover; Tech: high margin'
        }
    },
    {
        // 华尔街说明: 套息交易是外汇/利率市场的核心策略，2024年日元加息触发全球平仓
        id: 'macro-carry-trade',
        name: { zh: '套息交易', en: 'Carry Trade' },
        description: {
            zh: '借入低息货币投资高息资产，赚取利差的交易策略',
            en: 'Trading strategy borrowing low-yield currency to invest in high-yield assets, earning interest differential'
        },
        domain: 'macro', category: 'theory', icon: '💱',
        tags: ['carry', 'yen', 'interest-rate', 'currency', 'unwind'],
        level: 1,
        details: {
            zh: '经典案例:借日元(0利率)买澳元资产(5%+)。2024年日元加息触发全球carry unwind，市场剧烈波动',
            en: 'Classic: borrow JPY (0%) to buy AUD assets (5%+). 2024 BOJ hike triggered global carry unwind, causing market turmoil'
        }
    },

    // === 财政政策 ===
    {
        id: 'macro-fiscal',
        name: { zh: '财政政策', en: 'Fiscal Policy' },
        description: { zh: '政府税收和支出政策', en: 'Government tax and spending policy' },
        domain: 'macro', category: 'policy', icon: '🏛️',
        tags: ['fiscal', 'government'],
        level: 1,
        details: {
            zh: '美国政府债务约$36万亿(超过GDP)，利息支出成为负担。中国地方政府债务+隐性债务关注度高',
            en: 'US gov debt ~$36T (exceeds GDP), interest a burden. China local + hidden debt is concern'
        }
    },
    {
        id: 'macro-tax',
        name: { zh: '税收政策', en: 'Tax Policy' },
        description: { zh: '税率和税制调整', en: 'Tax rate and system adjustments' },
        domain: 'macro', category: 'fiscal', icon: '📋',
        tags: ['tax', 'revenue'],
        level: 2, parentId: 'macro-fiscal',
        details: {
            zh: '美国联邦企业所得税21%，个人最高边37%。中国企业税25%，个税最高45%',
            en: 'US federal corporate tax 21%, individual top 37%. China corporate 25%, individual top 45%'
        }
    },
    {
        id: 'macro-spending',
        name: { zh: '政府支出', en: 'Government Spending' },
        description: { zh: '财政支出和投资', en: 'Fiscal expenditure and investment' },
        domain: 'macro', category: 'fiscal', icon: '💸',
        tags: ['spending', 'investment'],
        level: 2, parentId: 'macro-fiscal',
        details: {
            zh: '美国强制性支出(mandatory):Medicare/社保(Social Security)/利息占大头。中国基建投资是经济刺激器',
            en: 'US mandatory: Medicare/Social Security/Interest dominate. China infrastructure investment is economic stimulus tool'
        }
    },
    {
        id: 'macro-deficit',
        name: { zh: '财政赤字/盈余', en: 'Fiscal Deficit/Surplus' },
        description: { zh: '政府收支差额', en: 'Government budget balance' },
        domain: 'macro', category: 'fiscal', icon: '📉',
        tags: ['deficit', 'budget'],
        level: 2, parentId: 'macro-fiscal',
        details: {
            zh: '赤字率=财政赤字/GDP。欧盟标准<3%，但疫后各国普遍突破',
            en: 'Deficit ratio = Deficit/GDP. EU target <3%, but most countries breached post-pandemic'
        }
    },

    // === 经济指标 ===
    {
        id: 'macro-indicators',
        name: { zh: '经济指标', en: 'Economic Indicators' },
        description: { zh: '衡量经济健康的数据', en: 'Data measuring economic health' },
        domain: 'macro', category: 'data', icon: '📊',
        tags: ['indicators', 'data'],
        level: 1,
        details: {
            zh: '领先指标(PMI)、同步指标(GDP)、滞后指标(失业率)。经济日历是重要事件',
            en: 'Leading (PMI), coincident (GDP), lagging (unemployment). Economic calendar is key for events'
        }
    },
    {
        id: 'macro-gdp',
        name: { zh: 'GDP', en: 'GDP' },
        description: { zh: '国内生产总值', en: 'Gross Domestic Product' },
        domain: 'macro', category: 'indicators', icon: '📈',
        tags: ['gdp', 'growth'],
        level: 2, parentId: 'macro-indicators',
        details: {
            zh: 'GDP=C+I+G+NX。美国GDP$27万亿全球第一，中国$18万亿第二',
            en: 'GDP = C+I+G+NX. US GDP $27T (#1), China $18T (#2)'
        }
    },
    {
        id: 'macro-cpi',
        name: { zh: 'CPI/通胀', en: 'CPI/Inflation' },
        description: { zh: '消费者物价指数', en: 'Consumer Price Index' },
        domain: 'macro', category: 'indicators', icon: '🔥',
        tags: ['cpi', 'inflation'],
        level: 2, parentId: 'macro-indicators',
        details: {
            zh: '美联储目标通胀2%。2022年美国CPI最高9.1%创40年新高，引发激进加息',
            en: 'Fed targets 2% inflation. 2022 US CPI hit 9.1% (40-year high), triggering aggressive hikes'
        }
    },
    {
        id: 'macro-pmi',
        name: { zh: 'PMI', en: 'PMI' },
        description: { zh: '采购经理人指数', en: 'Purchasing Managers Index' },
        domain: 'macro', category: 'indicators', icon: '🏭',
        tags: ['pmi', 'manufacturing'],
        level: 2, parentId: 'macro-indicators',
        details: {
            zh: 'PMI>50表示扩张，<50表示收缩。财新PMI和官方PMI口径不同',
            en: 'PMI>50 = expansion, <50 = contraction. Caixin and official PMI have different scopes'
        }
    },
    {
        id: 'macro-employment',
        name: { zh: '就业数据', en: 'Employment Data' },
        description: { zh: '失业率和就业数据', en: 'Unemployment and job data' },
        domain: 'macro', category: 'indicators', icon: '👷',
        tags: ['employment', 'jobs', 'nfp'],
        level: 2, parentId: 'macro-indicators',
        details: {
            zh: '美国非农(NFP)每月第一周五发布，是最重要的经济数据之一。失业率是滞后指标',
            en: 'US Non-Farm Payrolls (NFP) released 1st Friday monthly, one of most important data. Unemployment is lagging'
        }
    },

    // === 经济周期 ===
    {
        id: 'macro-cycles',
        name: { zh: '经济周期', en: 'Economic Cycles' },
        description: { zh: '经济活动周期性波动', en: 'Cyclical economic fluctuations' },
        domain: 'macro', category: 'theory', icon: '🔄',
        tags: ['cycle', 'business-cycle'],
        level: 1,
        details: {
            zh: '基钦周期(Kitchin, 3-5年)/朱格拉周期(7-11年)/库兹涅茨周期(15-25年)/康波周期(50-60年)',
            en: 'Kitchin (3-5yr), Juglar (7-11yr), Kuznets (15-25yr), Kondratieff (50-60yr) cycles'
        }
    },
    {
        id: 'macro-recession',
        name: { zh: '衰退', en: 'Recession' },
        description: { zh: '经济活动收缩期', en: 'Economic contraction period' },
        domain: 'macro', category: 'cycle', icon: '📉',
        tags: ['recession', 'downturn'],
        level: 2, parentId: 'macro-cycles',
        details: {
            zh: 'NBER通过多指标综合判定衰退(并非"连续两季度负GDP"的简单标准)。美国历史上衰退平均持续11个月',
            en: 'NBER uses multi-factor analysis to determine recession (NOT the "two consecutive quarters" rule). US recessions average 11 months'
        }
    },
    {
        id: 'macro-expansion',
        name: { zh: '扩张', en: 'Expansion' },
        description: { zh: '经济活动增长期', en: 'Economic growth period' },
        domain: 'macro', category: 'cycle', icon: '📈',
        tags: ['expansion', 'growth'],
        level: 2, parentId: 'macro-cycles',
        details: {
            zh: '美国历史上最长扩张期:2009-2020(128个月)，被疫情打断',
            en: 'Longest US expansion: 2009-2020 (128 months), ended by pandemic'
        }
    },

    // === 国际金融 ===
    {
        id: 'macro-international',
        name: { zh: '国际金融', en: 'International Finance' },
        description: { zh: '跨境金融关系', en: 'Cross-border financial relations' },
        domain: 'macro', category: 'international', icon: '🌍',
        tags: ['international', 'global'],
        level: 1,
        details: {
            zh: 'IMF/世界银行/BIS是三大国际金融机构。美元仍是全球储备货币(~58%)',
            en: 'IMF/World Bank/BIS are major international financial institutions. USD remains global reserve (~58%)'
        }
    },
    {
        id: 'macro-fx-regime',
        name: { zh: '汇率制度', en: 'FX Regime' },
        description: { zh: '货币汇率政策安排', en: 'Currency exchange rate arrangements' },
        domain: 'macro', category: 'international', icon: '💱',
        tags: ['fx', 'exchange-rate'],
        level: 2, parentId: 'macro-international',
        details: {
            zh: '浮动汇率(美元/欧元)/有管理浮动(人民币)/固定汇率(港币)。不可能三角:资本自由/固定汇率/独立货币政策',
            en: 'Floating (USD/EUR), managed float (CNY), fixed (HKD). Impossible Trinity: capital mobility/fixed rate/independent policy'
        }
    },
    {
        id: 'macro-capital-flows',
        name: { zh: '资本流动', en: 'Capital Flows' },
        description: { zh: '跨境资本流动', en: 'Cross-border capital movements' },
        domain: 'macro', category: 'international', icon: '🌊',
        tags: ['capital', 'flows', 'fdi'],
        level: 2, parentId: 'macro-international',
        details: {
            zh: 'FDI(外国直接投资)是实体经济投资。热钱进出影响新兴市场汇率稳定',
            en: 'FDI is real economy investment. Hot money flows affect EM currency stability'
        }
    },
    {
        id: 'macro-bop',
        name: { zh: '国际收支', en: 'Balance of Payments' },
        description: { zh: '国家对外经济交易记录', en: 'Record of external transactions' },
        domain: 'macro', category: 'international', icon: '⚖️',
        tags: ['bop', 'current-account'],
        level: 2, parentId: 'macro-international',
        details: {
            zh: '经常账户+资本和金融账户=0。美国常年贸易逆差，中国顺差',
            en: 'Current + Capital/Financial account = 0. US has persistent trade deficit, China surplus'
        }
    },

    // === 金融风险 ===
    {
        id: 'macro-risk',
        name: { zh: '系统性风险', en: 'Systemic Risk' },
        description: { zh: '金融系统整体风险', en: 'Financial system-wide risk' },
        domain: 'macro', category: 'risk', icon: '⚠️',
        tags: ['systemic', 'financial-stability'],
        level: 1,
        details: {
            zh: '系统性风险引发连锁反应。TBTF(大而不能倒)机构的倒闭可能导致整个金融系统崩溃',
            en: 'Systemic risk triggers chain reactions. Collapse of TBTF (Too Big to Fail) institutions could bring down entire system'
        }
    },
    {
        id: 'macro-crisis',
        name: { zh: '金融危机', en: 'Financial Crises' },
        description: { zh: '金融市场严重动荡', en: 'Severe financial market turmoil' },
        domain: 'macro', category: 'risk', icon: '💥',
        tags: ['crisis', 'contagion'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: '重大危机:1929大萧条/1997亚洲/2008次贷/2020疫情。每次危机后监管加强',
            en: 'Major crises: 1929 Depression, 1997 Asian, 2008 Subprime, 2020 COVID. Regulation strengthens post-crisis'
        }
    },

    // === 五大风险类型 (P0新增) ===
    {
        // 华尔街说明: 市场风险是投资损失的主要来源，VaR(在险价值)是标准度量方法
        id: 'macro-market-risk',
        name: { zh: '市场风险', en: 'Market Risk' },
        description: {
            zh: '因市场价格波动（股价、利率、汇率、商品价格）导致投资损失的风险，VaR和ES是标准度量方法',
            en: 'Risk of losses due to market price movements (equities, rates, FX, commodities); VaR and ES are standard measures'
        },
        domain: 'macro', category: 'risk', icon: '📉',
        tags: ['market-risk', 'var', 'volatility', 'price-risk'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: 'VaR(Value at Risk)表示在给定置信水平下的最大预期损失。如"95% VaR为100万"意味着95%概率下损失不超过100万',
            en: 'VaR represents maximum expected loss at a given confidence level. E.g., "95% VaR of $1M" means 95% probability loss won\'t exceed $1M'
        }
    },
    {
        // 华尔街说明: 信用风险是银行的核心风险，次贷危机的根源是对信用风险的低估
        id: 'macro-credit-risk',
        name: { zh: '信用风险', en: 'Credit Risk' },
        description: {
            zh: '债务人无法按时偿还本金利息的风险，通过违约概率(PD)和违约损失率(LGD)度量',
            en: 'Risk of borrower failing to repay principal or interest; measured by Probability of Default (PD) and Loss Given Default (LGD)'
        },
        domain: 'macro', category: 'risk', icon: '💳',
        tags: ['credit-risk', 'default', 'pd', 'lgd', 'credit-spread'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: '预期损失 = PD × LGD × EAD(违约暴露额)。信用利差扩大反映市场对违约风险的担忧上升',
            en: 'Expected Loss = PD × LGD × EAD (Exposure at Default). Credit spread widening reflects rising default concerns'
        }
    },
    {
        // 华尔街说明: 流动性风险在2020年3月疫情恐慌期间暴露无遗，连美国国债都一度卖不出去
        id: 'macro-liquidity-risk',
        name: { zh: '流动性风险', en: 'Liquidity Risk' },
        description: {
            zh: '无法以合理价格及时买卖资产的风险，或无法满足现金流需求的风险',
            en: 'Risk of inability to buy/sell assets at reasonable prices timely, or meet cash flow obligations'
        },
        domain: 'macro', category: 'risk', icon: '💧',
        tags: ['liquidity-risk', 'bid-ask', 'funding', 'cash-flow'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: '市场流动性风险(买卖价差扩大)和融资流动性风险(无法续借)可相互强化，形成流动性螺旋',
            en: 'Market liquidity (bid-ask widening) and funding liquidity (inability to roll debt) can reinforce each other in liquidity spirals'
        }
    },
    {
        // 华尔街说明: 操作风险是巴塞尔协议三大支柱之一，包括"胖手指"失误、系统故障、内部欺诈等
        id: 'macro-operational-risk',
        name: { zh: '操作风险', en: 'Operational Risk' },
        description: {
            zh: '因内部流程、人员、系统故障或外部事件导致损失的风险，巴塞尔协议三大风险支柱之一',
            en: 'Risk of losses from inadequate internal processes, people, systems, or external events; one of Basel III pillars'
        },
        domain: 'macro', category: 'risk', icon: '⚙️',
        tags: ['operational-risk', 'basel', 'fraud', 'compliance', 'cyber'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: '典型案例：2012年Knight Capital因软件故障45分钟内亏损4.4亿美元；2011年瑞银交易员Adoboli因未授权交易损失23亿美元',
            en: 'Examples: Knight Capital lost $440M in 45 mins due to software glitch in 2012; UBS lost $2.3B from Adoboli\'s unauthorized trades in 2011'
        }
    },
    {
        // 华尔街说明: 交易对手风险是AIG和Archegos事件的核心，场外衍生品的最大隐患
        id: 'macro-counterparty-risk',
        name: { zh: '交易对手风险', en: 'Counterparty Risk' },
        description: {
            zh: '交易对手无法履行合约义务的风险，场外衍生品的核心风险，AIG和Archegos事件的根源',
            en: 'Risk of counterparty failing to meet contractual obligations; core OTC derivatives risk, root cause of AIG and Archegos events'
        },
        domain: 'macro', category: 'risk', icon: '🤝',
        tags: ['counterparty-risk', 'cva', 'netting', 'collateral', 'cds'],
        level: 2, parentId: 'macro-risk',
        details: {
            zh: 'CVA(信用估值调整)量化交易对手违约造成的预期损失。2008年后监管强制要求场外衍生品向中央对手方(CCP)清算以降低对手方风险',
            en: 'CVA (Credit Valuation Adjustment) quantifies expected loss from counterparty default. Post-2008 regulations mandate CCP clearing for OTC derivatives'
        }
    }
];

// 宏观经济关系
export const macroRelationships: Relationship[] = [
    // 货币政策层级
    { id: 'mcr-1', source: 'macro-monetary', target: 'macro-interest-rate', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-2', source: 'macro-monetary', target: 'macro-reserve-req', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-3', source: 'macro-monetary', target: 'macro-open-market', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-4', source: 'macro-monetary', target: 'macro-qe', type: 'provides', strength: 2, bidirectional: false },
    { id: 'mcr-21', source: 'macro-monetary', target: 'macro-mlf', type: 'provides', strength: 3, bidirectional: false },

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

    // 风险层级
    { id: 'mcr-22', source: 'macro-risk', target: 'macro-crisis', type: 'provides', strength: 3, bidirectional: false },

    // 政策影响
    { id: 'mcr-17', source: 'macro-interest-rate', target: 'macro-cpi', type: 'influences', strength: 3, bidirectional: false },
    { id: 'mcr-18', source: 'macro-fiscal', target: 'macro-gdp', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-19', source: 'macro-cycles', target: 'macro-crisis', type: 'influences', strength: 2, bidirectional: false },
    { id: 'mcr-20', source: 'macro-risk', target: 'macro-crisis', type: 'influences', strength: 3, bidirectional: false },

    // === 五大风险类型层级关系 (P0新增) ===
    { id: 'mcr-23', source: 'macro-risk', target: 'macro-market-risk', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-24', source: 'macro-risk', target: 'macro-credit-risk', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-25', source: 'macro-risk', target: 'macro-liquidity-risk', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-26', source: 'macro-risk', target: 'macro-operational-risk', type: 'provides', strength: 3, bidirectional: false },
    { id: 'mcr-27', source: 'macro-risk', target: 'macro-counterparty-risk', type: 'provides', strength: 3, bidirectional: false },

    // 风险之间的交叉影响（危机传导路径）
    // 市场风险→流动性风险（价格暴跌导致流动性枯竭）
    { id: 'mcr-28', source: 'macro-market-risk', target: 'macro-liquidity-risk', type: 'influences', strength: 3, bidirectional: false },
    // 信用风险→交易对手风险（债务人违约导致对手方无法履约）
    { id: 'mcr-29', source: 'macro-credit-risk', target: 'macro-counterparty-risk', type: 'influences', strength: 3, bidirectional: false },
    // 流动性风险→市场风险（流动性危机导致恐慌性抛售）
    { id: 'mcr-30', source: 'macro-liquidity-risk', target: 'macro-market-risk', type: 'influences', strength: 3, bidirectional: false },
    // 交易对手风险→危机传染
    { id: 'mcr-31', source: 'macro-counterparty-risk', target: 'macro-crisis', type: 'influences', strength: 3, bidirectional: false }
];
