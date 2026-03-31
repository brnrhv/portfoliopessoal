import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="section-container footer-container">
        <div className="footer-left">
          <p className="mono-text label-sm mb-2">Socials & Contact</p>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:contato@henrique.dev">Email</a>
          </div>
        </div>
        
        <div className="footer-right mono-text label-sm">
          &copy; {new Date().getFullYear()} HB. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};
