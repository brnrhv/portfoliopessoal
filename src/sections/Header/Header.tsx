import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo mono-text" title={t('header.logo.tooltip')}>
          [HB]
        </Link>

        <nav className="nav-links">
          <a href="/#about" className="nav-link">{t('header.nav.about')}</a>
          <a href="/#projects" className="nav-link">{t('header.nav.projects')}</a>
          <Link to="/resume" className="nav-link" style={{color: 'var(--color-primary)'}}>{t('header.nav.resume')}</Link>
        </nav>

        <div className="header-actions">
          <Button variant="secondary" onClick={toggleLanguage} className="lang-toggle" title="Alterar Idioma / Change Language">
            <span className="lang-icon">🌐</span>
            {language === 'pt' ? 'PT-BR' : 'EN-US'}
          </Button>
          <Button variant="primary" onClick={() => window.location.href = '/#contact'}>
            {t('header.nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};
