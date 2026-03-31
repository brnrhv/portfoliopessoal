import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
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
        <div className="logo mono-text" title={t('header.logo.tooltip')}>
          [HB]
        </div>

        <nav className="nav-links">
          <a href="#about" className="nav-link">{t('header.nav.about')}</a>
          <a href="#projects" className="nav-link">{t('header.nav.projects')}</a>
        </nav>

        <div className="header-actions">
          <Button variant="tertiary" onClick={toggleLanguage} className="lang-toggle">
            {language === 'pt' ? 'PT-BR' : 'EN-US'}
          </Button>
          <Button variant="secondary" onClick={() => window.location.href = '#contact'}>
            {t('header.nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};
