import { useTranslation } from 'react-i18next';
import type { Domain, Language } from '../../types';
import { DomainConfig } from '../../types';
import './Header.css';

interface HeaderProps {
    language: Language;
    onLanguageChange: (lang: Language) => void;
    selectedDomain: Domain | null;
    onDomainChange: (domain: Domain | null) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
    language,
    onLanguageChange,
    selectedDomain,
    onDomainChange,
    searchQuery,
    onSearchChange
}) => {
    const { t } = useTranslation();

    const domains: Domain[] = ['markets', 'institutions', 'instruments', 'macro'];

    return (
        <header className="app-header">
            <div className="header-left">
                <div className="logo" onClick={() => onDomainChange(null)}>
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
                    onClick={() => onDomainChange(null)}
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
                        onClick={() => onDomainChange(domain)}
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
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className="clear-search"
                            onClick={() => onSearchChange('')}
                        >
                            ×
                        </button>
                    )}
                </div>

                <div className="language-toggle">
                    <button
                        className={language === 'zh' ? 'active' : ''}
                        onClick={() => onLanguageChange('zh')}
                    >
                        中
                    </button>
                    <button
                        className={language === 'en' ? 'active' : ''}
                        onClick={() => onLanguageChange('en')}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
