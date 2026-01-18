import type { Relationship } from '../types';

// Phase 6: L2 实体关系批量修复 (Batch 2)
// 修复剩余 49 个关系密度不足的 L2 实体
export const phase6L2FixRelationships: Relationship[] = [
    // ====================================
    // 1. 结构化产品类 (预测合约/收益凭证/DCN): 各 +2
    // ====================================
    {
        id: 'p6-forecast-crypto', source: 'instr-forecast', target: 'market-crypto', type: 'trades', strength: 2, bidirectional: false,
        explanation: { zh: '预测合约在加密市场上交易', en: 'Prediction contracts trade on crypto markets' }
    },
    {
        id: 'p6-forecast-defi', source: 'instr-forecast', target: 'market-defi', type: 'trades', strength: 2, bidirectional: false,
        explanation: { zh: '预测合约是DeFi市场的创新产品', en: 'Prediction contracts are DeFi market innovations' }
    },
    {
        id: 'p6-income-struct', source: 'instr-income-cert', target: 'instr-structured', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '收益凭证是结构化产品的一种', en: 'Income certificates are a type of structured product' }
    },
    {
        id: 'p6-income-sec', source: 'inst-securities', target: 'instr-income-cert', type: 'issues', strength: 3, bidirectional: false,
        explanation: { zh: '券商发行收益凭证', en: 'Securities firms issue income certificates' }
    },
    {
        id: 'p6-dcn-struct', source: 'instr-dcn', target: 'instr-structured', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: 'DCN折价票据是结构化产品的一种', en: 'DCN is a type of structured product' }
    },
    {
        id: 'p6-dcn-option', source: 'instr-dcn', target: 'instr-options', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: { zh: 'DCN内嵌看跌期权', en: 'DCN contains embedded put options' }
    },

    // ====================================
    // 2. 宏观财政类 (政府支出/赤字/国际收支): 各 +2
    // ====================================
    {
        id: 'p6-spending-gdp', source: 'macro-spending', target: 'macro-gdp', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '政府支出是GDP的组成部分', en: 'Government spending is a component of GDP' }
    },
    {
        id: 'p6-spending-fiscal', source: 'macro-spending', target: 'macro-fiscal', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '政府支出依赖财政政策', en: 'Government spending depends on fiscal policy' }
    },
    {
        id: 'p6-deficit-bond', source: 'macro-deficit', target: 'instr-gov-bond', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '财政赤字通过发债融资', en: 'Fiscal deficits are financed through bond issuance' }
    },
    {
        id: 'p6-deficit-rate', source: 'macro-deficit', target: 'macro-interest-rate', type: 'influences', strength: 2, bidirectional: false,
        explanation: { zh: '政府借贷影响利率水平', en: 'Government borrowing affects interest rate levels' }
    },
    {
        id: 'p6-bop-fx', source: 'macro-bop', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '国际收支影响汇率', en: 'Balance of payments affects exchange rates' }
    },
    {
        id: 'p6-bop-capital', source: 'macro-bop', target: 'macro-capital-flows', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '国际收支账户记录资本流动', en: 'BOP accounts record capital flows' }
    },

    // ====================================
    // 3. 美元体系/基础设施 (欧洲美元/Euroclear): 各 +2
    // ====================================
    {
        id: 'p6-eurodollar-forex', source: 'infra-eurodollar', target: 'market-forex', type: 'influences', strength: 3, bidirectional: false,
        explanation: { zh: '欧洲美元市场影响全球外汇市场', en: 'Eurodollar market affects global forex market' }
    },
    {
        id: 'p6-eurodollar-libor', source: 'infra-eurodollar', target: 'macro-interest-rate', type: 'benchmarks', strength: 3, bidirectional: false,
        explanation: { zh: '欧洲美元利率是LIBOR的基础', en: 'Eurodollar rates are the basis for LIBOR' }
    },
    {
        id: 'p6-euroclear-bond', source: 'infra-euroclear', target: 'instr-bond', type: 'settles', strength: 3, bidirectional: false,
        explanation: { zh: 'Euroclear结算国际债券交易', en: 'Euroclear settles international bond transactions' }
    },
    {
        id: 'p6-euroclear-dtcc', source: 'infra-euroclear', target: 'infra-dtcc', type: 'cooperates_with', strength: 2, bidirectional: true,
        explanation: { zh: 'Euroclear与DTCC在跨境结算上合作', en: 'Euroclear cooperates with DTCC on cross-border settlement' }
    },

    // ====================================
    // 4. ESG/Smart Beta 因子类 (各 +2)
    // ====================================
    {
        id: 'p6-green-esg', source: 'instr-green-bond', target: 'instr-esg', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '绿色债券是ESG投资的核心产品', en: 'Green bonds are core ESG investment products' }
    },
    {
        id: 'p6-green-corp', source: 'instr-green-bond', target: 'instr-corp-bond', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: { zh: '绿色债券是企业债的特殊类别', en: 'Green bonds are a special category of corporate bonds' }
    },
    {
        id: 'p6-esgetf-etf', source: 'instr-esg-etf', target: 'instr-etf', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: 'ESG ETF是ETF的细分品类', en: 'ESG ETFs are a subcategory of ETFs' }
    },
    {
        id: 'p6-esgetf-esg', source: 'instr-esg-etf', target: 'instr-esg', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: 'ESG ETF跟踪ESG指数', en: 'ESG ETFs track ESG indices' }
    },
    {
        id: 'p6-value-smart', source: 'instr-factor-value', target: 'instr-smart-beta', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '价值因子是Smart Beta策略之一', en: 'Value factor is one of Smart Beta strategies' }
    },
    {
        id: 'p6-value-stock', source: 'instr-factor-value', target: 'instr-stock', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '价值因子投资低估值股票', en: 'Value factor invests in undervalued stocks' }
    },
    {
        id: 'p6-momentum-smart', source: 'instr-factor-momentum', target: 'instr-smart-beta', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '动量因子是Smart Beta策略之一', en: 'Momentum factor is one of Smart Beta strategies' }
    },
    {
        id: 'p6-momentum-stock', source: 'instr-factor-momentum', target: 'instr-stock', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '动量因子投资价格趋势强劲的股票', en: 'Momentum factor invests in stocks with strong price trends' }
    },
    {
        id: 'p6-quality-smart', source: 'instr-factor-quality', target: 'instr-smart-beta', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '质量因子是Smart Beta策略之一', en: 'Quality factor is one of Smart Beta strategies' }
    },
    {
        id: 'p6-quality-stock', source: 'instr-factor-quality', target: 'instr-stock', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '质量因子投资高ROE、低杠杆股票', en: 'Quality factor invests in high ROE, low leverage stocks' }
    },
    {
        id: 'p6-lowvol-smart', source: 'instr-factor-lowvol', target: 'instr-smart-beta', type: 'derives_from', strength: 3, bidirectional: false,
        explanation: { zh: '低波动因子是Smart Beta策略之一', en: 'Low volatility factor is one of Smart Beta strategies' }
    },
    {
        id: 'p6-lowvol-stock', source: 'instr-factor-lowvol', target: 'instr-stock', type: 'invests', strength: 2, bidirectional: false,
        explanation: { zh: '低波动因子投资波动率较低的股票', en: 'Low volatility factor invests in lower volatility stocks' }
    },

    // ====================================
    // 5. 市场类 (-1 缺口): 各 +1
    // ====================================
    {
        id: 'p6-interbank-cb', source: 'inst-central-bank', target: 'market-interbank', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: '央行监管同业拆借市场', en: 'Central bank regulates interbank market' }
    },
    {
        id: 'p6-swaps-irs', source: 'market-swaps', target: 'instr-irs', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '互换市场交易利率互换', en: 'Swap market trades interest rate swaps' }
    },
    {
        id: 'p6-otc-cds', source: 'market-otc-derivatives', target: 'instr-cds', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: 'CDS主要在场外衍生品市场交易', en: 'CDS mainly trades in OTC derivatives market' }
    },
    {
        id: 'p6-energy-petro', source: 'market-energy', target: 'infra-petrodollar', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: '能源市场与石油美元体系紧密相关', en: 'Energy market is closely tied to petrodollar system' }
    },
    {
        id: 'p6-defi-crypto', source: 'market-defi', target: 'market-crypto', type: 'depends_on', strength: 3, bidirectional: false,
        explanation: { zh: 'DeFi市场依赖加密货币基础设施', en: 'DeFi market depends on crypto infrastructure' }
    },

    // ====================================
    // 6. 监管类 (SEC): +1
    // ====================================
    {
        id: 'p6-sec-nasdaq', source: 'inst-sec', target: 'inst-nasdaq', type: 'regulates', strength: 3, bidirectional: false,
        explanation: { zh: 'SEC监管纳斯达克交易所', en: 'SEC regulates NASDAQ exchange' }
    },

    // ====================================
    // 7. 工具类 (-1 缺口): 各 +1
    // ====================================
    {
        id: 'p6-common-dividend', source: 'instr-common-stock', target: 'instr-preferred-stock', type: 'competes_with', strength: 1, bidirectional: true,
        explanation: { zh: '普通股与优先股在资本结构中竞争', en: 'Common and preferred stocks compete in capital structure' }
    },
    {
        id: 'p6-warrant-option', source: 'instr-warrant', target: 'instr-options', type: 'derives_from', strength: 2, bidirectional: false,
        explanation: { zh: '权证类似于长期看涨期权', en: 'Warrants are similar to long-term call options' }
    },
    {
        id: 'p6-tbill-money', source: 'instr-tbill', target: 'market-money', type: 'trades', strength: 3, bidirectional: false,
        explanation: { zh: '短期国库券在货币市场交易', en: 'T-bills trade in money market' }
    },
    {
        id: 'p6-commfut-cme', source: 'inst-cme', target: 'instr-commodity-futures', type: 'hosts', strength: 3, bidirectional: false,
        explanation: { zh: 'CME是全球最大商品期货交易所', en: 'CME is world largest commodity futures exchange' }
    }
];
