# 金融体系图谱 / Financial System Map

一个交互式的金融体系知识图谱，帮助理解金融市场、机构、工具和宏观经济之间的复杂关系。

An interactive financial system knowledge graph to help understand complex relationships between financial markets, institutions, instruments, and macroeconomics.

## ✨ 功能特性 / Features

- 🎯 **力导向图可视化** - D3.js 驱动的交互式网络图，支持拖拽、缩放、平移
- 🔍 **智能搜索** - 按名称、标签搜索实体
- 🏷️ **领域筛选** - 按市场、机构、工具、宏观四大领域过滤
- 🌐 **中英双语** - 一键切换中文/英文界面
- 💡 **关系解释** - 详细说明实体间关系存在的原因
- 📱 **响应式设计** - 适配桌面和移动设备

## 📊 数据统计 / Data Stats

| 领域 | Domain | 实体数 | Entities |
|------|--------|--------|----------|
| 金融市场 | Financial Markets | 26 | Stock, Bond, Forex, Derivatives, Commodities, Crypto |
| 金融机构 | Financial Institutions | 27 | Central Banks, Commercial Banks, Funds, Insurance, Regulators |
| 金融工具 | Financial Instruments | 56 | Stocks, Bonds, Options, Futures, ETFs, Structured Products |
| 宏观经济 | Macroeconomics | 23 | Monetary Policy, Fiscal Policy, Indicators, Cycles |
| **总计** | **Total** | **132** | **200+ relationships** |

## 🎯 风险等级 / Risk Levels

金融工具按照 IBKR 风格分为4个风险等级：

| 等级 | Level | 颜色 | 描述 |
|------|-------|------|------|
| 🟢 L1 | Conservative | 深绿 | 低风险，追求本金安全（国债、货币基金） |
| 🔵 L2 | Moderate | 深蓝 | 中低风险，平衡风险收益（ETF、企业债） |
| 🟣 L3 | Aggressive | 紫色 | 中高风险，追求增值（股票、期货） |
| 🔴 L4 | Speculative | 红色 | 高风险，可能损失本金（权证、雪球期权） |

## 🛠️ 技术栈 / Tech Stack

- **Vite** - 极速构建工具
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **D3.js** - 数据可视化
- **react-i18next** - 国际化

## 🚀 快速开始 / Quick Start

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

访问 http://localhost:5173 查看应用。

## 📁 项目结构 / Project Structure

```
src/
├── components/
│   ├── Layout/           # 布局组件 (Header)
│   ├── Visualization/    # 可视化组件 (ForceGraph)
│   └── EntityPanel/      # 实体详情面板
├── data/
│   ├── markets.ts        # 金融市场数据
│   ├── institutions.ts   # 金融机构数据
│   ├── instruments.ts    # 金融工具数据
│   ├── macro.ts          # 宏观经济数据
│   └── crossDomain.ts    # 跨领域关系
├── i18n/                 # 国际化配置
├── types/                # TypeScript 类型定义
└── App.tsx               # 主应用组件
```

## 📖 使用指南 / User Guide

1. **浏览概览** - 首页显示全部实体的网络关系图
2. **筛选领域** - 点击左侧图例筛选特定领域
3. **查看详情** - 点击节点查看实体详情和关系解释
4. **探索关系** - 在详情面板中点击相关实体继续探索
5. **搜索实体** - 使用顶部搜索栏快速定位
6. **切换语言** - 点击 "中/EN" 按钮切换语言

## 📄 License

MIT
