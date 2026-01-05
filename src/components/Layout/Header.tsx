import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';
import type { Domain } from '../../types';
import { DomainConfig } from '../../types';
import './Header.css';

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const {
        language,
        selectedDomain,
        searchQuery,
        setLanguage,
        setSelectedDomain,
        setSearchQuery
    } = useAppContext();

    const domains: Domain[] = ['markets', 'institutions', 'instruments', 'macro'];

    return (
        <header className="app-header">
            <div className="header-left">
                <div className="logo" onClick={() => setSelectedDomain(null)}>
                    <span className="logo-icon">🌐</span>
                    <div className="logo-text">
                        <h1>{t('app.title')}</h1>
                        <span>{t('app.subtitle')}</span>
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                <button
                    className={`nav-btn ${selectedDomain === null ? 'active' : ''}`}
                    onClick={() => setSelectedDomain(null)}
                >
                    {t('nav.home')}
                </button>
                {domains.map(domain => (
                    <button
                        key={domain}
                        className={`nav-btn ${selectedDomain === domain ? 'active' : ''}`}
                        style={{
                            '--domain-color': DomainConfig[domain].color
                        } as React.CSSProperties}
                        onClick={() => setSelectedDomain(domain)}
                    >
                        <span className="nav-icon">{DomainConfig[domain].icon}</span>
                        {DomainConfig[domain].name[language]}
                    </button>
                ))}
            </nav>

            <div className="header-right">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder={t('nav.search')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className="clear-search"
                            onClick={() => setSearchQuery('')}
                        >
                            ×
                        </button>
                    )}
                </div>

                <div className="language-toggle">
                    <button
                        className={language === 'zh' ? 'active' : ''}
                        onClick={() => setLanguage('zh')}
                    >
                        中
                    </button>
                    <button
                        className={language === 'en' ? 'active' : ''}
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
