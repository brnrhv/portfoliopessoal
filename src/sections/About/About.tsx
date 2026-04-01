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

  const devTech = ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'ASP.NET', 'SQL'];
  const infraTech = ['Linux', 'Apache', 'NGINX', 'DNS', 'Email (SMTP/IMAP)', 'SSL', 'cPanel', 'DigitalOcean'];

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
          
          <motion.div variants={itemVariants} className="bento-wrapper">
            <BentoCard 
              className="bento-bio" 
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

          <motion.div variants={itemVariants} className="bento-wrapper">
            <BentoCard className="bento-tech-dev">
              <h3 className="mono-text label-sm mb-4">[{t('about.tech.dev')}]</h3>
              <div className="tech-chip-container">
                {devTech.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="bento-wrapper bento-wrapper-infra">
            <BentoCard className="bento-tech-infra">
              <h3 className="mono-text label-sm mb-4">[{t('about.tech.infra')}]</h3>
              <div className="tech-chip-container">
                {infraTech.map((tech) => (
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
