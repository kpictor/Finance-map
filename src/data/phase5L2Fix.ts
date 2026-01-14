import type { Relationship } from '../types';

// Phase 5: L2 实体关系批量修复
// 修复 77 个关系密度不足的 L2 实体（每个需要 +2 条关系）
export const phase5L2FixRelationships: Relationship[] = [
    // ====================================
    // 1. 央行类 (ECB, BOJ, BOE): 各 +2
    // ====================================
    {
        id: 'p5-ecb-rate', source: 'inst-ecb', target: 'macro-interest-rate', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '欧洲央行通过利率政策影响欧元区利率水平', en: 'ECB influences eurozone interest rates through monetary policy' }
    },
    {
        id: 'p5-ecb-euro', source: 'inst-ecb', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '欧洲央行政策直接影响欧元汇率', en: 'ECB policy directly affects EUR exchange rate' }
    },
    {
        id: 'p5-boj-rate', source: 'inst-boj', target: 'macro-interest-rate', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '日本央行长期维持低利率政策，影响全球套息交易', en: 'BOJ maintains low rates, affecting global carry trades' }
    },
    {
        id: 'p5-boj-yen', source: 'inst-boj', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '日本央行干预影响日元汇率', en: 'BOJ intervention affects JPY exchange rate' }
    },
    {
        id: 'p5-boe-rate', source: 'inst-boe', target: 'macro-interest-rate', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '英格兰银行是最早采用通胀目标制的央行之一', en: 'BOE was among first to adopt inflation targeting' }
    },
    {
        id: 'p5-boe-pound', source: 'inst-boe', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '英格兰银行政策影响英镑汇率', en: 'BOE policy affects GBP exchange rate' }
    },

    // ====================================
    // 2. 银行类 (国有/股份制/城商行): 各 +2
    // ====================================
    {
        id: 'p5-state-pboc', source: 'inst-pboc', target: 'inst-state-bank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '人民银行监管国有大型银行', en: 'PBOC regulates state-owned major banks' }
    },
    {
        id: 'p5-state-bond', source: 'inst-state-bank', target: 'instr-gov-bond', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '国有大银行是国债市场主要做市商', en: 'State banks are major market makers for government bonds' }
    },
    {
        id: 'p5-joint-pboc', source: 'inst-pboc', target: 'inst-joint-bank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '人民银行监管股份制银行', en: 'PBOC regulates joint-stock banks' }
    },
    {
        id: 'p5-joint-sme', source: 'inst-joint-bank', target: 'inst-commercial-bank', type: 'competes_with', strength: 2, bidirectional: true,
        explanation: { zh: '股份制银行与国有银行在中小企业贷款上竞争', en: 'Joint-stock banks compete with state banks for SME lending' }
    },
    {
        id: 'p5-city-pboc', source: 'inst-pboc', target: 'inst-city-bank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '人民银行监管城市商业银行', en: 'PBOC regulates city commercial banks' }
    },
    {
        id: 'p5-city-local', source: 'inst-city-bank', target: 'macro-fiscal', type: 'depends_on', strength: 2, bidirectional: false,
        explanation: { zh: '城商行与地方政府财政密切相关', en: 'City banks are closely tied to local government finance' }
    },

    // ====================================
    // 3. 基金类 (公募/主权): 各 +2
    // ====================================
    {
        id: 'p5-mutual-csrc', source: 'inst-csrc', target: 'inst-mutual-fund', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '证监会监管公募基金行业', en: 'CSRC regulates mutual fund industry' }
    },
    {
        id: 'p5-mutual-retail', source: 'inst-mutual-fund', target: 'instr-mutual-fund', type: 'offers', strength: 3, bidirectional: false,
        explanation: { zh: '公募基金公司向零售投资者提供基金产品', en: 'Mutual fund companies offer products to retail investors' }
    },
    {
        id: 'p5-sovereign-equity', source: 'inst-sovereign-fund', target: 'market-equity', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '主权财富基金是全球股票市场重要的长期投资者', en: 'SWFs are major long-term investors in global equity markets' }
    },
    {
        id: 'p5-sovereign-infra', source: 'inst-sovereign-fund', target: 'instr-pe', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '主权财富基金投资PE和基础设施项目', en: 'SWFs invest in PE and infrastructure projects' }
    },

    // ====================================
    // 4. 保险类 (寿险/财险/再保): 各 +2
    // ====================================
    {
        id: 'p5-life-bond', source: 'inst-life-insurance', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false,
        explanation: { zh: '人寿保险公司配置大量债券以匹配长期负债', en: 'Life insurers invest heavily in bonds to match long-term liabilities' }
    },
    {
        id: 'p5-life-pension', source: 'inst-life-insurance', target: 'inst-pension', type: 'cooperates_with', strength: 2, bidirectional: true,
        explanation: { zh: '人寿保险与养老金在企业年金市场合作', en: 'Life insurers cooperate with pension funds in corporate annuity market' }
    },
    {
        id: 'p5-property-reinsure', source: 'inst-property-insurance', target: 'inst-reinsurance', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: '财产保险公司通过再保险分散巨灾风险', en: 'Property insurers use reinsurance to spread catastrophe risk' }
    },
    {
        id: 'p5-property-risk', source: 'inst-property-insurance', target: 'macro-market-risk', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '财产保险是企业风险管理的重要工具', en: 'Property insurance is key tool for corporate risk management' }
    },
    {
        id: 'p5-reinsure-global', source: 'inst-reinsurance', target: 'macro-counterparty-risk', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '再保险在全球分散风险，影响系统性风险', en: 'Reinsurance spreads risk globally, affecting systemic risk' }
    },
    {
        id: 'p5-reinsure-cat', source: 'inst-reinsurance', target: 'macro-crisis', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '巨灾再保险在危机中提供关键保障', en: 'Catastrophe reinsurance provides critical protection in crises' }
    },

    // ====================================
    // 5. 交易所 (TSE, BSE): 各 +2
    // ====================================
    {
        id: 'p5-tse-equity', source: 'inst-tse', target: 'market-equity', type: 'hosts', strength: 3, bidirectional: false,
        explanation: { zh: '东京证券交易所是亚洲最大股票市场之一', en: 'TSE hosts one of Asia largest equity markets' }
    },
    {
        id: 'p5-tse-index', source: 'inst-tse', target: 'market-index-nikkei', type: 'hosts', strength: 3, bidirectional: false,
        explanation: { zh: '日经225指数在东京证券交易所交易', en: 'Nikkei 225 index trades on TSE' }
    },
    {
        id: 'p5-bse-sme', source: 'inst-bse', target: 'market-equity', type: 'hosts', strength: 2, bidirectional: false,
        explanation: { zh: '北京证券交易所服务创新型中小企业', en: 'BSE hosts innovative SME equity market' }
    },
    {
        id: 'p5-bse-csrc', source: 'inst-csrc', target: 'inst-bse', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '证监会监管北京证券交易所', en: 'CSRC regulates Beijing Stock Exchange' }
    },

    // ====================================
    // 6. 市场类 (私募/即期外汇/回购): 各 +2
    // ====================================
    {
        id: 'p5-private-pe', source: 'market-private-placement', target: 'instr-pe', type: 'enables', strength: 3, bidirectional: false,
        explanation: { zh: '私募发行市场是PE/VC融资的主要渠道', en: 'Private placement market is main channel for PE/VC financing' }
    },
    {
        id: 'p5-private-csrc', source: 'inst-csrc', target: 'market-private-placement', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '证监会监管私募发行市场', en: 'CSRC regulates private placement market' }
    },
    {
        id: 'p5-spot-fx', source: 'market-forex-spot', target: 'instr-spot-fx', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '即期外汇市场交易即期外汇产品', en: 'Spot forex market trades spot FX instruments' }
    },
    {
        id: 'p5-spot-bank', source: 'inst-commercial-bank', target: 'market-forex-spot', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '商业银行是即期外汇市场主要参与者', en: 'Commercial banks are major participants in spot forex market' }
    },
    {
        id: 'p5-repo-money', source: 'market-repo', target: 'market-money', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '回购市场是货币市场的重要组成部分', en: 'Repo market is key component of money market' }
    },
    {
        id: 'p5-repo-cb', source: 'inst-central-bank', target: 'market-repo', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: '央行通过回购操作调节流动性', en: 'Central banks use repo operations to regulate liquidity' }
    },

    // ====================================
    // 7. 工具类批量修复 (各 +2)
    // ====================================
    // 优先股
    {
        id: 'p5-preferred-bank', source: 'inst-commercial-bank', target: 'instr-preferred-stock', type: 'issues', strength: 2, bidirectional: false,
        explanation: { zh: '银行发行优先股补充资本', en: 'Banks issue preferred stock to supplement capital' }
    },
    {
        id: 'p5-preferred-dividend', source: 'instr-preferred-stock', target: 'instr-bond', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: { zh: '优先股具有类似债券的固定股息特性', en: 'Preferred stock has bond-like fixed dividend characteristics' }
    },
    // ADR
    {
        id: 'p5-adr-stock', source: 'instr-adr', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: 'ADR代表外国公司股票在美国交易', en: 'ADR represents foreign company shares trading in US' }
    },
    {
        id: 'p5-adr-custody', source: 'inst-custodian', target: 'instr-adr', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: '托管银行发行并管理ADR项目', en: 'Custodian banks issue and manage ADR programs' }
    },
    // 市政债
    {
        id: 'p5-muni-fiscal', source: 'instr-muni-bond', target: 'macro-fiscal', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '市政债券依赖于地方政府财政能力', en: 'Municipal bonds depend on local government fiscal capacity' }
    },
    {
        id: 'p5-muni-tax', source: 'instr-muni-bond', target: 'macro-tax', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '美国市政债券利息免税，影响投资决策', en: 'US muni bonds are tax-exempt, affecting investment decisions' }
    },
    // 指数期权
    {
        id: 'p5-index-opt-cboe', source: 'inst-cboe', target: 'instr-index-options', type: 'hosts', strength: 3, bidirectional: false,
        explanation: { zh: 'CBOE是全球最大的指数期权交易所', en: 'CBOE is world largest index options exchange' }
    },
    {
        id: 'p5-index-opt-vix', source: 'instr-index-options', target: 'instr-vix-futures', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: 'VIX由SPX期权隐含波动率计算', en: 'VIX is calculated from SPX options implied volatility' }
    },
    // 个股期货
    {
        id: 'p5-ssf-stock', source: 'instr-single-stock-futures', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '个股期货以个股为标的', en: 'Single stock futures are based on individual stocks' }
    },
    {
        id: 'p5-ssf-hedge', source: 'inst-securities', target: 'instr-single-stock-futures', type: 'trades', strength: 2, bidirectional: false,
        explanation: { zh: '券商交易个股期货进行对冲', en: 'Securities firms trade SSF for hedging' }
    },
    // 即期外汇工具
    {
        id: 'p5-spotfx-forex', source: 'instr-spot-fx', target: 'market-forex', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '即期外汇在外汇市场交易', en: 'Spot FX trades in forex market' }
    },
    {
        id: 'p5-spotfx-forward', source: 'instr-spot-fx', target: 'instr-forwards', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: { zh: '远期汇率从即期汇率和利差推导', en: 'Forward FX rate derived from spot rate and interest differential' }
    },
    // 能源
    {
        id: 'p5-energy-comm', source: 'instr-energy', target: 'market-commodities', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '能源产品在商品市场交易', en: 'Energy products trade in commodity markets' }
    },
    {
        id: 'p5-energy-petro', source: 'instr-energy', target: 'infra-petrodollar', type: 'depends_on', strength: 2, bidirectional: false,
        explanation: { zh: '原油以美元计价，与石油美元体系相关', en: 'Crude oil is USD-denominated, tied to petrodollar system' }
    },
    // 农产品
    {
        id: 'p5-agri-comm', source: 'instr-agriculture', target: 'market-commodities', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '农产品在商品市场交易', en: 'Agricultural products trade in commodity markets' }
    },
    {
        id: 'p5-agri-cme', source: 'inst-cme', target: 'instr-agriculture', type: 'hosts', strength: 2, bidirectional: false,
        explanation: { zh: 'CME是全球主要农产品期货交易所', en: 'CME is major agricultural futures exchange' }
    },

    // ====================================
    // 8. 宏观类批量修复 (各 +2)
    // ====================================
    // 准备金率
    {
        id: 'p5-reserve-cb', source: 'inst-central-bank', target: 'macro-reserve-req', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '央行设定法定存款准备金率', en: 'Central bank sets statutory reserve requirement' }
    },
    {
        id: 'p5-reserve-bank', source: 'macro-reserve-req', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '准备金率直接影响商业银行可贷资金', en: 'Reserve requirement directly affects banks loanable funds' }
    },
    // 公开市场操作
    {
        id: 'p5-omo-cb', source: 'inst-central-bank', target: 'macro-open-market', type: 'uses', strength: 3, bidirectional: false,
        explanation: { zh: '央行通过公开市场操作调节流动性', en: 'Central bank uses OMO to regulate liquidity' }
    },
    {
        id: 'p5-omo-rate', source: 'macro-open-market', target: 'macro-interest-rate', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '公开市场操作影响短期利率', en: 'OMO affects short-term interest rates' }
    }
];
