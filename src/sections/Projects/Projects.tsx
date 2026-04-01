import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import { Button } from '../../components/Button/Button';
import './Projects.css';

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

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const mockProjects = [
    { id: 1, title: 'Saas Analytics Dashboard', label: 'B2B', tech: 'React / Node' },
    { id: 2, title: 'E-commerce Infrastructure', label: 'DevOps', tech: 'AWS / Docker' }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <motion.h2 
          className="display-sm mb-6 section-title align-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.title')}
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {mockProjects.map((proj) => (
            <motion.div variants={itemVariants} key={proj.id} className="project-wrapper">
              <BentoCard className="project-card" glowOnHover>
                <div className="project-thumbnail">
                  <div className="img-placeholder" />
                  <span className="project-badge mono-text label-sm">{proj.label}</span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-tech mono-text">{proj.tech}</p>
                
                <div className="project-actions">
                  <Button variant="secondary" className="full-width">{t('projects.cta.live')}</Button>
                </div>
              </BentoCard>
            </motion.div>
          ))}

          {/* Special Marketing Card */}
          <motion.div variants={itemVariants} className="project-wrapper special-wrapper">
            <BentoCard className="project-card special-card" glowOnHover>
               <div className="special-content">
                  <h3 className="display-sm highlight-text">{t('projects.card.custom')}</h3>
                  <p className="mono-text">{t('projects.card.custom.desc')}</p>
                  <Button variant="primary" onClick={() => window.open('https://wa.me/5554999580848', '_blank')} className="full-width mt-auto">
                    {t('hero.cta.whatsapp')}
                  </Button>
               </div>
            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
