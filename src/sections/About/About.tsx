import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import './About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <motion.div variants={itemVariants} className="bento-wrapper bento-bio">
            <BentoCard glowOnHover title="Sobre mim">
              <h2 className="display-sm mb-4">{t('about.title')}</h2>
              <p className="bio-text">{t('about.bio')}</p>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-s1">
            <BentoCard glowOnHover>
              <h3 className="mono-text display-sm highlight-text mb-4" style={{fontSize: '1.25rem'}}>{t('about.s1.title')}</h3>
              <p className="bio-text" style={{fontSize: '1rem'}}>{t('about.s1.desc')}</p>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-s2">
            <BentoCard glowOnHover>
              <h3 className="mono-text display-sm highlight-text mb-4" style={{fontSize: '1.25rem'}}>{t('about.s2.title')}</h3>
              <p className="bio-text" style={{fontSize: '1rem'}}>{t('about.s2.desc')}</p>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-s3">
            <BentoCard glowOnHover>
              <h3 className="mono-text display-sm highlight-text mb-4" style={{fontSize: '1.25rem'}}>{t('about.s3.title')}</h3>
              <p className="bio-text" style={{fontSize: '1rem'}}>{t('about.s3.desc')}</p>
            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
