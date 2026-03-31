import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        
        <div className="hero-content">
          <div className="hero-status mono-text label-sm">
            <span className="status-dot"></span>
            System Online
          </div>
          
          <h1 className="display-lg hero-title">
            {t('hero.headline').split('\n').map((line, idx) => (
              <span key={idx} className="title-line">{line}</span>
            ))}
          </h1>
          
          <p className="hero-subhead mono-text">
            {t('hero.subhead')}
          </p>

          <div className="hero-ctas">
            <Button variant="primary" onClick={() => window.location.href = '#projects'}>
              {t('hero.cta.projects')}
            </Button>
            <Button variant="secondary" onClick={() => window.open('https://wa.me/5511900000000', '_blank')}>
              {t('hero.cta.whatsapp')}
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="abstract-art">
            <div className="glow-orb"></div>
            <div className="glass-panel"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
