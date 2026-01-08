import type { Entity, Relationship } from '../types';

// 金融机构领域实体
export const institutionEntities: Entity[] = [
    // === 中央银行体系 ===
    {
        id: 'inst-central-bank',
        name: { zh: '中央银行', en: 'Central Banks' },
        description: { zh: '国家货币政策制定执行机构', en: 'National monetary policy authority' },
        domain: 'institutions', category: 'regulatory', icon: '🏛️',
        tags: ['central-bank', 'monetary'],
        level: 1,
        details: {
            zh: '央行独立性是现代货币政策基石。美联储决策影响全球资产价格',
            en: 'Central bank independence is foundation of modern monetary policy. Fed decisions impact global asset prices'
        }
    },
    {
        id: 'inst-pboc',
        name: { zh: '中国人民银行', en: 'PBOC' },
        description: { zh: '中国的中央银行', en: 'People\'s Bank of China' },
        domain: 'institutions', category: 'central-bank', icon: '🇨🇳',
        tags: ['pboc', 'china'],
        level: 2, parentId: 'inst-central-bank',
        details: {
            zh: 'PBOC通过MLF/LPR引导利率。与美联储不同，缺乏独立性',
            en: 'PBOC guides rates via MLF/LPR. Unlike Fed, lacks independence'
        }
    },
    {
        id: 'inst-fed',
        name: { zh: '美联储', en: 'Federal Reserve' },
        description: { zh: '美国中央银行系统', en: 'US Federal Reserve System' },
        domain: 'institutions', category: 'central-bank', icon: '🇺🇸',
        tags: ['fed', 'usa', 'fomc'],
        level: 2, parentId: 'inst-central-bank',
        details: {
            zh: 'FOMC每年召开8次利率会议。点阵图预测未来利率路径',
            en: 'FOMC holds 8 scheduled meetings per year. Dot plot predicts future rate path'
        }
    },
    {
        id: 'inst-ecb',
        name: { zh: '欧洲央行', en: 'ECB' },
        description: { zh: '欧元区货币政策机构', en: 'European Central Bank' },
        domain: 'institutions', category: 'central-bank', icon: '🇪🇺',
        tags: ['ecb', 'euro', 'europe'],
        level: 2, parentId: 'inst-central-bank',
        details: {
            zh: 'ECB管理欧元区20国货币政策。曾实施负利率和PEPP/APP购债计划',
            en: 'ECB manages monetary policy for 20 eurozone countries. Used negative rates and PEPP/APP bond buying'
        }
    },
    {
        // 华尔街说明: 日本央行是负利率政策的先驱，也是YCC（收益率曲线控制）的首创者
        id: 'inst-boj',
        name: { zh: '日本央行', en: 'Bank of Japan (BOJ)' },
        description: {
            zh: '日本中央银行，负利率政策先驱，首创收益率曲线控制(YCC)政策',
            en: 'Central bank of Japan, pioneer of negative interest rates and Yield Curve Control (YCC) policy'
        },
        domain: 'institutions', category: 'central-bank', icon: '🇯🇵',
        tags: ['boj', 'japan', 'ycc', 'nirp'],
        level: 2, parentId: 'inst-central-bank',
        details: {
            zh: 'BOJ持有日本半ETF、大量JGB。YCC将十年期国债收益率盯住在特定水平',
            en: 'BOJ owns half of Japan ETFs, massive JGBs. YCC pins 10-year yields at target level'
        }
    },
    {
        // 华尔街说明: 英格兰银行是全球最古老的央行之一，1694年成立
        id: 'inst-boe',
        name: { zh: '英格兰银行', en: 'Bank of England (BOE)' },
        description: {
            zh: '英国中央银行，1694年成立，全球最古老的央行之一',
            en: 'Central bank of UK, established in 1694, one of the oldest central banks globally'
        },
        domain: 'institutions', category: 'central-bank', icon: '🇬🇧',
        tags: ['boe', 'uk', 'pound'],
        level: 2, parentId: 'inst-central-bank',
        details: {
            zh: '1992年“黑色星期三”索罗斯狙击英镑，BOE被迫退出ERM',
            en: '1992 "Black Wednesday" Soros attacked sterling, BOE forced to exit ERM'
        }
    },

    // === 商业银行体系 ===
    {
        id: 'inst-commercial-bank',
        name: { zh: '商业银行', en: 'Commercial Banks' },
        description: { zh: '存贷款和支付结算服务', en: 'Deposit, lending, payment services' },
        domain: 'institutions', category: 'depository', icon: '🏦',
        tags: ['bank', 'deposit', 'lending'],
        level: 1,
        details: {
            zh: '商业银行通过存贷利差(NIM)赚取收入。全球最大银行按资产:工行($6T)、建行、农行、中行、JPM',
            en: 'Commercial banks earn via Net Interest Margin (NIM). Largest by assets: ICBC ($6T), CCB, ABC, BOC, JPM'
        }
    },
    {
        id: 'inst-state-bank',
        name: { zh: '国有大型银行', en: 'State-owned Banks' },
        description: { zh: '国有控股的大型商业银行', en: 'Large state-owned commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏛️',
        tags: ['state-owned', 'big-four'],
        level: 2, parentId: 'inst-commercial-bank',
        details: {
            zh: '中国四大行(工建农中)+交行/邮储。美国国有银行概念不强，但JPM/BoA规模类似',
            en: 'China Big 4 (ICBC/CCB/ABC/BOC) + BoCom/PSBC. US has no explicit "state-owned" but JPM/BoA similar scale'
        }
    },
    {
        id: 'inst-joint-bank',
        name: { zh: '股份制银行', en: 'Joint-stock Banks' },
        description: { zh: '股份制商业银行', en: 'Joint-stock commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏢',
        tags: ['joint-stock'],
        level: 2, parentId: 'inst-commercial-bank',
        details: {
            zh: '招行/兴业/浦发/中信/光大/民生/平安等。零售业务较国有行更灵活，招行零售行业第一',
            en: 'CMB/CIB/SPDB/CITIC/CEB/CMBC/PAB, etc. More retail-flexible than state banks; CMB is #1 retail bank'
        }
    },
    {
        id: 'inst-city-bank',
        name: { zh: '城市商业银行', en: 'City Commercial Banks' },
        description: { zh: '地方性城市商业银行', en: 'Regional city commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏙️',
        tags: ['city-bank', 'regional'],
        level: 2, parentId: 'inst-commercial-bank',
        details: {
            zh: '北京银行/上海银行/宁波银行/南京银行等。地方政府背景，业务集中于本地',
            en: 'Bank of Beijing/Shanghai/Ningbo/Nanjing, etc. Local government backing, business concentrated in home regions'
        }
    },

    // === 投资银行 ===
    {
        // 华尔街说明: 华尔街五大投行曾为高盛、摩根士丹利、美林、雷曼、贝尔斯登，2008危机后仅存两家独立投行
        id: 'inst-investment-bank',
        name: { zh: '投资银行', en: 'Investment Banks' },
        description: {
            zh: '提供证券承销、并购咨询、资产管理等服务的专业金融机构，高盛和摩根士丹利是仅存的两家独立大型投行',
            en: 'Financial institutions providing underwriting, M&A advisory, asset management; Goldman Sachs and Morgan Stanley are the last two major independent banks'
        },
        domain: 'institutions', category: 'investment', icon: '🏢',
        tags: ['investment-bank', 'ipo', 'ma', 'goldman', 'morgan-stanley', 'jpmorgan'],
        level: 1,
        details: {
            zh: '全球顶级投行(Bulge Bracket)：Goldman Sachs、JP Morgan、Morgan Stanley、BoA证券。2008年危机中雷曼破产、美林/贝尔斯登被收购',
            en: 'Bulge Bracket: Goldman Sachs, JP Morgan, Morgan Stanley, BoA Securities. Lehman collapsed in 2008; Merrill/Bear Stearns acquired'
        }
    },

    // === 证券机构 ===
    {
        // 华尔街说明: 中国券商与美国的broker-dealer有所不同，兼具经纪、自营、资管、投行多项业务
        id: 'inst-securities',
        name: { zh: '证券公司', en: 'Securities Firms' },
        description: {
            zh: '综合性证券机构，提供经纪、自营、资管、投行等全方位服务，中信证券是中国最大券商',
            en: 'Comprehensive securities institutions providing brokerage, proprietary trading, asset management, and investment banking'
        },
        domain: 'institutions', category: 'investment', icon: '📊',
        tags: ['securities', 'broker', 'citic', 'haitong'],
        level: 1,
        details: {
            zh: '中国Top券商：中信证券、海通证券、华泰证券、国泰君安。美国证券公司模式不同，主要分为全服务券商和折扣券商',
            en: 'China Top: CITIC Securities, Haitong, Huatai, Guotai Junan. US model differs: full-service vs discount brokers'
        }
    },
    {
        // 华尔街说明: IBKR是专业交易者首选，提供全球市场接入和最低交易成本
        id: 'inst-broker',
        name: { zh: '经纪商', en: 'Brokers' },
        description: {
            zh: '为客户执行证券交易的中介机构，IBKR(盈透证券)以超低佣金和全球市场接入著称',
            en: 'Intermediaries executing trades for clients; Interactive Brokers (IBKR) known for ultra-low commissions and global market access'
        },
        domain: 'institutions', category: 'securities', icon: '👔',
        tags: ['broker', 'execution', 'ibkr', 'schwab', 'fidelity', 'robinhood'],
        level: 2, parentId: 'inst-securities',
        details: {
            zh: '主要经纪商：IBKR(专业交易者)、Charles Schwab & TD Ameritrade(合并后最大)、Fidelity、E*TRADE(被Morgan Stanley收购)、Robinhood(零佣金先驱)',
            en: 'Major brokers: IBKR (professionals), Schwab/TD Ameritrade (largest after merger), Fidelity, E*TRADE (Morgan Stanley), Robinhood (zero-commission pioneer)'
        }
    },
    {
        // 华尔街说明: 做市商是市场流动性的核心，赚取买卖价差，承担库存风险
        id: 'inst-market-maker',
        name: { zh: '做市商', en: 'Market Makers' },
        description: {
            zh: '提供买卖双边报价的流动性提供者，赚取买卖价差(bid-ask spread)，承担库存风险',
            en: 'Liquidity providers offering two-sided quotes, earning bid-ask spread while bearing inventory risk'
        },
        domain: 'institutions', category: 'securities', icon: '⚖️',
        tags: ['market-maker', 'liquidity', 'citadel', 'virtu', 'hft', 'bid-ask'],
        level: 2, parentId: 'inst-securities',
        details: {
            zh: 'Citadel Securities/Virtu是最大电子做市商，处理约40%美股成交量。做市商用HFT高频交易技术，毫秒级响应',
            en: 'Citadel Securities/Virtu are largest electronic MMs, handling ~40% US equity volume. MMs use HFT technology for millisecond response'
        }
    },

    // === 资产管理 ===
    {
        // 华尔街说明: 全球最大资管公司BlackRock管理超过10万亿美元资产
        id: 'inst-fund',
        name: { zh: '基金公司', en: 'Fund Companies' },
        description: {
            zh: '管理各类投资基金的专业机构，全球最大资管公司BlackRock管理资产超过11.5万亿美元',
            en: 'Professional institutions managing investment funds; BlackRock, the largest, manages over $11.5 trillion'
        },
        domain: 'institutions', category: 'investment', icon: '💼',
        tags: ['fund', 'asset-management', 'blackrock', 'vanguard', 'fidelity'],
        level: 1,
        details: {
            zh: '全球Top5资管公司：BlackRock($11.5T+)、Vanguard($9T+)、UBS($5T+)、State Street($4T+)、Fidelity($4.5T+)',
            en: 'Global Top 5 Asset Managers: BlackRock($11.5T+), Vanguard($9T+), UBS($5T+), State Street($4T+), Fidelity($4.5T+)'
        }
    },
    {
        // 华尔街说明: Vanguard创始人John Bogle发明了指数基金，改变了整个行业
        id: 'inst-mutual-fund',
        name: { zh: '公募基金', en: 'Mutual Funds' },
        description: {
            zh: '面向公众开放认购的集合投资工具，Vanguard创始人John Bogle 1976年推出首只指数基金',
            en: 'Publicly offered collective investments; Vanguard founder John Bogle launched the first index fund in 1976'
        },
        domain: 'institutions', category: 'fund', icon: '📈',
        tags: ['mutual-fund', 'public', 'vanguard', 'index-fund'],
        level: 2, parentId: 'inst-fund',
        details: {
            zh: '代表机构：Vanguard(指数基金先驱)、Fidelity(主动管理)、易方达/华夏(中国)。费率竞争激烈，被动基金费率可低至0.03%',
            en: 'Key players: Vanguard (index pioneer), Fidelity (active management). Fee competition intense, passive fees as low as 0.03%'
        }
    },
    {
        // 华尔街说明: Bridgewater是全球最大对冲基金，Renaissance Medallion是历史收益最高的基金
        id: 'inst-private-fund',
        name: { zh: '私募基金', en: 'Private Funds' },
        description: {
            zh: '面向合格投资者的私募投资，包括对冲基金和PE，Bridgewater管理规模约1200亿美元',
            en: 'Private investment for qualified investors, including hedge funds and PE; Bridgewater manages ~$120B'
        },
        domain: 'institutions', category: 'fund', icon: '🔒',
        tags: ['private-equity', 'hedge-fund', 'bridgewater', 'renaissance', 'kkr', 'blackstone'],
        level: 2, parentId: 'inst-fund',
        details: {
            zh: '对冲基金代表：Bridgewater(全天候策略)、Renaissance(量化之王Medallion年化66%)、Two Sigma。PE代表：Blackstone、KKR、Carlyle',
            en: 'Hedge funds: Bridgewater (All Weather), Renaissance (Medallion 66% annual), Two Sigma. PE: Blackstone, KKR, Carlyle'
        }
    },
    {
        // 华尔街说明: CalPERS是全美最大公共养老金，其投资决策影响整个市场
        id: 'inst-pension',
        name: { zh: '养老金/退休基金', en: 'Pension Funds' },
        description: {
            zh: '管理退休养老金的长期投资机构，CalPERS(加州公务员养老金)管理规模超5000亿美元',
            en: 'Long-term investors managing retirement funds; CalPERS manages $500B+, influencing market-wide decisions'
        },
        domain: 'institutions', category: 'fund', icon: '👴',
        tags: ['pension', 'retirement', 'calpers', 'gpif', 'long-term'],
        level: 2, parentId: 'inst-fund',
        details: {
            zh: '全球Top养老金：日本GPIF($1.7T全球最大)、挪威GPFG、荷兰ABP、CalPERS。养老金是ESG投资最重要的推动力量',
            en: 'Global Top Pensions: Japan GPIF ($1.7T, largest), Norway GPFG, Dutch ABP, CalPERS. Pensions drive ESG investing'
        }
    },
    {
        // 华尔街说明: 挪威主权基金是全球最大，持有全球约1.5%上市公司股份
        id: 'inst-sovereign-fund',
        name: { zh: '主权财富基金', en: 'Sovereign Wealth Funds' },
        description: {
            zh: '国家管理的投资基金，挪威GPFG规模超1.7万亿美元，持有全球约1.5%上市公司股份',
            en: 'State-owned investment funds; Norway\'s GPFG exceeds $1.7T, owning ~1.5% of all listed companies globally'
        },
        domain: 'institutions', category: 'fund', icon: '🌍',
        tags: ['swf', 'sovereign', 'gpfg', 'gic', 'cic', 'adia'],
        level: 2, parentId: 'inst-fund',
        details: {
            zh: '主要SWF：挪威GPFG(石油收入)、中投CIC(外汇储备)、阿布扎比ADIA(石油)、新加坡GIC/淡马锡。SWF通常追求长期稳定回报',
            en: 'Major SWFs: Norway GPFG (oil), China CIC (FX reserves), Abu Dhabi ADIA (oil), Singapore GIC/Temasek. SWFs seek long-term stable returns'
        }
    },

    // === 保险机构 ===
    {
        id: 'inst-insurance',
        name: { zh: '保险公司', en: 'Insurance Companies' },
        description: { zh: '提供风险保障服务', en: 'Risk protection services' },
        domain: 'institutions', category: 'insurance', icon: '🛡️',
        tags: ['insurance', 'risk'],
        level: 1,
        details: {
            zh: '全球最大保险公司:平安/安联(Allianz)/友邦(AIA)/保诚(Prudential)。保险资金是长期投资的重要来源',
            en: 'Largest insurers: Ping An/Allianz/AIA/Prudential. Insurance funds are major long-term investment sources'
        }
    },
    {
        id: 'inst-life-insurance',
        name: { zh: '人寿保险', en: 'Life Insurance' },
        description: { zh: '人寿和健康保险', en: 'Life and health insurance' },
        domain: 'institutions', category: 'insurance', icon: '❤️',
        tags: ['life', 'health'],
        level: 2, parentId: 'inst-insurance',
        details: {
            zh: '中国国寿/平安寿险/新华保险。寿险备付金是最大的机构投资者之一，偏好长久期債券',
            en: 'China Life/Ping An Life/New China Life. Life insurance reserves are among largest institutional investors, favor long-term bonds'
        }
    },
    {
        id: 'inst-property-insurance',
        name: { zh: '财产保险', en: 'Property Insurance' },
        description: { zh: '财产和意外保险', en: 'Property and casualty insurance' },
        domain: 'institutions', category: 'insurance', icon: '🏠',
        tags: ['property', 'casualty'],
        level: 2, parentId: 'inst-insurance',
        details: {
            zh: '人保财险/平安产险/太保产险。财险以车险为主，赔付率(Combined Ratio)是核心指标',
            en: 'PICC/Ping An P&C/CPIC. Auto insurance dominant. Combined Ratio is key metric (<100% = underwriting profit)'
        }
    },
    {
        id: 'inst-reinsurance',
        name: { zh: '再保险', en: 'Reinsurance' },
        description: { zh: '保险公司的保险', en: 'Insurance for insurers' },
        domain: 'institutions', category: 'insurance', icon: '♻️',
        tags: ['reinsurance'],
        level: 2, parentId: 'inst-insurance',
        details: {
            zh: '全球Top再保险:慕尼黑再保(Munich Re)/瑞士再保(Swiss Re)/汉诺威再保。转移巨灾风险',
            en: 'Top reinsurers: Munich Re/Swiss Re/Hannover Re. Transfer catastrophe risks from primary insurers'
        }
    },

    // === 监管机构 ===
    {
        id: 'inst-regulator',
        name: { zh: '金融监管机构', en: 'Financial Regulators' },
        description: { zh: '金融市场监督管理', en: 'Financial market supervision' },
        domain: 'institutions', category: 'regulatory', icon: '⚖️',
        tags: ['regulator', 'supervision'],
        level: 1,
        details: {
            zh: '中国"一行一局一会"监管体系。美国分业监管(SEC/CFTC/Fed)。英国统一监管(FCA)',
            en: 'China: "One Bank, One Bureau, One Commission". US: sectoral (SEC/CFTC/Fed). UK: unified (FCA)'
        }
    },
    {
        id: 'inst-csrc',
        name: { zh: '证监会', en: 'Securities Regulator' },
        description: { zh: '证券市场监管机构', en: 'Securities market regulator' },
        domain: 'institutions', category: 'regulator', icon: '📋',
        tags: ['csrc', 'sec'],
        level: 2, parentId: 'inst-regulator',
        details: {
            zh: '证监会监管股票发行、基金、期货。注册制改革后，IPO审核权下放到交易所',
            en: 'CSRC oversees stock issuance, funds, futures. After registration reform, IPO review shifted to exchanges'
        }
    },
    {
        // 华尔街说明: 2023年中国金融监管体制改革，银保监会撤销，设立国家金融监管总局
        id: 'inst-nfra',
        name: { zh: '国家金融监管总局', en: 'National Financial Regulatory Administration' },
        description: {
            zh: '2023年设立，统一监管银行业、保险业和金融控股公司，取代原银保监会',
            en: 'Established in 2023, unified regulator for banking, insurance, and financial holding companies, replacing former CBIRC'
        },
        domain: 'institutions', category: 'regulator', icon: '🏛️',
        tags: ['nfra', 'banking', 'insurance', 'fhc'],
        level: 2, parentId: 'inst-regulator',
        details: {
            zh: '2023年机构改革:原银保监会+人行金融消费保护职能合并。金融控股公司纳入监管',
            en: '2023 reform: merged CBIRC + PBOC consumer protection. Financial holding companies now regulated'
        }
    },
    {
        // 华尔街说明: SEC是全球最具影响力的证券监管机构
        id: 'inst-sec',
        name: { zh: '美国证监会', en: 'SEC' },
        description: {
            zh: '美国证券交易委员会，全球最具影响力的证券监管机构，监管标准影响全球',
            en: 'Securities and Exchange Commission, most influential securities regulator globally'
        },
        domain: 'institutions', category: 'regulator', icon: '🇺🇸',
        tags: ['sec', 'usa', 'securities'],
        level: 2, parentId: 'inst-regulator',
        details: {
            zh: 'SEC主席Gary Gensler推动加密监管和气候披露。Regulation S-K/NMS是全球证券监管标杆',
            en: 'SEC Chair Gary Gensler pushed crypto regulation and climate disclosure. Reg S-K/NMS are global benchmarks'
        }
    },

    // === 金融基础设施 ===
    {
        id: 'inst-exchange',
        name: { zh: '交易所', en: 'Exchanges' },
        description: { zh: '证券和衍生品交易平台', en: 'Securities and derivatives trading venues' },
        domain: 'institutions', category: 'infrastructure', icon: '🏛️',
        tags: ['exchange', 'trading-venue'],
        level: 1,
        details: {
            zh: '全球最大证券交易所:纽交所($27T市值)。期货交易所:CME集团。交易所企业化后追求利润',
            en: 'Largest stock exchange: NYSE ($27T market cap). Futures: CME Group. Demutualized exchanges now profit-seeking'
        }
    },
    {
        id: 'inst-clearing',
        name: { zh: '清算机构', en: 'Clearing Houses' },
        description: { zh: '交易清算和结算服务', en: 'Trade clearing and settlement' },
        domain: 'institutions', category: 'infrastructure', icon: '⚙️',
        tags: ['clearing', 'settlement', 'ccp'],
        level: 1,
        details: {
            zh: '中央对手方(CCP)降低违约风险。中国中证登/中结算，美国DTCC/CME Clearing',
            en: 'Central Counterparty (CCP) reduces default risk. China: CSDCC/Shanghai Clearing, US: DTCC/CME Clearing'
        }
    },

    // === 主要交易所 ===
    {
        id: 'inst-nyse',
        name: { zh: '纽约证券交易所', en: 'NYSE' },
        description: { zh: '全球最大的证券交易所，按上市公司市值计', en: 'World\'s largest stock exchange by market capitalization' },
        domain: 'institutions', category: 'exchange', icon: '🇺🇸',
        tags: ['nyse', 'usa', 'equity'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '开盘钟声、收盘铃声是全球金融标志。ICE旗下。市值约$27万亿',
            en: 'Opening bell, closing bell are global icons. Owned by ICE. ~$27T market cap'
        }
    },
    {
        id: 'inst-nasdaq',
        name: { zh: '纳斯达克', en: 'NASDAQ' },
        description: { zh: '全球首个电子证券交易所，科技股集中地', en: 'First electronic stock exchange, home to tech giants' },
        domain: 'institutions', category: 'exchange', icon: '💻',
        tags: ['nasdaq', 'tech', 'usa'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: 'Apple/Microsoft/Amazon/Google/Meta等科技巨头主要上市地。QQQ跟踪NASDAQ-100',
            en: 'Home to Apple/Microsoft/Amazon/Google/Meta. QQQ tracks NASDAQ-100'
        }
    },
    {
        id: 'inst-sse',
        name: { zh: '上海证券交易所', en: 'Shanghai Stock Exchange' },
        description: { zh: '中国大陆最大证券交易所', en: 'Largest stock exchange in mainland China' },
        domain: 'institutions', category: 'exchange', icon: '🇨🇳',
        tags: ['sse', 'china', 'a-share'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '科创板2019年设立，采用注册制。沪深港通连接境内外资金',
            en: 'STAR Market 2019, registration system. Stock Connect links domestic/foreign capital'
        }
    },
    {
        id: 'inst-szse',
        name: { zh: '深圳证券交易所', en: 'Shenzhen Stock Exchange' },
        description: { zh: '中国第二大证券交易所，创业板所在地', en: 'Second largest in China, home to ChiNext' },
        domain: 'institutions', category: 'exchange', icon: '🇨🇳',
        tags: ['szse', 'china', 'chinext'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '创业板(“中国纳斯达克”)登记于深交所。科技与成长型企业为主',
            en: 'ChiNext ("China NASDAQ") listed on SZSE. Mainly tech and growth companies'
        }
    },
    {
        id: 'inst-hkex',
        name: { zh: '香港交易所', en: 'HKEX' },
        description: { zh: '亚洲领先的交易所，连接中国与国际市场', en: 'Asia\'s leading exchange connecting China with global markets' },
        domain: 'institutions', category: 'exchange', icon: '🇭🇰',
        tags: ['hkex', 'hong-kong', 'stock-connect'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '沪港通/深港通连接内地资金。中概股IPO首选地',
            en: 'Stock Connect links mainland capital. Top choice for Chinese company IPOs'
        }
    },
    {
        id: 'inst-tse',
        name: { zh: '东京证券交易所', en: 'Tokyo Stock Exchange' },
        description: { zh: '日本最大证券交易所，亚洲第二大', en: 'Japan\'s largest stock exchange, second in Asia' },
        domain: 'institutions', category: 'exchange', icon: '🇯🇵',
        tags: ['tse', 'japan', 'nikkei'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '日经225指数和TOPIX是主要基准。2022年整合为三大板块',
            en: 'Nikkei 225 and TOPIX are main benchmarks. Reorganized into 3 segments in 2022'
        }
    },
    {
        id: 'inst-lse',
        name: { zh: '伦敦证券交易所', en: 'London Stock Exchange' },
        description: { zh: '欧洲最大证券交易所之一，全球金融中心', en: 'One of Europe\'s largest exchanges, global financial hub' },
        domain: 'institutions', category: 'exchange', icon: '🇬🇧',
        tags: ['lse', 'uk', 'ftse'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: 'FTSE 100是主要指数。AIM板块服务中小企业',
            en: 'FTSE 100 is main index. AIM segment serves smaller companies'
        }
    },
    {
        id: 'inst-cme',
        name: { zh: '芝加哥商业交易所', en: 'CME Group' },
        description: { zh: '全球最大的衍生品交易所，期货期权交易中心', en: 'World\'s largest derivatives exchange for futures and options' },
        domain: 'institutions', category: 'exchange', icon: '📊',
        tags: ['cme', 'futures', 'derivatives', 'usa'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '产品线:股指/利率/外汇/商品。E-mini S&P 500是最活跃的股指期货',
            en: 'Products: equity index/rates/FX/commodities. E-mini S&P 500 most active equity index futures'
        }
    },
    {
        id: 'inst-ice',
        name: { zh: '洲际交易所', en: 'ICE' },
        description: { zh: '运营商品、金融和股权期货交易所', en: 'Operates commodity, financial, and equity futures exchanges' },
        domain: 'institutions', category: 'exchange', icon: '🌐',
        tags: ['ice', 'commodities', 'nyse-parent'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: 'ICE旗下NYSE。布伦特原油期货在ICE交易',
            en: 'ICE owns NYSE. Brent crude oil futures trade on ICE'
        }
    },
    {
        // 华尔街说明: 北交所2021年设立，服务创新型中小企业，专精特新"小巨人"
        id: 'inst-bse',
        name: { zh: '北京证券交易所', en: 'Beijing Stock Exchange (BSE)' },
        description: {
            zh: '2021年设立，服务创新型中小企业，专精特新"小巨人"企业上市首选',
            en: 'Established in 2021, serving innovative SMEs and "Little Giant" specialized enterprises'
        },
        domain: 'institutions', category: 'exchange', icon: '🇨🇳',
        tags: ['bse', 'china', 'sme', 'innovation'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: '由新三板精选层升级而来。上市门槛低于科创板/创业板',
            en: 'Upgraded from NEEQ Select. Lower listing bar than STAR/ChiNext'
        }
    },
    {
        // 华尔街说明: CBOE是期权交易的发源地，VIX指数的发布者
        id: 'inst-cboe',
        name: { zh: '芝加哥期权交易所', en: 'CBOE Global Markets' },
        description: {
            zh: '全球最大期权交易所，VIX恐慌指数发布方，1973年推出首个标准化股票期权',
            en: 'Largest options exchange globally, VIX publisher, launched first standardized stock options in 1973'
        },
        domain: 'institutions', category: 'exchange', icon: '📊',
        tags: ['cboe', 'options', 'vix', 'usa'],
        level: 2, parentId: 'inst-exchange',
        details: {
            zh: 'SPX期权是全球流动性最好的指数期权。VIX"恐惧指数"由CBOE发布',
            en: 'SPX options most liquid index options globally. VIX "fear index" published by CBOE'
        }
    },

    // === 其他金融机构 ===
    {
        id: 'inst-rating',
        name: { zh: '评级机构', en: 'Rating Agencies' },
        description: { zh: '信用评级服务', en: 'Credit rating services' },
        domain: 'institutions', category: 'service', icon: '⭐',
        tags: ['rating', 'credit'],
        level: 1,
        details: {
            zh: '三大评级机构:S&P/Moody\'s/Fitch，被称为"寡头"。2008年后因过高评级受诉讼挑战',
            en: 'Big Three: S&P/Moody\'s/Fitch, called "oligopoly". Post-2008 faced litigation for over-rating'
        }
    },
    {
        id: 'inst-fintech',
        name: { zh: '金融科技公司', en: 'FinTech Companies' },
        description: { zh: '技术驱动的金融服务', en: 'Technology-driven financial services' },
        domain: 'institutions', category: 'emerging', icon: '💻',
        tags: ['fintech', 'digital'],
        level: 1
    },

    // === 市场基础设施机构 (P0新增) ===
    {
        // 华尔街说明: 做市商是市场流动性的核心来源，通过持续提供买卖报价赚取价差
        // 代表机构: Citadel Securities, Virtu Financial, Jane Street
        id: 'inst-market-maker',
        name: { zh: '做市商', en: 'Market Makers' },
        description: {
            zh: '持续提供买卖双边报价的金融机构，通过买卖价差(Bid-Ask Spread)获利，是市场流动性的核心来源',
            en: 'Institutions providing continuous two-sided quotes, profiting from bid-ask spreads, core liquidity providers in markets'
        },
        domain: 'institutions', category: 'trading', icon: '📊',
        tags: ['market-maker', 'liquidity', 'spread', 'citadel', 'virtu'],
        level: 1,
        details: {
            zh: '做市商承担库存风险，在市场波动时可能遭受损失。高频做市商(HFT)利用技术优势实现毫秒级报价更新',
            en: 'Market makers bear inventory risk and may suffer losses during volatility. HFT market makers use technology for millisecond quote updates'
        }
    },
    {
        // 华尔街说明: 主经纪商是Archegos事件的核心角色，为对冲基金提供融资融券、托管等一站式服务
        id: 'inst-prime-broker',
        name: { zh: '主经纪商', en: 'Prime Brokers' },
        description: {
            zh: '为对冲基金提供融资融券、证券借贷、托管清算等一站式服务的投行部门，Archegos爆仓事件的核心角色',
            en: 'Investment bank divisions providing financing, securities lending, custody to hedge funds; central to Archegos collapse'
        },
        domain: 'institutions', category: 'investment', icon: '🏦',
        tags: ['prime-broker', 'hedge-fund', 'margin', 'leverage', 'archegos'],
        level: 2, parentId: 'inst-investment-bank',
        details: {
            zh: '主经纪商向对冲基金提供杠杆，收取融资利息和交易佣金。2021年Archegos违约导致Credit Suisse等主经纪商损失超100亿美元',
            en: 'Prime brokers provide leverage to hedge funds, earning financing interest and commissions. Archegos default in 2021 caused $10B+ losses to Credit Suisse and others'
        }
    },
    {
        // 华尔街说明: 托管行是资产安全的"保险箱"，负责证券保管和资金结算
        // 代表机构: BNY Mellon, State Street, Northern Trust
        id: 'inst-custodian',
        name: { zh: '托管行', en: 'Custodians' },
        description: {
            zh: '为机构投资者保管证券资产、处理交易结算的专业银行，确保资产安全隔离',
            en: 'Banks safeguarding securities and processing settlements for institutional investors, ensuring asset segregation'
        },
        domain: 'institutions', category: 'infrastructure', icon: '🔐',
        tags: ['custodian', 'safekeeping', 'settlement', 'bny-mellon', 'state-street'],
        level: 1,
        details: {
            zh: '托管资产规模通常以万亿美元计。BNY Mellon和State Street是全球最大的托管行，合计托管资产超过80万亿美元',
            en: 'Custody assets typically measured in trillions. BNY Mellon and State Street are largest global custodians with $80T+ combined'
        }
    },
    {
        // 华尔街说明: 指数公司决定哪些股票被纳入指数，影响数万亿美元被动资金流向
        // 代表机构: MSCI, S&P Dow Jones Indices, FTSE Russell
        id: 'inst-index-provider',
        name: { zh: '指数公司', en: 'Index Providers' },
        description: {
            zh: '设计和维护股票指数的机构，决定指数成分股纳入/剔除，影响数万亿美元被动资金流向',
            en: 'Institutions designing and maintaining stock indices, determining inclusion/exclusion, influencing trillions in passive flows'
        },
        domain: 'institutions', category: 'service', icon: '📈',
        tags: ['index', 'msci', 'sp-dji', 'ftse-russell', 'passive'],
        level: 1,
        details: {
            zh: 'MSCI新兴市场指数纳入/剔除决定可导致单日数十亿美元资金流动。被动投资占比提升使指数公司影响力日益增强',
            en: 'MSCI EM index inclusion/exclusion can trigger billions in single-day flows. Rising passive investing increases index provider influence'
        }
    },

    // ========================================
    // L3 具体机构实体
    // ========================================

    // === 顶级投行 ===
    {
        id: 'inst-goldman',
        name: { zh: '高盛集团', en: 'Goldman Sachs' },
        description: {
            zh: '全球最具影响力的投行之一，在并购咨询、交易业务领域处于领先地位，被誉为"华尔街之王"',
            en: 'One of the most influential investment banks; leader in M&A advisory and trading, known as "King of Wall Street"'
        },
        domain: 'institutions', category: 'investment', icon: '🏆',
        tags: ['goldman', 'bulge-bracket', 'gs', 'trading'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '成立于1869年，2008年转型为银行控股公司。核心业务：投行(IBD)、交易(FICC/Equities)、资管(GSAM)。CEO Solomon领导转型',
            en: 'Founded 1869, became bank holding in 2008. Core: IBD, Trading (FICC/Equities), GSAM. CEO Solomon leading transformation'
        }
    },
    {
        id: 'inst-jpmorgan',
        name: { zh: '摩根大通', en: 'JP Morgan' },
        description: {
            zh: '全球最大的综合性银行之一，横跨投行、商业银行、资管三大领域，CEO Jamie Dimon是全球金融界最有影响力的银行家',
            en: 'One of largest universal banks spanning IB, commercial banking, and asset management; CEO Jamie Dimon is most influential banker globally'
        },
        domain: 'institutions', category: 'investment', icon: '🏛️',
        tags: ['jpmorgan', 'jpm', 'dimon', 'universal-bank'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '总资产超4万亿美元。2023年收购First Republic银行。投行业务排名常年全球第一。JPM是道琼斯工业指数成分股',
            en: 'Total assets $4T+. Acquired First Republic in 2023. Investment banking consistently #1 globally. Dow Jones component'
        }
    },
    {
        id: 'inst-morgan-stanley',
        name: { zh: '摩根士丹利', en: 'Morgan Stanley' },
        description: {
            zh: '全球顶级投行之一，财富管理规模行业领先，核心竞争力在于股票和并购业务',
            en: 'Top global investment bank with industry-leading wealth management; core strengths in equities and M&A'
        },
        domain: 'institutions', category: 'investment', icon: '💎',
        tags: ['morgan-stanley', 'ms', 'wealth'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '收购E*TRADE和Eaton Vance后财富管理规模大幅提升。与高盛是仅存的两家独立大型投行',
            en: 'Wealth management expanded after E*TRADE and Eaton Vance acquisitions. One of two remaining independent major investment banks with Goldman'
        }
    },

    // === 顶级资管 ===
    {
        id: 'inst-blackrock',
        name: { zh: '贝莱德', en: 'BlackRock' },
        description: {
            zh: '全球最大的资产管理公司，管理资产超过10万亿美元，旗下iShares是全球最大ETF品牌',
            en: 'World\'s largest asset manager with $10T+ AUM; iShares is the largest ETF brand globally'
        },
        domain: 'institutions', category: 'fund', icon: '⬛',
        tags: ['blackrock', 'ishares', 'aladdin', 'passive'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: '创始人Larry Fink倡导ESG投资。Aladdin是其核心风控平台，被众多机构使用。iShares覆盖全球主要ETF市场',
            en: 'Founder Larry Fink champions ESG investing. Aladdin is core risk platform used by many institutions. iShares dominates global ETF markets'
        }
    },
    {
        id: 'inst-vanguard',
        name: { zh: '先锋集团', en: 'Vanguard' },
        description: {
            zh: '全球第二大资管公司，指数基金的先驱，创始人John Bogle被誉为"指数基金之父"',
            en: 'Second largest asset manager; index fund pioneer, founder John Bogle known as "Father of Index Funds"'
        },
        domain: 'institutions', category: 'fund', icon: '🚢',
        tags: ['vanguard', 'bogle', 'index', 'low-cost'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: '1976年推出首只指数共同基金。独特的互助结构使基金持有人同时是公司所有者。费率降至0.03%以下',
            en: '1976 launched first index mutual fund. Unique mutual structure makes fund holders the company owners. Fees below 0.03%'
        }
    },

    // === 顶级对冲基金 ===
    {
        id: 'inst-bridgewater',
        name: { zh: '桥水基金', en: 'Bridgewater' },
        description: {
            zh: '全球最大对冲基金，创始人Ray Dalio发明"全天候策略"，管理规模超1500亿美元',
            en: 'World\'s largest hedge fund; founder Ray Dalio invented "All Weather" strategy, AUM $150B+'
        },
        domain: 'institutions', category: 'fund', icon: '🌊',
        tags: ['bridgewater', 'dalio', 'all-weather', 'macro'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Ray Dalio著有《原则》，倡导极度透明文化。全天候策略：四象限配置应对经济周期(增长/通胀×高低)',
            en: 'Ray Dalio wrote "Principles", advocates radical transparency. All Weather: 4-quadrant allocation for economic cycles (growth/inflation × high/low)'
        }
    },
    {
        id: 'inst-renaissance',
        name: { zh: '文艺复兴科技', en: 'Renaissance Technologies' },
        description: {
            zh: '最成功的量化对冲基金，Medallion基金年化收益率超过60%，创始人Jim Simons被誉为"量化之神"',
            en: 'Most successful quant hedge fund; Medallion fund 60%+ annual returns, founder Jim Simons known as "Quant God"'
        },
        domain: 'institutions', category: 'fund', icon: '🧮',
        tags: ['renaissance', 'simons', 'medallion', 'quant'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Medallion基金仅对内部员工开放，1988年来年化收益66%(扣费前)。Jim Simons为前数学家，专注统计套利',
            en: 'Medallion fund internal only; 66% annual returns since 1988 (pre-fee). Jim Simons was mathematician, focus on statistical arbitrage'
        }
    },
    {
        id: 'inst-citadel',
        name: { zh: '城堡投资', en: 'Citadel' },
        description: {
            zh: '全球顶级对冲基金和做市商，创始人Ken Griffin同时拥有独立的做市商Citadel Securities',
            en: 'Top global hedge fund and market maker; founder Ken Griffin also owns separate market maker Citadel Securities'
        },
        domain: 'institutions', category: 'fund', icon: '🏰',
        tags: ['citadel', 'griffin', 'market-making', 'multi-strategy'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: '2022年收益160亿美元创对冲基金历史纪录。Citadel Securities是全球最大股票做市商，处理约25%美股交易量',
            en: '2022 $16B profit broke hedge fund records. Citadel Securities is largest equities market maker, handles ~25% of US stock volume'
        }
    },

    // === 顶级券商 ===
    {
        id: 'inst-ibkr',
        name: { zh: '盈透证券', en: 'Interactive Brokers' },
        description: {
            zh: '全球专业交易者首选经纪商，以超低佣金、全球市场接入和强大的交易平台著称',
            en: 'Professional traders\' preferred broker; known for ultra-low commissions, global market access, and powerful trading platform'
        },
        domain: 'institutions', category: 'securities', icon: '📊',
        tags: ['ibkr', 'professional', 'global', 'tws'],
        level: 3, parentId: 'inst-broker',
        details: {
            zh: '创始人Thomas Peterffy被誉为"电子交易之父"。TWS交易平台功能强大。保证金利率业内最低',
            en: 'Founder Thomas Peterffy known as "Father of Electronic Trading". TWS platform is industry-leading. Lowest margin rates'
        }
    },
    {
        id: 'inst-schwab',
        name: { zh: '嘉信理财', en: 'Charles Schwab' },
        description: {
            zh: '美国最大零售经纪商(与TD Ameritrade合并后)，以低成本和优质服务著称',
            en: 'Largest US retail broker (after TD Ameritrade merger); known for low costs and quality service'
        },
        domain: 'institutions', category: 'securities', icon: '🔵',
        tags: ['schwab', 'td-ameritrade', 'retail', 'ria'],
        level: 3, parentId: 'inst-broker',
        details: {
            zh: '2020年收购TD Ameritrade，成为全美最大零售券商。管理资产超8万亿美元。零佣金先驱之一',
            en: '2020 TD Ameritrade acquisition created largest US retail broker. $8T+ assets. Pioneer of zero-commission trading'
        }
    }
];

// 金融机构关系
export const institutionRelationships: Relationship[] = [
    // 中央银行层级
    { id: 'ir-1', source: 'inst-central-bank', target: 'inst-pboc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-2', source: 'inst-central-bank', target: 'inst-fed', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-3', source: 'inst-central-bank', target: 'inst-ecb', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-3a', source: 'inst-central-bank', target: 'inst-boj', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-3b', source: 'inst-central-bank', target: 'inst-boe', type: 'provides', strength: 3, bidirectional: false },

    // 商业银行层级
    { id: 'ir-4', source: 'inst-commercial-bank', target: 'inst-state-bank', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-5', source: 'inst-commercial-bank', target: 'inst-joint-bank', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-6', source: 'inst-commercial-bank', target: 'inst-city-bank', type: 'provides', strength: 2, bidirectional: false },

    // 基金公司层级
    { id: 'ir-7', source: 'inst-fund', target: 'inst-mutual-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-8', source: 'inst-fund', target: 'inst-private-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-9', source: 'inst-fund', target: 'inst-pension', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-10', source: 'inst-fund', target: 'inst-sovereign-fund', type: 'provides', strength: 3, bidirectional: false },

    // 保险公司层级
    { id: 'ir-11', source: 'inst-insurance', target: 'inst-life-insurance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-12', source: 'inst-insurance', target: 'inst-property-insurance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-13', source: 'inst-insurance', target: 'inst-reinsurance', type: 'provides', strength: 3, bidirectional: false },

    // 监管关系
    { id: 'ir-14', source: 'inst-central-bank', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-15', source: 'inst-regulator', target: 'inst-csrc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-16', source: 'inst-regulator', target: 'inst-nfra', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-17', source: 'inst-csrc', target: 'inst-securities', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-18', source: 'inst-nfra', target: 'inst-insurance', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-19', source: 'inst-nfra', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false },

    // 竞争关系
    { id: 'ir-20', source: 'inst-commercial-bank', target: 'inst-securities', type: 'competes_with', strength: 2, bidirectional: true },
    { id: 'ir-21', source: 'inst-commercial-bank', target: 'inst-investment-bank', type: 'competes_with', strength: 2, bidirectional: true },
    { id: 'ir-22', source: 'inst-securities', target: 'inst-fund', type: 'cooperates_with', strength: 2, bidirectional: true },
    { id: 'ir-23', source: 'inst-commercial-bank', target: 'inst-fintech', type: 'competes_with', strength: 2, bidirectional: true },

    // 交易所层级
    { id: 'ir-24', source: 'inst-exchange', target: 'inst-nyse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-25', source: 'inst-exchange', target: 'inst-nasdaq', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-26', source: 'inst-exchange', target: 'inst-sse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-27', source: 'inst-exchange', target: 'inst-szse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-28', source: 'inst-exchange', target: 'inst-hkex', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-29', source: 'inst-exchange', target: 'inst-tse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-30', source: 'inst-exchange', target: 'inst-lse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-31', source: 'inst-exchange', target: 'inst-cme', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-32', source: 'inst-exchange', target: 'inst-ice', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-39', source: 'inst-exchange', target: 'inst-bse', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-40', source: 'inst-exchange', target: 'inst-cboe', type: 'provides', strength: 3, bidirectional: false },

    // 交易所竞争关系
    { id: 'ir-33', source: 'inst-nyse', target: 'inst-nasdaq', type: 'competes_with', strength: 3, bidirectional: true },
    { id: 'ir-34', source: 'inst-sse', target: 'inst-szse', type: 'competes_with', strength: 2, bidirectional: true },
    { id: 'ir-35', source: 'inst-cme', target: 'inst-ice', type: 'competes_with', strength: 3, bidirectional: true },

    // 跨境合作（港股通、沪伦通）
    { id: 'ir-36', source: 'inst-hkex', target: 'inst-sse', type: 'cooperates_with', strength: 3, bidirectional: true },
    { id: 'ir-37', source: 'inst-hkex', target: 'inst-szse', type: 'cooperates_with', strength: 3, bidirectional: true },
    { id: 'ir-38', source: 'inst-lse', target: 'inst-sse', type: 'cooperates_with', strength: 2, bidirectional: true },

    // 监管机构层级补充
    { id: 'ir-41', source: 'inst-regulator', target: 'inst-sec', type: 'provides', strength: 3, bidirectional: false },

    // 证券机构层级补充  
    { id: 'ir-42', source: 'inst-securities', target: 'inst-broker', type: 'provides', strength: 3, bidirectional: false },

    // 清算机构与交易所合作关系
    { id: 'ir-43', source: 'inst-exchange', target: 'inst-clearing', type: 'cooperates_with', strength: 3, bidirectional: true },

    // 评级机构与监管机构关系
    { id: 'ir-44', source: 'inst-regulator', target: 'inst-rating', type: 'regulates', strength: 2, bidirectional: false },

    // 金融科技与监管机构关系(沙盒监管)
    { id: 'ir-45', source: 'inst-regulator', target: 'inst-fintech', type: 'regulates', strength: 2, bidirectional: false },

    // === 市场基础设施机构关系 (P0新增) ===
    // 做市商为交易所提供流动性
    { id: 'ir-46', source: 'inst-market-maker', target: 'inst-exchange', type: 'cooperates_with', strength: 3, bidirectional: true },
    // 做市商之间竞争
    { id: 'ir-47', source: 'inst-market-maker', target: 'inst-broker', type: 'competes_with', strength: 2, bidirectional: true },
    // 主经纪商属于投行部门
    { id: 'ir-48', source: 'inst-investment-bank', target: 'inst-prime-broker', type: 'provides', strength: 3, bidirectional: false },
    // 主经纪商服务私募基金
    { id: 'ir-49', source: 'inst-prime-broker', target: 'inst-private-fund', type: 'provides', strength: 3, bidirectional: false },
    // 托管行与交易所的清算合作
    { id: 'ir-50', source: 'inst-custodian', target: 'inst-clearing', type: 'cooperates_with', strength: 3, bidirectional: true },
    // 托管行服务基金公司
    { id: 'ir-51', source: 'inst-custodian', target: 'inst-fund', type: 'provides', strength: 3, bidirectional: false },
    // 指数公司与交易所合作
    { id: 'ir-52', source: 'inst-index-provider', target: 'inst-exchange', type: 'cooperates_with', strength: 2, bidirectional: true },
    // 监管机构监管做市商
    { id: 'ir-53', source: 'inst-regulator', target: 'inst-market-maker', type: 'regulates', strength: 3, bidirectional: false },

    // === L3 具体机构关系 ===
    // 投行L3
    { id: 'ir-54', source: 'inst-investment-bank', target: 'inst-goldman', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-55', source: 'inst-investment-bank', target: 'inst-jpmorgan', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-56', source: 'inst-investment-bank', target: 'inst-morgan-stanley', type: 'provides', strength: 3, bidirectional: false },
    // 资管L3
    { id: 'ir-57', source: 'inst-fund', target: 'inst-blackrock', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-58', source: 'inst-fund', target: 'inst-vanguard', type: 'provides', strength: 3, bidirectional: false },
    // 对冲基金L3
    { id: 'ir-59', source: 'inst-private-fund', target: 'inst-bridgewater', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-60', source: 'inst-private-fund', target: 'inst-renaissance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-61', source: 'inst-private-fund', target: 'inst-citadel', type: 'provides', strength: 3, bidirectional: false },
    // 券商L3
    { id: 'ir-62', source: 'inst-broker', target: 'inst-ibkr', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-63', source: 'inst-broker', target: 'inst-schwab', type: 'provides', strength: 3, bidirectional: false },
    // 竞争关系
    { id: 'ir-64', source: 'inst-goldman', target: 'inst-jpmorgan', type: 'competes_with', strength: 3, bidirectional: true },
    { id: 'ir-65', source: 'inst-blackrock', target: 'inst-vanguard', type: 'competes_with', strength: 3, bidirectional: true },
    { id: 'ir-66', source: 'inst-ibkr', target: 'inst-schwab', type: 'competes_with', strength: 2, bidirectional: true }
];
