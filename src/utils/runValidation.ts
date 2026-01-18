/**
 * 数据验证运行脚本
 * 在开发和构建时自动验证数据完整性
 */

import { sampleData } from '../data';
import { validateGraphData, printValidationReport } from './dataValidator';

// 执行验证
console.log('🔍 开始验证金融体系图谱数据...\n');

const result = validateGraphData(sampleData.entities, sampleData.relationships);

// 打印报告
printValidationReport(result);

// 如果有错误，在构建时显示错误信息
if (!result.valid) {
    console.error('\n❌ 数据验证失败，请修复上述错误后再构建。\n');
    throw new Error('Data validation failed');
} else {
    console.log('\n✅ 数据验证通过！\n');
}

export { result };
