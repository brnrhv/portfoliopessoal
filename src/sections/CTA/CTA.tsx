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
              <Button variant="primary" onClick={() => window.open('https://wa.me/5554999580848?text=Oi!%20Vi%20seu%20site%20e%20gostaria%20de%20fazer%20uma%20landing%20page.', '_blank')}>
                {t('cta.btn.whatsapp')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
