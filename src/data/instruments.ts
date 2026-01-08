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
        investorType: 'retail',
        details: {
            zh: '普通股=委托经营权+剩余求偿权。股东是真正的所有者，享受公司增长红利',
            en: 'Common stock = entrustment + residual claim. Shareholders are true owners, share in company growth'
        }
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
        investorType: 'retail',
        details: {
            zh: '优先股=股債混合体，固定股息但无投票权。美国银行常用作资本工具',
            en: 'Preferred = stock-bond hybrid, fixed dividends but no voting. US banks use as capital instrument'
        }
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
        investorType: 'retail',
        details: {
            zh: 'ADR由托管银行发行，对应海外存放的基础股票。中概股ADR面临SEC/PCAOB审计挑战',
            en: 'ADRs issued by custodian banks, backed by overseas deposited shares. Chinese ADRs face SEC/PCAOB audit challenges'
        }
    },
    {
        id: 'instr-warrant',
        name: { zh: '权证', en: 'Warrants' },
        description: { zh: '由发行人发行的认购或认沽权利证书，具有杠杆效应，到期无价值则归零', en: 'Issuer-issued rights with leverage, may expire worthless' },
        domain: 'instruments', category: 'equity', icon: '📝',
        tags: ['warrant', 'call-warrant', 'put-warrant'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-stock',
        tradingVenue: 'exchange',
        liquidity: 'medium',
        investorType: 'professional',
        details: {
            zh: '权证与期权类似但由发行人而非交易所发行。港股牛熊证(CBBC)是派生权证',
            en: 'Warrants similar to options but issuer-issued. HK Callable Bull/Bear Contracts (CBBC) are warrant derivatives'
        }
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
        description: { zh: '政府发行的债券，被视为无风险资产', en: 'Bonds issued by governments, considered risk-free assets' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['treasury', 'sovereign', 'risk-free'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'hybrid',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '美国国债被视为全球无风险基准，10年期国债收益率是最重要的定价基准。中国国债主要在银行间市场交易',
            en: 'US Treasuries are the global risk-free benchmark; 10-year yield is the key pricing reference. China gov bonds trade mainly in interbank market'
        }
    },
    {
        id: 'instr-corp-bond',
        name: { zh: '企业债', en: 'Corporate Bonds' },
        description: { zh: '企业发行的债券，信用风险高于国债', en: 'Bonds issued by corporations, higher credit risk than treasuries' },
        domain: 'instruments', category: 'fixed-income', icon: '🏭',
        tags: ['corporate', 'credit', 'spread'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '企业债按评级分为投资级(BBB-以上)和高收益级(BB+以下)。信用利差=企业债收益率-国债收益率',
            en: 'Corporate bonds divided into Investment Grade (BBB- and above) and High Yield (BB+ and below). Credit spread = Corp yield - Treasury yield'
        }
    },
    {
        id: 'instr-convertible',
        name: { zh: '可转债', en: 'Convertible Bonds' },
        description: { zh: '可转换为股票的混合型债券', en: 'Hybrid bonds convertible to equity' },
        domain: 'instruments', category: 'fixed-income', icon: '🔄',
        tags: ['convertible', 'hybrid', 'equity-linked'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'exchange',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '可转债=纯债价值+转股期权价值。转股溢价率、纯债到期收益率(YTM)是关键指标。中国可转债市场全球最活跃',
            en: 'Convertible = pure bond value + conversion option. Key metrics: conversion premium, YTM. China has the most active convertible market globally'
        }
    },
    {
        id: 'instr-mbs',
        name: { zh: 'MBS/ABS', en: 'MBS/ABS' },
        description: { zh: '资产支持证券，将贷款打包证券化', en: 'Asset-backed securities, securitized loan pools' },
        domain: 'instruments', category: 'structured', icon: '🏠',
        tags: ['mbs', 'abs', 'securitization', 'mortgage'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'professional',
        details: {
            zh: 'MBS(住房抵押)和ABS(非房贷资产)。提前还款风险是MBS核心风险。美国MBS主要由两房(Fannie/Freddie)担保',
            en: 'MBS (mortgage) and ABS (non-mortgage assets). Prepayment risk is core MBS risk. US MBS mainly guaranteed by GSEs (Fannie/Freddie)'
        }
    },
    {
        id: 'instr-tbill',
        name: { zh: '国库券', en: 'Treasury Bills' },
        description: { zh: '短期政府债务工具，期限通常在一年以内', en: 'Short-term government debt, typically maturing within one year' },
        domain: 'instruments', category: 'fixed-income', icon: '💴',
        tags: ['treasury', 'short-term', 'money-market', 'risk-free'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '国库券是最安全的短期投资工具。贴现发行，到期按面值偿还。常用于货币基金底层资产',
            en: 'T-Bills are the safest short-term investment. Issued at discount, redeemed at face value. Commonly used as money fund underlying assets'
        }
    },
    {
        id: 'instr-muni-bond',
        name: { zh: '市政债券', en: 'Municipal Bonds' },
        description: { zh: '地方政府发行的债券，通常享有税收优惠', en: 'Bonds issued by local governments, often with tax advantages' },
        domain: 'instruments', category: 'fixed-income', icon: '🏛️',
        tags: ['municipal', 'tax-exempt', 'local-gov'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '美国市政债还本付息免联邦税，对高税率投资者极具吸引力。中国地方政府债是财政部代发，信用接近国债',
            en: 'US munis are often federal tax-exempt, attractive to high-bracket investors. China local gov bonds are issued via MoF, near-sovereign credit'
        }
    },
    {
        id: 'instr-cd',
        name: { zh: '大额存单', en: 'Certificates of Deposit' },
        description: { zh: '银行发行的定期存款凭证，可在二级市场交易', en: 'Bank-issued time deposit certificates, tradable in secondary markets' },
        domain: 'instruments', category: 'fixed-income', icon: '🏦',
        tags: ['cd', 'deposit', 'bank', 'money-market'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-bond',
        tradingVenue: 'otc',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '大额存单收益率通常高于活期。中国同业存单(NCD)是重要货币市场工具，型号为“大额存单AAA”',
            en: 'CDs offer higher rates than demand deposits. China NCDs are key money market instruments. FDIC insures US CDs up to $250K'
        }
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
        description: { zh: '股票指数期货合约，用于对冲或投机', en: 'Stock index futures for hedging or speculation' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['index', 'equity-futures', 'sp500', 'csi300'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'professional',
        details: {
            zh: '全球最活跃的股指期货：E-mini S&P 500(ES)、沪深300期货(IF)。雪球等结构化产品的对冲工具',
            en: 'Most active index futures: E-mini S&P 500 (ES), CSI 300 (IF). Used by dealers to hedge snowball and other structured products'
        }
    },
    {
        id: 'instr-commodity-futures',
        name: { zh: '商品期货', en: 'Commodity Futures' },
        description: { zh: '大宗商品期货合约，包括能源、金属、农产品', en: 'Commodity futures including energy, metals, and agricultural products' },
        domain: 'instruments', category: 'derivatives', icon: '🛢️',
        tags: ['commodity', 'physical', 'wti', 'gold'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'professional',
        details: {
            zh: '主要合约：WTI原油(CL)、布伦特原油、黄金(GC)、铜(HG)。期现基差(Basis)=现货价-期货价',
            en: 'Major contracts: WTI crude (CL), Brent, Gold (GC), Copper (HG). Basis = Spot price - Futures price'
        }
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
        investorType: 'qualified',
        details: {
            zh: '主要类型:IRS(利率互换,最大)/CDS(信用)/TRS(总收益)。2008年后强制清算',
            en: 'Main types: IRS (largest), CDS (credit), TRS (total return). Post-2008 mandatory clearing'
        }
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
        investorType: 'professional',
        details: {
            zh: '远期与期货的区别:远期非标准/OTC/无保证金/到期结算。主要用于外汇和利率对冲',
            en: 'Forward vs futures: forwards are OTC/non-standard/no margin/settle at maturity. Mainly for FX and rate hedging'
        }
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
        investorType: 'professional',
        details: {
            zh: '双重杠杆:期权杠杆+期货杠杆。CME谷物/能源期权流动性好',
            en: 'Double leverage: options + futures leverage. CME grain/energy options are liquid'
        }
    },
    {
        id: 'instr-equity-options',
        name: { zh: '股票期权', en: 'Equity Options' },
        description: { zh: '以个股为标的的期权合约', en: 'Options on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['options', 'stock-options', 'equity'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-options',
        details: {
            zh: '美股期权标准100股，主要在CBOE交易。Reddit/WSB的meme股期权热潮',
            en: 'US options standard 100 shares, mainly trade on CBOE. Reddit/WSB meme stock options frenzy'
        }
    },
    {
        id: 'instr-index-options',
        name: { zh: '指数期权', en: 'Index Options' },
        description: { zh: '以股票指数为标的的期权合约', en: 'Options on stock indices' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['options', 'index', 'spx'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-options',
        details: {
            zh: 'SPX期权是最大指数期权，现金结算。中国50ETF期权是A股最活跃期权',
            en: 'SPX options largest index options, cash-settled. China 50ETF options most active in A-shares'
        }
    },
    {
        id: 'instr-cfd',
        name: { zh: '差价合约', en: 'CFDs' },
        description: { zh: '无需持有标的资产即可交易价格变动的合约', en: 'Contracts for difference, trading price movements without owning the underlying' },
        domain: 'instruments', category: 'derivatives', icon: '📉',
        tags: ['cfd', 'leverage', 'margin'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-futures',
        details: {
            zh: 'CFD在美国被禁止，但在欧洲/亚洲广泛使用。杠杆可达30-500倍',
            en: 'CFDs banned in US but widely used in Europe/Asia. Leverage can reach 30-500x'
        }
    },
    {
        id: 'instr-single-stock-futures',
        name: { zh: '个股期货', en: 'Single Stock Futures' },
        description: { zh: '以单一股票为标的的期货合约', en: 'Futures contracts on individual stocks' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['ssf', 'equity-futures'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-futures',
        details: {
            zh: '个股期货在美国不流行，但在印度/南非等市场活跃。杠杆通常为5-10倍',
            en: 'SSF not popular in US but active in India/South Africa. Leverage typically 5-10x'
        }
    },

    // === 外汇工具 ===
    {
        id: 'instr-forex',
        name: { zh: '外汇', en: 'Forex/Currencies' },
        description: { zh: '货币对交易工具', en: 'Currency pair trading instruments' },
        domain: 'instruments', category: 'forex', icon: '💱',
        tags: ['forex', 'fx', 'currency'],
        riskLevel: 'L3',
        level: 1,
        details: {
            zh: '全球最大金融市场，日均交易$7.5万亿。EUR/USD是最大货币对',
            en: 'Largest financial market, $7.5T daily. EUR/USD is largest currency pair'
        }
    },
    {
        id: 'instr-spot-fx',
        name: { zh: '即期外汇', en: 'Spot Forex' },
        description: { zh: 'T+2交割的现货外汇交易', en: 'Spot forex with T+2 settlement' },
        domain: 'instruments', category: 'forex', icon: '⚡',
        tags: ['spot', 'immediate', 'fx'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-forex',
        details: {
            zh: '零售外汇平台如OANDA/IG提供即期交易。点差(spread)是主要成本',
            en: 'Retail platforms like OANDA/IG offer spot trading. Spread is main cost'
        }
    },
    {
        id: 'instr-fx-forwards',
        name: { zh: '外汇远期', en: 'FX Forwards' },
        description: { zh: '约定未来日期和汇率的外汇交易', en: 'Forex transactions with future settlement dates and rates' },
        domain: 'instruments', category: 'forex', icon: '📅',
        tags: ['forward', 'fx', 'hedge'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-forex',
        details: {
            zh: '企业常用远期合约锁定未来汇率，对冲汇率风险',
            en: 'Companies use forwards to lock in future rates, hedging FX risk'
        }
    },
    {
        id: 'instr-fx-options',
        name: { zh: '外汇期权', en: 'FX Options' },
        description: { zh: '以货币对为标的的期权合约', en: 'Options on currency pairs' },
        domain: 'instruments', category: 'forex', icon: '🎯',
        tags: ['options', 'fx', 'currency'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-forex',
        details: {
            zh: '外汇期权以OTC交易为主，银行间市场规模巨大',
            en: 'FX options mainly OTC, interbank market is massive'
        }
    },

    // === 波动率产品 ===
    {
        id: 'instr-volatility',
        name: { zh: '波动率产品', en: 'Volatility Products' },
        description: { zh: '基于市场波动率的交易产品', en: 'Trading products based on market volatility' },
        domain: 'instruments', category: 'derivatives', icon: '📊',
        tags: ['volatility', 'vix', 'variance'],
        riskLevel: 'L4',
        level: 1,
        details: {
            zh: '波动率产品允许交易市场恐慌程度。VIX称为"恐惧指数"，是最著名的波动率指标',
            en: 'Volatility products allow trading market fear. VIX called "fear index", most famous volatility measure'
        }
    },
    {
        id: 'instr-vix-futures',
        name: { zh: 'VIX期货', en: 'VIX Futures' },
        description: { zh: '基于CBOE波动率指数的期货合约', en: 'Futures on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '📈',
        tags: ['vix', 'futures', 'volatility'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-volatility',
        details: {
            zh: 'VIX期货曲线通常向上倾斜(contango)，导致用其无脱ETF长期严重腐蚀',
            en: 'VIX futures curve usually in contango, causing severe long-term decay in VIX ETFs'
        }
    },
    {
        id: 'instr-vix-options',
        name: { zh: 'VIX期权', en: 'VIX Options' },
        description: { zh: '基于CBOE波动率指数的期权合约', en: 'Options on CBOE Volatility Index' },
        domain: 'instruments', category: 'derivatives', icon: '🎯',
        tags: ['vix', 'options', 'volatility'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-volatility',
        details: {
            zh: 'VIX期权用于尾部风险对冲。市场恢复时IV缩小，购Call可能仍然亏损',
            en: 'VIX options used for tail risk hedging. IV crush when market recovers may cause losses even on calls'
        }
    },

    // === 商品 ===
    {
        id: 'instr-commodity',
        name: { zh: '大宗商品', en: 'Commodities' },
        description: { zh: '可交易的实物商品或商品合约', en: 'Tradable physical commodities or commodity contracts' },
        domain: 'instruments', category: 'commodities', icon: '🛢️',
        tags: ['commodity', 'physical'],
        riskLevel: 'L3',
        level: 1,
        details: {
            zh: '商品分为硬商品(能源/金属)和软商品(农产品)。期货交易为主',
            en: 'Commodities divided into hard (energy/metals) and soft (agriculture). Mainly traded via futures'
        }
    },
    {
        id: 'instr-precious-metals',
        name: { zh: '贵金属', en: 'Precious Metals' },
        description: { zh: '黄金、白银、铂金等贵金属投资', en: 'Gold, silver, platinum investment' },
        domain: 'instruments', category: 'commodities', icon: '🥇',
        tags: ['gold', 'silver', 'platinum'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity',
        details: {
            zh: 'GLD是最大黄金ETF($60B+)。黄金与实际利率负相关',
            en: 'GLD is largest gold ETF ($60B+). Gold negatively correlated with real rates'
        }
    },
    {
        id: 'instr-energy',
        name: { zh: '能源', en: 'Energy' },
        description: { zh: '原油、天然气等能源商品', en: 'Crude oil, natural gas and other energy commodities' },
        domain: 'instruments', category: 'commodities', icon: '⛽',
        tags: ['oil', 'natural-gas', 'energy'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity',
        details: {
            zh: 'WTI/布伦特是两大原油基准。2020年WTI曾跌CME负油价',
            en: 'WTI/Brent are two major crude benchmarks. WTI went negative in 2020'
        }
    },
    {
        id: 'instr-agriculture',
        name: { zh: '农产品', en: 'Agricultural Products' },
        description: { zh: '谷物、大豆、咖啡等农产品期货', en: 'Grains, soybeans, coffee and other agricultural futures' },
        domain: 'instruments', category: 'commodities', icon: '🌾',
        tags: ['agriculture', 'grains', 'softs'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-commodity',
        details: {
            zh: '大豆/玉米/小麦称为"三大谷物"。天气和地缘政治是主要影响因素',
            en: 'Soybeans/corn/wheat are "big three grains". Weather and geopolitics are key drivers'
        }
    },

    // === 预测市场 ===
    {
        id: 'instr-forecast',
        name: { zh: '预测合约', en: 'Forecast Contracts' },
        description: { zh: '基于政治、经济、气候等事件的预测市场合约', en: 'Prediction market contracts on political, economic, and climate events' },
        domain: 'instruments', category: 'alternatives', icon: '🔮',
        tags: ['forecast', 'prediction', 'events'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-crypto',
        details: {
            zh: 'Polymarket是最大预测市场平台。CFTC允许的事件合约在美国合法',
            en: 'Polymarket is largest prediction market. CFTC-allowed event contracts are legal in US'
        }
    },

    // === 加密货币 ===
    {
        id: 'instr-crypto',
        name: { zh: '加密货币', en: 'Cryptocurrencies' },
        description: { zh: '比特币、以太坊等数字资产', en: 'Bitcoin, Ethereum and other digital assets' },
        domain: 'instruments', category: 'crypto', icon: '₿',
        tags: ['crypto', 'bitcoin', 'ethereum'],
        riskLevel: 'L3',
        level: 1,
        details: {
            zh: 'BTC占加密市值~50%，ETH~20%。2024年现货BTC ETF获批是里程碑',
            en: 'BTC ~50% of crypto cap, ETH ~20%. 2024 spot BTC ETF approval was milestone'
        }
    },
    {
        id: 'instr-crypto-futures',
        name: { zh: '加密货币期货', en: 'Crypto Futures' },
        description: { zh: '以加密货币为标的的期货合约', en: 'Futures contracts on cryptocurrencies' },
        domain: 'instruments', category: 'crypto', icon: '📊',
        tags: ['crypto', 'futures', 'btc'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-crypto',
        details: {
            zh: 'CME BTC期货是机构主要入场方式。加密期货杠杆可达100x+',
            en: 'CME BTC futures main institutional entry. Crypto futures leverage can reach 100x+'
        }
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
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: 'NAV(净值)=基金总资产-负债/份额数。ETF价格围绕NAV波动,套利机制保持一致。Top ETF：SPY/QQQ/VOO,费率低至0.03%',
            en: 'NAV = (Total Assets - Liabilities) / Shares. ETF prices oscillate around NAV, arbitrage maintains alignment. Top ETFs: SPY/QQQ/VOO, fees as low as 0.03%'
        }
    },
    {
        id: 'instr-index-fund',
        name: { zh: '指数基金', en: 'Index Funds' },
        description: { zh: '被动跟踪指数的基金，费率低于主动管理基金', en: 'Passive funds tracking indices, lower fees than active funds' },
        domain: 'instruments', category: 'fund', icon: '📊',
        tags: ['index', 'passive', 'vanguard'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: 'John Bogle 1976年创立第一只指数基金，被动投资革命。平均费率已从1990s的1%降至0.03%',
            en: 'John Bogle created the first index fund in 1976, starting the passive revolution. Avg fees dropped from 1% in 1990s to 0.03%'
        }
    },
    {
        id: 'instr-money-fund',
        name: { zh: '货币基金', en: 'Money Market Funds' },
        description: { zh: '投资短期债务工具的低风险基金', en: 'Low-risk funds investing in short-term debt instruments' },
        domain: 'instruments', category: 'fund', icon: '💵',
        tags: ['money-market', 'cash', 'yu-e-bao'],
        riskLevel: 'L1',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'otc',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '中国余额宝曾是全球最大货币基金。美国货基等7天流动性要求。不破净值(Break the Buck)=亏损',
            en: 'China\'s Yu\'e Bao was once world\'s largest money fund. US money funds have 7-day liquidity requirements. Breaking the buck = losses'
        }
    },
    {
        id: 'instr-reit',
        name: { zh: 'REITs', en: 'REITs' },
        description: { zh: '房地产投资信托，必须将90%以上收入分红', en: 'Real Estate Investment Trusts, must distribute 90%+ of income as dividends' },
        domain: 'instruments', category: 'alternatives', icon: '🏢',
        tags: ['reit', 'real-estate', 'dividend'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '美国REITs被要求分配90%以上应税收入，税收透明。中国公募REITs于2021年试点启动，底层资产为基础设施',
            en: 'US REITs must distribute 90%+ taxable income, pass-through taxation. China public REITs launched pilot in 2021, underlying assets are infrastructure'
        }
    },
    {
        id: 'instr-mutual-fund',
        name: { zh: '共同基金', en: 'Mutual Funds' },
        description: { zh: '由专业管理人管理的集合投资工具，通常按日确定净值', en: 'Pooled investment vehicles managed by professionals, typically NAV-priced daily' },
        domain: 'instruments', category: 'fund', icon: '💼',
        tags: ['mutual-fund', 'active', 'managed'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '与ETF的核心差异：每日收盘后按净值申赎，不像股票那样实时交易。美国总规模超20万亿美元',
            en: 'Key difference from ETF: subscribed/redeemed at end-of-day NAV, not traded in real-time like stocks. US total AUM exceeds $20T'
        }
    },
    {
        id: 'instr-bond-fund',
        name: { zh: '债券基金', en: 'Bond Funds' },
        description: { zh: '专注于固定收益证券的基金', en: 'Funds focused on fixed income securities' },
        domain: 'instruments', category: 'fund', icon: '📜',
        tags: ['bond-fund', 'fixed-income', 'pimco'],
        riskLevel: 'L2',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'otc',
        liquidity: 'medium',
        investorType: 'retail',
        details: {
            zh: '债券基金按久期分为短期/中期/长期，久期越长利率敏感度越高。PIMCO和BlackRock是全球最大的债券基金管理人',
            en: 'Bond funds categorized by duration: short/intermediate/long-term. Longer duration = higher rate sensitivity. PIMCO and BlackRock are largest managers'
        }
    },
    {
        id: 'instr-sector-fund',
        name: { zh: '行业基金', en: 'Sector Funds' },
        description: { zh: '专注于特定行业或主题的基金', en: 'Funds focused on specific sectors or themes' },
        domain: 'instruments', category: 'fund', icon: '🏭',
        tags: ['sector', 'thematic', 'tech', 'healthcare'],
        riskLevel: 'L3',
        level: 2, parentId: 'instr-etf',
        tradingVenue: 'exchange',
        liquidity: 'high',
        investorType: 'retail',
        details: {
            zh: '主要赛道：科技(XLK)、医疗(XLV)、金融(XLF)、能源(XLE)。ARKK是主题型ETF的代表，专注破坏性创新',
            en: 'Major sectors: Tech (XLK), Healthcare (XLV), Financials (XLF), Energy (XLE). ARKK represents thematic ETFs, focusing on disruptive innovation'
        }
    },

    // === 结构化产品 ===
    {
        id: 'instr-structured',
        name: { zh: '结构化产品', en: 'Structured Products' },
        description: { zh: '基于衍生品构建的复合金融产品，雪球是中国最流行的结构化产品', en: 'Complex financial products built on derivatives; Snowball is the most popular in China' },
        domain: 'instruments', category: 'structured', icon: '🧩',
        tags: ['structured', 'hybrid', 'derivatives', 'snowball'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: '雪球结构：向下敲入(Knock-In)损失本金，向上敲出(Knock-Out)提前结束获得固定收益。拥挒期权的本质=卖出看跌期权',
            en: 'Snowball structure: Knock-In causes principal loss, Knock-Out ends early with fixed return. Essentially = selling put options'
        }
    },
    {
        id: 'instr-exotic-options',
        name: { zh: '奇异期权', en: 'Exotic Options' },
        description: { zh: '具有复杂收益结构的非标准期权，如障碍期权、亚式期权等', en: 'Non-standard options with complex payoff structures, such as barrier options and Asian options' },
        domain: 'instruments', category: 'derivatives', icon: '🎰',
        tags: ['exotic', 'barrier', 'asian', 'options'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: '主要类型:障碍期权(Barrier)/亚式期权(Asian)/回望期权(Lookback)。OTC交易为主',
            en: 'Main types: Barrier/Asian/Lookback options. Mainly OTC traded'
        }
    },
    {
        id: 'instr-snowball',
        name: { zh: '雪球期权', en: 'Snowball Options' },
        description: { zh: '自动敲入敲出结构产品，投资者卖出看跌期权获取票息，具有路径依赖特性', en: 'Autocallable barrier products where investors sell put options for coupon income, with path-dependent payoffs' },
        domain: 'instruments', category: 'structured', icon: '❄️',
        tags: ['snowball', 'autocallable', 'barrier', 'knock-in', 'knock-out'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: '票息通常15-20%，但敲入后亏损可达50%+。2022年雪球集中敲入引发市场关注',
            en: 'Coupons ~15-20%, but knock-in losses can exceed 50%. 2022 mass knock-ins raised concerns'
        }
    },
    {
        id: 'instr-phoenix',
        name: { zh: '凤凰期权', en: 'Phoenix Notes' },
        description: { zh: '带有定期派息和敲入敲出机制的结构化产品，比雪球更频繁派发票息', en: 'Structured products with periodic coupon payments and knock-in/out mechanisms, more frequent payouts than snowball' },
        domain: 'instruments', category: 'structured', icon: '🦅',
        tags: ['phoenix', 'autocallable', 'coupon'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: '凤凰每月派息，雪球按存续期派息。风险结构与雪球类似',
            en: 'Phoenix pays monthly, snowball pays at survival. Risk structure similar to snowball'
        }
    },
    {
        id: 'instr-sharkfin',
        name: { zh: '鲨鱼鳍期权', en: 'Shark Fin Options' },
        description: { zh: '收益上限封顶的障碍期权，标的涨至障碍价时收益被锁定', en: 'Barrier options with capped returns, payoff is locked when underlying hits barrier price' },
        domain: 'instruments', category: 'structured', icon: '🦈',
        tags: ['sharkfin', 'barrier', 'capped'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: '向上鲨鱼鳍:涨突破障碍后收益消失。适合温和上涨预期',
            en: 'Up sharkfin: gains vanish when barrier breached. Suits mild bullish outlook'
        }
    },
    {
        id: 'instr-income-cert',
        name: { zh: '收益凭证', en: 'Income Certificates' },
        description: { zh: '券商发行的本金保障型或浮动收益型产品，通常挂钩标的资产表现', en: 'Securities firm-issued products with principal protection or floating returns, typically linked to underlying assets' },
        domain: 'instruments', category: 'structured', icon: '📋',
        tags: ['certificate', 'securities', 'linked'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: '中国券商收益凭证分为保证型/非保证型。非保证型类似雪球结构',
            en: 'China income certs: guaranteed vs non-guaranteed. Non-guaranteed similar to snowball'
        }
    },
    {
        id: 'instr-fcn',
        name: { zh: 'FCN固定票息票据', en: 'Fixed Coupon Notes' },
        description: { zh: '提供固定票息的挂钩型票据，到期收益取决于标的资产价格', en: 'Linked notes providing fixed coupons, maturity payoff depends on underlying asset price' },
        domain: 'instruments', category: 'structured', icon: '💳',
        tags: ['fcn', 'coupon', 'linked-note'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: 'FCN=固定票息+售出看跌期权。到期若标的跌破行权价则收到股票',
            en: 'FCN = fixed coupon + sold put. If underlying below strike at maturity, receive stock'
        }
    },
    {
        id: 'instr-dcn',
        name: { zh: 'DCN折价票据', en: 'Discount Certificates' },
        description: { zh: '以折扣价格购买、收益封顶的结构化产品，类似卖出看涨期权', en: 'Structured products bought at discount with capped upside, similar to selling covered calls' },
        domain: 'instruments', category: 'structured', icon: '🏷️',
        tags: ['dcn', 'discount', 'capped'],
        riskLevel: 'L4',
        level: 2, parentId: 'instr-structured',
        details: {
            zh: 'DCN=折价买入+卖出看涨期权。购买价=市价-期权费，收益封顶',
            en: 'DCN = discount purchase + sold call. Buy price = market - premium, capped upside'
        }
    },

    // === 另类投资 ===
    {
        id: 'instr-pe',
        name: { zh: '私募股权', en: 'Private Equity' },
        description: { zh: '非上市公司股权投资，Blackstone和KKR是全球最大的PE机构', en: 'Investment in private companies; Blackstone and KKR are the largest PE firms globally' },
        domain: 'instruments', category: 'alternatives', icon: '💰',
        tags: ['pe', 'buyout', 'blackstone', 'kkr', 'carlyle'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: 'PE策略：杠杆收购(LBO)、成长型投资、困境投资。典型持有期5-7年。IRR(内部收益率)是核心评价指标',
            en: 'PE strategies: Leveraged Buyout (LBO), Growth Equity, Distressed. Typical holding period 5-7 years. IRR is the key performance metric'
        }
    },
    {
        id: 'instr-vc',
        name: { zh: '风险投资', en: 'Venture Capital' },
        description: { zh: '早期创业公司投资，硅谷VC如a16z、红杉资本是行业标杆', en: 'Early-stage startup investment; Silicon Valley VCs like a16z and Sequoia are industry leaders' },
        domain: 'instruments', category: 'alternatives', icon: '🚀',
        tags: ['vc', 'startup', 'a16z', 'sequoia'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: 'VC阶段：种子轮→A/B/C轮→Pre-IPO。回报遵循幂律分布：少数项目贡献大部分收益',
            en: 'VC stages: Seed → Series A/B/C → Pre-IPO. Returns follow power law: few deals generate most returns'
        }
    },
    {
        id: 'instr-hedge-fund',
        name: { zh: '对冲基金策略', en: 'Hedge Fund Strategies' },
        description: { zh: '多元化对冲策略，Bridgewater和Renaissance是全球顶级对冲基金', en: 'Diversified hedging strategies; Bridgewater and Renaissance are top global hedge funds' },
        domain: 'instruments', category: 'alternatives', icon: '🎲',
        tags: ['hedge', 'alpha', 'bridgewater', 'renaissance', 'citadel'],
        riskLevel: 'L4',
        level: 1,
        tradingVenue: 'otc',
        liquidity: 'low',
        investorType: 'qualified',
        details: {
            zh: '主要策略：多空股票、全球宏观(Bridgewater)、量化(Renaissance Medallion年化66%)、事件驱动。"2/20"费率结构',
            en: 'Key strategies: Long/Short Equity, Global Macro (Bridgewater), Quant (Renaissance Medallion 66% annual), Event-Driven. "2 and 20" fee structure'
        }
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
