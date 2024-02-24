// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Some introductory text about the organization or footer content...</p>
        <div className="footer-links">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          {/* ... other links */}
        </div>
        <div className="footer-info">
          <p>Additional information, disclaimers, or contact info here...</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Greenpeace 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
