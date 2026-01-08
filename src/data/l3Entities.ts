import type { Entity, Relationship } from '../types';

// L3实体：全球知名金融机构具体实例（仅包含institutions.ts中未定义的新实体）
// L3 Entities: Additional specific global financial institutions (not already in institutions.ts)

export const l3Entities: Entity[] = [
    // === 全球系统重要性银行 (G-SIBs) - 补充 ===
    // 注：jpmorgan, goldman, morgan-stanley 已在institutions.ts中定义
    {
        id: 'inst-bofa',
        name: { zh: '美国银行', en: 'Bank of America' },
        description: { zh: '美国第二大银行，Merrill Lynch母公司', en: 'Second largest US bank, parent of Merrill Lynch' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['bofa', 'bac', 'gsib', 'usa'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '2008年收购Merrill Lynch。巴菲特是最大股东之一',
            en: 'Acquired Merrill Lynch in 2008. Buffett is one of largest shareholders'
        }
    },
    {
        id: 'inst-citi',
        name: { zh: '花旗集团', en: 'Citigroup' },
        description: { zh: '全球化程度最高的美国银行', en: 'Most globally diversified US bank' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['citi', 'c', 'gsib', 'usa'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '业务遍及160+国家。2008危机后持续重组，出售消费银行业务',
            en: 'Operations in 160+ countries. Continuous restructuring post-2008, divesting consumer banking'
        }
    },
    {
        id: 'inst-hsbc',
        name: { zh: '汇丰银行', en: 'HSBC' },
        description: { zh: '欧洲最大银行，亚洲业务强劲', en: 'Europe\'s largest bank, strong Asia presence' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['hsbc', 'gsib', 'uk', 'asia'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '总部伦敦，利润主要来自亚洲(尤其香港)。中国平安曾是大股东',
            en: 'HQ in London, profits mainly from Asia (especially HK). Ping An was major shareholder'
        }
    },
    {
        id: 'inst-ubs',
        name: { zh: '瑞银集团', en: 'UBS' },
        description: { zh: '全球最大财富管理机构', en: 'World\'s largest wealth manager' },
        domain: 'institutions', category: 'investment-bank', icon: '🏦',
        tags: ['ubs', 'gsib', 'switzerland'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '2023年紧急收购瑞信。财富管理AUM超5万亿美元',
            en: 'Emergency acquisition of Credit Suisse in 2023. Wealth management AUM exceeds $5T'
        }
    },
    {
        id: 'inst-deutsche',
        name: { zh: '德意志银行', en: 'Deutsche Bank' },
        description: { zh: '德国最大银行', en: 'Germany\'s largest bank' },
        domain: 'institutions', category: 'investment-bank', icon: '🏦',
        tags: ['deutsche', 'db', 'gsib', 'germany'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '曾是欧洲投行霸主，2008后缩减投行业务。DWS是其资管子公司',
            en: 'Former European IB leader, scaled back post-2008. DWS is its asset management subsidiary'
        }
    },
    {
        id: 'inst-barclays',
        name: { zh: '巴克莱银行', en: 'Barclays' },
        description: { zh: '英国投行业务最强银行', en: 'UK bank with strongest investment banking' },
        domain: 'institutions', category: 'investment-bank', icon: '🏦',
        tags: ['barclays', 'gsib', 'uk'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '2008年收购雷曼北美业务。投行在欧洲排名前列',
            en: 'Acquired Lehman North America in 2008. Top-tier European investment bank'
        }
    },

    // === 中国大型银行 ===
    {
        id: 'inst-icbc',
        name: { zh: '工商银行', en: 'ICBC' },
        description: { zh: '全球资产规模最大银行', en: 'World\'s largest bank by total assets' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['icbc', 'china', 'state-owned'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '资产超6万亿美元。中国最大商业银行，"宇宙行"',
            en: 'Assets exceed $6T. China\'s largest commercial bank, the "Universal Bank"'
        }
    },
    {
        id: 'inst-ccb',
        name: { zh: '建设银行', en: 'CCB' },
        description: { zh: '中国第二大银行，住房贷款龙头', en: 'China\'s second largest bank, mortgage leader' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['ccb', 'china', 'state-owned'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '住房贷款市场份额最高。2005年香港上市为中国银行业改革标志',
            en: 'Highest mortgage market share. 2005 HK listing marked China banking reform milestone'
        }
    },
    {
        id: 'inst-boc',
        name: { zh: '中国银行', en: 'Bank of China' },
        description: { zh: '中国国际化程度最高的银行', en: 'China\'s most internationalized bank' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏦',
        tags: ['boc', 'china', 'state-owned'],
        level: 3, parentId: 'inst-commercial-bank',
        details: {
            zh: '海外业务占比最高。香港中银是港币发钞行之一',
            en: 'Highest overseas business share. BOCHK is one of HKD note-issuing banks'
        }
    },
    {
        id: 'inst-citic',
        name: { zh: '中信证券', en: 'CITIC Securities' },
        description: { zh: '中国最大证券公司', en: 'China\'s largest securities firm' },
        domain: 'institutions', category: 'securities', icon: '📈',
        tags: ['citic', 'china', 'broker'],
        level: 3, parentId: 'inst-securities',
        details: {
            zh: 'A股投行业务市占率第一。收购里昂证券拓展国际业务',
            en: 'No.1 A-share IB market share. Acquired CLSA to expand international business'
        }
    },

    // === 全球顶级资管公司 - 补充 ===
    // 注：blackrock, vanguard 已在institutions.ts中定义
    {
        id: 'inst-fidelity',
        name: { zh: '富达投资', en: 'Fidelity' },
        description: { zh: '全球最大主动管理基金公司', en: 'World\'s largest active fund manager' },
        domain: 'institutions', category: 'fund', icon: '💚',
        tags: ['fidelity', 'fnf', 'active'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: 'Peter Lynch曾管理旗下Magellan基金创造传奇业绩。也提供券商服务',
            en: 'Peter Lynch\'s legendary Magellan fund performance. Also provides brokerage services'
        }
    },
    {
        id: 'inst-pimco',
        name: { zh: '太平洋投资管理', en: 'PIMCO' },
        description: { zh: '全球最大债券基金公司', en: 'World\'s largest bond fund manager' },
        domain: 'institutions', category: 'fund', icon: '📊',
        tags: ['pimco', 'bond', 'fixed-income'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: 'Bill Gross创立的"债券之王"。Total Return Fund曾是全球最大共同基金',
            en: 'Founded by Bill Gross the "Bond King". Total Return Fund was once world\'s largest mutual fund'
        }
    },

    // === 顶级对冲基金 - 补充 ===
    // 注：bridgewater, citadel, renaissance 已在institutions.ts中定义
    {
        id: 'inst-two-sigma',
        name: { zh: 'Two Sigma', en: 'Two Sigma' },
        description: { zh: '科技驱动的量化对冲基金', en: 'Technology-driven quant hedge fund' },
        domain: 'institutions', category: 'hedge-fund', icon: '📐',
        tags: ['twosigma', 'quant', 'tech'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: '使用机器学习和大数据分析。AUM约600亿美元',
            en: 'Uses machine learning and big data. AUM ~$60B'
        }
    },
    {
        id: 'inst-deshaw',
        name: { zh: 'D.E. Shaw', en: 'D.E. Shaw' },
        description: { zh: '量化先驱，Jeff Bezos曾任职', en: 'Quant pioneer, Jeff Bezos was employee' },
        domain: 'institutions', category: 'hedge-fund', icon: '🔬',
        tags: ['deshaw', 'quant'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'David Shaw创立。以计算科学方法著称。多策略量化',
            en: 'Founded by David Shaw. Known for computational science approach. Multi-strategy quant'
        }
    },

    // === 顶级PE/VC ===
    {
        id: 'inst-blackstone',
        name: { zh: '黑石集团', en: 'Blackstone' },
        description: { zh: '全球最大另类资产管理公司', en: 'World\'s largest alternative asset manager' },
        domain: 'institutions', category: 'pe', icon: '🖤',
        tags: ['blackstone', 'bx', 'pe', 'real-estate'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Steve Schwarzman创立。房地产/PE/信贷全能。AUM超1万亿美元',
            en: 'Founded by Steve Schwarzman. Real estate/PE/credit powerhouse. AUM exceeds $1T'
        }
    },
    {
        id: 'inst-kkr',
        name: { zh: 'KKR', en: 'KKR' },
        description: { zh: 'PE行业先驱，杠杆收购鼻祖', en: 'PE industry pioneer, LBO originator' },
        domain: 'institutions', category: 'pe', icon: '🔷',
        tags: ['kkr', 'lbo', 'pe'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: '1989年RJR Nabisco收购是史上经典LBO案例。AUM约5000亿美元',
            en: '1989 RJR Nabisco was iconic LBO case. AUM ~$500B'
        }
    },
    {
        id: 'inst-carlyle',
        name: { zh: '凯雷集团', en: 'Carlyle Group' },
        description: { zh: '全球化PE巨头', en: 'Global PE giant' },
        domain: 'institutions', category: 'pe', icon: '🔵',
        tags: ['carlyle', 'pe', 'defense'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: '以政府关系和国防/航空投资著称。创始人包括前副财长',
            en: 'Known for government relations and defense/aerospace investments. Founders include former Deputy Treasury Secretary'
        }
    },
    {
        id: 'inst-sequoia',
        name: { zh: '红杉资本', en: 'Sequoia Capital' },
        description: { zh: '硅谷顶级VC，投资Apple/Google/Stripe', en: 'Top Silicon Valley VC, backed Apple/Google/Stripe' },
        domain: 'institutions', category: 'vc', icon: '🌲',
        tags: ['sequoia', 'vc', 'silicon-valley'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: '投资回报率业内最高。2022年红杉中国/印度/美国分拆为独立品牌',
            en: 'Highest industry returns. Sequoia China/India/US split into separate entities in 2022'
        }
    },
    {
        id: 'inst-a16z',
        name: { zh: 'a16z', en: 'Andreessen Horowitz' },
        description: { zh: '科技VC新秀，Crypto投资激进', en: 'Tech VC rising star, aggressive crypto investor' },
        domain: 'institutions', category: 'vc', icon: '🔴',
        tags: ['a16z', 'vc', 'crypto', 'web3'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Marc Andreessen(网景创始人)创立。投资Facebook/Coinbase。Web3重仓',
            en: 'Founded by Marc Andreessen (Netscape). Invested in Facebook/Coinbase. Heavy Web3 bets'
        }
    },

    // === 保险巨头 ===
    {
        id: 'inst-berkshire',
        name: { zh: '伯克希尔·哈撒韦', en: 'Berkshire Hathaway' },
        description: { zh: '巴菲特的保险+投资帝国', en: 'Buffett\'s insurance + investment empire' },
        domain: 'institutions', category: 'insurance', icon: '🦎',
        tags: ['berkshire', 'buffett', 'value'],
        level: 3, parentId: 'inst-insurance',
        details: {
            zh: '旗下GEICO/National Indemnity等保险业务提供浮存金。苹果是最大持仓',
            en: 'GEICO/National Indemnity provide float for investments. Apple is largest holding'
        }
    },
    {
        id: 'inst-pingan',
        name: { zh: '中国平安', en: 'Ping An' },
        description: { zh: '中国最大综合金融集团', en: 'China\'s largest integrated financial group' },
        domain: 'institutions', category: 'insurance', icon: '🔶',
        tags: ['pingan', 'china', 'fintech'],
        level: 3, parentId: 'inst-insurance',
        details: {
            zh: '保险+银行+科技全牌照。陆金所/好医生等科技子公司。马明哲创立',
            en: 'Full license: insurance+bank+tech. Lufax/Good Doctor tech subsidiaries. Founded by Ma Mingzhe'
        }
    },
    {
        id: 'inst-allianz',
        name: { zh: '安联集团', en: 'Allianz' },
        description: { zh: '欧洲最大保险公司', en: 'Europe\'s largest insurer' },
        domain: 'institutions', category: 'insurance', icon: '🔷',
        tags: ['allianz', 'germany', 'pimco'],
        level: 3, parentId: 'inst-insurance',
        details: {
            zh: 'PIMCO和Allianz Global Investors是其资管子公司',
            en: 'PIMCO and Allianz Global Investors are its asset management subsidiaries'
        }
    }
];

// L3实体关系 - 完整业务关系链
export const l3Relationships: Relationship[] = [
    // === 层级关系（Parent -> Child）===
    // G-SIBs 商业银行
    {
        id: 'l3-cb-bofa', source: 'inst-commercial-bank', target: 'inst-bofa', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '美国银行是大型商业银行', en: 'Bank of America is a major commercial bank' }
    },
    {
        id: 'l3-cb-citi', source: 'inst-commercial-bank', target: 'inst-citi', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '花旗是全球性商业银行', en: 'Citigroup is a global commercial bank' }
    },
    {
        id: 'l3-cb-hsbc', source: 'inst-commercial-bank', target: 'inst-hsbc', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '汇丰是亚洲领先商业银行', en: 'HSBC is a leading Asia-focused commercial bank' }
    },
    {
        id: 'l3-cb-icbc', source: 'inst-commercial-bank', target: 'inst-icbc', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '工行是中国最大国有商业银行', en: 'ICBC is China\'s largest state-owned commercial bank' }
    },
    {
        id: 'l3-cb-ccb', source: 'inst-commercial-bank', target: 'inst-ccb', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '建行是中国四大银行之一', en: 'CCB is one of China\'s Big Four banks' }
    },
    {
        id: 'l3-cb-boc', source: 'inst-commercial-bank', target: 'inst-boc', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '中行是中国四大银行之一', en: 'BOC is one of China\'s Big Four banks' }
    },
    // G-SIBs 投行类
    {
        id: 'l3-ib-ubs', source: 'inst-investment-bank', target: 'inst-ubs', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '瑞银是全球顶级投行', en: 'UBS is a top global investment bank' }
    },
    {
        id: 'l3-ib-deutsche', source: 'inst-investment-bank', target: 'inst-deutsche', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '德银是欧洲大型投行', en: 'Deutsche Bank is a major European investment bank' }
    },
    {
        id: 'l3-ib-barclays', source: 'inst-investment-bank', target: 'inst-barclays', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '巴克莱是英国领先投行', en: 'Barclays is UK\'s leading investment bank' }
    },
    // 证券公司
    {
        id: 'l3-sec-citic', source: 'inst-securities', target: 'inst-citic', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '中信证券是中国最大券商', en: 'CITIC Securities is China\'s largest broker' }
    },
    // 资管公司
    {
        id: 'l3-fund-fidelity', source: 'inst-fund', target: 'inst-fidelity', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '富达是顶级主动管理基金公司', en: 'Fidelity is a top active fund manager' }
    },
    {
        id: 'l3-fund-pimco', source: 'inst-fund', target: 'inst-pimco', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'PIMCO是债券基金领导者', en: 'PIMCO is a bond fund leader' }
    },
    // 对冲基金/私募
    {
        id: 'l3-pf-twosigma', source: 'inst-private-fund', target: 'inst-two-sigma', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'Two Sigma是量化对冲基金', en: 'Two Sigma is a quant hedge fund' }
    },
    {
        id: 'l3-pf-deshaw', source: 'inst-private-fund', target: 'inst-deshaw', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'D.E. Shaw是量化先驱', en: 'D.E. Shaw is a quant pioneer' }
    },
    {
        id: 'l3-pf-blackstone', source: 'inst-private-fund', target: 'inst-blackstone', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '黑石是全球最大另类资管公司', en: 'Blackstone is largest alternative asset manager' }
    },
    {
        id: 'l3-pf-kkr', source: 'inst-private-fund', target: 'inst-kkr', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'KKR是PE行业先驱', en: 'KKR is a PE industry pioneer' }
    },
    {
        id: 'l3-pf-carlyle', source: 'inst-private-fund', target: 'inst-carlyle', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '凯雷是全球化PE巨头', en: 'Carlyle is a global PE giant' }
    },
    {
        id: 'l3-pf-sequoia', source: 'inst-private-fund', target: 'inst-sequoia', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '红杉是顶级VC', en: 'Sequoia is a top VC' }
    },
    {
        id: 'l3-pf-a16z', source: 'inst-private-fund', target: 'inst-a16z', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'a16z是科技VC新锐', en: 'a16z is a rising tech VC' }
    },
    // 保险公司
    {
        id: 'l3-ins-berkshire', source: 'inst-insurance', target: 'inst-berkshire', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '伯克希尔是保险+投资巨头', en: 'Berkshire is an insurance + investment giant' }
    },
    {
        id: 'l3-ins-pingan', source: 'inst-insurance', target: 'inst-pingan', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '平安是中国最大保险公司', en: 'Ping An is China\'s largest insurer' }
    },
    {
        id: 'l3-ins-allianz', source: 'inst-insurance', target: 'inst-allianz', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '安联是欧洲最大保险公司', en: 'Allianz is Europe\'s largest insurer' }
    },

    // === G-SIBs 业务关系 ===
    // JPMorgan (已在institutions.ts定义)
    {
        id: 'l3-jpm-equity', source: 'inst-jpmorgan', target: 'market-equity', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'JPM是全球最大股票交易商之一', en: 'JPM is one of the largest global equity traders' }
    },
    {
        id: 'l3-jpm-bond', source: 'inst-jpmorgan', target: 'market-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'JPM是美债一级交易商', en: 'JPM is a primary dealer in US Treasuries' }
    },
    {
        id: 'l3-jpm-ipo', source: 'inst-jpmorgan', target: 'market-ipo', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'JPM承销大量IPO，是全球顶级承销商', en: 'JPM underwrites numerous IPOs as top global underwriter' }
    },
    {
        id: 'l3-jpm-fx', source: 'inst-jpmorgan', target: 'market-forex', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'JPM是全球最大外汇交易银行', en: 'JPM is world\'s largest FX trading bank' }
    },

    // Goldman Sachs (已在institutions.ts定义)
    {
        id: 'l3-gs-equity', source: 'inst-goldman', target: 'market-equity', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: '高盛是顶级股票做市商和交易商', en: 'Goldman is top equity market maker and trader' }
    },
    {
        id: 'l3-gs-deriv', source: 'inst-goldman', target: 'instr-swaps', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: '高盛是全球最大衍生品交易商之一', en: 'Goldman is one of world\'s largest derivatives traders' }
    },
    {
        id: 'l3-gs-ipo', source: 'inst-goldman', target: 'market-ipo', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '高盛是硅谷科技公司首选IPO承销商', en: 'Goldman is preferred IPO underwriter for Silicon Valley tech' }
    },

    // Morgan Stanley (已在institutions.ts定义)
    {
        id: 'l3-ms-wealth', source: 'inst-morgan-stanley', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '摩根士丹利财富管理部门管理$6T+客户资产', en: 'MS wealth management manages $6T+ client assets' }
    },
    {
        id: 'l3-ms-etrade', source: 'inst-morgan-stanley', target: 'inst-broker', type: 'provides', strength: 2, bidirectional: false,
        explanation: { zh: '收购E*TRADE后提供零售经纪服务', en: 'Provides retail brokerage via E*TRADE acquisition' }
    },

    // 中国四大行
    {
        id: 'l3-icbc-bond-cn', source: 'inst-icbc', target: 'market-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: '工行是中国银行间债券市场最大参与者', en: 'ICBC is largest participant in China interbank bond market' }
    },
    {
        id: 'l3-icbc-fx', source: 'inst-icbc', target: 'market-forex', type: 'trades', strength: 2, bidirectional: true,
        explanation: { zh: '工行是人民币外汇交易主要银行', en: 'ICBC is major RMB FX trading bank' }
    },
    {
        id: 'l3-ccb-mortgage', source: 'inst-ccb', target: 'instr-mbs', type: 'issues', strength: 2, bidirectional: false,
        explanation: { zh: '建行是中国最大房贷发放行，可发行MBS', en: 'CCB is China\'s largest mortgage lender, issues MBS' }
    },
    {
        id: 'l3-boc-hkd', source: 'inst-boc', target: 'market-forex', type: 'provides', strength: 2, bidirectional: false,
        explanation: { zh: '中银香港是港币发钞行之一', en: 'BOCHK is one of HKD note-issuing banks' }
    },
    {
        id: 'l3-citic-ashare', source: 'inst-citic', target: 'market-equity-main', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: '中信证券是A股最大券商', en: 'CITIC is largest A-share broker' }
    },
    {
        id: 'l3-citic-ipo', source: 'inst-citic', target: 'market-ipo', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '中信证券IPO承销市占率第一', en: 'CITIC has #1 IPO underwriting market share' }
    },

    // === 资管公司业务关系 ===
    {
        id: 'l3-blk-equity', source: 'inst-blackrock', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '贝莱德是全球最大股票持有者之一', en: 'BlackRock is one of world\'s largest stock holders' }
    },
    {
        id: 'l3-blk-bond', source: 'inst-blackrock', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '贝莱德债券基金规模超2万亿美元', en: 'BlackRock bond funds exceed $2T' }
    },
    {
        id: 'l3-blk-etf', source: 'inst-blackrock', target: 'instr-etf', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: 'iShares是全球最大ETF发行商', en: 'iShares is world\'s largest ETF issuer' }
    },
    {
        id: 'l3-vg-index', source: 'inst-vanguard', target: 'instr-index-fund', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: '先锋发明指数基金，管理$9T+', en: 'Vanguard invented index funds, manages $9T+' }
    },
    {
        id: 'l3-vg-sp500', source: 'inst-vanguard', target: 'market-index-sp500', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: 'VOO跟踪标普500指数', en: 'VOO tracks S&P 500 index' }
    },
    {
        id: 'l3-fidelity-active', source: 'inst-fidelity', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '富达是最大主动管理股票基金公司', en: 'Fidelity is largest active equity fund manager' }
    },
    {
        id: 'l3-pimco-bond', source: 'inst-pimco', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: 'PIMCO专注债券投资，Total Return基金曾规模最大', en: 'PIMCO focuses on bonds, Total Return was largest fund' }
    },
    {
        id: 'l3-pimco-tips', source: 'inst-pimco', target: 'instr-tips', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: 'PIMCO大量投资通胀保护债券', en: 'PIMCO invests heavily in inflation-protected securities' }
    },

    // === 对冲基金业务关系 ===
    {
        id: 'l3-bridge-macro', source: 'inst-bridgewater', target: 'macro-cycles', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: '桥水Pure Alpha策略基于全球宏观经济周期', en: 'Bridgewater Pure Alpha based on global macro cycles' }
    },
    {
        id: 'l3-bridge-allweather', source: 'inst-bridgewater', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '桥水All Weather策略配置大量债券', en: 'Bridgewater All Weather allocates heavily to bonds' }
    },
    {
        id: 'l3-citadel-equity', source: 'inst-citadel', target: 'instr-stock', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'Citadel是顶级股票多策略对冲基金', en: 'Citadel is top multi-strategy equity hedge fund' }
    },
    {
        id: 'l3-citadel-mm', source: 'inst-citadel', target: 'inst-market-maker', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'Citadel Securities是最大电子做市商', en: 'Citadel Securities is largest electronic market maker' }
    },
    {
        id: 'l3-citadel-options', source: 'inst-citadel', target: 'instr-options', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'Citadel是期权市场最大参与者之一', en: 'Citadel is one of largest options market participants' }
    },
    {
        id: 'l3-rentec-quant', source: 'inst-renaissance', target: 'instr-futures', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: '文艺复兴使用量化策略交易期货', en: 'Renaissance uses quant strategies to trade futures' }
    },
    {
        id: 'l3-twosigma-ml', source: 'inst-two-sigma', target: 'instr-stock', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'Two Sigma用机器学习进行股票交易', en: 'Two Sigma uses ML for equity trading' }
    },
    {
        id: 'l3-deshaw-arb', source: 'inst-deshaw', target: 'instr-options', type: 'trades', strength: 2, bidirectional: true,
        explanation: { zh: 'D.E. Shaw进行期权套利交易', en: 'D.E. Shaw engages in options arbitrage trading' }
    },

    // === PE/VC业务关系 ===
    {
        id: 'l3-bx-realestate', source: 'inst-blackstone', target: 'instr-reit', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '黑石是全球最大房地产投资者', en: 'Blackstone is world\'s largest real estate investor' }
    },
    {
        id: 'l3-bx-pe', source: 'inst-blackstone', target: 'instr-pe', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '黑石PE规模超$3000亿', en: 'Blackstone PE exceeds $300B' }
    },
    {
        id: 'l3-bx-credit', source: 'inst-blackstone', target: 'instr-high-yield', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '黑石信贷部门投资高收益债', en: 'Blackstone credit arm invests in high-yield bonds' }
    },
    {
        id: 'l3-kkr-lbo', source: 'inst-kkr', target: 'instr-corp-bond', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: 'KKR LBO交易需发行大量杠杆贷款/高收益债', en: 'KKR LBOs require issuing leveraged loans/high-yield bonds' }
    },
    {
        id: 'l3-kkr-infra', source: 'inst-kkr', target: 'instr-pe', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: 'KKR在基础设施领域投资活跃', en: 'KKR actively invests in infrastructure' }
    },
    {
        id: 'l3-carlyle-defense', source: 'inst-carlyle', target: 'instr-pe', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '凯雷专注国防/航空/政府相关投资', en: 'Carlyle focuses on defense/aerospace/government investments' }
    },
    {
        id: 'l3-sequoia-startup', source: 'inst-sequoia', target: 'instr-vc', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '红杉投资早期科技初创企业', en: 'Sequoia invests in early-stage tech startups' }
    },
    {
        id: 'l3-a16z-crypto', source: 'inst-a16z', target: 'instr-crypto', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: 'a16z是最大加密货币/Web3投资者之一', en: 'a16z is one of largest crypto/Web3 investors' }
    },

    // === 保险业务关系 ===
    {
        id: 'l3-berkshire-equity', source: 'inst-berkshire', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '巴菲特通过浮存金进行大规模股票投资', en: 'Buffett invests massively in stocks using float' }
    },
    {
        id: 'l3-berkshire-bank', source: 'inst-berkshire', target: 'inst-bofa', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '伯克希尔是美银最大股东之一', en: 'Berkshire is one of BofA\'s largest shareholders' }
    },
    {
        id: 'l3-berkshire-apple', source: 'inst-berkshire', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '苹果是伯克希尔最大持仓(超$1500亿)', en: 'Apple is Berkshire\'s largest holding ($150B+)' }
    },
    {
        id: 'l3-pingan-bond', source: 'inst-pingan', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '平安保险资金大量配置债券资产', en: 'Ping An insurance funds heavily allocate to bonds' }
    },
    {
        id: 'l3-pingan-fintech', source: 'inst-pingan', target: 'inst-fintech', type: 'provides', strength: 2, bidirectional: false,
        explanation: { zh: '平安孵化陆金所/好医生等金融科技公司', en: 'Ping An incubated Lufax/Good Doctor fintech companies' }
    },
    {
        id: 'l3-allianz-pimco', source: 'inst-allianz', target: 'inst-pimco', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '安联是PIMCO母公司', en: 'Allianz is parent company of PIMCO' }
    },

    // === 竞争关系 ===
    {
        id: 'l3-jpm-gs', source: 'inst-jpmorgan', target: 'inst-goldman', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: 'JPM与GS是华尔街投行最直接竞争对手', en: 'JPM and GS are direct Wall Street IB competitors' }
    },
    {
        id: 'l3-gs-ms', source: 'inst-goldman', target: 'inst-morgan-stanley', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: 'GS与MS在投行和财富管理全面竞争', en: 'GS and MS compete across IB and wealth management' }
    },
    {
        id: 'l3-blk-vg', source: 'inst-blackrock', target: 'inst-vanguard', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: '贝莱德与先锋领航在ETF市场激烈竞争', en: 'BlackRock and Vanguard compete intensely in ETF market' }
    },
    {
        id: 'l3-bridge-citadel', source: 'inst-bridgewater', target: 'inst-citadel', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: { zh: '顶级对冲基金竞争机构资金配置', en: 'Top hedge funds compete for institutional allocations' }
    },
    {
        id: 'l3-bx-kkr', source: 'inst-blackstone', target: 'inst-kkr', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: '黑石与KKR是PE行业最大竞争对手', en: 'Blackstone and KKR are major PE competitors' }
    },
    {
        id: 'l3-icbc-ccb', source: 'inst-icbc', target: 'inst-ccb', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: { zh: '中国四大行之间存在业务竞争', en: 'China\'s Big Four banks compete for business' }
    },
    {
        id: 'l3-sequoia-a16z', source: 'inst-sequoia', target: 'inst-a16z', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: { zh: '红杉与a16z竞争顶级初创企业投资', en: 'Sequoia and a16z compete for top startup investments' }
    },

    // === 监管关系 ===
    {
        id: 'l3-fed-gsib', source: 'inst-fed', target: 'inst-jpmorgan', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '美联储监管系统重要性银行(G-SIB)', en: 'Fed regulates systemically important banks (G-SIBs)' }
    },
    {
        id: 'l3-pboc-icbc', source: 'inst-pboc', target: 'inst-icbc', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '人民银行监管国有大型商业银行', en: 'PBOC supervises state-owned commercial banks' }
    }
];
