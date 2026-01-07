#!/usr/bin/env npx tsx
/**
 * 系统性数据完整性审查脚本
 * 检查所有实体的level属性和其他必需字段
 */

import { marketEntities } from './src/data/markets';
import { institutionEntities } from './src/data/institutions';
import { instrumentEntities } from './src/data/instruments';
import { macroEntities } from './src/data/macro';

const allEntities = [
    { domain: 'markets', entities: marketEntities },
    { domain: 'institutions', entities: institutionEntities },
    { domain: 'instruments', entities: instrumentEntities },
    { domain: 'macro', entities: macroEntities }
];

console.log('='.repeat(60));
console.log('金融图谱数据完整性审查');
console.log('='.repeat(60));

// 1. 检查level属性
console.log('\n【1】节点层级(level)属性检查');
console.log('-'.repeat(40));

allEntities.forEach(({ domain, entities }) => {
    const withLevel = entities.filter(e => e.level !== undefined);
    const withoutLevel = entities.filter(e => e.level === undefined);

    console.log(`\n${domain.toUpperCase()}:`);
    console.log(`  有level: ${withLevel.length}/${entities.length}`);
    console.log(`  无level: ${withoutLevel.length}`);

    if (withoutLevel.length > 0) {
        console.log('  缺少level的节点:');
        withoutLevel.slice(0, 10).forEach(e => {
            const hasParent = e.parentId ? `(父节点: ${e.parentId})` : '(无父节点)';
            console.log(`    ❌ ${e.id} - ${e.name.zh} ${hasParent}`);
        });
        if (withoutLevel.length > 10) {
            console.log(`    ... 还有 ${withoutLevel.length - 10} 个`);
        }
    }
});

// 2. 检查parentId与level的一致性
console.log('\n【2】父节点与层级一致性检查');
console.log('-'.repeat(40));

allEntities.forEach(({ domain, entities }) => {
    entities.forEach(e => {
        if (e.parentId && e.level === 1) {
            console.log(`  ⚠️ ${e.id}: level=1但有parentId=${e.parentId}`);
        }
        if (!e.parentId && e.level && e.level > 1) {
            console.log(`  ⚠️ ${e.id}: level=${e.level}但无parentId`);
        }
    });
});

// 3. 层级分布统计
console.log('\n【3】层级分布统计');
console.log('-'.repeat(40));

const levelStats: Record<string, Record<number | 'none', number>> = {};
allEntities.forEach(({ domain, entities }) => {
    levelStats[domain] = { 1: 0, 2: 0, 3: 0, 'none': 0 };
    entities.forEach(e => {
        if (e.level) {
            levelStats[domain][e.level]++;
        } else {
            levelStats[domain]['none']++;
        }
    });
});

console.log('领域     | L1   | L2   | L3   | 无   | 总计');
console.log('-'.repeat(50));
Object.entries(levelStats).forEach(([domain, stats]) => {
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    console.log(`${domain.padEnd(12)} | ${String(stats[1]).padStart(4)} | ${String(stats[2]).padStart(4)} | ${String(stats[3]).padStart(4)} | ${String(stats['none']).padStart(4)} | ${String(total).padStart(4)}`);
});

// 4. 汇总问题
console.log('\n【4】修复建议');
console.log('-'.repeat(40));

let totalWithoutLevel = 0;
allEntities.forEach(({ domain, entities }) => {
    const count = entities.filter(e => e.level === undefined).length;
    if (count > 0) {
        console.log(`${domain}: 需要为${count}个节点添加level属性`);
        totalWithoutLevel += count;
    }
});

if (totalWithoutLevel > 0) {
    console.log(`\n建议: 为顶级概念设置level=1，子节点设置level=2或3`);
    console.log(`总计需要修复: ${totalWithoutLevel} 个节点`);
} else {
    console.log('✅ 所有节点都有level属性');
}
