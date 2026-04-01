import React from 'react';
import './BentoCard.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', glowOnHover = false, onClick, style, title }) => {
  return (
    <div 
      className={`bento-card ${glowOnHover ? 'bento-glow' : ''} ${className}`}
      onClick={onClick}
      style={style}
      title={title}
    >
      {children}
    </div>
  );
};
