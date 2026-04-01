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

  const projects = [
    { id: 1 },
    { id: 2 }
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
          
          {projects.map((proj) => (
            <motion.div variants={itemVariants} key={proj.id} className="project-wrapper">
              <BentoCard className="project-card" glowOnHover>
                <div className="project-header">
                  <h3 className="project-title">{t(`projects.${proj.id}.title` as any)}</h3>
                </div>
                
                <div className="project-story">
                  <div className="story-block">
                    <span className="story-label mono-text">{t('projects.problem')}</span>
                    <p>{t(`projects.${proj.id}.problem` as any)}</p>
                  </div>
                  <div className="story-block">
                    <span className="story-label mono-text">{t('projects.solution')}</span>
                    <p>{t(`projects.${proj.id}.solution` as any)}</p>
                  </div>
                  <div className="story-block highlight-block">
                    <span className="story-label mono-text highlight-text">{t('projects.result')}</span>
                    <p><strong>{t(`projects.${proj.id}.result` as any)}</strong></p>
                  </div>
                </div>
                
              </BentoCard>
            </motion.div>
          ))}

          {/* Contact / Custom Project Card */}
          <motion.div variants={itemVariants} className="project-wrapper special-wrapper">
            <BentoCard className="project-card special-card" glowOnHover>
               <div className="special-content" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                  <h3 className="display-sm highlight-text">100% Uptime</h3>
                  <p className="mono-text" style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Precisa de uma infra que não cai na Black Friday?</p>
                  <Button variant="primary" onClick={() => window.open('https://wa.me/5554999580848', '_blank')} className="full-width">
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
