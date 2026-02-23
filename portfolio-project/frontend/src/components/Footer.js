import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content two-column">
          
          {/* Portfolio Section */}
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-text">
              Full Stack Developer passionate about building amazing web
              applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;