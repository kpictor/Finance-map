#!/usr/bin/env npx tsx
/**
 * 金融图谱关系链完整性审查脚本
 * 逐条检查所有关系是否有效
 */

import { marketEntities, marketRelationships } from './src/data/markets';
import { institutionEntities, institutionRelationships } from './src/data/institutions';
import { instrumentEntities, instrumentRelationships } from './src/data/instruments';
import { macroEntities, macroRelationships } from './src/data/macro';
import { crossDomainRelationships } from './src/data/crossDomain';
import { RelationTypeConfig } from './src/types';

const allEntities = [...marketEntities, ...institutionEntities, ...instrumentEntities, ...macroEntities];
const allRelationships = [...marketRelationships, ...institutionRelationships, ...instrumentRelationships, ...macroRelationships, ...crossDomainRelationships];

const entityIds = new Set(allEntities.map(e => e.id));
const entityMap = new Map(allEntities.map(e => [e.id, e]));

console.log('='.repeat(60));
console.log('金融图谱关系链完整性审查报告');
console.log('='.repeat(60));
console.log(`总实体数: ${allEntities.length}`);
console.log(`总关系数: ${allRelationships.length}`);
console.log('');

// 1. 检查断裂关系
console.log('【1】断裂关系检查（指向不存在的实体）');
console.log('-'.repeat(40));
let brokenCount = 0;
allRelationships.forEach(r => {
    const srcExists = entityIds.has(r.source);
    const tgtExists = entityIds.has(r.target);
    if (!srcExists || !tgtExists) {
        console.log(`❌ ${r.id}: ${r.source}(${srcExists ? '✓' : 'NOT FOUND'}) -> ${r.target}(${tgtExists ? '✓' : 'NOT FOUND'})`);
        brokenCount++;
    }
});
if (brokenCount === 0) console.log('✅ 无断裂关系');
console.log(`总计: ${brokenCount} 个问题\n`);

// 2. 检查孤立节点
console.log('【2】孤立节点检查（无任何关系）');
console.log('-'.repeat(40));
const connectedIds = new Set<string>();
allRelationships.forEach(r => {
    connectedIds.add(r.source);
    connectedIds.add(r.target);
});
const orphans = allEntities.filter(e => !connectedIds.has(e.id));
orphans.forEach(e => {
    console.log(`❌ ${e.id}: ${e.name.zh} (${e.domain})`);
});
if (orphans.length === 0) console.log('✅ 无孤立节点');
console.log(`总计: ${orphans.length} 个问题\n`);

// 3. 检查层级关系完整性
console.log('【3】层级关系检查（有parentId但无provides关系）');
console.log('-'.repeat(40));
const providesSet = new Set(
    allRelationships
        .filter(r => r.type === 'provides')
        .map(r => `${r.source}->${r.target}`)
);
let hierarchyIssues = 0;
allEntities.filter(e => e.parentId).forEach(e => {
    const expected = `${e.parentId}->${e.id}`;
    if (!providesSet.has(expected)) {
        const parent = entityMap.get(e.parentId);
        console.log(`❌ ${e.id}(${e.name.zh}): 缺少 ${e.parentId}(${parent?.name.zh || 'NOT FOUND'}) -> ${e.id} provides关系`);
        hierarchyIssues++;
    }
});
if (hierarchyIssues === 0) console.log('✅ 层级关系完整');
console.log(`总计: ${hierarchyIssues} 个问题\n`);

// 4. 检查关系类型有效性
console.log('【4】关系类型有效性检查');
console.log('-'.repeat(40));
const validTypes = new Set(Object.keys(RelationTypeConfig));
let invalidTypeCount = 0;
allRelationships.forEach(r => {
    if (!validTypes.has(r.type)) {
        console.log(`❌ ${r.id}: 无效关系类型 "${r.type}"`);
        invalidTypeCount++;
    }
});
if (invalidTypeCount === 0) console.log('✅ 所有关系类型有效');
console.log(`总计: ${invalidTypeCount} 个问题\n`);

// 5. 关系类型使用统计
console.log('【5】关系类型使用统计');
console.log('-'.repeat(40));
const typeUsage: Record<string, number> = {};
allRelationships.forEach(r => {
    typeUsage[r.type] = (typeUsage[r.type] || 0) + 1;
});
Object.entries(RelationTypeConfig).forEach(([type, config]) => {
    const count = typeUsage[type] || 0;
    const status = count > 0 ? '' : ' ⚠️ 未使用';
    console.log(`  ${type.padEnd(15)} : ${String(count).padStart(3)}${status}`);
});
console.log('');

// 6. 跨域关系统计
console.log('【6】跨域关系详细列表');
console.log('-'.repeat(40));
crossDomainRelationships.forEach((r, i) => {
    const src = entityMap.get(r.source);
    const tgt = entityMap.get(r.target);
    const srcDomain = src?.domain || '?';
    const tgtDomain = tgt?.domain || '?';
    const srcName = src?.name.zh || 'NOT FOUND';
    const tgtName = tgt?.name.zh || 'NOT FOUND';
    const status = (src && tgt) ? '✓' : '❌';
    console.log(`${status} ${String(i + 1).padStart(2)}. [${srcDomain}]${srcName} --(${r.type})--> [${tgtDomain}]${tgtName}`);
});
console.log(`总计: ${crossDomainRelationships.length} 条跨域关系\n`);

// 7. 汇总
console.log('='.repeat(60));
console.log('审查汇总');
console.log('='.repeat(60));
const totalIssues = brokenCount + orphans.length + hierarchyIssues + invalidTypeCount;
console.log(`断裂关系: ${brokenCount}`);
console.log(`孤立节点: ${orphans.length}`);
console.log(`层级缺失: ${hierarchyIssues}`);
console.log(`无效类型: ${invalidTypeCount}`);
console.log('-'.repeat(40));
console.log(`问题总计: ${totalIssues}`);
console.log(`状态: ${totalIssues === 0 ? '✅ 通过' : '❌ 需要修复'}`);
