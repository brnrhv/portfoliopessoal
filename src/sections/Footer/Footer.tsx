import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {

  return (
    <footer className="footer" id="contact">
      <div className="section-container footer-container">
        <div className="footer-left">
          <p className="mono-text label-sm mb-2">Socials & Contact</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/henriquevbrenner/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/brnrhv/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.instagram.com/brnrhv/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:henriquebrenner0@gmail.com">Email</a>
          </div>
        </div>
        
        <div className="footer-right mono-text label-sm">
          &copy; {new Date().getFullYear()} Henrique Vargas Brenner.
        </div>
      </div>
    </footer>
  );
};
