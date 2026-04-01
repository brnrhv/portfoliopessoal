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
            <Button variant="secondary" onClick={() => window.open('https://wa.me/5554999580848', '_blank')}>
              {t('hero.cta.whatsapp')}
            </Button>
          </div>
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
