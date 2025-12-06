import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleBuildQuote = () => {
    const automationSection = document.getElementById('automations');
    if (automationSection) {
      automationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/Logo_yxwag5.png" alt="Ascendia Logo" />
          </div>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#workflow" onClick={(e) => handleNavClick(e, 'workflow')}>Workflow</a>
            <a href="#demo" onClick={(e) => handleNavClick(e, 'demo')}>Live Demo</a>
            <a href="#automations" onClick={(e) => handleNavClick(e, 'automations')}>Automations</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          <button className="cta-button" onClick={handleBuildQuote}>Build Your Quote</button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

