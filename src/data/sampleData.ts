import type { GraphData } from '../types';
import { marketEntities, marketRelationships } from './markets';
import { institutionEntities, institutionRelationships } from './institutions';
import { instrumentEntities, instrumentRelationships } from './instruments';
import { macroEntities, macroRelationships } from './macro';
import { crossDomainRelationships } from './crossDomain';
import { phase1Relationships } from './phase1Relationships';
import { phase2Relationships } from './phase2Relationships';
import { phase3Relationships } from './phase3Relationships';
import { l3Entities, l3Relationships } from './l3Entities';
import { crossBorderEntities, crossBorderRelationships } from './infrastructureEntities';

// 整合所有领域数据
// Integrate all domain data
export const sampleData: GraphData = {
    entities: [
        ...marketEntities,
        ...institutionEntities,
        ...instrumentEntities,
        ...macroEntities,
        ...l3Entities,
        ...crossBorderEntities
    ],
    relationships: [
        ...marketRelationships,
        ...institutionRelationships,
        ...instrumentRelationships,
        ...macroRelationships,
        ...crossDomainRelationships,
        ...phase1Relationships,
        ...phase2Relationships,
        ...phase3Relationships,
        ...l3Relationships,
        ...crossBorderRelationships
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
  - Infrastructure: ${crossBorderEntities.length} entities
`);

export default sampleData;
