import type { Entity, Relationship } from '../types';

// 金融工具领域实体
export const instrumentEntities: Entity[] = [
    // === 权益类工具 ===
    {
        // 华尔街说明: 股票是最基础的权益工具，按市值分为大盘/中盘/小盘
        id: 'instr-stock',
        name: { zh: '股票', en: 'Stocks' },
        description: {
            zh: '代表公司所有权的证券，股东享有分红权和投票权。全球市值最大公司苹果约3万亿美元',
            en: 'Securities representing company ownership with dividend and voting rights. Apple, the largest by market cap, is worth ~$3 trillion'
        },
        domain: 'instruments', category: 'equity', icon: '📈',
        tags: ['stock', 'equity', 'aapl', 'msft', 'nvda'],
        riskLevel: 'L3',
        level: 1,
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '按市值分类：大盘股(>$10B)、中盘股($2-10B)、小盘股(<$2B)。核心指标：P/E市盈率、P/B市净率、股息率。全球Top3：Apple、Microsoft、NVIDIA',
            en: 'By market cap: Large-cap(>$10B), Mid-cap($2-10B), Small-cap(<$2B). Key metrics: P/E, P/B, Dividend Yield. Global Top 3: Apple, Microsoft, NVIDIA'
        }
    },
    {
        id: 'instr-common-stock',
        name: { zh: '普通股', en: 'Common Stock' },
        description: { zh: '具有投票权的标准股票，在破产清算时索偿顺序最后', en: 'Standard shares with voting rights, last in liquidation priority' },
        domain: 'instruments', category: 'equity', icon: '📊',
        tags: ['common', 'voting'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-stock',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail'
    },
    {
        id: 'instr-preferred-stock',
        name: { zh: '优先股', en: 'Preferred Stock' },
        description: { zh: '优先分红的混合证券，具有固定股息，清算顺序优于普通股', en: 'Hybrid securities with dividend priority, fixed dividends, senior to common stock' },
        domain: 'instruments', category: 'equity', icon: '⭐',
        tags: ['preferred', 'dividend'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-stock',
        tradingVenue: 'exchange',
        liquidity: 'medium',
        investorType: 'retail'
    },
    {
        id: 'instr-adr',
        name: { zh: '存托凭证', en: 'ADR/GDR' },
        description: { zh: '代表外国股票的本地证券，如阿里巴巴、京东在美上市的ADR', en: 'Local securities representing foreign stocks, like Alibaba and JD ADRs in US' },
        domain: 'instruments', category: 'equity', icon: '🌐',
        tags: ['adr', 'gdr', 'cross-border'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-stock',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail'
    },
    {
        id: 'instr-warrant',
        name: { zh: '权证', en: 'Warrants' },
        description: { zh: '由发行人发行的认购或认沽权利证书，具有杆杆效应，到期无价值则归零', en: 'Issuer-issued rights with leverage, may expire worthless' },
        domain: 'instruments', category: 'equity', icon: '📝',
        tags: ['warrant', 'call-warrant', 'put-warrant'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-stock',
        tradingVenue: 'exchange',
        liquidity: 'medium',
        investorType: 'professional'
    },

    // === 固定收益类 ===
    {
        // 华尔街说明: 债券是发行人向投资者的借条，承诺定期付息(coupon)、到期还本(principal)
        id: 'instr-bond',
        name: { zh: '债券', en: 'Bonds' },
        description: {
            zh: '债务型固定收益证券，发行人承诺定期支付票息(Coupon)并在到期日偿还本金。收益率与价格呈反向关系',
            en: 'Debt securities where issuer pays periodic coupons and repays principal at maturity. Yield and price move inversely'
        },
        domain: 'instruments', category: 'fixed-income', icon: '📜',
        tags: ['bond', 'debt', 'coupon', 'yield'],
        riskLevel: 'L2',
        level: 1,
        details: {
            zh: '关键概念：久期(Duration)衡量价格对利率的敏感度，凸性(Convexity)修正久期的误差。信用利差反映违约风险',
            en: 'Key concepts: Duration measures price sensitivity to rates, Convexity adjusts duration errors. Credit spread reflects default risk'
        }
    },
    {
        id: 'instr-gov-bond',
        name: { zh: '国债', en: 'Government Bonds' },
        description: { zh: '政府发行的债券', en: 'Bonds issued by governments' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['treasury', 'sovereign'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-corp-bond',
        name: { zh: '企业债', en: 'Corporate Bonds' },
        description: { zh: '企业发行的债券', en: 'Bonds issued by corporations' },
        domain: 'instruments', category: 'fixed-income', icon: '🏭',
        tags: ['corporate', 'credit'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-convertible',
        name: { zh: '可转债', en: 'Convertible Bonds' },
        description: { zh: '可转换为股票的债券', en: 'Bonds convertible to equity' },
        domain: 'instruments', category: 'fixed-income', icon: '🔄',
        tags: ['convertible', 'hybrid'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-mbs',
        name: { zh: 'MBS/ABS', en: 'MBS/ABS' },
        description: { zh: '资产支持证券', en: 'Asset-backed securities' },
        domain: 'instruments', category: 'structured', icon: '🏠',
        tags: ['mbs', 'abs', 'securitization'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-tbill',
        name: { zh: '国库券', en: 'Treasury Bills' },
        description: { zh: '短期政府债务工具，通常期限在一年以内', en: 'Short-term government debt instruments, typically maturing within one year' },
        domain: 'instruments', category: 'fixed-income', icon: '💴',
        tags: ['treasury', 'short-term', 'money-market'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-muni-bond',
        name: { zh: '市政债券', en: 'Municipal Bonds' },
        description: { zh: '地方政府发行的债券，通常享有税收优惠', en: 'Bonds issued by local governments, often with tax advantages' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['municipal', 'tax-exempt'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond'
    },
    {
        id: 'instr-cd',
        name: { zh: '大额存单', en: 'Certificates of Deposit' },
        description: { zh: '银行发行的定期存款凭证，可在二级市场交易', en: 'Bank-issued time deposit certificates, tradable in secondary markets' },
        domain: 'instruments', category: 'fixed-income', icon: '🏦',
        tags: ['cd', 'deposit', 'bank'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond'
    },
    {
        // 华尔街说明: 高收益债又称"垃圾债"，评级BB+及以下，收益率高但违约风险大
        id: 'instr-high-yield',
        name: { zh: '高收益债', en: 'High-Yield Bonds (Junk Bonds)' },
        description: {
            zh: '信用评级BB+及以下的债券，收益率高于投资级债券，但违约风险也显著更高',
            en: 'Bonds rated BB+ or below, offering higher yields than investment grade but with significantly higher default risk'
        },
        domain: 'instruments', category: 'fixed-income', icon: '💰',
        tags: ['high-yield', 'junk-bond', 'sub-investment-grade', 'credit'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-corp-bond',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'professional',
        details: {
            zh: '高收益债利差(相对国债)是信用周期的重要指标。利差扩大反映市场对违约风险担忧上升，经济衰退时利差可能急剧飙升',
            en: 'HY spreads (vs. Treasuries) are key credit cycle indicators. Spread widening reflects rising default concerns; spreads can spike in recessions'
        }
    },
    {
        // 华尔街说明: TIPS是对冲通胀的最直接工具，本金随CPI指数调整
        id: 'instr-tips',
        name: { zh: '通胀保护债券', en: 'Treasury Inflation-Protected Securities (TIPS)' },
        description: {
            zh: '本金随CPI通胀指数调整的政府债券，提供实际利率(剔除通胀后的收益)',
            en: 'Government bonds with principal adjusted by CPI; provides real yield (return after inflation)'
        },
        domain: 'instruments', category: 'fixed-income', icon: '🛡️',
        tags: ['tips', 'inflation', 'real-rate', 'treasury'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-gov-bond',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: 'TIPS收益率 = 名义国债收益率 - 隐含盈亏平衡通胀率。10年盈亏平衡通胀率是市场通胀预期的重要指标',
            en: 'TIPS yield = Nominal Treasury yield - Implied breakeven inflation. 10-year breakeven is a key market inflation expectations indicator'
        }
    },
    {
        // 华尔街说明: 永续债没有到期日，是银行补充资本的重要工具
        id: 'instr-perpetual',
        name: { zh: '永续债', en: 'Perpetual Bonds' },
        description: {
            zh: '无固定到期日的债券，发行人有赎回权但无义务，常用于银行补充AT1资本',
            en: 'Bonds with no maturity date; issuer has call option but no obligation; often used by banks for AT1 capital'
        },
        domain: 'instruments', category: 'fixed-income', icon: '♾️',
        tags: ['perpetual', 'at1', 'coco-bond', 'bank-capital'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-corp-bond',
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'professional',
        details: {
            zh: '2023年瑞信AT1永续债减记事件导致170亿美元债券归零，引发对永续债风险的重新审视',
            en: 'Credit Suisse AT1 write-down in 2023 zeroed $17B bonds, prompting reassessment of perpetual bond risks'
        }
    },
    {
        // 华尔街说明: CLO/CDO是2008年次贷危机的核心放大器
        id: 'instr-clo',
        name: { zh: 'CLO/CDO', en: 'CLO/CDO' },
        description: {
            zh: '将贷款(CLO)或债券(CDO)资产池打包分层证券化，不同层级承担不同风险收益，2008年次贷危机的核心放大器',
            en: 'Securities pooling loans (CLO) or bonds (CDO) into tranches with different risk/return profiles; core 2008 crisis amplifier'
        },
        domain: 'instruments', category: 'structured', icon: '📦',
        tags: ['clo', 'cdo', 'securitization', 'tranche', 'subprime'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-mbs',
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: '分层结构：优先级(AAA)→夹层(BBB)→股权层(无评级)。次贷危机中评级机构对CDO评级过于乐观导致风险被严重低估',
            en: 'Tranche structure: Senior (AAA) → Mezzanine (BBB) → Equity (unrated). Rating agencies\' overly optimistic CDO ratings masked risks in 2008'
        }
    },

    // === 衍生品 ===
    {
        // 华尔街说明: 期货是衍生品核心，保证金制度带来高杠杆，逐日盯市(Mark-to-Market)是关键机制
        id: 'instr-futures',
        name: { zh: '期货', en: 'Futures' },
        description: {
            zh: '交易所标准化远期合约，采用保证金交易(Margin)和逐日盯市(Mark-to-Market)制度，到期可实物或现金交割',
            en: 'Exchange-traded standardized contracts with margin trading and daily mark-to-market settlement, physical or cash delivery at expiry'
        },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['futures', 'margin', 'mark-to-market'],
        riskLevel: 'L3',
        level: 1,
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'professional',
        details: {
            zh: '保证金通常为合约价值的5-15%，杠杆可达10-20倍。多头承担价格上涨收益/下跌损失，空头相反',
            en: 'Margin typically 5-15% of contract value, leverage up to 10-20x. Longs gain from price rises, shorts from falls'
        }
    },
    {
        id: 'instr-index-futures',
        name: { zh: '股指期货', en: 'Index Futures' },
        description: { zh: '股票指数期货合约', en: 'Stock index futures' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['index', 'equity-futures'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures'
    },
    {
        id: 'instr-commodity-futures',
        name: { zh: '商品期货', en: 'Commodity Futures' },
        description: { zh: '大宗商品期货合约', en: 'Commodity futures contracts' },
        domain: 'instruments', category: 'derivatives', icon: '🛢️',
        tags: ['commodity', 'physical'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures'
    },
    {
        // 华尔街说明: 期权是非线性资产，买方权利有限亏损无限收益，卖方相反。希腊字母(Greeks)是风控核心
        id: 'instr-options',
        name: { zh: '期权', en: 'Options' },
        description: {
            zh: '赋予买方在约定日期以约定价格(行权价)买入(看涨Call)或卖出(看跌Put)标的资产的权利。买方支付权利金，风险有限收益无限',
            en: 'Contracts giving buyer the right to buy (Call) or sell (Put) underlying at strike price. Buyer pays premium with limited risk, unlimited upside'
        },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['options', 'call', 'put', 'greeks', 'volatility'],
        riskLevel: 'L3',
        level: 1,
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '希腊字母：Delta(方向敏感度)、Gamma(Delta变化率)、Theta(时间衰减)、Vega(波动率敏感度)、Rho(利率敏感度)',
            en: 'Greeks: Delta (directional sensitivity), Gamma (Delta change rate), Theta (time decay), Vega (volatility sensitivity), Rho (rate sensitivity)'
        }
    },
    {
        id: 'instr-swaps',
        name: { zh: '互换', en: 'Swaps' },
        description: { zh: '现金流交换合约，是全球最大的场外衍生品市场', en: 'Cash flow exchange contracts, the largest OTC derivatives market globally' },
        domain: 'instruments', category: 'derivatives', icon: '🔀',
        tags: ['swaps', 'irs', 'cds'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'qualified'
    },
    {
        // 华尔街说明: IRS是名义本金规模最大的衍生品，全球超过400万亿美元
        // 银行用于管理利率风险敞口，企业用于锁定融资成本
        id: 'instr-irs',
        name: { zh: '利率互换', en: 'Interest Rate Swaps (IRS)' },
        description: {
            zh: '交换固定利率与浮动利率现金流的合约，全球名义本金超400万亿美元，是最大的衍生品市场',
            en: 'Contracts exchanging fixed and floating interest payments, over $400T notional globally, largest derivatives market'
        },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['irs', 'interest-rate', 'libor', 'sofr'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-swaps',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'qualified',
        details: {
            zh: '典型结构：一方支付固定利率，另一方支付LIBOR/SOFR浮动利率。用于对冲利率风险或投机利率走势',
            en: 'Typical structure: one party pays fixed rate, other pays LIBOR/SOFR floating rate. Used to hedge interest rate risk or speculate on rate movements'
        }
    },
    {
        // 华尔街说明: CDS是2008年金融危机的放大器，导致AIG政府救助
        // 买方支付保费获取信用保护，卖方承担违约风险
        id: 'instr-cds',
        name: { zh: '信用违约互换', en: 'Credit Default Swaps (CDS)' },
        description: {
            zh: '转移信用风险的合约，买方支付保费获取违约保护，2008年金融危机的关键放大器',
            en: 'Contracts transferring credit risk, buyer pays premium for default protection, key amplifier in 2008 financial crisis'
        },
        domain: 'instruments', category: 'derivatives', icon: '🛡️',
        tags: ['cds', 'credit', 'default', 'protection'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-swaps',
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: '如参考实体（如某公司债）发生违约，CDS卖方须向买方赔付损失。AIG因出售大量CDS而在2008年被政府救助',
            en: 'If reference entity defaults, CDS seller compensates buyer for losses. AIG was bailed out in 2008 due to massive CDS exposure'
        }
    },
    {
        // 华尔街说明: TRS是Archegos爆仓事件的核心工具
        // 可用于获得杠杆敞口而不实际持有资产
        id: 'instr-trs',
        name: { zh: '总收益互换', en: 'Total Return Swaps (TRS)' },
        description: {
            zh: '交换资产总收益（包括价格变动和收入）的合约，Archegos爆仓事件的核心工具',
            en: 'Contracts exchanging total return of an asset (price change + income), central to Archegos collapse'
        },
        domain: 'instruments', category: 'derivatives', icon: '💱',
        tags: ['trs', 'total-return', 'leverage'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-swaps',
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: '投资者可通过TRS获得股票敞口而无需实际持股，规避信息披露要求。2021年Archegos因TRS杠杆过高爆仓导致多家投行巨亏',
            en: 'Investors gain equity exposure without actual ownership, avoiding disclosure requirements. Archegos collapsed in 2021 due to excessive TRS leverage'
        }
    },
    {
        id: 'instr-forwards',
        name: { zh: '远期', en: 'Forwards' },
        description: { zh: '非标准化远期合约，场外双边协商定制', en: 'Customized forward contracts, bilateral OTC negotiation' },
        domain: 'instruments', category: 'derivatives', icon: '📅',
        tags: ['forwards', 'otc'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'professional'
    },
    {
        id: 'instr-options-futures',
        name: { zh: '期货期权', en: 'Options on Futures' },
        description: { zh: '以期货合约为标的的期权，双重杠杆效应', en: 'Options with futures as underlying, double leverage effect' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['options', 'futures', 'fop'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-options',
        tradingVenue: 'exchange',
        liquidity: 'medium',
        investorType: 'professional'
    },
    {
        id: 'instr-equity-options',
        name: { zh: '股票期权', en: 'Equity Options' },
        description: { zh: '以个股为标的的期权合约', en: 'Options on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['options', 'stock-options', 'equity'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-options'
    },
    {
        id: 'instr-index-options',
        name: { zh: '指数期权', en: 'Index Options' },
        description: { zh: '以股票指数为标的的期权合约', en: 'Options on stock indices' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['options', 'index', 'spx'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-options'
    },
    {
        id: 'instr-cfd',
        name: { zh: '差价合约', en: 'CFDs' },
        description: { zh: '无需持有标的资产即可交易价格变动的合约', en: 'Contracts for difference, trading price movements without owning the underlying' },
        domain: 'instruments', category: 'derivatives', icon: '📉',
        tags: ['cfd', 'leverage', 'margin'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-futures'
    },
    {
        id: 'instr-single-stock-futures',
        name: { zh: '个股期货', en: 'Single Stock Futures' },
        description: { zh: '以单一股票为标的的期货合约', en: 'Futures contracts on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['ssf', 'equity-futures'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures'
    },

    // === 外汇工具 ===
    {
        id: 'instr-forex',
        name: { zh: '外汇', en: 'Forex/Currencies' },
        description: { zh: '货币对交易工具', en: 'Currency pair trading instruments' },
        domain: 'instruments', category: 'forex', icon: '💱',
        tags: ['forex', 'fx', 'currency'],
        riskLevel: 'L3',
        level: 1
    },
    {
        id: 'instr-spot-fx',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: 'T+2交割的现货外汇交易', en: 'Spot forex with T+2 settlement' },
        domain: 'instruments', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate', 'fx'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-forex'
    },
    {
        id: 'instr-fx-forwards',
        name: { zh: '外汇远期', en: 'FX Forwards' },
        description: { zh: '约定未来日期和汇率的外汇交易', en: 'Forex transactions with future settlement dates and rates' },
        domain: 'instruments', category: 'forex', icon: '📅',
        tags: ['forward', 'fx', 'hedge'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-forex'
    },
    {
        id: 'instr-fx-options',
        name: { zh: '外汇期权', en: 'FX Options' },
        description: { zh: '以货币对为标的的期权合约', en: 'Options on currency pairs' },
        domain: 'instruments', category: 'forex', icon: '🎯',
        tags: ['options', 'fx', 'currency'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-forex'
    },

    // === 波动率产品 ===
    {
        id: 'instr-volatility',
        name: { zh: '波动率产品', en: 'Volatility Products' },
        description: { zh: '基于市场波动率的交易产品', en: 'Trading products based on market volatility' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['volatility', 'vix', 'variance'],
        riskLevel: 'L4',
        level: 1
    },
    {
        id: 'instr-vix-futures',
        name: { zh: 'VIX期货', en: 'VIX Futures' },
        description: { zh: '基于CBOE波动率指数的期货合约', en: 'Futures on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['vix', 'futures', 'volatility'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-volatility'
    },
    {
        id: 'instr-vix-options',
        name: { zh: 'VIX期权', en: 'VIX Options' },
        description: { zh: '基于CBOE波动率指数的期权合约', en: 'Options on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['vix', 'options', 'volatility'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-volatility'
    },

    // === 商品 ===
    {
        id: 'instr-commodity',
        name: { zh: '大宗商品', en: 'Commodities' },
        description: { zh: '可交易的实物商品或商品合约', en: 'Tradable physical commodities or commodity contracts' },
        domain: 'instruments', category: 'commodities', icon: '🛢️',
        tags: ['commodity', 'physical'],
        riskLevel: 'L3',
        level: 1
    },
    {
        id: 'instr-precious-metals',
        name: { zh: '贵金属', en: 'Precious Metals' },
        description: { zh: '黄金、白银、铂金等贵金属投资', en: 'Gold, silver, platinum investment' },
        domain: 'instruments', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity'
    },
    {
        id: 'instr-energy',
        name: { zh: '能源', en: 'Energy' },
        description: { zh: '原油、天然气等能源商品', en: 'Crude oil, natural gas and other energy commodities' },
        domain: 'instruments', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity'
    },
    {
        id: 'instr-agriculture',
        name: { zh: '农产品', en: 'Agricultural Products' },
        description: { zh: '谷物、大豆、咖啡等农产品期货', en: 'Grains, soybeans, coffee and other agricultural futures' },
        domain: 'instruments', category: 'commodities', icon: '🌾',
        tags: ['agriculture', 'grains', 'softs'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity'
    },

    // === 预测市场 ===
    {
        id: 'instr-forecast',
        name: { zh: '预测合约', en: 'Forecast Contracts' },
        description: { zh: '基于政治、经济、气候等事件的预测市场合约', en: 'Prediction market contracts on political, economic, and climate events' },
        domain: 'instruments', category: 'alternatives', icon: '🔮',
        tags: ['forecast', 'prediction', 'events'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-crypto'
    },

    // === 加密货币 ===
    {
        id: 'instr-crypto',
        name: { zh: '加密货币', en: 'Cryptocurrencies' },
        description: { zh: '比特币、以太坊等数字资产', en: 'Bitcoin, Ethereum and other digital assets' },
        domain: 'instruments', category: 'crypto', icon: '₿',
        tags: ['crypto', 'bitcoin', 'ethereum'],
        riskLevel: 'L3',
        level: 1
    },
    {
        id: 'instr-crypto-futures',
        name: { zh: '加密货币期货', en: 'Crypto Futures' },
        description: { zh: '以加密货币为标的的期货合约', en: 'Futures contracts on cryptocurrencies' },
        domain: 'instruments', category: 'crypto', icon: '📊',
        tags: ['crypto', 'futures', 'btc'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-crypto'
    },

    // === 基金产品 ===
    {
        // 华尔街说明: 2024年被动基金规模历史性超越主动基金，SPY是全球最大ETF
        id: 'instr-etf',
        name: { zh: 'ETF', en: 'ETFs' },
        description: {
            zh: '在交易所像股票一样交易的基金，2024年被动基金规模历史性超过主动基金，SPY是全球最大ETF(规模超5000亿美元)',
            en: 'Funds traded like stocks on exchanges; in 2024, passive funds historically exceeded active funds. SPY is the largest ETF ($500B+)'
        },
        domain: 'instruments', category: 'fund', icon: '📦',
        tags: ['etf', 'passive', 'spy', 'qqq', 'vanguard', 'ishares'],
        riskLevel: 'L2',
        level: 1,
        details: {
            zh: 'Top ETF：SPY(标普500)、QQQ(纳斯达克100)、IWM(罗素2000)、VOO(Vanguard标普500)。费率竞争已降至0.03%以下',
            en: 'Top ETFs: SPY (S&P 500), QQQ (Nasdaq 100), IWM (Russell 2000), VOO (Vanguard S&P 500). Fee competition has driven costs below 0.03%'
        }
    },
    {
        id: 'instr-index-fund',
        name: { zh: '指数基金', en: 'Index Funds' },
        description: { zh: '跟踪指数的被动基金', en: 'Passive funds tracking indices' },
        domain: 'instruments', category: 'fund', icon: '📊',
        tags: ['index', 'passive'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf'
    },
    {
        id: 'instr-money-fund',
        name: { zh: '货币基金', en: 'Money Market Funds' },
        description: { zh: '投资短期债务的基金', en: 'Funds investing in short-term debt' },
        domain: 'instruments', category: 'fund', icon: '💵',
        tags: ['money-market', 'cash'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-etf'
    },
    {
        id: 'instr-reit',
        name: { zh: 'REITs', en: 'REITs' },
        description: { zh: '房地产投资信托', en: 'Real Estate Investment Trusts' },
        domain: 'instruments', category: 'alternatives', icon: '🏢',
        tags: ['reit', 'real-estate'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf'
    },
    {
        id: 'instr-mutual-fund',
        name: { zh: '共同基金', en: 'Mutual Funds' },
        description: { zh: '由专业管理人管理的集合投资工具', en: 'Pooled investment vehicles managed by professional managers' },
        domain: 'instruments', category: 'fund', icon: '💼',
        tags: ['mutual-fund', 'active', 'managed'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf'
    },
    {
        id: 'instr-bond-fund',
        name: { zh: '债券基金', en: 'Bond Funds' },
        description: { zh: '专注于固定收益证券的基金', en: 'Funds focused on fixed income securities' },
        domain: 'instruments', category: 'fund', icon: '📜',
        tags: ['bond-fund', 'fixed-income'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf'
    },
    {
        id: 'instr-sector-fund',
        name: { zh: '行业基金', en: 'Sector Funds' },
        description: { zh: '专注于特定行业或领域的基金', en: 'Funds focused on specific sectors or industries' },
        domain: 'instruments', category: 'fund', icon: '🏭',
        tags: ['sector', 'thematic'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-etf'
    },

    // === 结构化产品 ===
    {
        id: 'instr-structured',
        name: { zh: '结构化产品', en: 'Structured Products' },
        description: { zh: '基于衍生品构建的复合金融产品，通常由固定收益与期权组合而成', en: 'Complex financial products built on derivatives, typically combining fixed income with options' },
        domain: 'instruments', category: 'structured', icon: '🧩',
        tags: ['structured', 'hybrid', 'derivatives'],
        riskLevel: 'L4',
        level: 1
    },
    {
        id: 'instr-exotic-options',
        name: { zh: '奇异期权', en: 'Exotic Options' },
        description: { zh: '具有复杂收益结构的非标准期权，如障碍期权、亚式期权等', en: 'Non-standard options with complex payoff structures, such as barrier options and Asian options' },
        domain: 'instruments', category: 'derivatives', icon: '🎰',
        tags: ['exotic', 'barrier', 'asian', 'options'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-snowball',
        name: { zh: '雪球期权', en: 'Snowball Options' },
        description: { zh: '自动敲入敲出结构产品，投资者卖出看跌期权获取票息，具有路径依赖特性', en: 'Autocallable barrier products where investors sell put options for coupon income, with path-dependent payoffs' },
        domain: 'instruments', category: 'structured', icon: '❄️',
        tags: ['snowball', 'autocallable', 'barrier', 'knock-in', 'knock-out'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-phoenix',
        name: { zh: '凤凰期权', en: 'Phoenix Notes' },
        description: { zh: '带有定期派息和敲入敲出机制的结构化产品，比雪球更频繁派发票息', en: 'Structured products with periodic coupon payments and knock-in/out mechanisms, more frequent payouts than snowball' },
        domain: 'instruments', category: 'structured', icon: '🦅',
        tags: ['phoenix', 'autocallable', 'coupon'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-sharkfin',
        name: { zh: '鲨鱼鳍期权', en: 'Shark Fin Options' },
        description: { zh: '收益上限封顶的障碍期权，标的涨至障碍价时收益被锁定', en: 'Barrier options with capped returns, payoff is locked when underlying hits barrier price' },
        domain: 'instruments', category: 'structured', icon: '🦈',
        tags: ['sharkfin', 'barrier', 'capped'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-income-cert',
        name: { zh: '收益凭证', en: 'Income Certificates' },
        description: { zh: '券商发行的本金保障型或浮动收益型产品，通常挂钩标的资产表现', en: 'Securities firm-issued products with principal protection or floating returns, typically linked to underlying assets' },
        domain: 'instruments', category: 'structured', icon: '📋',
        tags: ['certificate', 'securities', 'linked'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-fcn',
        name: { zh: 'FCN固定票息票据', en: 'Fixed Coupon Notes' },
        description: { zh: '提供固定票息的挂钩型票据，到期收益取决于标的资产价格', en: 'Linked notes providing fixed coupons, maturity payoff depends on underlying asset price' },
        domain: 'instruments', category: 'structured', icon: '💳',
        tags: ['fcn', 'coupon', 'linked-note'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },
    {
        id: 'instr-dcn',
        name: { zh: 'DCN折价票据', en: 'Discount Certificates' },
        description: { zh: '以折扣价格购买、收益封顶的结构化产品，类似卖出看涨期权', en: 'Structured products bought at discount with capped upside, similar to selling covered calls' },
        domain: 'instruments', category: 'structured', icon: '🏷️',
        tags: ['dcn', 'discount', 'capped'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured'
    },

    // === 另类投资 ===
    {
        id: 'instr-pe',
        name: { zh: '私募股权', en: 'Private Equity' },
        description: { zh: '非上市公司股权投资', en: 'Investment in private companies' },
        domain: 'instruments', category: 'alternatives', icon: '💰',
        tags: ['pe', 'buyout'],
        riskLevel: 'L4',
        level: 1
    },
    {
        id: 'instr-vc',
        name: { zh: '风险投资', en: 'Venture Capital' },
        description: { zh: '早期创业公司投资', en: 'Early-stage company investment' },
        domain: 'instruments', category: 'alternatives', icon: '🚀',
        tags: ['vc', 'startup'],
        riskLevel: 'L4',
        level: 1
    },
    {
        id: 'instr-hedge-fund',
        name: { zh: '对冲基金策略', en: 'Hedge Fund Strategies' },
        description: { zh: '多元化对冲策略', en: 'Diversified hedging strategies' },
        domain: 'instruments', category: 'alternatives', icon: '🎲',
        tags: ['hedge', 'alpha'],
        riskLevel: 'L4',
        level: 1
    }
];

// 金融工具关系
export const instrumentRelationships: Relationship[] = [
    // 股票层级
    { id: 'inr-1', source: 'instr-stock', target: 'instr-common-stock', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-2', source: 'instr-stock', target: 'instr-preferred-stock', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-3', source: 'instr-stock', target: 'instr-adr', type: 'provides', strength: 2, bidirectional: false },

    // 债券层级
    { id: 'inr-4', source: 'instr-bond', target: 'instr-gov-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-5', source: 'instr-bond', target: 'instr-corp-bond', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-6', source: 'instr-bond', target: 'instr-convertible', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-7', source: 'instr-bond', target: 'instr-mbs', type: 'provides', strength: 2, bidirectional: false },

    // 期货层级
    { id: 'inr-8', source: 'instr-futures', target: 'instr-index-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-9', source: 'instr-futures', target: 'instr-commodity-futures', type: 'provides', strength: 3, bidirectional: false },

    // 衍生关系
    { id: 'inr-10', source: 'instr-options', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-11', source: 'instr-index-futures', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-12', source: 'instr-convertible', target: 'instr-stock', type: 'derives_from', strength: 2, bidirectional: false },
    { id: 'inr-13', source: 'instr-convertible', target: 'instr-bond', type: 'derives_from', strength: 2, bidirectional: false },

    // 结构化产品层级关系
    { id: 'inr-17', source: 'instr-options', target: 'instr-exotic-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-18', source: 'instr-structured', target: 'instr-snowball', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-19', source: 'instr-structured', target: 'instr-phoenix', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-20', source: 'instr-structured', target: 'instr-sharkfin', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-21', source: 'instr-structured', target: 'instr-income-cert', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-22', source: 'instr-structured', target: 'instr-fcn', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-23', source: 'instr-structured', target: 'instr-dcn', type: 'provides', strength: 2, bidirectional: false },

    // 结构化产品衍生关系
    { id: 'inr-24', source: 'instr-snowball', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-25', source: 'instr-phoenix', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-26', source: 'instr-sharkfin', target: 'instr-exotic-options', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-27', source: 'instr-snowball', target: 'instr-index-futures', type: 'derives_from', strength: 2, bidirectional: false },
    { id: 'inr-28', source: 'instr-exotic-options', target: 'instr-options', type: 'derives_from', strength: 3, bidirectional: false },

    // 基金投资关系
    { id: 'inr-14', source: 'instr-etf', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-15', source: 'instr-index-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-16', source: 'instr-money-fund', target: 'instr-gov-bond', type: 'invests', strength: 3, bidirectional: false },

    // 新增股票层级
    { id: 'inr-29', source: 'instr-stock', target: 'instr-warrant', type: 'provides', strength: 2, bidirectional: false },

    // 新增债券层级
    { id: 'inr-30', source: 'instr-gov-bond', target: 'instr-tbill', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-31', source: 'instr-bond', target: 'instr-muni-bond', type: 'provides', strength: 2, bidirectional: false },

    // 期权层级
    { id: 'inr-32', source: 'instr-options', target: 'instr-equity-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-33', source: 'instr-options', target: 'instr-index-options', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-34', source: 'instr-options', target: 'instr-options-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-35', source: 'instr-options', target: 'instr-fx-options', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-36', source: 'instr-options', target: 'instr-vix-options', type: 'provides', strength: 2, bidirectional: false },

    // 期货层级
    { id: 'inr-37', source: 'instr-futures', target: 'instr-single-stock-futures', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-38', source: 'instr-futures', target: 'instr-vix-futures', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-39', source: 'instr-futures', target: 'instr-crypto-futures', type: 'provides', strength: 2, bidirectional: false },

    // 外汇层级
    { id: 'inr-40', source: 'instr-forex', target: 'instr-spot-fx', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-41', source: 'instr-forex', target: 'instr-fx-forwards', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-42', source: 'instr-forex', target: 'instr-fx-options', type: 'provides', strength: 2, bidirectional: false },

    // 波动率产品层级
    { id: 'inr-43', source: 'instr-volatility', target: 'instr-vix-futures', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-44', source: 'instr-volatility', target: 'instr-vix-options', type: 'provides', strength: 3, bidirectional: false },

    // 商品层级
    { id: 'inr-45', source: 'instr-commodity', target: 'instr-precious-metals', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-46', source: 'instr-commodity', target: 'instr-energy', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-47', source: 'instr-commodity', target: 'instr-agriculture', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-48', source: 'instr-commodity-futures', target: 'instr-commodity', type: 'derives_from', strength: 3, bidirectional: false },

    // 加密货币层级
    { id: 'inr-49', source: 'instr-crypto', target: 'instr-crypto-futures', type: 'provides', strength: 3, bidirectional: false },

    // CFD关系
    { id: 'inr-50', source: 'instr-cfd', target: 'instr-stock', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-51', source: 'instr-cfd', target: 'instr-forex', type: 'derives_from', strength: 3, bidirectional: false },
    { id: 'inr-52', source: 'instr-cfd', target: 'instr-commodity', type: 'derives_from', strength: 2, bidirectional: false },

    // 基金层级
    { id: 'inr-53', source: 'instr-mutual-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-54', source: 'instr-mutual-fund', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-55', source: 'instr-bond-fund', target: 'instr-bond', type: 'invests', strength: 3, bidirectional: false },
    { id: 'inr-56', source: 'instr-sector-fund', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },

    // === 新增互换层级关系 ===
    { id: 'inr-57', source: 'instr-swaps', target: 'instr-irs', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-58', source: 'instr-swaps', target: 'instr-cds', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-59', source: 'instr-swaps', target: 'instr-trs', type: 'provides', strength: 3, bidirectional: false },

    // IRS与利率市场衍生关系
    { id: 'inr-60', source: 'instr-irs', target: 'instr-gov-bond', type: 'derives_from', strength: 3, bidirectional: false },

    // CDS与信用市场衍生关系
    { id: 'inr-61', source: 'instr-cds', target: 'instr-corp-bond', type: 'derives_from', strength: 3, bidirectional: false },

    // === 深度审查修复：孤立节点层级关系 ===
    // 远期合约与期货有衍生关系(都是远期交易)
    { id: 'inr-62', source: 'instr-futures', target: 'instr-forwards', type: 'derives_from', strength: 3, bidirectional: false },
    // 预测合约属于加密货币生态
    { id: 'inr-63', source: 'instr-crypto', target: 'instr-forecast', type: 'provides', strength: 3, bidirectional: false },
    // PE与ETF都是基金类产品，PE投资于股票
    { id: 'inr-64', source: 'instr-pe', target: 'instr-stock', type: 'invests', strength: 3, bidirectional: false },
    // VC与PE相关，都投资股权
    { id: 'inr-65', source: 'instr-vc', target: 'instr-common-stock', type: 'invests', strength: 3, bidirectional: false },
    // 对冲基金使用多种策略
    { id: 'inr-66', source: 'instr-hedge-fund', target: 'instr-options', type: 'uses', strength: 3, bidirectional: false },
    { id: 'inr-67', source: 'instr-hedge-fund', target: 'instr-futures', type: 'uses', strength: 3, bidirectional: false },

    // === P0新增：固定收益工具关系 ===
    // 高收益债属于企业债子类
    { id: 'inr-68', source: 'instr-corp-bond', target: 'instr-high-yield', type: 'provides', strength: 3, bidirectional: false },
    // TIPS属于国债子类
    { id: 'inr-69', source: 'instr-gov-bond', target: 'instr-tips', type: 'provides', strength: 3, bidirectional: false },
    // 永续债属于企业债子类
    { id: 'inr-70', source: 'instr-corp-bond', target: 'instr-perpetual', type: 'provides', strength: 3, bidirectional: false },
    // CLO/CDO由MBS/ABS衍生
    { id: 'inr-71', source: 'instr-mbs', target: 'instr-clo', type: 'provides', strength: 3, bidirectional: false },
    // CDS为CDO提供信用保护
    { id: 'inr-72', source: 'instr-cds', target: 'instr-clo', type: 'derives_from', strength: 3, bidirectional: false },

    // === 修复：缺少的层级关系 ===
    // 国库券属于债券子类
    { id: 'inr-73', source: 'instr-bond', target: 'instr-tbill', type: 'provides', strength: 3, bidirectional: false },
    // 大额存单属于债券子类
    { id: 'inr-74', source: 'instr-bond', target: 'instr-cd', type: 'provides', strength: 3, bidirectional: false },
    // CFD与期货关联
    { id: 'inr-75', source: 'instr-futures', target: 'instr-cfd', type: 'provides', strength: 2, bidirectional: false },
    // ETF包含各类基金子类
    { id: 'inr-76', source: 'instr-etf', target: 'instr-index-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-77', source: 'instr-etf', target: 'instr-money-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-78', source: 'instr-etf', target: 'instr-reit', type: 'provides', strength: 2, bidirectional: false },
    { id: 'inr-79', source: 'instr-etf', target: 'instr-mutual-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-80', source: 'instr-etf', target: 'instr-bond-fund', type: 'provides', strength: 3, bidirectional: false },
    { id: 'inr-81', source: 'instr-etf', target: 'instr-sector-fund', type: 'provides', strength: 3, bidirectional: false },
    // 奇异期权属于结构化产品
    { id: 'inr-82', source: 'instr-structured', target: 'instr-exotic-options', type: 'provides', strength: 3, bidirectional: false }
];
