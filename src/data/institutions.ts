import type { Entity, Relationship } from '../types';

// 金融机构领域实体
export const institutionEntities: Entity[] = [
    // === 中央银行体系 ===
    {
        id: 'inst-central-bank',
        name: { zh: '中央银行', en: 'Central Banks' },
        description: { zh: '国家货币政策制定执行机构', en: 'National monetary policy authority' },
        domain: 'institutions', category: 'regulatory', icon: '🏛️',
        tags: ['central-bank', 'monetary']
    },
    {
        id: 'inst-pboc',
        name: { zh: '中国人民银行', en: 'PBOC' },
        description: { zh: '中国的中央银行', en: 'People\'s Bank of China' },
        domain: 'institutions', category: 'central-bank', icon: '🇨🇳',
        tags: ['pboc', 'china']
    },
    {
        id: 'inst-fed',
        name: { zh: '美联储', en: 'Federal Reserve' },
        description: { zh: '美国中央银行系统', en: 'US Federal Reserve System' },
        domain: 'institutions', category: 'central-bank', icon: '🇺🇸',
        tags: ['fed', 'usa', 'fomc']
    },
    {
        id: 'inst-ecb',
        name: { zh: '欧洲央行', en: 'ECB' },
        description: { zh: '欧元区货币政策机构', en: 'European Central Bank' },
        domain: 'institutions', category: 'central-bank', icon: '🇪🇺',
        tags: ['ecb', 'euro', 'europe']
    },

    // === 商业银行体系 ===
    {
        id: 'inst-commercial-bank',
        name: { zh: '商业银行', en: 'Commercial Banks' },
        description: { zh: '存贷款和支付结算服务', en: 'Deposit, lending, payment services' },
        domain: 'institutions', category: 'depository', icon: '🏦',
        tags: ['bank', 'deposit', 'lending']
    },
    {
        id: 'inst-state-bank',
        name: { zh: '国有大型银行', en: 'State-owned Banks' },
        description: { zh: '国有控股的大型商业银行', en: 'Large state-owned commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏛️',
        tags: ['state-owned', 'big-four']
    },
    {
        id: 'inst-joint-bank',
        name: { zh: '股份制银行', en: 'Joint-stock Banks' },
        description: { zh: '股份制商业银行', en: 'Joint-stock commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏢',
        tags: ['joint-stock']
    },
    {
        id: 'inst-city-bank',
        name: { zh: '城市商业银行', en: 'City Commercial Banks' },
        description: { zh: '地方性城市商业银行', en: 'Regional city commercial banks' },
        domain: 'institutions', category: 'commercial-bank', icon: '🏙️',
        tags: ['city-bank', 'regional']
    },

    // === 投资银行 ===
    {
        id: 'inst-investment-bank',
        name: { zh: '投资银行', en: 'Investment Banks' },
        description: { zh: '证券承销、并购咨询服务', en: 'Underwriting, M&A advisory' },
        domain: 'institutions', category: 'investment', icon: '🏢',
        tags: ['investment-bank', 'ipo', 'ma']
    },

    // === 证券机构 ===
    {
        id: 'inst-securities',
        name: { zh: '证券公司', en: 'Securities Firms' },
        description: { zh: '证券经纪和自营业务', en: 'Brokerage and proprietary trading' },
        domain: 'institutions', category: 'investment', icon: '📊',
        tags: ['securities', 'broker']
    },
    {
        id: 'inst-broker',
        name: { zh: '经纪商', en: 'Brokers' },
        description: { zh: '为客户执行交易的中介', en: 'Intermediaries executing trades' },
        domain: 'institutions', category: 'securities', icon: '👔',
        tags: ['broker', 'execution']
    },

    // === 资产管理 ===
    {
        id: 'inst-fund',
        name: { zh: '基金公司', en: 'Fund Companies' },
        description: { zh: '管理各类投资基金', en: 'Managing investment funds' },
        domain: 'institutions', category: 'investment', icon: '💼',
        tags: ['fund', 'asset-management']
    },
    {
        id: 'inst-mutual-fund',
        name: { zh: '公募基金', en: 'Mutual Funds' },
        description: { zh: '公开募集的集合投资', en: 'Publicly offered investment funds' },
        domain: 'institutions', category: 'fund', icon: '📈',
        tags: ['mutual-fund', 'public']
    },
    {
        id: 'inst-private-fund',
        name: { zh: '私募基金', en: 'Private Funds' },
        description: { zh: '面向合格投资者的私募', en: 'Private placement for qualified investors' },
        domain: 'institutions', category: 'fund', icon: '🔒',
        tags: ['private-equity', 'hedge-fund']
    },
    {
        id: 'inst-pension',
        name: { zh: '养老金/退休基金', en: 'Pension Funds' },
        description: { zh: '退休养老金投资管理', en: 'Retirement fund management' },
        domain: 'institutions', category: 'fund', icon: '👴',
        tags: ['pension', 'retirement']
    },
    {
        id: 'inst-sovereign-fund',
        name: { zh: '主权财富基金', en: 'Sovereign Wealth Funds' },
        description: { zh: '国家外汇储备投资', en: 'State investment funds' },
        domain: 'institutions', category: 'fund', icon: '🌍',
        tags: ['swf', 'sovereign']
    },

    // === 保险机构 ===
    {
        id: 'inst-insurance',
        name: { zh: '保险公司', en: 'Insurance Companies' },
        description: { zh: '提供风险保障服务', en: 'Risk protection services' },
        domain: 'institutions', category: 'insurance', icon: '🛡️',
        tags: ['insurance', 'risk']
    },
    {
        id: 'inst-life-insurance',
        name: { zh: '人寿保险', en: 'Life Insurance' },
        description: { zh: '人寿和健康保险', en: 'Life and health insurance' },
        domain: 'institutions', category: 'insurance', icon: '❤️',
        tags: ['life', 'health']
    },
    {
        id: 'inst-property-insurance',
        name: { zh: '财产保险', en: 'Property Insurance' },
        description: { zh: '财产和意外保险', en: 'Property and casualty insurance' },
        domain: 'institutions', category: 'insurance', icon: '🏠',
        tags: ['property', 'casualty']
    },
    {
        id: 'inst-reinsurance',
        name: { zh: '再保险', en: 'Reinsurance' },
        description: { zh: '保险公司的保险', en: 'Insurance for insurers' },
        domain: 'institutions', category: 'insurance', icon: '♻️',
        tags: ['reinsurance']
    },

    // === 监管机构 ===
    {
        id: 'inst-regulator',
        name: { zh: '金融监管机构', en: 'Financial Regulators' },
        description: { zh: '金融市场监督管理', en: 'Financial market supervision' },
        domain: 'institutions', category: 'regulatory', icon: '⚖️',
        tags: ['regulator', 'supervision']
    },
    {
        id: 'inst-csrc',
        name: { zh: '证监会', en: 'Securities Regulator' },
        description: { zh: '证券市场监管机构', en: 'Securities market regulator' },
        domain: 'institutions', category: 'regulator', icon: '📋',
        tags: ['csrc', 'sec']
    },
    {
        id: 'inst-cbirc',
        name: { zh: '银保监会', en: 'Banking Insurance Regulator' },
        description: { zh: '银行保险监管机构', en: 'Banking and insurance regulator' },
        domain: 'institutions', category: 'regulator', icon: '🏛️',
        tags: ['cbirc', 'banking']
    },
    {
        id: 'inst-exchange',
        name: { zh: '交易所', en: 'Exchanges' },
        description: { zh: '证券和衍生品交易平台', en: 'Securities and derivatives trading venues' },
        domain: 'institutions', category: 'infrastructure', icon: '🏛️',
        tags: ['exchange', 'trading-venue']
    },
    {
        id: 'inst-clearing',
        name: { zh: '清算机构', en: 'Clearing Houses' },
        description: { zh: '交易清算和结算服务', en: 'Trade clearing and settlement' },
        domain: 'institutions', category: 'infrastructure', icon: '⚙️',
        tags: ['clearing', 'settlement', 'ccp']
    },

    // === 其他金融机构 ===
    {
        id: 'inst-rating',
        name: { zh: '评级机构', en: 'Rating Agencies' },
        description: { zh: '信用评级服务', en: 'Credit rating services' },
        domain: 'institutions', category: 'service', icon: '⭐',
        tags: ['rating', 'credit']
    },
    {
        id: 'inst-fintech',
        name: { zh: '金融科技公司', en: 'FinTech Companies' },
        description: { zh: '技术驱动的金融服务', en: 'Technology-driven financial services' },
        domain: 'institutions', category: 'emerging', icon: '💻',
        tags: ['fintech', 'digital']
    },

    // === 主要交易所 ===
    {
        id: 'inst-nyse',
        name: { zh: '纽约证券交易所', en: 'NYSE' },
        description: { zh: '全球最大的证券交易所，按上市公司市值计', en: 'World\'s largest stock exchange by market capitalization' },
        domain: 'institutions', category: 'exchange', icon: '🇺🇸',
        tags: ['nyse', 'usa', 'equity']
    },
    {
        id: 'inst-nasdaq',
        name: { zh: '纳斯达克', en: 'NASDAQ' },
        description: { zh: '全球首个电子证券交易所，科技股集中地', en: 'First electronic stock exchange, home to tech giants' },
        domain: 'institutions', category: 'exchange', icon: '💻',
        tags: ['nasdaq', 'tech', 'usa']
    },
    {
        id: 'inst-sse',
        name: { zh: '上海证券交易所', en: 'Shanghai Stock Exchange' },
        description: { zh: '中国大陆最大证券交易所', en: 'Largest stock exchange in mainland China' },
        domain: 'institutions', category: 'exchange', icon: '🇨🇳',
        tags: ['sse', 'china', 'a-share']
    },
    {
        id: 'inst-szse',
        name: { zh: '深圳证券交易所', en: 'Shenzhen Stock Exchange' },
        description: { zh: '中国第二大证券交易所，创业板所在地', en: 'Second largest in China, home to ChiNext' },
        domain: 'institutions', category: 'exchange', icon: '🇨🇳',
        tags: ['szse', 'china', 'chinext']
    },
    {
        id: 'inst-hkex',
        name: { zh: '香港交易所', en: 'HKEX' },
        description: { zh: '亚洲领先的交易所，连接中国与国际市场', en: 'Asia\'s leading exchange connecting China with global markets' },
        domain: 'institutions', category: 'exchange', icon: '🇭🇰',
        tags: ['hkex', 'hong-kong', 'stock-connect']
    },
    {
        id: 'inst-tse',
        name: { zh: '东京证券交易所', en: 'Tokyo Stock Exchange' },
        description: { zh: '日本最大证券交易所，亚洲第二大', en: 'Japan\'s largest stock exchange, second in Asia' },
        domain: 'institutions', category: 'exchange', icon: '🇯🇵',
        tags: ['tse', 'japan', 'nikkei']
    },
    {
        id: 'inst-lse',
        name: { zh: '伦敦证券交易所', en: 'London Stock Exchange' },
        description: { zh: '欧洲最大证券交易所之一，全球金融中心', en: 'One of Europe\'s largest exchanges, global financial hub' },
        domain: 'institutions', category: 'exchange', icon: '🇬🇧',
        tags: ['lse', 'uk', 'ftse']
    },
    {
        id: 'inst-cme',
        name: { zh: '芝加哥商业交易所', en: 'CME Group' },
        description: { zh: '全球最大的衍生品交易所，期货期权交易中心', en: 'World\'s largest derivatives exchange for futures and options' },
        domain: 'institutions', category: 'exchange', icon: '📊',
        tags: ['cme', 'futures', 'derivatives', 'usa']
    },
    {
        id: 'inst-ice',
        name: { zh: '洲际交易所', en: 'ICE' },
        description: { zh: '运营商品、金融和股权期货交易所', en: 'Operates commodity, financial, and equity futures exchanges' },
        domain: 'institutions', category: 'exchange', icon: '🌐',
        tags: ['ice', 'commodities', 'nyse-parent']
    }
];

// 金融机构关系
export const institutionRelationships: Relationship[] = [
    // 中央银行层级
    { id: 'ir-1', source: 'inst-central-bank', target: 'inst-pboc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-2', source: 'inst-central-bank', target: 'inst-fed', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-3', source: 'inst-central-bank', target: 'inst-ecb', type: 'provides', strength: 3, bidirectional: false },

    // 商业银行层级
    { id: 'ir-4', source: 'inst-commercial-bank', target: 'inst-state-bank', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-5', source: 'inst-commercial-bank', target: 'inst-joint-bank', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-6', source: 'inst-commercial-bank', target: 'inst-city-bank', type: 'provides', strength: 2, bidirectional: false },

    // 基金公司层级
    { id: 'ir-7', source: 'inst-fund', target: 'inst-mutual-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-8', source: 'inst-fund', target: 'inst-private-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-9', source: 'inst-fund', target: 'inst-pension', type: 'provides', strength: 2, bidirectional: false },
    { id: 'ir-10', source: 'inst-fund', target: 'inst-sovereign-fund', type: 'provides', strength: 2, bidirectional: false },

    // 保险公司层级
    { id: 'ir-11', source: 'inst-insurance', target: 'inst-life-insurance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-12', source: 'inst-insurance', target: 'inst-property-insurance', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-13', source: 'inst-insurance', target: 'inst-reinsurance', type: 'provides', strength: 2, bidirectional: false },

    // 监管关系
    { id: 'ir-14', source: 'inst-central-bank', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-15', source: 'inst-regulator', target: 'inst-csrc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-16', source: 'inst-regulator', target: 'inst-cbirc', type: 'provides', strength: 3, bidirectional: false },
    { id: 'ir-17', source: 'inst-csrc', target: 'inst-securities', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-18', source: 'inst-csrc', target: 'inst-fund', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-19', source: 'inst-cbirc', target: 'inst-commercial-bank', type: 'regulates', strength: 3, bidirectional: false },
    { id: 'ir-20', source: 'inst-cbirc', target: 'inst-insurance', type: 'regulates', strength: 3, bidirectional: false },

    // 业务竞争与合作
    { id: 'ir-21', source: 'inst-commercial-bank', target: 'inst-investment-bank', type: 'competes_with', strength: 2, bidirectional: true },
    { id: 'ir-22', source: 'inst-securities', target: 'inst-fund', type: 'cooperates_with', strength: 2, bidirectional: true },
    { id: 'ir-23', source: 'inst-fintech', target: 'inst-commercial-bank', type: 'competes_with', strength: 2, bidirectional: true },

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

    // 交易所竞争关系
    { id: 'ir-33', source: 'inst-nyse', target: 'inst-nasdaq', type: 'competes_with', strength: 3, bidirectional: true },
    { id: 'ir-34', source: 'inst-sse', target: 'inst-szse', type: 'competes_with', strength: 2, bidirectional: true },
    { id: 'ir-35', source: 'inst-cme', target: 'inst-ice', type: 'competes_with', strength: 3, bidirectional: true },

    // 跨境合作（港股通、沪伦通）
    { id: 'ir-36', source: 'inst-hkex', target: 'inst-sse', type: 'cooperates_with', strength: 3, bidirectional: true },
    { id: 'ir-37', source: 'inst-hkex', target: 'inst-szse', type: 'cooperates_with', strength: 3, bidirectional: true },
    { id: 'ir-38', source: 'inst-lse', target: 'inst-sse', type: 'cooperates_with', strength: 2, bidirectional: true }
];
