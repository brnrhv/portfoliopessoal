import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import { Button } from '../../components/Button/Button';
import './Projects.css';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const mockProjects = [
    { id: 1, title: 'Saas Analytics Dashboard', label: 'B2B', tech: 'React / Node' },
    { id: 2, title: 'E-commerce Infrastructure', label: 'DevOps', tech: 'AWS / Docker' }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <h2 className="display-sm mb-6 section-title align-center">{t('projects.title')}</h2>
        
        <div className="projects-grid">
          
          {mockProjects.map((proj) => (
            <BentoCard key={proj.id} className="project-card" glowOnHover>
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
          ))}

          {/* Special Marketing Card */}
          <BentoCard className="project-card special-card" glowOnHover>
             <div className="special-content">
                <h3 className="display-sm highlight-text">{t('projects.card.custom')}</h3>
                <p className="mono-text">{t('projects.card.custom.desc')}</p>
                <Button variant="primary" onClick={() => window.open('https://wa.me/5511900000000', '_blank')} className="full-width mt-auto">
                  {t('hero.cta.whatsapp')}
                </Button>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};
