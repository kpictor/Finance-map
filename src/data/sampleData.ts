import type { GraphData } from '../types';
import { marketEntities, marketRelationships } from './markets';
import { institutionEntities, institutionRelationships } from './institutions';
import { instrumentEntities, instrumentRelationships } from './instruments';
import { macroEntities, macroRelationships } from './macro';
import { crossDomainRelationships } from './crossDomain';

// 整合所有领域数据
// Integrate all domain data
export const sampleData: GraphData = {
    entities: [
        ...marketEntities,
        ...institutionEntities,
        ...instrumentEntities,
        ...macroEntities
    ],
    relationships: [
        ...marketRelationships,
        ...institutionRelationships,
        ...instrumentRelationships,
        ...macroRelationships,
        ...crossDomainRelationships
    ]
};

// 统计信息
console.log(`Financial System Map Data:
  - Total Entities: ${sampleData.entities.length}
  - Total Relationships: ${sampleData.relationships.length}
  - Markets: ${marketEntities.length} entities
  - Institutions: ${institutionEntities.length} entities
  - Instruments: ${instrumentEntities.length} entities  
  - Macro: ${macroEntities.length} entities
`);

export default sampleData;
