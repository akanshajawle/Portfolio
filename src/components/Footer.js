import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <p>© {currentYear}  Akansha Jawle | Full Stack Developer</p>
          
          {/* Scroll to Top Arrow */}
          <button 
            className="scroll-to-top" 
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;