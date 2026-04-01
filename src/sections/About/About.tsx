import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import { TechChip } from '../../components/TechChip/TechChip';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const parseSkills = (key: string) => {
    return String(t(key as any) || '').split(',').map(s => s.trim()).filter(Boolean);
  };

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
            <BentoCard 
              glowOnHover 
              onClick={() => navigate('/resume')}
              style={{ cursor: 'pointer' }}
              title="Ir para o currículo / Go to resume"
            >
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 className="display-sm mb-4">{t('about.title')}</h2>
                <span style={{fontSize: '1.5rem', color: 'var(--color-primary)'}}>↗</span>
              </div>
              <p className="bio-text">{t('about.bio')}</p>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-focus">
            <BentoCard>
              <h3 className="mono-text label-sm mb-4">[{t('about.focus.title')}]</h3>
              <p className="bio-text" style={{fontSize: '1rem'}}>{t('about.focus.desc')}</p>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-infra">
            <BentoCard>
              <h3 className="mono-text label-sm mb-4">[{t('about.skills.infra.title')}]</h3>
              <div className="tech-chip-container">
                {parseSkills('about.skills.infra.items').map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-backend">
            <BentoCard>
              <h3 className="mono-text label-sm mb-4">[{t('about.skills.backend.title')}]</h3>
              <div className="tech-chip-container">
                {parseSkills('about.skills.backend.items').map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-perf">
            <BentoCard>
              <h3 className="mono-text label-sm mb-4">[{t('about.skills.perf.title')}]</h3>
              <div className="tech-chip-container">
                {parseSkills('about.skills.perf.items').map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-email">
            <BentoCard>
              <h3 className="mono-text label-sm mb-4">[{t('about.skills.email.title')}]</h3>
              <div className="tech-chip-container">
                {parseSkills('about.skills.email.items').map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
