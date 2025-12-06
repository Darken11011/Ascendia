import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#DBEAFE"/>
                <circle cx="200" cy="200" r="80" fill="#3B82F6" opacity="0.2"/>
                <circle cx="200" cy="200" r="60" fill="#3B82F6" opacity="0.4"/>
                <circle cx="200" cy="200" r="40" fill="#2563EB"/>
                <path d="M200 160V200L220 220" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2>Why Choose Ascendia AI?</h2>
            <p className="about-intro">
              We're revolutionizing recruitment with cutting-edge AI technology that makes hiring faster, 
              smarter, and more efficient.
            </p>
            <div className="about-points">
              <div className="point">
                <div className="point-icon">✓</div>
                <div className="point-content">
                  <h4>Save Time & Resources</h4>
                  <p>Reduce time-to-hire by 50% with automated screening and intelligent candidate matching.</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">✓</div>
                <div className="point-content">
                  <h4>Improve Quality of Hire</h4>
                  <p>Find better candidates with AI-powered insights and predictive analytics.</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">✓</div>
                <div className="point-content">
                  <h4>Enhance Candidate Experience</h4>
                  <p>Provide a seamless, engaging experience that attracts top talent to your organization.</p>
                </div>
              </div>
            </div>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

