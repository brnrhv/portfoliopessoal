import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
import './CTA.css';

export const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="section-container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="display-sm mb-4">{t('cta.title')}</h2>
            <p className="cta-subhead mb-8">{t('cta.subhead')}</p>
            
            <div className="cta-actions">
              <Button variant="primary" onClick={() => window.open('https://wa.me/5554999580848', '_blank')}>
                {t('cta.btn.whatsapp')}
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = 'mailto:henriquebrenner0@gmail.com'}>
                {t('cta.btn.email')}
              </Button>
              <Button variant="secondary" onClick={() => window.open('https://www.linkedin.com/in/henrique-vargas-brenner-8710ab23a', '_blank')}>
                {t('cta.btn.linkedin')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
