/**
 * 关系覆盖率分析脚本
 * Relationship Coverage Analysis Script
 */

import { sampleData } from '../data/sampleData';
import type { Entity, Relationship, EntityLevel } from '../types';

// 最低关系数要求
const MIN_RELATIONSHIPS: Record<EntityLevel, number> = {
    1: 5,
    2: 3,
    3: 2
};

interface EntityGap {
    id: string;
    name: string;
    level: EntityLevel;
    domain: string;
    currentRelations: number;
    minRequired: number;
    gap: number;
}

function analyzeRelationshipCoverage(
    entities: Entity[],
    relationships: Relationship[]
): void {
    console.log('\n========================================');
    console.log('📊 关系覆盖率分析报告');
    console.log('========================================\n');

    // 计算每个实体的关系数
    const relationCount = new Map<string, number>();
    for (const rel of relationships) {
        relationCount.set(rel.source, (relationCount.get(rel.source) || 0) + 1);
        relationCount.set(rel.target, (relationCount.get(rel.target) || 0) + 1);
    }

    // 找出关系不足的实体
    const gaps: EntityGap[] = [];
    for (const entity of entities) {
        const level = (entity.level || 1) as EntityLevel;
        const current = relationCount.get(entity.id) || 0;
        const required = MIN_RELATIONSHIPS[level];

        if (current < required) {
            gaps.push({
                id: entity.id,
                name: entity.name.zh,
                level,
                domain: entity.domain,
                currentRelations: current,
                minRequired: required,
                gap: required - current
            });
        }
    }

    // 按缺口大小排序
    gaps.sort((a, b) => b.gap - a.gap);

    // 打印统计
    console.log('📈 总体统计:');
    console.log(`   总实体数: ${entities.length}`);
    console.log(`   总关系数: ${relationships.length}`);
    console.log(`   平均关系/实体: ${(relationships.length * 2 / entities.length).toFixed(2)}`);
    console.log(`   关系不足的实体数: ${gaps.length} (${(gaps.length / entities.length * 100).toFixed(1)}%)`);

    // 按层级统计
    const l1Gaps = gaps.filter(g => g.level === 1);
    const l2Gaps = gaps.filter(g => g.level === 2);
    const l3Gaps = gaps.filter(g => g.level === 3);

    console.log('\n   按层级分布:');
    console.log(`     L1 关系不足: ${l1Gaps.length} 个`);
    console.log(`     L2 关系不足: ${l2Gaps.length} 个`);
    console.log(`     L3 关系不足: ${l3Gaps.length} 个`);

    // 计算需要补充的关系总数
    const totalGap = gaps.reduce((sum, g) => sum + g.gap, 0);
    console.log(`\n   需要补充的关系数: ≥${totalGap} 条`);

    // 打印详细列表
    if (gaps.length > 0) {
        console.log('\n========================================');
        console.log('⚠️  关系不足的实体列表 (按缺口排序):');
        console.log('========================================\n');

        console.log('| 层级 | 领域 | 实体ID | 名称 | 当前 | 需要 | 缺口 |');
        console.log('|------|------|--------|------|------|------|------|');

        for (const gap of gaps.slice(0, 50)) { // 显示前50个
            console.log(`| L${gap.level} | ${gap.domain} | ${gap.id} | ${gap.name} | ${gap.currentRelations} | ${gap.minRequired} | -${gap.gap} |`);
        }

        if (gaps.length > 50) {
            console.log(`\n... 还有 ${gaps.length - 50} 个实体关系不足`);
        }
    }

    // 关系类型分布分析
    console.log('\n========================================');
    console.log('📊 关系类型分布:');
    console.log('========================================\n');

    const typeCounts: Record<string, number> = {};
    for (const rel of relationships) {
        typeCounts[rel.type] = (typeCounts[rel.type] || 0) + 1;
    }

    const total = relationships.length;
    const sorted = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);

    console.log('| 类型 | 数量 | 占比 | 状态 |');
    console.log('|------|------|------|------|');

    for (const [type, count] of sorted) {
        const pct = (count / total * 100).toFixed(1);
        let status = '✅';
        if (count / total > 0.4) status = '⚠️ 过多';
        if (count / total < 0.02) status = '❌ 过少';
        console.log(`| ${type} | ${count} | ${pct}% | ${status} |`);
    }

    // 目标分析
    console.log('\n========================================');
    console.log('🎯 目标分析:');
    console.log('========================================\n');

    const targetRelations = 800;
    const currentRelations = relationships.length;
    const gap = targetRelations - currentRelations;

    console.log(`   当前关系数: ${currentRelations}`);
    console.log(`   目标关系数: ${targetRelations}`);
    console.log(`   缺口: ${gap} 条 (${(gap / targetRelations * 100).toFixed(1)}%)`);
    console.log(`   完成度: ${(currentRelations / targetRelations * 100).toFixed(1)}%`);
}

// 运行分析
analyzeRelationshipCoverage(sampleData.entities, sampleData.relationships);
