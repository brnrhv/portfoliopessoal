import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import './HowIWork.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const HowIWork: React.FC = () => {
  const { t } = useLanguage();

  const works = ['perf', 'sec', 'scale'];

  return (
    <section className="how-section">
      <div className="section-container">
        <motion.h2 
          className="display-sm mb-6 section-title align-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('how.title')}
        </motion.h2>

        <motion.div 
          className="how-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {works.map((item, idx) => (
            <motion.div variants={itemVariants} key={item} className="how-wrapper">
              <BentoCard className="how-card" glowOnHover>
                <div className="how-number mono-text highlight-text">0{idx + 1}</div>
                <h3 className="how-card-title">{t(`how.${item}.title` as any)}</h3>
                <p className="how-card-desc">{t(`how.${item}.desc` as any)}</p>
              </BentoCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
