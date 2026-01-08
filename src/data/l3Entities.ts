import type { Entity, Relationship } from '../types';

// L3实体：全球知名金融机构具体实例
// L3 Entities: Specific well-known global financial institutions

export const l3Entities: Entity[] = [
    // === 全球系统重要性银行 (G-SIBs) ===
    {
        id: 'inst-jpmorgan',
        name: { zh: '摩根大通', en: 'JPMorgan Chase' },
        description: { zh: '全球最大银行，资产规模超3.7万亿美元', en: 'World\'s largest bank by assets ($3.7T+)' },
        domain: 'institutions', category: 'investment-bank', icon: '🏦',
        tags: ['jpmorgan', 'jpm', 'gsib', 'usa'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: 'Jamie Dimon领导逾18年。2023年收购First Republic。投行/资管/零售银行全能冠军',
            en: 'Led by Jamie Dimon for 18+ years. Acquired First Republic in 2023. Dominates IB/AM/retail banking'
        }
    },
    {
        id: 'inst-goldman',
        name: { zh: '高盛', en: 'Goldman Sachs' },
        description: { zh: '华尔街顶级投行，交易和投行业务领先', en: 'Premier Wall Street investment bank, leading in trading and IB' },
        domain: 'institutions', category: 'investment-bank', icon: '🏛️',
        tags: ['goldman', 'gs', 'gsib', 'usa'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '华尔街最具声望投行。校招竞争最激烈。Marcus消费金融转型遇挫',
            en: 'Most prestigious Wall Street bank. Most competitive campus recruiting. Marcus consumer pivot struggled'
        }
    },
    {
        id: 'inst-morgan-stanley',
        name: { zh: '摩根士丹利', en: 'Morgan Stanley' },
        description: { zh: '财富管理与投行巨头', en: 'Wealth management and investment bank giant' },
        domain: 'institutions', category: 'investment-bank', icon: '🏛️',
        tags: ['morganstanley', 'ms', 'gsib', 'usa'],
        level: 3, parentId: 'inst-investment-bank',
        details: {
            zh: '收购E*TRADE和Eaton Vance后，财富管理AUM超6万亿美元',
            en: 'Post E*TRADE and Eaton Vance acquisitions, wealth management AUM exceeds $6T'
        }
    },
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

    // === 全球顶级资管公司 ===
    {
        id: 'inst-blackrock',
        name: { zh: '贝莱德', en: 'BlackRock' },
        description: { zh: '全球最大资产管理公司，AUM超11.5万亿美元', en: 'World\'s largest asset manager, $11.5T+ AUM' },
        domain: 'institutions', category: 'fund', icon: '⬛',
        tags: ['blackrock', 'blk', 'etf', 'ishares'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: 'iShares是全球最大ETF发行商。Aladdin风控系统被众多机构使用',
            en: 'iShares is world\'s largest ETF issuer. Aladdin risk system used by many institutions'
        }
    },
    {
        id: 'inst-vanguard',
        name: { zh: '先锋领航', en: 'Vanguard' },
        description: { zh: '指数基金鼻祖，投资者持有的共同制公司', en: 'Pioneer of index funds, investor-owned mutual company' },
        domain: 'institutions', category: 'fund', icon: '🚢',
        tags: ['vanguard', 'index', 'passive'],
        level: 3, parentId: 'inst-fund',
        details: {
            zh: 'John Bogle创立，发明第一只指数基金。费率战争领导者，平均费率仅0.08%',
            en: 'Founded by John Bogle, invented first index fund. Fee war leader, average expense ratio just 0.08%'
        }
    },
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

    // === 顶级对冲基金 ===
    {
        id: 'inst-bridgewater',
        name: { zh: '桥水基金', en: 'Bridgewater Associates' },
        description: { zh: '全球最大对冲基金', en: 'World\'s largest hedge fund' },
        domain: 'institutions', category: 'hedge-fund', icon: '🌉',
        tags: ['bridgewater', 'dalio', 'macro'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Ray Dalio创立。Pure Alpha策略专注全球宏观。以"极度透明"文化著称',
            en: 'Founded by Ray Dalio. Pure Alpha focuses on global macro. Known for "radical transparency" culture'
        }
    },
    {
        id: 'inst-citadel',
        name: { zh: 'Citadel', en: 'Citadel' },
        description: { zh: '顶级多策略对冲基金', en: 'Top multi-strategy hedge fund' },
        domain: 'institutions', category: 'hedge-fund', icon: '🏰',
        tags: ['citadel', 'griffin', 'multi-strategy'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Ken Griffin创立。Citadel Securities是最大做市商之一。2022年回报38.1%',
            en: 'Founded by Ken Griffin. Citadel Securities is top market maker. 38.1% return in 2022'
        }
    },
    {
        id: 'inst-renaissance',
        name: { zh: '文艺复兴科技', en: 'Renaissance Technologies' },
        description: { zh: '量化投资传奇，Medallion基金年化66%', en: 'Quant legend, Medallion fund 66% annualized' },
        domain: 'institutions', category: 'hedge-fund', icon: '🔢',
        tags: ['renaissance', 'rentec', 'quant', 'medallion'],
        level: 3, parentId: 'inst-private-fund',
        details: {
            zh: 'Jim Simons创立。Medallion(内部基金)1988-2018年扣费后年化39%，史上最佳',
            en: 'Founded by Jim Simons. Medallion (internal fund) 39% net annualized 1988-2018, best ever'
        }
    },
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

// L3实体关系
export const l3Relationships: Relationship[] = [
    // === 竞争关系 ===
    {
        id: 'l3-jpm-gs', source: 'inst-jpmorgan', target: 'inst-goldman', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: 'JPM与GS是华尔街投行业务最直接竞争对手', en: 'JPM and GS are direct Wall Street IB competitors' }
    },
    {
        id: 'l3-gs-ms', source: 'inst-goldman', target: 'inst-morgan-stanley', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: 'GS与MS在投行和财富管理全面竞争', en: 'GS and MS compete across IB and wealth management' }
    },
    {
        id: 'l3-blk-vg', source: 'inst-blackrock', target: 'inst-vanguard', type: 'competes_with', strength: 3, bidirectional: true,
        explanation: { zh: '贝莱德与先锋领航在指数基金/ETF市场激烈竞争', en: 'BlackRock and Vanguard compete intensely in index/ETF market' }
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

    // === 投资/交易关系 ===
    {
        id: 'l3-berkshire-equity', source: 'inst-berkshire', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '伯克希尔通过浮存金进行大规模股票投资', en: 'Berkshire invests massively in stocks using float' }
    },
    {
        id: 'l3-citadel-mm', source: 'inst-citadel', target: 'inst-market-maker', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'Citadel Securities是最大的电子做市商', en: 'Citadel Securities is the largest electronic market maker' }
    },
    {
        id: 'l3-blk-etf', source: 'inst-blackrock', target: 'instr-etf', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: '贝莱德旗下iShares是全球最大ETF发行商', en: 'BlackRock\'s iShares is world\'s largest ETF issuer' }
    },
    {
        id: 'l3-pimco-bond', source: 'inst-pimco', target: 'instr-bond', type: 'trades', strength: 3, bidirectional: true,
        explanation: { zh: 'PIMCO是全球最大债券基金交易者', en: 'PIMCO is the world\'s largest bond fund trader' }
    },
    {
        id: 'l3-sequoia-vc', source: 'inst-sequoia', target: 'instr-vc', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '红杉是硅谷最成功的风险投资机构', en: 'Sequoia is Silicon Valley\'s most successful VC' }
    },

    // === 合作关系 ===
    {
        id: 'l3-ubs-cs', source: 'inst-ubs', target: 'inst-investment-bank', type: 'cooperates_with', strength: 2, bidirectional: false,
        explanation: { zh: 'UBS收购瑞信后整合投行业务', en: 'UBS integrating IB business post Credit Suisse acquisition' }
    },
    {
        id: 'l3-allianz-pimco', source: 'inst-allianz', target: 'inst-pimco', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '安联是PIMCO母公司', en: 'Allianz is parent company of PIMCO' }
    }
];
