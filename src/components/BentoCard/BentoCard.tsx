import React from 'react';
import './BentoCard.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', glowOnHover = false }) => {
  return (
    <div className={`bento-card ${glowOnHover ? 'bento-glow' : ''} ${className}`}>
      {children}
    </div>
  );
};
