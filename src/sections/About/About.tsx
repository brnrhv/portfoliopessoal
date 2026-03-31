import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { BentoCard } from '../../components/BentoCard/BentoCard';
import { TechChip } from '../../components/TechChip/TechChip';
import './About.css';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const devTech = ['React', 'TypeScript', 'Tailwind', 'Python', 'ASP.NET'];
  const infraTech = ['Linux', 'NGINX', 'Docker', 'DigitalOcean', 'AWS'];

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="bento-grid">
          
          <BentoCard className="bento-bio" glowOnHover>
            <h2 className="display-sm mb-4">{t('about.title')}</h2>
            <p className="bio-text">{t('about.bio')}</p>
          </BentoCard>

          <BentoCard className="bento-tech-dev">
            <h3 className="mono-text label-sm mb-4">[{t('about.tech.dev')}]</h3>
            <div className="tech-chip-container">
              {devTech.map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </BentoCard>

          <BentoCard className="bento-tech-infra">
            <h3 className="mono-text label-sm mb-4">[{t('about.tech.infra')}]</h3>
            <div className="tech-chip-container">
              {infraTech.map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};
