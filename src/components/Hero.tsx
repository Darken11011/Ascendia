import './Hero.css';

const Hero = () => {
  const handleBuildQuote = () => {
    const automationSection = document.getElementById('automations');
    if (automationSection) {
      automationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>
            Recruitment Automation for<br />
            <span className="highlight">Your Business</span>
          </h1>
          <p className="hero-subtitle">
            Streamline candidate sourcing, screening, CRM updates, and client<br />
            reporting — all with AI and automation.
          </p>
          <p className="hero-description">
            Select exactly what you want to automate. Each component can run independently<br />
            or as one unified pipeline.
          </p>
          <button className="btn-primary" onClick={handleBuildQuote}>Build Your Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

