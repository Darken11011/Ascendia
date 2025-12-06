import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Screening',
      description: 'Automatically screen and rank candidates based on job requirements using advanced AI algorithms.'
    },
    {
      icon: '⚡',
      title: 'Automated Workflows',
      description: 'Streamline your recruitment process with automated email campaigns and interview scheduling.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Get real-time insights into your recruitment metrics and make data-driven decisions.'
    },
    {
      icon: '🎯',
      title: 'Smart Matching',
      description: 'Match candidates to positions with precision using our intelligent matching algorithm.'
    },
    {
      icon: '💬',
      title: 'Candidate Communication',
      description: 'Keep candidates engaged with automated updates and personalized communication.'
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full GDPR and data protection compliance.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features for Modern Recruitment</h2>
          <p>Everything you need to transform your hiring process</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

