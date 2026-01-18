/**
 * 数据完整性审计脚本
 * Data Integrity Audit Script
 * 
 * 检查项目:
 * 1. 重复实体ID
 * 2. 重复关系ID  
 * 3. 孤立关系（source或target不存在）
 * 4. 孤立节点（没有任何关系连接）
 * 5. 父节点不存在的实体
 * 6. 层级结构问题
 */

import { sampleData } from './src/data/sampleData';

interface AuditResult {
    category: string;
    severity: 'ERROR' | 'WARNING' | 'INFO';
    message: string;
    details?: string[];
}

const results: AuditResult[] = [];

console.log('='.repeat(60));
console.log('  数据完整性审计 / Data Integrity Audit');
console.log('='.repeat(60));
console.log(`\n检查数据: ${sampleData.entities.length} 实体, ${sampleData.relationships.length} 关系\n`);

// 1. 检查重复实体ID
console.log('1. 检查重复实体ID...');
const entityIdMap = new Map<string, number>();
const duplicateEntityIds: string[] = [];

sampleData.entities.forEach((entity, index) => {
    if (entityIdMap.has(entity.id)) {
        duplicateEntityIds.push(`${entity.id} (第${entityIdMap.get(entity.id)! + 1}次出现在索引${entityIdMap.get(entity.id)}, 重复出现在索引${index})`);
    } else {
        entityIdMap.set(entity.id, index);
    }
});

if (duplicateEntityIds.length > 0) {
    results.push({
        category: '重复实体ID',
        severity: 'ERROR',
        message: `发现 ${duplicateEntityIds.length} 个重复的实体ID`,
        details: duplicateEntityIds
    });
    console.log(`   ❌ 发现 ${duplicateEntityIds.length} 个重复ID`);
} else {
    console.log('   ✅ 无重复实体ID');
}

// 2. 检查重复关系ID
console.log('2. 检查重复关系ID...');
const relationIdMap = new Map<string, number>();
const duplicateRelationIds: string[] = [];

sampleData.relationships.forEach((rel, index) => {
    if (relationIdMap.has(rel.id)) {
        duplicateRelationIds.push(`${rel.id} (索引${relationIdMap.get(rel.id)} 和 ${index})`);
    } else {
        relationIdMap.set(rel.id, index);
    }
});

if (duplicateRelationIds.length > 0) {
    results.push({
        category: '重复关系ID',
        severity: 'ERROR',
        message: `发现 ${duplicateRelationIds.length} 个重复的关系ID`,
        details: duplicateRelationIds
    });
    console.log(`   ❌ 发现 ${duplicateRelationIds.length} 个重复ID`);
} else {
    console.log('   ✅ 无重复关系ID');
}

// 3. 检查孤立关系（source或target不存在）
console.log('3. 检查孤立关系...');
const entityIds = new Set(sampleData.entities.map(e => e.id));
const orphanRelations: string[] = [];

sampleData.relationships.forEach(rel => {
    const issues: string[] = [];
    if (!entityIds.has(rel.source)) {
        issues.push(`source '${rel.source}' 不存在`);
    }
    if (!entityIds.has(rel.target)) {
        issues.push(`target '${rel.target}' 不存在`);
    }
    if (issues.length > 0) {
        orphanRelations.push(`${rel.id}: ${issues.join(', ')}`);
    }
});

if (orphanRelations.length > 0) {
    results.push({
        category: '孤立关系',
        severity: 'ERROR',
        message: `发现 ${orphanRelations.length} 个引用不存在实体的关系`,
        details: orphanRelations
    });
    console.log(`   ❌ 发现 ${orphanRelations.length} 个孤立关系`);
} else {
    console.log('   ✅ 无孤立关系');
}

// 4. 检查孤立节点（没有任何关系连接）
console.log('4. 检查孤立节点...');
const connectedIds = new Set<string>();

sampleData.relationships.forEach(rel => {
    connectedIds.add(rel.source);
    connectedIds.add(rel.target);
});

const orphanNodes = sampleData.entities.filter(e => !connectedIds.has(e.id));

if (orphanNodes.length > 0) {
    results.push({
        category: '孤立节点',
        severity: 'WARNING',
        message: `发现 ${orphanNodes.length} 个没有任何关系连接的节点`,
        details: orphanNodes.map(e => `${e.id}: ${e.name.zh} (${e.name.en}) [Level ${e.level || 2}]`)
    });
    console.log(`   ⚠️ 发现 ${orphanNodes.length} 个孤立节点`);
} else {
    console.log('   ✅ 无孤立节点');
}

// 5. 检查父节点不存在的实体
console.log('5. 检查父节点不存在...');
const missingParents: string[] = [];

sampleData.entities.forEach(entity => {
    if (entity.parentId && !entityIds.has(entity.parentId)) {
        missingParents.push(`${entity.id} (parentId: '${entity.parentId}' 不存在)`);
    }
});

if (missingParents.length > 0) {
    results.push({
        category: '父节点缺失',
        severity: 'ERROR',
        message: `发现 ${missingParents.length} 个实体的父节点不存在`,
        details: missingParents
    });
    console.log(`   ❌ 发现 ${missingParents.length} 个父节点缺失`);
} else {
    console.log('   ✅ 无父节点缺失');
}

// 6. 检查层级结构问题
console.log('6. 检查层级结构问题...');
const levelIssues: string[] = [];

sampleData.entities.forEach(entity => {
    const level = entity.level || 2;

    // L1不应有parentId
    if (level === 1 && entity.parentId) {
        levelIssues.push(`${entity.id}: L1节点不应有parentId (有: ${entity.parentId})`);
    }

    // L2/L3应有parentId
    if ((level === 2 || level === 3) && !entity.parentId) {
        levelIssues.push(`${entity.id}: L${level}节点应有parentId (无)`);
    }

    // 检查parentId对应的实体层级是否正确
    if (entity.parentId) {
        const parent = sampleData.entities.find(e => e.id === entity.parentId);
        if (parent) {
            const parentLevel = parent.level || 2;
            if (level <= parentLevel) {
                levelIssues.push(`${entity.id}: L${level}节点的父节点 ${entity.parentId} 是L${parentLevel}，层级不正确`);
            }
        }
    }
});

if (levelIssues.length > 0) {
    results.push({
        category: '层级结构问题',
        severity: 'WARNING',
        message: `发现 ${levelIssues.length} 个层级结构问题`,
        details: levelIssues
    });
    console.log(`   ⚠️ 发现 ${levelIssues.length} 个层级问题`);
} else {
    console.log('   ✅ 层级结构正常');
}

// 7. 统计各层级实体数量
console.log('\n7. 实体层级统计:');
const levelCounts = { 1: 0, 2: 0, 3: 0 };
sampleData.entities.forEach(e => {
    const level = e.level || 2;
    if (level in levelCounts) {
        levelCounts[level as 1 | 2 | 3]++;
    }
});
console.log(`   L1: ${levelCounts[1]} 个`);
console.log(`   L2: ${levelCounts[2]} 个`);
console.log(`   L3: ${levelCounts[3]} 个`);

// 8. 统计各领域实体数量
console.log('\n8. 领域分布统计:');
const domainCounts: Record<string, number> = {};
sampleData.entities.forEach(e => {
    domainCounts[e.domain] = (domainCounts[e.domain] || 0) + 1;
});
Object.entries(domainCounts).forEach(([domain, count]) => {
    console.log(`   ${domain}: ${count} 个`);
});

// 9. 统计关系类型分布
console.log('\n9. 关系类型统计:');
const relTypeCounts: Record<string, number> = {};
sampleData.relationships.forEach(r => {
    relTypeCounts[r.type] = (relTypeCounts[r.type] || 0) + 1;
});
Object.entries(relTypeCounts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    console.log(`   ${type}: ${count} 个`);
});

// 输出审计结果摘要
console.log('\n' + '='.repeat(60));
console.log('  审计结果摘要');
console.log('='.repeat(60));

const errors = results.filter(r => r.severity === 'ERROR');
const warnings = results.filter(r => r.severity === 'WARNING');

if (errors.length === 0 && warnings.length === 0) {
    console.log('\n✅ 数据完整性检查通过，无问题发现！\n');
} else {
    if (errors.length > 0) {
        console.log(`\n❌ 发现 ${errors.length} 个错误:\n`);
        errors.forEach(e => {
            console.log(`   [ERROR] ${e.category}: ${e.message}`);
            if (e.details && e.details.length <= 10) {
                e.details.forEach(d => console.log(`           - ${d}`));
            } else if (e.details) {
                e.details.slice(0, 10).forEach(d => console.log(`           - ${d}`));
                console.log(`           ... 还有 ${e.details.length - 10} 个`);
            }
        });
    }

    if (warnings.length > 0) {
        console.log(`\n⚠️ 发现 ${warnings.length} 个警告:\n`);
        warnings.forEach(w => {
            console.log(`   [WARNING] ${w.category}: ${w.message}`);
            if (w.details && w.details.length <= 10) {
                w.details.forEach(d => console.log(`           - ${d}`));
            } else if (w.details) {
                w.details.slice(0, 10).forEach(d => console.log(`           - ${d}`));
                console.log(`           ... 还有 ${w.details.length - 10} 个`);
            }
        });
    }
}

console.log('\n' + '='.repeat(60) + '\n');
