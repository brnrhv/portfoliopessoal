import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-status mono-text label-sm">
            <span className="status-dot"></span>
            System Online
          </div>
          
          <h1 className="display-lg hero-title">
            {String(t('hero.headline')).split('\n').map((line: string, idx: number) => (
              <span key={idx} className="title-line">{line}</span>
            ))}
          </h1>
          
          <p className="hero-subhead mono-text">
            {t('hero.subhead')}
          </p>

          <div className="hero-ctas">
            <Button variant="primary" onClick={() => window.open('https://wa.me/5554999580848?text=Oi!%20Vi%20seu%20site%20e%20gostaria%20de%20fazer%20uma%20landing%20page.', '_blank')}>
              {t('hero.cta.whatsapp')}
            </Button>
            <Button variant="secondary" onClick={() => window.location.href = '#about'}>
              {t('hero.cta.projects')}
            </Button>
          </div>

          <motion.div 
            className="hero-trust-block mono-text label-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--color-on-surface-variant)' }}
          >
            <span>✔️ {t('hero.trust.businesses')}</span>
            <span>✔️ {t('hero.trust.simple')}</span>
            <span>✔️ {t('hero.trust.fast')}</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-container">
            <div className="glow-orb"></div>
            <img src="/profile.jpeg" alt="Henrique Vargas Brenner" className="profile-pic" />
            <div className="glass-panel"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
