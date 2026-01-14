import type { Entity, Relationship } from '../types';

// ========================================
// P0扩展：金融基础设施与跨境资本
// P0 Extension: Financial Infrastructure & Cross-border Capital
// ========================================

// === 跨境资本流动实体 ===
export const crossBorderEntities: Entity[] = [
    // --- 跨境投资渠道 ---
    {
        id: 'infra-cross-border',
        name: { zh: '跨境投资渠道', en: 'Cross-border Investment Channels' },
        description: {
            zh: '连接境内外资本市场的投资通道，是资本账户开放的重要基础设施',
            en: 'Investment channels connecting domestic and overseas capital markets, key infrastructure for capital account opening'
        },
        domain: 'institutions', category: 'infrastructure', icon: '🌐',
        tags: ['cross-border', 'capital-flows', 'connect'],
        level: 1,
        details: {
            zh: '中国资本账户尚未完全开放，通过QFII/RQFII、沪深港通、债券通等渠道有序推进双向开放',
            en: 'China capital account not fully open; orderly two-way opening via QFII/RQFII, Stock Connect, Bond Connect'
        }
    },
    {
        id: 'infra-stock-connect',
        name: { zh: '沪深港通', en: 'Stock Connect' },
        description: {
            zh: '沪港通(2014)和深港通(2016)，连接A股与港股的互联互通机制',
            en: 'Shanghai-HK (2014) and Shenzhen-HK (2016) Connect linking A-shares and HK stocks'
        },
        domain: 'institutions', category: 'cross-border', icon: '🔗',
        tags: ['stock-connect', 'northbound', 'southbound', 'hkex'],
        level: 2, parentId: 'infra-cross-border',
        details: {
            zh: '北向资金(外资买A股)是A股重要风向标。南向资金(内资买港股)规模也大幅增长。每日额度限制',
            en: 'Northbound (foreign buying A-shares) is key A-share indicator. Southbound also grew significantly. Daily quota limits'
        }
    },
    {
        id: 'infra-qfii',
        name: { zh: 'QFII/RQFII', en: 'QFII/RQFII' },
        description: {
            zh: '合格境外/人民币合格境外机构投资者，外资进入A股的传统通道',
            en: 'Qualified Foreign/RMB Qualified Foreign Institutional Investors, traditional channel for foreign access to A-shares'
        },
        domain: 'institutions', category: 'cross-border', icon: '🏛️',
        tags: ['qfii', 'rqfii', 'institutional'],
        level: 2, parentId: 'infra-cross-border',
        details: {
            zh: '2020年取消额度限制。QFII/RQFII投资者包括主权基金、养老金、资管公司等大型机构',
            en: 'Quota limits removed in 2020. QFII/RQFII investors include SWFs, pensions, asset managers'
        }
    },
    {
        id: 'infra-bond-connect',
        name: { zh: '债券通', en: 'Bond Connect' },
        description: {
            zh: '境外投资者通过香港进入中国银行间债券市场的渠道(2017年启动)',
            en: 'Channel for overseas investors to access China interbank bond market via Hong Kong (launched 2017)'
        },
        domain: 'institutions', category: 'cross-border', icon: '📜',
        tags: ['bond-connect', 'cibm', 'fixed-income'],
        level: 2, parentId: 'infra-cross-border',
        details: {
            zh: '外资持有中国债券超4万亿元，主要通过债券通渠道。2021年启动南向通',
            en: 'Foreign holdings of China bonds exceed 4T yuan, mainly via Bond Connect. Southbound launched 2021'
        }
    },
    {
        id: 'infra-qdii',
        name: { zh: 'QDII', en: 'QDII' },
        description: {
            zh: '合格境内机构投资者，中国居民投资海外市场的官方渠道',
            en: 'Qualified Domestic Institutional Investors, official channel for Chinese residents to invest overseas'
        },
        domain: 'institutions', category: 'cross-border', icon: '✈️',
        tags: ['qdii', 'outbound', 'overseas'],
        level: 2, parentId: 'infra-cross-border',
        details: {
            zh: 'QDII基金投资美股/港股/海外债券等。额度审批制，需外汇管理局批准',
            en: 'QDII funds invest in US/HK stocks, overseas bonds, etc. Quota approval required from SAFE'
        }
    },

    // --- 美元体系 ---
    {
        id: 'infra-usd-system',
        name: { zh: '美元体系', en: 'US Dollar System' },
        description: {
            zh: '以美元为核心的全球货币金融体系，二战后布雷顿森林体系的延续',
            en: 'Global monetary system centered on USD, continuation of post-WWII Bretton Woods system'
        },
        domain: 'macro', category: 'international', icon: '💵',
        tags: ['dollar', 'reserve-currency', 'hegemony'],
        level: 1,
        details: {
            zh: '美元占全球外汇储备~58%、国际贸易结算~40%、SWIFT报文~45%。美元周期影响全球资产价格',
            en: 'USD ~58% of global FX reserves, ~40% of trade settlement, ~45% of SWIFT messages. Dollar cycle affects global asset prices'
        }
    },
    {
        id: 'infra-petrodollar',
        name: { zh: '石油美元', en: 'Petrodollar' },
        description: {
            zh: '1970年代形成的石油以美元计价结算体系，美元霸权的重要支柱',
            en: 'Oil pricing/settlement in USD formed in 1970s, key pillar of dollar hegemony'
        },
        domain: 'macro', category: 'international', icon: '🛢️',
        tags: ['petrodollar', 'oil', 'saudi', 'opec'],
        level: 2, parentId: 'infra-usd-system',
        details: {
            zh: '1974年美国与沙特达成协议，石油贸易使用美元结算。近年去美元化趋势出现',
            en: '1974 US-Saudi deal established oil trade in USD. De-dollarization trend emerging recently'
        }
    },
    {
        id: 'infra-eurodollar',
        name: { zh: '欧洲美元', en: 'Eurodollar' },
        description: {
            zh: '存放于美国境外银行的美元存款，全球美元流动性的重要来源',
            en: 'USD deposits held in banks outside US, major source of global dollar liquidity'
        },
        domain: 'macro', category: 'international', icon: '🏦',
        tags: ['eurodollar', 'offshore', 'libor'],
        level: 2, parentId: 'infra-usd-system',
        details: {
            zh: '欧洲美元市场规模超过美国国内美元市场。LIBOR曾是其基准利率',
            en: 'Eurodollar market exceeds US domestic market. LIBOR was its benchmark rate'
        }
    },
    {
        id: 'infra-cnh',
        name: { zh: '离岸人民币', en: 'Offshore RMB (CNH)' },
        description: {
            zh: '在中国境外流通的人民币，与在岸人民币(CNY)存在价差',
            en: 'RMB circulating outside mainland China, trades at spread to onshore CNY'
        },
        domain: 'macro', category: 'international', icon: '🇨🇳',
        tags: ['cnh', 'offshore', 'rmb', 'hong-kong'],
        level: 2, parentId: 'infra-usd-system',
        details: {
            zh: '香港是最大离岸人民币中心。CNH/CNY价差反映市场对人民币的预期。点心债是离岸人民币债券',
            en: 'Hong Kong is largest CNH center. CNH/CNY spread reflects RMB expectations. Dim Sum bonds are offshore RMB bonds'
        }
    },

    // --- 支付清算系统 ---
    {
        id: 'infra-payment-system',
        name: { zh: '全球支付清算系统', en: 'Global Payment & Clearing Systems' },
        description: {
            zh: '金融交易结算的"管道"基础设施，确保资金和证券安全转移',
            en: 'Plumbing infrastructure for financial transaction settlement, ensuring safe transfer of funds and securities'
        },
        domain: 'institutions', category: 'infrastructure', icon: '🔧',
        tags: ['payment', 'clearing', 'settlement', 'plumbing'],
        level: 1,
        details: {
            zh: '支付系统是金融体系的"神经系统"。2022年俄罗斯被踢出SWIFT凸显其地缘政治重要性',
            en: 'Payment systems are the "nervous system" of finance. 2022 Russia SWIFT exclusion showed geopolitical importance'
        }
    },
    {
        id: 'infra-swift',
        name: { zh: 'SWIFT', en: 'SWIFT' },
        description: {
            zh: '环球银行金融电信协会，全球银行间报文传输网络',
            en: 'Society for Worldwide Interbank Financial Telecommunication, global bank messaging network'
        },
        domain: 'institutions', category: 'payment', icon: '📧',
        tags: ['swift', 'messaging', 'sanctions'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '连接200+国家11000+金融机构。2022年部分俄罗斯银行被踢出SWIFT作为制裁手段',
            en: 'Connects 11000+ institutions in 200+ countries. 2022 some Russian banks excluded as sanctions tool'
        }
    },
    {
        id: 'infra-cips',
        name: { zh: 'CIPS', en: 'CIPS' },
        description: {
            zh: '人民币跨境支付系统，中国版SWIFT替代方案',
            en: 'Cross-border Interbank Payment System, China alternative to SWIFT'
        },
        domain: 'institutions', category: 'payment', icon: '🇨🇳',
        tags: ['cips', 'rmb', 'china', 'cross-border'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '2015年上线，支持人民币跨境结算。参与机构超1400家，覆盖100+国家',
            en: 'Launched 2015 for RMB cross-border settlement. 1400+ participants across 100+ countries'
        }
    },
    {
        id: 'infra-fedwire',
        name: { zh: 'Fedwire', en: 'Fedwire' },
        description: {
            zh: '美联储运营的实时全额结算系统，美国国内大额支付核心',
            en: 'Fed-operated real-time gross settlement system, core of US domestic large-value payments'
        },
        domain: 'institutions', category: 'payment', icon: '🇺🇸',
        tags: ['fedwire', 'rtgs', 'fed', 'usa'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '日均处理金额超4万亿美元。美元全球结算的最终清算层',
            en: 'Processes $4T+ daily. Ultimate settlement layer for global USD transactions'
        }
    },
    {
        id: 'infra-dtcc',
        name: { zh: 'DTCC', en: 'DTCC' },
        description: {
            zh: '存托信托清算公司，美国证券市场中央清算机构',
            en: 'Depository Trust & Clearing Corporation, central clearinghouse for US securities'
        },
        domain: 'institutions', category: 'clearing', icon: '🏛️',
        tags: ['dtcc', 'clearing', 'settlement', 'usa'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '清算几乎所有美国股票、债券、衍生品交易。年处理金额超2000万亿美元',
            en: 'Clears virtually all US stocks, bonds, derivatives. Processes $2 quadrillion+ annually'
        }
    },
    {
        id: 'infra-euroclear',
        name: { zh: 'Euroclear', en: 'Euroclear' },
        description: {
            zh: '欧洲最大证券结算系统，也是国际债券主要结算平台',
            en: 'Europe largest securities settlement, also major platform for international bonds'
        },
        domain: 'institutions', category: 'clearing', icon: '🇪🇺',
        tags: ['euroclear', 'csds', 'europe', 'bonds'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '与Clearstream并列为国际债券两大结算系统。2022年冻结俄罗斯资产',
            en: 'With Clearstream, one of two major intl bond settlement systems. Froze Russian assets in 2022'
        }
    },
    {
        id: 'infra-csdcc',
        name: { zh: '中国结算', en: 'CSDCC' },
        description: {
            zh: '中国证券登记结算有限公司，A股唯一中央证券存管机构',
            en: 'China Securities Depository and Clearing Corp, sole CSD for A-shares'
        },
        domain: 'institutions', category: 'clearing', icon: '🇨🇳',
        tags: ['csdcc', 'china', 'a-share', 'csd'],
        level: 2, parentId: 'infra-payment-system',
        details: {
            zh: '负责A股股票、基金、债券的登记、存管、清算。T+1交收制度',
            en: 'Handles registration, custody, clearing of A-shares, funds, bonds. T+1 settlement cycle'
        }
    },

    // --- 危机传导机制 ---
    {
        id: 'crisis-mechanism',
        name: { zh: '危机传导机制', en: 'Crisis Transmission Mechanisms' },
        description: {
            zh: '金融危机如何通过金融体系传播和放大的路径和机制',
            en: 'Pathways and mechanisms through which financial crises spread and amplify across the financial system'
        },
        domain: 'macro', category: 'risk', icon: '⚠️',
        tags: ['crisis', 'contagion', 'transmission', 'systemic'],
        level: 1,
        details: {
            zh: '危机传导路径：资产价格下跌→抵押品贬值→强制平仓→进一步抛售→流动性枯竭→信用紧缩→实体经济衰退',
            en: 'Crisis path: asset decline → collateral devaluation → forced liquidation → more selling → liquidity freeze → credit crunch → real economy recession'
        }
    },
    {
        id: 'crisis-2008',
        name: { zh: '2008次贷危机', en: '2008 Subprime Crisis' },
        description: {
            zh: '美国次级抵押贷款危机演变为全球金融海啸，雷曼破产是标志性事件',
            en: 'US subprime mortgage crisis became global financial tsunami; Lehman collapse was landmark event'
        },
        domain: 'macro', category: 'crisis', icon: '💥',
        tags: ['2008', 'subprime', 'lehman', 'gfc'],
        level: 2, parentId: 'crisis-mechanism',
        details: {
            zh: '传导链：次贷违约→MBS/CDO减值→AIG-CDS爆雷→雷曼破产→银行惜贷→经济衰退。Fed救市$4.5T',
            en: 'Chain: subprime defaults → MBS/CDO writedowns → AIG CDS blow-up → Lehman collapse → credit freeze → recession. Fed injected $4.5T'
        }
    },
    {
        id: 'crisis-1997',
        name: { zh: '1997亚洲金融危机', en: '1997 Asian Financial Crisis' },
        description: {
            zh: '始于泰铢崩盘的亚洲货币金融危机，IMF大规模救助',
            en: 'Asian currency crisis starting with Thai baht collapse, massive IMF intervention'
        },
        domain: 'macro', category: 'crisis', icon: '🌏',
        tags: ['1997', 'asian', 'currency', 'imf'],
        level: 2, parentId: 'crisis-mechanism',
        details: {
            zh: '固定汇率制+外债过高+经济过热→国际资本外逃→汇率崩盘→企业倒闭。中国未受波及因资本管制',
            en: 'Fixed rates + high foreign debt + overheating → capital flight → currency collapse → bankruptcies. China unaffected due to capital controls'
        }
    },
    {
        id: 'crisis-2020',
        name: { zh: '2020疫情冲击', en: '2020 COVID Shock' },
        description: {
            zh: '新冠疫情引发的全球金融市场恐慌，美股多次熔断',
            en: 'Global financial panic from COVID-19, multiple US stock circuit breakers'
        },
        domain: 'macro', category: 'crisis', icon: '🦠',
        tags: ['2020', 'covid', 'pandemic', 'circuit-breaker'],
        level: 2, parentId: 'crisis-mechanism',
        details: {
            zh: '3月美股四次熔断。美联储无限QE+零利率+直接购买企业债。史上最快熊转牛',
            en: 'March saw 4 circuit breakers. Fed unlimited QE + zero rates + corporate bond buying. Fastest bear-to-bull ever'
        }
    },
    {
        id: 'crisis-svb',
        name: { zh: 'SVB硅谷银行事件', en: 'SVB Silicon Valley Bank Collapse' },
        description: {
            zh: '2023年硅谷银行挤兑倒闭，引发区域银行危机',
            en: '2023 Silicon Valley Bank run and collapse, triggered regional bank crisis'
        },
        domain: 'macro', category: 'crisis', icon: '🏦',
        tags: ['svb', '2023', 'bank-run', 'duration-risk'],
        level: 2, parentId: 'crisis-mechanism',
        details: {
            zh: '利率快速上升→持有长久期债券减值→储户（科技公司）集中提款→挤兑→48小时破产。Fed设立BTFP救市',
            en: 'Rapid rate hikes → long-duration bond losses → depositor (tech co) run → 48-hour failure. Fed created BTFP backstop'
        }
    },
    {
        id: 'crisis-tbtf',
        name: { zh: '大而不能倒', en: 'Too Big To Fail (TBTF)' },
        description: {
            zh: '系统重要性机构倒闭会引发系统性风险，因此政府被迫救助',
            en: 'Systemically important institutions whose failure would trigger systemic risk, forcing government bailouts'
        },
        domain: 'macro', category: 'risk', icon: '🏛️',
        tags: ['tbtf', 'sifi', 'bailout', 'moral-hazard'],
        level: 2, parentId: 'crisis-mechanism',
        details: {
            zh: 'G-SIB(全球系统重要性银行)需额外资本缓冲。2008年后Dodd-Frank法案强化TBTF监管',
            en: 'G-SIBs require extra capital buffers. Dodd-Frank post-2008 strengthened TBTF regulation'
        }
    },

    // --- 金融信息基础设施(P1预留) ---
    {
        id: 'infra-data-provider',
        name: { zh: '金融数据服务商', en: 'Financial Data Providers' },
        description: {
            zh: '提供金融市场数据、分析工具和信息终端的专业机构',
            en: 'Professional institutions providing financial market data, analytics and information terminals'
        },
        domain: 'institutions', category: 'infrastructure', icon: '📊',
        tags: ['data', 'terminal', 'analytics', 'information'],
        level: 1,
        details: {
            zh: '金融数据是价格发现和投资决策的基础。Bloomberg Terminal年费约$24,000，是机构标配',
            en: 'Financial data is foundation of price discovery and investment decisions. Bloomberg Terminal ~$24K/year, institutional standard'
        }
    },
    {
        id: 'infra-bloomberg',
        name: { zh: '彭博', en: 'Bloomberg' },
        description: {
            zh: '全球最大金融数据和媒体公司，Bloomberg Terminal是机构投资者首选',
            en: 'World\'s largest financial data and media company; Bloomberg Terminal is institutional investor choice'
        },
        domain: 'institutions', category: 'data-provider', icon: '📺',
        tags: ['bloomberg', 'terminal', 'news', 'data'],
        level: 2, parentId: 'infra-data-provider',
        details: {
            zh: 'Michael Bloomberg 1981年创立。终端收入占比~85%。Bloomberg Barclays债券指数是全球债券基准',
            en: 'Founded by Michael Bloomberg in 1981. Terminal revenue ~85%. Bloomberg Barclays Bond Index is global bond benchmark'
        }
    },
    {
        id: 'infra-refinitiv',
        name: { zh: '路孚特', en: 'Refinitiv' },
        description: {
            zh: '原汤森路透金融数据部门，现属伦敦证交所集团',
            en: 'Former Thomson Reuters financial data division, now part of LSEG'
        },
        domain: 'institutions', category: 'data-provider', icon: '📈',
        tags: ['refinitiv', 'reuters', 'eikon', 'lseg'],
        level: 2, parentId: 'infra-data-provider',
        details: {
            zh: 'Eikon终端是Bloomberg主要竞品。2021年被LSEG(伦交所集团)收购',
            en: 'Eikon terminal is main Bloomberg competitor. Acquired by LSEG in 2021'
        }
    },
    {
        id: 'infra-wind',
        name: { zh: '万得', en: 'Wind Information' },
        description: {
            zh: '中国最大金融数据服务商，中国版Bloomberg',
            en: 'China\'s largest financial data provider, China\'s Bloomberg equivalent'
        },
        domain: 'institutions', category: 'data-provider', icon: '🇨🇳',
        tags: ['wind', 'china', 'data', 'terminal'],
        level: 2, parentId: 'infra-data-provider',
        details: {
            zh: '覆盖A股、债券、基金、宏观等全品种数据。国内券商/基金/银行必备工具',
            en: 'Covers A-shares, bonds, funds, macro data. Essential tool for domestic brokers/funds/banks'
        }
    },

    // --- P2: ESG投资 ---
    {
        id: 'instr-esg',
        name: { zh: 'ESG投资', en: 'ESG Investing' },
        description: {
            zh: '环境(E)、社会(S)、治理(G)三大维度的可持续投资策略，是全球资管行业的主流趋势',
            en: 'Sustainable investing across Environmental, Social, Governance dimensions, a mainstream trend in global asset management'
        },
        domain: 'instruments', category: 'investment-style', icon: '🌱',
        tags: ['esg', 'sustainable', 'green', 'sri'],
        riskLevel: 'L2',
        level: 1,
        tradingVenue: 'hybrid',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '全球ESG资产超$40T。主要方法：负面筛选(排除烟草等)、正面筛选(选绿色产业)、影响力投资。MSCI ESG评级是行业标准',
            en: 'Global ESG AUM exceeds $40T. Key approaches: negative screening, positive screening, impact investing. MSCI ESG ratings are industry standard'
        }
    },
    {
        id: 'instr-green-bond',
        name: { zh: '绿色债券', en: 'Green Bonds' },
        description: {
            zh: '专项用于环保/可再生能源等绿色项目的债券',
            en: 'Bonds specifically funding environmental/renewable energy projects'
        },
        domain: 'instruments', category: 'fixed-income', icon: '💚',
        tags: ['green', 'climate', 'sustainable', 'esg'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-esg',
        tradingVenue: 'hybrid',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '全球绿债发行超$1T/年。中国是最大绿债市场之一。绿债框架需第三方认证',
            en: 'Global green bond issuance exceeds $1T/year. China is one of largest markets. Green bond frameworks require third-party verification'
        }
    },
    {
        id: 'instr-esg-etf',
        name: { zh: 'ESG ETF', en: 'ESG ETFs' },
        description: {
            zh: '追踪ESG指数或采用ESG筛选策略的交易型开放式基金',
            en: 'ETFs tracking ESG indices or using ESG screening strategies'
        },
        domain: 'instruments', category: 'fund', icon: '🌿',
        tags: ['etf', 'esg', 'passive', 'sustainable'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-esg',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '代表产品：iShares ESG Aware ETF(ESGU)。ESG ETF规模占比持续上升',
            en: 'Key products: iShares ESG Aware ETF (ESGU). ESG ETF share of AUM continues rising'
        }
    },

    // --- P2: Smart Beta ---
    {
        id: 'instr-smart-beta',
        name: { zh: 'Smart Beta', en: 'Smart Beta' },
        description: {
            zh: '介于主动和被动投资之间的策略，通过因子暴露(如价值、动量)获取超额收益',
            en: 'Strategies between active and passive, seeking excess returns through factor exposure (value, momentum, etc.)'
        },
        domain: 'instruments', category: 'investment-style', icon: '🧠',
        tags: ['smart-beta', 'factor', 'quant', 'alpha'],
        riskLevel: 'L2',
        level: 1,
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '核心理念：传统市值加权指数非最优，因子可系统性获取风险溢价。全球Smart Beta AUM超$1.5T',
            en: 'Core idea: market-cap weighting is suboptimal; factors can systematically capture risk premia. Global Smart Beta AUM exceeds $1.5T'
        }
    },
    {
        id: 'instr-factor-value',
        name: { zh: '价值因子', en: 'Value Factor' },
        description: {
            zh: '投资低市盈率/市净率股票获取价值溢价',
            en: 'Investing in low P/E or P/B stocks to capture value premium'
        },
        domain: 'instruments', category: 'factor', icon: '💰',
        tags: ['value', 'factor', 'fama-french'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-smart-beta',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: 'Fama-French三因子模型核心因子之一。近十年价值跑输成长，但长期有效',
            en: 'Core Fama-French factor. Value underperformed growth in last decade, but historically effective long-term'
        }
    },
    {
        id: 'instr-factor-momentum',
        name: { zh: '动量因子', en: 'Momentum Factor' },
        description: {
            zh: '买入近期表现好的股票，卖出表现差的股票',
            en: 'Buy recent winners, sell recent losers'
        },
        domain: 'instruments', category: 'factor', icon: '🚀',
        tags: ['momentum', 'factor', 'trend'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-smart-beta',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '行为金融学解释：投资者对信息反应不足。动量在市场反转时会有较大回撤',
            en: 'Behavioral explanation: investors underreact to information. Momentum suffers in market reversals'
        }
    },
    {
        id: 'instr-factor-quality',
        name: { zh: '质量因子', en: 'Quality Factor' },
        description: {
            zh: '投资盈利稳定、ROE高、杠杆低的高质量公司',
            en: 'Investing in stable earnings, high ROE, low leverage quality companies'
        },
        domain: 'instruments', category: 'factor', icon: '⭐',
        tags: ['quality', 'factor', 'profitability'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-smart-beta',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '质量因子在经济衰退期表现较好，防御性强。代表产品：iShares MSCI USA Quality Factor ETF(QUAL)',
            en: 'Quality factor performs well in recessions, defensive. Key product: iShares MSCI USA Quality Factor ETF (QUAL)'
        }
    },
    {
        id: 'instr-factor-lowvol',
        name: { zh: '低波动因子', en: 'Low Volatility Factor' },
        description: {
            zh: '低波动股票获得与高波动股票相当的收益，违反传统风险收益理论',
            en: 'Low volatility stocks earn returns similar to high volatility ones, violating traditional risk-return theory'
        },
        domain: 'instruments', category: 'factor', icon: '🛡️',
        tags: ['low-vol', 'factor', 'defensive', 'anomaly'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-smart-beta',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '低波动异象(Low Volatility Anomaly)是金融学经典谜题。可能由机构杠杆约束导致',
            en: 'Low Volatility Anomaly is a classic finance puzzle. May be caused by institutional leverage constraints'
        }
    }
];

// === 跨境资本与基础设施关系 ===
export const crossBorderRelationships: Relationship[] = [
    // --- 跨境渠道层级 ---
    { id: 'cb-1', source: 'infra-cross-border', target: 'infra-stock-connect', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-2', source: 'infra-cross-border', target: 'infra-qfii', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-3', source: 'infra-cross-border', target: 'infra-bond-connect', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-4', source: 'infra-cross-border', target: 'infra-qdii', type: 'provides', strength: 3, bidirectional: false },

    // --- 跨境渠道与交易所关系 ---
    {
        id: 'cb-5', source: 'infra-stock-connect', target: 'inst-hkex', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: '港交所是沪深港通的核心运营方之一', en: 'HKEX is core operator of Stock Connect' }
    },
    {
        id: 'cb-6', source: 'infra-stock-connect', target: 'inst-sse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: '沪港通连接上交所和港交所', en: 'Shanghai-HK Connect links SSE and HKEX' }
    },
    {
        id: 'cb-7', source: 'infra-stock-connect', target: 'inst-szse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: '深港通连接深交所和港交所', en: 'Shenzhen-HK Connect links SZSE and HKEX' }
    },
    {
        id: 'cb-8', source: 'infra-stock-connect', target: 'market-equity', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '沪深港通为境内外投资者提供股票市场双向准入', en: 'Stock Connect provides two-way equity market access' }
    },
    {
        id: 'cb-9', source: 'infra-bond-connect', target: 'market-bond', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '债券通为外资进入中国债券市场提供便利渠道', en: 'Bond Connect provides easy access to China bond market' }
    },
    {
        id: 'cb-10', source: 'infra-qfii', target: 'market-equity', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'QFII机构可投资A股市场', en: 'QFII institutions can invest in A-share market' }
    },
    {
        id: 'cb-11', source: 'infra-qdii', target: 'market-index-sp500', type: 'uses', strength: 2, bidirectional: false,
        explanation: { zh: 'QDII基金可追踪标普500等海外指数', en: 'QDII funds can track S&P 500 and other overseas indices' }
    },

    // --- 美元体系层级 ---
    { id: 'cb-12', source: 'infra-usd-system', target: 'infra-petrodollar', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-13', source: 'infra-usd-system', target: 'infra-eurodollar', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-14', source: 'infra-usd-system', target: 'infra-cnh', type: 'competes_with', strength: 2, bidirectional: true },

    // --- 美元体系与宏观/机构关系 ---
    {
        id: 'cb-15', source: 'inst-fed', target: 'infra-usd-system', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '美联储是美元体系的中枢，其政策决定全球美元流动性', en: 'Fed is USD system hub; its policy determines global dollar liquidity' }
    },
    {
        id: 'cb-16', source: 'infra-usd-system', target: 'macro-capital-flows', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '美元强弱周期直接影响全球跨境资本流动方向', en: 'USD strength cycles directly affect global capital flow direction' }
    },
    {
        id: 'cb-17', source: 'infra-petrodollar', target: 'market-energy', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '石油以美元计价，能源市场与美元体系深度绑定', en: 'Oil priced in USD, energy market deeply tied to dollar system' }
    },

    // --- 支付系统层级 ---
    { id: 'cb-18', source: 'infra-payment-system', target: 'infra-swift', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-19', source: 'infra-payment-system', target: 'infra-cips', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-20', source: 'infra-payment-system', target: 'infra-fedwire', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-21', source: 'infra-payment-system', target: 'infra-dtcc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-22', source: 'infra-payment-system', target: 'infra-euroclear', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-23', source: 'infra-payment-system', target: 'infra-csdcc', type: 'provides', strength: 3, bidirectional: false },

    // --- 支付系统与机构关系 ---
    {
        id: 'cb-24', source: 'infra-swift', target: 'inst-commercial-bank', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'SWIFT是全球银行间通信的基础设施', en: 'SWIFT is infrastructure for global interbank communication' }
    },
    {
        id: 'cb-25', source: 'infra-cips', target: 'inst-pboc', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: 'CIPS由中国人民银行主导建设和监管', en: 'CIPS is led and supervised by PBOC' }
    },
    {
        id: 'cb-26', source: 'infra-fedwire', target: 'inst-fed', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: 'Fedwire由美联储运营', en: 'Fedwire is operated by the Federal Reserve' }
    },
    {
        id: 'cb-27', source: 'infra-dtcc', target: 'inst-exchange', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: 'DTCC为美国交易所提供中央清算服务', en: 'DTCC provides central clearing for US exchanges' }
    },
    {
        id: 'cb-28', source: 'infra-csdcc', target: 'inst-sse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: '中证登是A股的唯一中央存管结算机构', en: 'CSDCC is sole CSD for A-shares' }
    },
    {
        id: 'cb-29', source: 'infra-csdcc', target: 'inst-szse', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: '中证登为深交所提供登记结算服务', en: 'CSDCC provides registration and settlement for SZSE' }
    },

    // --- 危机传导层级 ---
    { id: 'cb-30', source: 'crisis-mechanism', target: 'crisis-2008', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-31', source: 'crisis-mechanism', target: 'crisis-1997', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-32', source: 'crisis-mechanism', target: 'crisis-2020', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-33', source: 'crisis-mechanism', target: 'crisis-svb', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-34', source: 'crisis-mechanism', target: 'crisis-tbtf', type: 'provides', strength: 3, bidirectional: false },

    // --- 危机与宏观/机构关系 ---
    {
        id: 'cb-35', source: 'crisis-2008', target: 'instr-cds', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: 'CDS是2008危机的关键放大器，AIG因CDS敞口被政府救助', en: 'CDS was key amplifier in 2008; AIG was bailed out due to CDS exposure' }
    },
    {
        id: 'cb-36', source: 'crisis-2008', target: 'instr-mbs', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '次级抵押贷款MBS是2008危机的根源', en: 'Subprime MBS was root cause of 2008 crisis' }
    },
    {
        id: 'cb-37', source: 'crisis-2008', target: 'inst-investment-bank', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '雷曼破产，美林/贝尔斯登被收购，华尔街五大投行格局终结', en: 'Lehman failed, Merrill/Bear acquired, ending Big 5 IB era' }
    },
    {
        id: 'cb-38', source: 'crisis-1997', target: 'macro-fx-regime', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '亚洲金融危机导致多国放弃固定汇率制', en: 'Asian crisis led many countries to abandon fixed exchange rates' }
    },
    {
        id: 'cb-39', source: 'crisis-2020', target: 'macro-qe', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '疫情冲击下美联储实施无限QE救市', en: 'Fed implemented unlimited QE to counter COVID shock' }
    },
    {
        id: 'cb-40', source: 'crisis-svb', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: 'SVB倒闭根源是激进加息导致长久期债券大幅减值', en: 'SVB failure rooted in aggressive rate hikes causing long-duration bond losses' }
    },
    {
        id: 'cb-41', source: 'crisis-tbtf', target: 'inst-regulator', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: 'TBTF问题推动了Dodd-Frank等系统重要性机构监管改革', en: 'TBTF concerns drove Dodd-Frank and SIFI regulatory reforms' }
    },
    {
        id: 'cb-42', source: 'macro-crisis', target: 'crisis-mechanism', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '金融危机通过特定机制传导和扩散', en: 'Financial crises spread through specific transmission mechanisms' }
    },

    // --- 数据服务商层级 ---
    { id: 'cb-43', source: 'infra-data-provider', target: 'infra-bloomberg', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-44', source: 'infra-data-provider', target: 'infra-refinitiv', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-45', source: 'infra-data-provider', target: 'infra-wind', type: 'provides', strength: 3, bidirectional: false },

    // --- 数据服务商与机构关系 ---
    {
        id: 'cb-46', source: 'infra-bloomberg', target: 'inst-index-provider', type: 'cooperates_with', strength: 3, bidirectional: true,
        explanation: { zh: 'Bloomberg Barclays指数是全球最重要的债券指数之一', en: 'Bloomberg Barclays Index is one of most important global bond indices' }
    },
    {
        id: 'cb-47', source: 'infra-bloomberg', target: 'inst-investment-bank', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'Bloomberg Terminal是投行交易员的必备工具', en: 'Bloomberg Terminal is essential tool for IB traders' }
    },
    {
        id: 'cb-48', source: 'infra-bloomberg', target: 'inst-fund', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '基金公司使用Bloomberg进行研究和交易', en: 'Fund companies use Bloomberg for research and trading' }
    },
    {
        id: 'cb-49', source: 'infra-wind', target: 'inst-securities', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '万得是中国券商的标配数据工具', en: 'Wind is standard data tool for Chinese brokers' }
    },
    {
        id: 'cb-50', source: 'infra-refinitiv', target: 'inst-lse', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: 'Refinitiv现属于伦交所集团(LSEG)', en: 'Refinitiv is now part of London Stock Exchange Group' }
    },

    // --- 数据服务商竞争关系 ---
    {
        id: 'cb-51', source: 'infra-bloomberg', target: 'infra-refinitiv', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: 'Bloomberg与Refinitiv是全球两大金融数据终端', en: 'Bloomberg and Refinitiv are two major global financial terminals' }
    },

    // --- P2: ESG和Smart Beta关系 ---
    { id: 'cb-52', source: 'instr-esg', target: 'instr-green-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-53', source: 'instr-esg', target: 'instr-esg-etf', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-54', source: 'instr-smart-beta', target: 'instr-factor-value', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-55', source: 'instr-smart-beta', target: 'instr-factor-momentum', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-56', source: 'instr-smart-beta', target: 'instr-factor-quality', type: 'provides', strength: 3, bidirectional: false },
    { id: 'cb-57', source: 'instr-smart-beta', target: 'instr-factor-lowvol', type: 'provides', strength: 3, bidirectional: false },
    {
        id: 'cb-58', source: 'instr-esg', target: 'inst-index-provider', type: 'uses', strength: 2, bidirectional: false,
        explanation: { zh: 'ESG投资依赖MSCI等指数公司的ESG评级', en: 'ESG investing relies on ESG ratings from index providers like MSCI' }
    },
    {
        id: 'cb-59', source: 'instr-smart-beta', target: 'instr-etf', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: 'Smart Beta策略主要通过ETF形式实现', en: 'Smart Beta strategies are primarily implemented via ETFs' }
    }
];
