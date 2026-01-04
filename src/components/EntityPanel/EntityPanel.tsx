import type { Entity, Language, Relationship } from '../../types';
import { DomainConfig, RelationTypeNames } from '../../types';
import { useTranslation } from 'react-i18next';
import './EntityPanel.css';

interface EntityPanelProps {
    entity: Entity | null;
    language: Language;
    relationships: Relationship[];
    entities: Entity[];
    onClose: () => void;
    onEntitySelect: (entity: Entity) => void;
}

export const EntityPanel: React.FC<EntityPanelProps> = ({
    entity,
    language,
    relationships,
    entities,
    onClose,
    onEntitySelect
}) => {
    const { t } = useTranslation();

    if (!entity) return null;

    // 获取相关实体
    const relatedRelationships = relationships.filter(
        r => r.source === entity.id || r.target === entity.id
    );

    const relatedEntities = relatedRelationships.map(r => {
        const relatedId = r.source === entity.id ? r.target : r.source;
        const relatedEntity = entities.find(e => e.id === relatedId);
        const isSource = r.source === entity.id;
        return {
            entity: relatedEntity,
            relationship: r,
            direction: isSource ? 'outgoing' : 'incoming'
        };
    }).filter(item => item.entity);

    const domainConfig = DomainConfig[entity.domain];

    return (
        <div className="entity-panel">
            <div className="entity-panel-header" style={{ borderColor: domainConfig.color }}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="entity-icon" style={{ background: domainConfig.color }}>
                    {entity.icon || domainConfig.icon}
                </div>
                <div className="entity-title">
                    <h2>{entity.name[language]}</h2>
                    <span className="entity-domain" style={{ color: domainConfig.color }}>
                        {domainConfig.name[language]}
                    </span>
                </div>
            </div>

            <div className="entity-panel-content">
                <section className="panel-section">
                    <h3>{t('labels.description')}</h3>
                    <p>{entity.description[language]}</p>
                </section>

                {entity.tags && entity.tags.length > 0 && (
                    <section className="panel-section">
                        <div className="entity-tags">
                            {entity.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </section>
                )}

                {relatedEntities.length > 0 && (
                    <section className="panel-section">
                        <h3>{t('labels.relatedEntities')} ({relatedEntities.length})</h3>
                        <ul className="related-list">
                            {relatedEntities.map(({ entity: relEntity, relationship, direction }) => {
                                if (!relEntity) return null;
                                const relDomainConfig = DomainConfig[relEntity.domain];
                                const relationLabel = RelationTypeNames[relationship.type][language];

                                return (
                                    <li
                                        key={relationship.id}
                                        className="related-item"
                                        onClick={() => onEntitySelect(relEntity)}
                                    >
                                        <div className="related-item-header">
                                            <div
                                                className="related-icon"
                                                style={{ background: relDomainConfig.color }}
                                            >
                                                {relEntity.icon || relDomainConfig.icon}
                                            </div>
                                            <div className="related-info">
                                                <span className="related-name">{relEntity.name[language]}</span>
                                                <span className="related-relation">
                                                    {direction === 'outgoing' ? '→' : '←'} {relationLabel}
                                                </span>
                                            </div>
                                            <div
                                                className="strength-indicator"
                                                style={{
                                                    width: `${relationship.strength * 10}px`,
                                                    background: relDomainConfig.color
                                                }}
                                            />
                                        </div>
                                        {relationship.explanation && (
                                            <div className="relation-explanation">
                                                💡 {relationship.explanation[language]}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
};

export default EntityPanel;
