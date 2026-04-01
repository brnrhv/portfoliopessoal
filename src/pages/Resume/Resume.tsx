import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

export const Resume: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page pt-[120px]">
      <div className="mb-6">
        <Button variant="secondary" onClick={() => navigate('/')}>
          ← {t('header.nav.about')} / Home
        </Button>
      </div>
      <motion.div 
        className="resume-paper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="resume-header">
          <h1 className="resume-name display-sm">Henrique Vargas Brenner</h1>
          <p className="resume-title mono-text">{t('resume.professional.info.title')}</p>
          <div className="resume-contact mono-text label-sm mt-4">
            <span>{t('resume.professional.info.location')}</span>
            <span>+55 (54) 99958-0848</span>
            <span>contato@brnrhv.xyz</span>
            <a href="https://linkedin.com/in/henriquevbrenner/" target="_blank" rel="noreferrer" className="hover-link">linkedin.com/in/henriquevbrenner/</a>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.professional.summary.title')}</h2>
          <p>{t('resume.professional.summary.text')}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.education.title')}</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">{t('resume.education.uni1.name')}</span>
              <span className="resume-item-period mono-text">{t('resume.education.uni1.period')}</span>
            </div>
            <div className="resume-item-subtitle">
              <span>{t('resume.education.uni1.degree')}</span>
              <span>{t('resume.education.uni1.location')}</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">{t('resume.education.uni2.name')}</span>
              <span className="resume-item-period mono-text">{t('resume.education.uni2.period')}</span>
            </div>
            <div className="resume-item-subtitle">
              <span>{t('resume.education.uni2.degree')}</span>
              <span>{t('resume.education.uni2.location')}</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.experience.title')}</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">{t('resume.experience.job1.company')}</span>
              <span className="resume-item-period mono-text">{t('resume.experience.job1.period')}</span>
            </div>
            <div className="resume-item-subtitle">
              <span>{t('resume.experience.job1.role')}</span>
              <span>{t('resume.experience.job1.location')}</span>
            </div>
            <ul className="resume-points">
              {((t('resume.experience.job1.points') || []) as string[]).map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">{t('resume.experience.job2.company')}</span>
              <span className="resume-item-period mono-text">{t('resume.experience.job2.period')}</span>
            </div>
            <div className="resume-item-subtitle">
              <span>{t('resume.experience.job2.role')}</span>
              <span>{t('resume.experience.job2.location')}</span>
            </div>
            <ul className="resume-points">
              {((t('resume.experience.job2.points') || []) as string[]).map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.skills.title')}</h2>
          <div className="resume-skills-grid">
            <div className="skill-row">
              <strong>{t('resume.skills.infra')}: </strong> {t('resume.skills.infra.desc')}
            </div>
            <div className="skill-row">
              <strong>{t('resume.skills.cloud')}: </strong> {t('resume.skills.cloud.desc')}
            </div>
            <div className="skill-row">
              <strong>{t('resume.skills.prog')}: </strong> {t('resume.skills.prog.desc')}
            </div>
            <div className="skill-row">
              <strong>{t('resume.skills.tools')}: </strong> {t('resume.skills.tools.desc')}
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.languages.title')}</h2>
          <ul className="resume-points">
            <li>{t('resume.languages.1')}</li>
            <li>{t('resume.languages.2')}</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">{t('resume.certifications.title')}</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <span className="resume-item-title">{t('resume.certifications.1.val')}</span>
              <span className="resume-item-period mono-text">{t('resume.certifications.1.date')}</span>
            </div>
            <div className="resume-item-subtitle">
              <span>{t('resume.certifications.1.sub')}</span>
            </div>
          </div>
        </section>

      </motion.div>
    </div>
  );
};
