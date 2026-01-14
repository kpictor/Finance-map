import type { Relationship } from '../types';

// Phase 4: L1 实体关系修复
// 修复 7 个关系密度不足的 L1 实体
export const phase4L1FixRelationships: Relationship[] = [
    // ====================================
    // 1. instr-forwards (远期): 当前 1 条，需要 +4
    // ====================================
    {
        id: 'p4-forwards-futures', source: 'instr-forwards', target: 'instr-futures', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '期货是标准化的远期合约，从远期合约衍生而来', en: 'Futures are standardized forward contracts, derived from forwards' }
    },
    {
        id: 'p4-forwards-fx', source: 'instr-forwards', target: 'market-forex-forward', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: '外汇远期是远期合约的重要应用场景', en: 'FX forwards are a key application of forward contracts' }
    },
    {
        id: 'p4-forwards-hedge', source: 'inst-commercial-bank', target: 'instr-forwards', type: 'offers', strength: 2, bidirectional: false,
        explanation: { zh: '商业银行向企业提供远期锁汇服务', en: 'Commercial banks offer forward FX hedging to corporates' }
    },
    {
        id: 'p4-forwards-rate', source: 'instr-forwards', target: 'macro-interest-rate', type: 'depends_on', strength: 2, bidirectional: false,
        explanation: { zh: '远期定价依赖于利率（利率平价理论）', en: 'Forward pricing depends on interest rates (interest rate parity)' }
    },

    // ====================================
    // 2. macro-dupont (杜邦分析): 当前 1 条，需要 +4
    // ====================================
    {
        id: 'p4-dupont-roe', source: 'macro-dupont', target: 'macro-indicators', type: 'enables', strength: 3, bidirectional: false,
        explanation: { zh: '杜邦分析分解ROE，是财务指标分析的重要工具', en: 'DuPont analysis decomposes ROE, an important tool for financial indicators analysis' }
    },
    {
        id: 'p4-dupont-stock', source: 'macro-dupont', target: 'instr-stock', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '杜邦分析帮助投资者评估股票的盈利质量', en: 'DuPont analysis helps investors assess stock earnings quality' }
    },
    {
        id: 'p4-dupont-fund', source: 'inst-fund', target: 'macro-dupont', type: 'uses', strength: 2, bidirectional: false,
        explanation: { zh: '基金经理使用杜邦分析进行基本面研究', en: 'Fund managers use DuPont analysis for fundamental research' }
    },
    {
        id: 'p4-dupont-sector', source: 'macro-dupont', target: 'instr-sector-fund', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '杜邦分析可揭示不同行业的盈利模式差异', en: 'DuPont analysis reveals profitability pattern differences across sectors' }
    },

    // ====================================
    // 3. market-crypto (加密货币市场): 当前 2 条，需要 +3
    // ====================================
    {
        id: 'p4-crypto-defi', source: 'market-crypto', target: 'market-defi', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'DeFi是加密货币市场的重要子市场', en: 'DeFi is an important sub-market of crypto' }
    },
    {
        id: 'p4-crypto-reg', source: 'inst-regulator', target: 'market-crypto', type: 'regulates', strength: 2, bidirectional: false,
        explanation: { zh: '各国监管机构正在建立加密货币监管框架', en: 'Regulators worldwide are establishing crypto regulatory frameworks' }
    },
    {
        id: 'p4-crypto-volatility', source: 'market-crypto', target: 'instr-volatility', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '加密货币市场的高波动性影响整体市场情绪', en: 'Crypto market high volatility affects overall market sentiment' }
    },

    // ====================================
    // 4. inst-clearing (清算机构): 当前 2 条，需要 +3
    // ====================================
    {
        id: 'p4-clearing-dtcc', source: 'inst-clearing', target: 'infra-dtcc', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'DTCC是全球最大的清算机构', en: 'DTCC is the world largest clearing institution' }
    },
    {
        id: 'p4-clearing-derivatives', source: 'inst-clearing', target: 'market-derivatives', type: 'clears', strength: 3, bidirectional: false,
        explanation: { zh: '清算机构作为中央对手方清算衍生品交易', en: 'Clearing houses clear derivatives as central counterparty' }
    },
    {
        id: 'p4-clearing-risk', source: 'inst-clearing', target: 'macro-counterparty-risk', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '中央清算大幅降低了交易对手风险', en: 'Central clearing significantly reduces counterparty risk' }
    },

    // ====================================
    // 5. instr-volatility (波动率产品): 当前 2 条，需要 +3
    // ====================================
    {
        id: 'p4-volatility-vix', source: 'instr-volatility', target: 'instr-vix-futures', type: 'provides', strength: 3, bidirectional: false,
        explanation: { zh: 'VIX期货是最主要的波动率交易产品', en: 'VIX futures are the primary volatility trading products' }
    },
    {
        id: 'p4-volatility-options', source: 'instr-volatility', target: 'instr-options', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '波动率产品价值从期权隐含波动率派生', en: 'Volatility product values derive from options implied volatility' }
    },
    {
        id: 'p4-volatility-hedge', source: 'instr-hedge-fund', target: 'instr-volatility', type: 'trades', strength: 2, bidirectional: false,
        explanation: { zh: '对冲基金是波动率产品的主要交易者', en: 'Hedge funds are major traders of volatility products' }
    },

    // ====================================
    // 6. macro-yield-curve (收益率曲线): 当前 2 条，需要 +3
    // ====================================
    {
        id: 'p4-yc-bond', source: 'macro-yield-curve', target: 'instr-bond', type: 'benchmarks', strength: 3, bidirectional: false,
        explanation: { zh: '收益率曲线是债券定价的核心基准', en: 'Yield curve is the core benchmark for bond pricing' }
    },
    {
        id: 'p4-yc-recession', source: 'macro-yield-curve', target: 'macro-recession', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '收益率曲线倒挂是经济衰退的领先指标', en: 'Yield curve inversion is a leading indicator of recession' }
    },
    {
        id: 'p4-yc-rate', source: 'macro-interest-rate', target: 'macro-yield-curve', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '央行利率政策直接影响收益率曲线形态', en: 'Central bank rate policy directly affects yield curve shape' }
    },

    // ====================================
    // 7. macro-carry-trade (套息交易): 当前 2 条，需要 +3
    // ====================================
    {
        id: 'p4-carry-fx', source: 'macro-carry-trade', target: 'market-forex', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '套息交易主要发生在外汇市场', en: 'Carry trades mainly occur in forex markets' }
    },
    {
        id: 'p4-carry-rate', source: 'macro-carry-trade', target: 'macro-interest-rate', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '套息交易利润依赖于两国利差', en: 'Carry trade profits depend on interest rate differentials' }
    },
    {
        id: 'p4-carry-hedge', source: 'instr-hedge-fund', target: 'macro-carry-trade', type: 'uses', strength: 2, bidirectional: false,
        explanation: { zh: '对冲基金是套息交易的主要参与者', en: 'Hedge funds are major participants in carry trades' }
    }
];
