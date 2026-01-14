# 贡献指南 / Contributing Guide

本文档为后续开发者提供完整的开发流程指南，基于第一性原理设计。

## 📐 第一性原理：项目核心设计

### 核心目标
帮助用户理解金融体系中**市场、机构、工具、宏观经济**之间的**复杂关系**。

### 四大领域 (Domains)
| 领域 | Domain | 说明 |
|------|--------|------|
| 金融市场 | `markets` | 一级/二级市场、股票/债券/衍生品市场等 |
| 金融机构 | `institutions` | 央行、商业银行、投行、交易所、监管机构等 |
| 金融工具 | `instruments` | 股票、债券、期权、期货、结构化产品等 |
| 宏观经济 | `macro` | 货币政策、财政政策、经济指标、经济周期等 |

### 三层层级 (Entity Levels)
| 层级 | 说明 | 示例 |
|------|------|------|
| L1 | 顶级概念 | 股票市场、中央银行、期货 |
| L2 | 二级分类 | A股、沪深300、国债 |
| L3 | 具体实例 | 工商银行、标普500、比特币 |

### 11 种关系类型 (Relationship Types)
```typescript
type RelationType =
  | 'regulates'        // 监管
  | 'issues'           // 发行
  | 'trades'           // 交易
  | 'invests'          // 投资
  | 'influences'       // 影响
  | 'depends_on'       // 依赖
  | 'derives_from'     // 衍生
  | 'competes_with'    // 竞争
  | 'cooperates_with'  // 合作
  | 'provides'         // 提供
  | 'uses';            // 使用
```

---

## 🔧 开发环境设置

```bash
# 1. 克隆仓库
git clone https://github.com/kpictor/Finance-map.git
cd Finance-map

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 运行数据验证（重要！）
npm run validate

# 5. 构建生产版本
npm run build
```

---

## 📁 项目结构

```
src/
├── components/           # React 组件
│   ├── Layout/          # 头部、布局
│   ├── Visualization/   # D3.js 力导向图
│   └── EntityPanel/     # 实体详情面板
├── data/                # 📊 核心数据文件
│   ├── markets.ts       # 金融市场实体
│   ├── institutions.ts  # 金融机构实体
│   ├── instruments.ts   # 金融工具实体
│   ├── macro.ts         # 宏观经济实体
│   ├── crossDomain.ts   # 跨领域关系
│   ├── infrastructureEntities.ts  # 基础设施+P2扩展
│   ├── l3Entities.ts    # L3具体机构
│   ├── sampleData.ts    # 数据聚合
│   └── index.ts         # 数据导出
├── utils/               # 工具函数
│   ├── dataValidator.ts # ⚡ 5层数据验证器
│   └── runValidation.ts # 验证运行脚本
├── types/               # TypeScript 类型
│   └── index.ts         # Entity, Relationship 等定义
└── i18n/                # 国际化
```

---

## 📝 添加新实体的流程

### 步骤 1：确定放置位置
- **市场**相关 → `markets.ts`
- **机构**相关 → `institutions.ts`
- **工具**相关 → `instruments.ts`
- **宏观**相关 → `macro.ts`
- **基础设施/新类别** → `infrastructureEntities.ts`

### 步骤 2：创建实体
```typescript
{
    id: 'unique-id',           // 格式: domain-subcategory-name
    name: { zh: '中文名', en: 'English Name' },
    description: { zh: '描述', en: 'Description' },
    domain: 'institutions',    // 必须是四大领域之一
    category: 'category-name', // 分类
    icon: '🏦',               // Emoji 图标
    tags: ['tag1', 'tag2'],   // 用于搜索
    level: 1,                 // 1/2/3
    parentId: 'parent-id',    // 如果是L2/L3则必填
    details: { zh: '详细说明', en: 'Details' }
}
```

### 步骤 3：添加关系
```typescript
{
    id: 'rel-unique',
    source: 'entity-a-id',
    target: 'entity-b-id',
    type: 'influences',        // 11种类型之一
    strength: 3,               // 1=弱, 2=中, 3=强
    bidirectional: false,
    explanation: {
        zh: '为什么存在这个关系',
        en: 'Why this relationship exists'
    }
}
```

### 步骤 4：导出数据
在 `sampleData.ts` 中添加导入和展开。

### 步骤 5：运行验证 ⚡
```bash
npm run validate
```

---

## ⚡ 数据验证系统

### 5层验证架构
| 层级 | 名称 | 验证内容 |
|------|------|----------|
| L1 | 引用完整性 | ID唯一性、关系引用有效性 |
| L2 | 层级一致性 | 子节点层级 > 父节点层级、无循环引用 |
| L3 | 领域语义 | 子父领域一致性、必需字段完整性 |
| L4 | 关系约束 | 关系类型语义规则 |
| L5 | 图结构 | 孤立节点检测、每领域至少有L1 |

### 验证命令
```bash
# 单独验证
npm run validate

# 构建时自动验证（验证失败=构建失败）
npm run build
```

### 错误 vs 警告
- **❌ 错误**: 必须修复，否则构建失败
- **⚠️ 警告**: 软性提示，不阻塞构建

---

## 📋 层级规则

> **关键规则**: 子节点层级必须 **严格大于** 父节点层级

| 父节点层级 | 子节点层级 | 状态 |
|------------|------------|------|
| L1 | L2 | ✅ 正确 |
| L2 | L3 | ✅ 正确 |
| L1 | L3 | ✅ 正确 |
| L2 | L2 | ⚠️ 警告 |
| L2 | L1 | ❌ 错误 |

---

## 🔄 Git 工作流

```bash
# 1. 创建功能分支
git checkout -b feature/add-xxx-entities

# 2. 添加实体和关系

# 3. 验证数据
npm run validate

# 4. 提交
git add .
git commit -m "feat: add XXX entities and relationships"

# 5. 推送
git push origin feature/add-xxx-entities

# 6. 创建 Pull Request
```

---

## 🎯 扩展建议

基于第一性原理分析，以下是优先级建议：

### 已完成 ✅
- P0: 跨境资本流动、支付清算系统、危机传导机制
- P1: Bloomberg 等金融信息基础设施
- P2: ESG 投资、Smart Beta 因子

### 待扩展
- 更多 L3 具体机构（具体的银行、基金公司等）
- DeFi 细分领域
- 新兴市场区域金融体系

---

## 📄 License

MIT
