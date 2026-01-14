/**
 * 金融体系图谱 - 数据完整性验证器
 * Financial System Map - Data Integrity Validator
 * 
 * 第一性原理验证层级:
 * LAYER 1: 引用完整性 (Referential Integrity)
 * LAYER 2: 层级一致性 (Hierarchy Consistency)
 * LAYER 3: 领域语义约束 (Domain Semantic Constraints)
 * LAYER 4: 关系类型约束 (Relationship Type Constraints)
 * LAYER 5: 图结构约束 (Graph Structure Constraints)
 */

import type { Entity, Relationship, Domain, RelationType, EntityLevel } from '../types';

// ========================================
// 验证结果类型
// ========================================

export interface ValidationError {
    layer: 1 | 2 | 3 | 4 | 5;
    severity: 'error' | 'warning';
    code: string;
    message: string;
    entityId?: string;
    relationshipId?: string;
    details?: Record<string, unknown>;
}

export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
    warnings: ValidationError[];
    stats: {
        totalEntities: number;
        totalRelationships: number;
        entitiesByDomain: Record<Domain, number>;
        entitiesByLevel: Record<EntityLevel, number>;
        relationshipsByType: Record<RelationType, number>;
        orphanedEntities: number;
        circularReferences: number;
    };
}

// ========================================
// LAYER 1: 引用完整性 (Referential Integrity)
// 确保所有关系的source/target引用有效实体
// ========================================

function validateReferentialIntegrity(
    entities: Entity[],
    relationships: Relationship[]
): ValidationError[] {
    const errors: ValidationError[] = [];
    const entityIds = new Set(entities.map(e => e.id));

    // 检查实体ID唯一性
    const idCounts = new Map<string, number>();
    for (const entity of entities) {
        idCounts.set(entity.id, (idCounts.get(entity.id) || 0) + 1);
    }
    for (const [id, count] of idCounts) {
        if (count > 1) {
            errors.push({
                layer: 1,
                severity: 'error',
                code: 'DUPLICATE_ENTITY_ID',
                message: `实体ID重复: ${id} 出现 ${count} 次`,
                entityId: id
            });
        }
    }

    // 检查关系ID唯一性
    const relIdCounts = new Map<string, number>();
    for (const rel of relationships) {
        relIdCounts.set(rel.id, (relIdCounts.get(rel.id) || 0) + 1);
    }
    for (const [id, count] of relIdCounts) {
        if (count > 1) {
            errors.push({
                layer: 1,
                severity: 'error',
                code: 'DUPLICATE_RELATIONSHIP_ID',
                message: `关系ID重复: ${id} 出现 ${count} 次`,
                relationshipId: id
            });
        }
    }

    // 检查关系引用的实体是否存在
    for (const rel of relationships) {
        if (!entityIds.has(rel.source)) {
            errors.push({
                layer: 1,
                severity: 'error',
                code: 'INVALID_SOURCE_REF',
                message: `关系 ${rel.id} 的source引用不存在的实体: ${rel.source}`,
                relationshipId: rel.id,
                details: { source: rel.source, target: rel.target }
            });
        }
        if (!entityIds.has(rel.target)) {
            errors.push({
                layer: 1,
                severity: 'error',
                code: 'INVALID_TARGET_REF',
                message: `关系 ${rel.id} 的target引用不存在的实体: ${rel.target}`,
                relationshipId: rel.id,
                details: { source: rel.source, target: rel.target }
            });
        }
    }

    // 检查parentId引用
    for (const entity of entities) {
        if (entity.parentId && !entityIds.has(entity.parentId)) {
            errors.push({
                layer: 1,
                severity: 'error',
                code: 'INVALID_PARENT_REF',
                message: `实体 ${entity.id} 的parentId引用不存在的实体: ${entity.parentId}`,
                entityId: entity.id
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 2: 层级一致性 (Hierarchy Consistency)
// 确保层级结构合理
// ========================================

function validateHierarchyConsistency(entities: Entity[]): ValidationError[] {
    const errors: ValidationError[] = [];
    const entityMap = new Map(entities.map(e => [e.id, e]));

    for (const entity of entities) {
        // 检查: 子节点层级应 >= 父节点层级
        if (entity.parentId) {
            const parent = entityMap.get(entity.parentId);
            if (parent) {
                const childLevel = entity.level ?? 1;
                const parentLevel = parent.level ?? 1;
                if (childLevel < parentLevel) {
                    errors.push({
                        layer: 2,
                        severity: 'error',
                        code: 'INVALID_LEVEL_ORDER',
                        message: `子节点 ${entity.id}(L${childLevel}) 层级小于父节点 ${parent.id}(L${parentLevel})`,
                        entityId: entity.id,
                        details: { childLevel, parentLevel, parentId: entity.parentId }
                    });
                }
                if (childLevel === parentLevel) {
                    errors.push({
                        layer: 2,
                        severity: 'warning',
                        code: 'SAME_LEVEL_PARENT_CHILD',
                        message: `子节点 ${entity.id} 与父节点 ${parent.id} 层级相同(L${childLevel})，建议子节点层级大于父节点`,
                        entityId: entity.id
                    });
                }
            }
        }

        // 检查: L1节点不应有parentId
        if (entity.level === 1 && entity.parentId) {
            errors.push({
                layer: 2,
                severity: 'warning',
                code: 'L1_HAS_PARENT',
                message: `L1节点 ${entity.id} 不应有parentId: ${entity.parentId}`,
                entityId: entity.id
            });
        }

        // 检查: L2/L3节点应有parentId
        if ((entity.level === 2 || entity.level === 3) && !entity.parentId) {
            errors.push({
                layer: 2,
                severity: 'warning',
                code: 'CHILD_WITHOUT_PARENT',
                message: `L${entity.level}节点 ${entity.id} 缺少parentId`,
                entityId: entity.id
            });
        }
    }

    // 检测循环引用
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    function detectCycle(entityId: string): boolean {
        if (recursionStack.has(entityId)) return true;
        if (visited.has(entityId)) return false;

        visited.add(entityId);
        recursionStack.add(entityId);

        const entity = entityMap.get(entityId);
        if (entity?.parentId) {
            if (detectCycle(entity.parentId)) {
                return true;
            }
        }

        recursionStack.delete(entityId);
        return false;
    }

    for (const entity of entities) {
        visited.clear();
        recursionStack.clear();
        if (entity.parentId && detectCycle(entity.id)) {
            errors.push({
                layer: 2,
                severity: 'error',
                code: 'CIRCULAR_PARENT_REF',
                message: `检测到循环父节点引用涉及实体: ${entity.id}`,
                entityId: entity.id
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 3: 领域语义约束 (Domain Semantic Constraints)
// 确保领域分配合理
// ========================================

function validateDomainSemantics(entities: Entity[]): ValidationError[] {
    const errors: ValidationError[] = [];
    const entityMap = new Map(entities.map(e => [e.id, e]));

    // 检查: 子节点应与父节点属于同一领域(除非是跨域设计)
    for (const entity of entities) {
        if (entity.parentId) {
            const parent = entityMap.get(entity.parentId);
            if (parent && entity.domain !== parent.domain) {
                errors.push({
                    layer: 3,
                    severity: 'warning',
                    code: 'CROSS_DOMAIN_HIERARCHY',
                    message: `子节点 ${entity.id}(${entity.domain}) 与父节点 ${parent.id}(${parent.domain}) 属于不同领域`,
                    entityId: entity.id,
                    details: { childDomain: entity.domain, parentDomain: parent.domain }
                });
            }
        }
    }

    // 检查必需字段
    for (const entity of entities) {
        if (!entity.name?.zh || !entity.name?.en) {
            errors.push({
                layer: 3,
                severity: 'error',
                code: 'MISSING_NAME',
                message: `实体 ${entity.id} 缺少中英文名称`,
                entityId: entity.id
            });
        }
        if (!entity.description?.zh || !entity.description?.en) {
            errors.push({
                layer: 3,
                severity: 'warning',
                code: 'MISSING_DESCRIPTION',
                message: `实体 ${entity.id} 缺少中英文描述`,
                entityId: entity.id
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 4: 关系类型约束 (Relationship Type Constraints)
// 确保关系类型在语义上合理
// ========================================

// 关系类型语义约束规则
const RELATIONSHIP_SEMANTIC_RULES: Record<RelationType, {
    validSourceDomains?: Domain[];
    validTargetDomains?: Domain[];
    validSourceCategories?: string[];
    description: string;
}> = {
    regulates: {
        validSourceCategories: ['regulatory', 'regulator', 'central-bank'],
        description: '监管关系通常由监管机构或央行发起'
    },
    issues: {
        validSourceDomains: ['institutions'],
        validTargetDomains: ['instruments'],
        description: '发行关系：机构发行金融工具'
    },
    trades: {
        validTargetDomains: ['instruments', 'markets'],
        description: '交易关系：通常涉及金融工具或市场'
    },
    invests: {
        validSourceDomains: ['institutions'],
        description: '投资关系：通常由机构发起'
    },
    influences: {
        description: '影响关系：较为通用，无严格限制'
    },
    depends_on: {
        description: '依赖关系：较为通用'
    },
    derives_from: {
        validSourceDomains: ['instruments'],
        validTargetDomains: ['instruments'],
        description: '衍生关系：衍生品从标的资产衍生'
    },
    competes_with: {
        description: '竞争关系：同类实体间竞争'
    },
    cooperates_with: {
        description: '合作关系：实体间合作'
    },
    provides: {
        description: '提供关系：已废弃，请使用 hosts/offers/enables'
    },
    uses: {
        description: '使用关系：一方使用另一方的服务/产品'
    },
    // === 新增关系类型语义规则 (v2.0) ===
    hosts: {
        validSourceDomains: ['institutions', 'infrastructure'],
        validTargetDomains: ['markets'],
        description: '托管/场所关系：交易所提供市场交易场所'
    },
    offers: {
        validSourceDomains: ['institutions', 'infrastructure'],
        description: '提供产品关系：机构向客户提供产品/服务'
    },
    enables: {
        validSourceDomains: ['infrastructure'],
        description: '赋能关系：基础设施提供能力支撑'
    },
    clears: {
        validSourceDomains: ['institutions', 'infrastructure'],
        description: '清算关系：清算机构作为中央对手方'
    },
    settles: {
        validSourceDomains: ['institutions', 'infrastructure'],
        description: '结算关系：完成证券和资金最终交割'
    },
    lists: {
        validSourceDomains: ['institutions'],
        validTargetDomains: ['instruments'],
        description: '上市关系：交易所上市证券'
    },
    benchmarks: {
        validSourceDomains: ['instruments', 'macro'],
        description: '定价基准关系：作为其他产品的定价参考'
    }
};

function validateRelationshipConstraints(
    entities: Entity[],
    relationships: Relationship[]
): ValidationError[] {
    const errors: ValidationError[] = [];
    const entityMap = new Map(entities.map(e => [e.id, e]));

    for (const rel of relationships) {
        const source = entityMap.get(rel.source);
        const target = entityMap.get(rel.target);

        if (!source || !target) continue; // 已在Layer 1检查

        const rules = RELATIONSHIP_SEMANTIC_RULES[rel.type];
        if (!rules) continue;

        // 检查source领域约束
        if (rules.validSourceDomains && !rules.validSourceDomains.includes(source.domain)) {
            errors.push({
                layer: 4,
                severity: 'warning',
                code: 'UNEXPECTED_SOURCE_DOMAIN',
                message: `关系 ${rel.id}(${rel.type}): source ${source.id} 的领域 ${source.domain} 不在预期范围 [${rules.validSourceDomains.join(', ')}]`,
                relationshipId: rel.id,
                details: { ruleDomains: rules.validSourceDomains, actualDomain: source.domain }
            });
        }

        // 检查target领域约束
        if (rules.validTargetDomains && !rules.validTargetDomains.includes(target.domain)) {
            errors.push({
                layer: 4,
                severity: 'warning',
                code: 'UNEXPECTED_TARGET_DOMAIN',
                message: `关系 ${rel.id}(${rel.type}): target ${target.id} 的领域 ${target.domain} 不在预期范围 [${rules.validTargetDomains.join(', ')}]`,
                relationshipId: rel.id,
                details: { ruleDomains: rules.validTargetDomains, actualDomain: target.domain }
            });
        }

        // 检查source category约束
        if (rules.validSourceCategories && !rules.validSourceCategories.includes(source.category)) {
            // 这只是一个软警告，因为category可能有例外
            errors.push({
                layer: 4,
                severity: 'warning',
                code: 'UNEXPECTED_SOURCE_CATEGORY',
                message: `关系 ${rel.id}(${rel.type}): source ${source.id} 的category ${source.category} 不在典型范围`,
                relationshipId: rel.id,
                details: { ruleCategories: rules.validSourceCategories, actualCategory: source.category }
            });
        }

        // 检查自引用
        if (rel.source === rel.target) {
            errors.push({
                layer: 4,
                severity: 'warning',
                code: 'SELF_REFERENCE',
                message: `关系 ${rel.id} 是自引用(source和target相同): ${rel.source}`,
                relationshipId: rel.id
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 5: 图结构约束 (Graph Structure Constraints)
// 确保整体图结构健康
// ========================================

function validateGraphStructure(
    entities: Entity[],
    relationships: Relationship[]
): ValidationError[] {
    const errors: ValidationError[] = [];

    // 构建邻接表
    const adjacency = new Map<string, Set<string>>();
    for (const entity of entities) {
        adjacency.set(entity.id, new Set());
    }
    for (const rel of relationships) {
        if (adjacency.has(rel.source) && adjacency.has(rel.target)) {
            adjacency.get(rel.source)!.add(rel.target);
            if (rel.bidirectional) {
                adjacency.get(rel.target)!.add(rel.source);
            }
        }
    }

    // 检查孤立节点(没有任何关系的实体)
    const connectedNodes = new Set<string>();
    for (const rel of relationships) {
        connectedNodes.add(rel.source);
        connectedNodes.add(rel.target);
    }

    for (const entity of entities) {
        if (!connectedNodes.has(entity.id)) {
            errors.push({
                layer: 5,
                severity: 'warning',
                code: 'ORPHANED_ENTITY',
                message: `实体 ${entity.id}(${entity.name.zh}) 没有任何关系连接`,
                entityId: entity.id
            });
        }
    }

    // 检查每个领域至少有一个L1节点
    const domainL1Counts: Record<Domain, number> = {
        markets: 0,
        institutions: 0,
        instruments: 0,
        macro: 0,
        infrastructure: 0
    };
    for (const entity of entities) {
        if (entity.level === 1) {
            domainL1Counts[entity.domain]++;
        }
    }
    for (const [domain, count] of Object.entries(domainL1Counts)) {
        if (count === 0) {
            errors.push({
                layer: 5,
                severity: 'error',
                code: 'DOMAIN_WITHOUT_L1',
                message: `领域 ${domain} 没有L1级实体`,
                details: { domain }
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 6: 关系密度检查 (Relationship Density)
// 确保每个实体有足够的关系连接
// ========================================

// 按层级的最低关系数要求
const MIN_RELATIONSHIPS_BY_LEVEL: Record<EntityLevel, number> = {
    1: 5,  // L1 顶级概念至少5条关系
    2: 3,  // L2 二级分类至少3条关系
    3: 2   // L3 具体实例至少2条关系
};

function validateRelationshipDensity(
    entities: Entity[],
    relationships: Relationship[]
): ValidationError[] {
    const errors: ValidationError[] = [];

    // 计算每个实体的关系数
    const relationCount = new Map<string, number>();
    for (const rel of relationships) {
        relationCount.set(rel.source, (relationCount.get(rel.source) || 0) + 1);
        relationCount.set(rel.target, (relationCount.get(rel.target) || 0) + 1);
    }

    // 检查是否满足最低要求
    for (const entity of entities) {
        const count = relationCount.get(entity.id) || 0;
        const level = entity.level || 1;
        const minRequired = MIN_RELATIONSHIPS_BY_LEVEL[level as EntityLevel];

        if (count < minRequired) {
            errors.push({
                layer: 5, // 归类到图结构层
                severity: 'warning',
                code: 'LOW_RELATIONSHIP_DENSITY',
                message: `实体 ${entity.id}(${entity.name.zh}) 只有 ${count} 条关系，L${level} 需要至少 ${minRequired} 条`,
                entityId: entity.id,
                details: { currentCount: count, minRequired, level }
            });
        }
    }

    return errors;
}

// ========================================
// LAYER 7: 关系类型平衡检查 (Relationship Type Balance)
// 确保关系类型分布合理
// ========================================

const RELATIONSHIP_TYPE_THRESHOLDS = {
    maxSingleTypePercentage: 0.30,  // 单一类型不超过30%
    minTypePercentage: 0.02,        // 每种类型至少2%
    providesMaxPercentage: 0.25     // provides 类型专项限制：不超过25%
};

function validateRelationshipBalance(
    relationships: Relationship[]
): ValidationError[] {
    const errors: ValidationError[] = [];
    const total = relationships.length;

    if (total === 0) return errors;

    // 统计各类型数量
    const typeCounts: Partial<Record<RelationType, number>> = {};
    for (const rel of relationships) {
        typeCounts[rel.type] = (typeCounts[rel.type] || 0) + 1;
    }

    // 检查单一类型是否过度使用
    for (const [type, count] of Object.entries(typeCounts)) {
        const percentage = count / total;
        if (percentage > RELATIONSHIP_TYPE_THRESHOLDS.maxSingleTypePercentage) {
            errors.push({
                layer: 5,
                severity: 'warning',
                code: 'RELATIONSHIP_TYPE_OVERUSED',
                message: `关系类型 "${type}" 占比过高 (${(percentage * 100).toFixed(1)}%，阈值 ${RELATIONSHIP_TYPE_THRESHOLDS.maxSingleTypePercentage * 100}%)`,
                details: { type, count, percentage: (percentage * 100).toFixed(1) + '%' }
            });
        }
    }

    // 检查是否有类型使用过少
    const allRelationTypes: RelationType[] = [
        'regulates', 'issues', 'trades', 'invests', 'influences',
        'depends_on', 'derives_from', 'competes_with', 'cooperates_with',
        'provides', 'uses',
        // 新增关系类型 (v2.0)
        'hosts', 'offers', 'enables', 'clears', 'settles', 'lists', 'benchmarks'
    ];

    for (const type of allRelationTypes) {
        const count = typeCounts[type] || 0;
        const percentage = count / total;
        if (percentage < RELATIONSHIP_TYPE_THRESHOLDS.minTypePercentage) {
            errors.push({
                layer: 5,
                severity: 'warning',
                code: 'RELATIONSHIP_TYPE_UNDERUSED',
                message: `关系类型 "${type}" 使用不足 (${(percentage * 100).toFixed(1)}%，建议至少 ${RELATIONSHIP_TYPE_THRESHOLDS.minTypePercentage * 100}%)`,
                details: { type, count, percentage: (percentage * 100).toFixed(1) + '%' }
            });
        }
    }

    // 专项检查：provides 类型过度使用（核心问题）
    const providesCount = typeCounts['provides'] || 0;
    const providesPct = providesCount / total;
    if (providesPct > RELATIONSHIP_TYPE_THRESHOLDS.providesMaxPercentage) {
        errors.push({
            layer: 5,
            severity: 'warning',
            code: 'PROVIDES_OVERUSED',
            message: `⚠️ "provides" 类型严重过度使用 (${(providesPct * 100).toFixed(1)}%，目标 ≤${RELATIONSHIP_TYPE_THRESHOLDS.providesMaxPercentage * 100}%)。建议拆分为更精确的关系类型：hosts/offers/enables`,
            details: { count: providesCount, percentage: (providesPct * 100).toFixed(1) + '%', targetMax: '25%' }
        });
    }

    return errors;
}

// ========================================
// 主验证函数
// ========================================

export function validateGraphData(
    entities: Entity[],
    relationships: Relationship[]
): ValidationResult {
    const allErrors: ValidationError[] = [];

    // 执行各层验证
    allErrors.push(...validateReferentialIntegrity(entities, relationships));
    allErrors.push(...validateHierarchyConsistency(entities));
    allErrors.push(...validateDomainSemantics(entities));
    allErrors.push(...validateRelationshipConstraints(entities, relationships));
    allErrors.push(...validateGraphStructure(entities, relationships));
    allErrors.push(...validateRelationshipDensity(entities, relationships));
    allErrors.push(...validateRelationshipBalance(relationships));

    // 分类错误和警告
    const errors = allErrors.filter(e => e.severity === 'error');
    const warnings = allErrors.filter(e => e.severity === 'warning');

    // 计算统计信息
    const entitiesByDomain: Record<Domain, number> = { markets: 0, institutions: 0, instruments: 0, macro: 0, infrastructure: 0 };
    const entitiesByLevel: Record<EntityLevel, number> = { 1: 0, 2: 0, 3: 0 };
    const relationshipsByType: Partial<Record<RelationType, number>> = {};

    for (const entity of entities) {
        entitiesByDomain[entity.domain]++;
        if (entity.level) entitiesByLevel[entity.level]++;
    }

    for (const rel of relationships) {
        relationshipsByType[rel.type] = (relationshipsByType[rel.type] || 0) + 1;
    }

    // 计算孤儿节点数
    const connectedNodes = new Set<string>();
    for (const rel of relationships) {
        connectedNodes.add(rel.source);
        connectedNodes.add(rel.target);
    }
    const orphanedEntities = entities.filter(e => !connectedNodes.has(e.id)).length;

    // 计算循环引用数
    const circularReferences = allErrors.filter(e => e.code === 'CIRCULAR_PARENT_REF').length;

    return {
        valid: errors.length === 0,
        errors,
        warnings,
        stats: {
            totalEntities: entities.length,
            totalRelationships: relationships.length,
            entitiesByDomain,
            entitiesByLevel,
            relationshipsByType: relationshipsByType as Record<RelationType, number>,
            orphanedEntities,
            circularReferences
        }
    };
}

// ========================================
// 控制台报告生成
// ========================================

export function printValidationReport(result: ValidationResult): void {
    console.log('\n========================================');
    console.log('📊 金融体系图谱 - 数据完整性验证报告');
    console.log('========================================\n');

    // 统计信息
    console.log('📈 数据统计:');
    console.log(`   总实体数: ${result.stats.totalEntities}`);
    console.log(`   总关系数: ${result.stats.totalRelationships}`);
    console.log('\n   按领域:');
    for (const [domain, count] of Object.entries(result.stats.entitiesByDomain)) {
        console.log(`     - ${domain}: ${count}`);
    }
    console.log('\n   按层级:');
    for (const [level, count] of Object.entries(result.stats.entitiesByLevel)) {
        console.log(`     - L${level}: ${count}`);
    }
    console.log('\n   按关系类型:');
    for (const [type, count] of Object.entries(result.stats.relationshipsByType)) {
        console.log(`     - ${type}: ${count}`);
    }

    // 验证结果
    console.log('\n========================================');
    if (result.valid) {
        console.log('✅ 验证通过 (无错误)');
    } else {
        console.log(`❌ 验证失败 (${result.errors.length} 个错误)`);
    }
    console.log(`⚠️  ${result.warnings.length} 个警告`);
    console.log('========================================\n');

    // 详细错误
    if (result.errors.length > 0) {
        console.log('❌ 错误详情:');
        for (const err of result.errors) {
            console.log(`   [L${err.layer}] ${err.code}: ${err.message}`);
        }
        console.log('');
    }

    // 详细警告 (限制显示数量)
    if (result.warnings.length > 0) {
        console.log(`⚠️  警告详情 (显示前20条，共${result.warnings.length}条):`);
        for (const warn of result.warnings.slice(0, 20)) {
            console.log(`   [L${warn.layer}] ${warn.code}: ${warn.message}`);
        }
        if (result.warnings.length > 20) {
            console.log(`   ... 还有 ${result.warnings.length - 20} 条警告`);
        }
    }
}
