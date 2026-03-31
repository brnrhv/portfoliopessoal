import React from 'react';
import './TechChip.css';

interface TechChipProps {
  label: string;
}

export const TechChip: React.FC<TechChipProps> = ({ label }) => {
  return (
    <span className="tech-chip label-sm">
      {label}
    </span>
  );
};
