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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo mono-text" title={t('header.logo.tooltip')}>
          [HB]
        </Link>

        <nav className="nav-links">
          <a href="#how-it-works" className="nav-link" onClick={(e) => scrollToSection(e, 'how-it-works')}>{t('header.nav.about')}</a>
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>{t('about.title')}</a>
        </nav>

        <div className="header-actions">
          <Button variant="secondary" onClick={toggleLanguage} className="lang-toggle" title="Alterar Idioma / Change Language">
            <span className="lang-icon">🌐</span>
            {language === 'pt' ? 'PT-BR' : 'EN-US'}
          </Button>
          <Button variant="primary" onClick={(e) => scrollToSection(e as any, 'contact')}>
            {t('header.nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
};
