import './FlexiblePricing.css';

const FlexiblePricing = () => {
  const handleGetQuote = () => {
    const automationSection = document.getElementById('automations');
    if (automationSection) {
      automationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="flexible-pricing">
      <div className="flexible-pricing-container">
        <h2 className="flexible-pricing-title">
          Flexible pricing — only pay for what you need.
        </h2>

        <p className="flexible-pricing-subtitle">
          Each automation above can run as a standalone module or as part of a larger pipeline.
        </p>

        <div className="pricing-depends">
          <p className="pricing-depends-title">Project pricing will depend on:</p>

          <ul className="pricing-list">
            <li className="pricing-list-item">
              <span className="bullet">•</span>
              <span className="item-text">Automations selected</span>
            </li>
            <li className="pricing-list-item">
              <span className="bullet">•</span>
              <span className="item-text">Expected volumes (candidate numbers)</span>
            </li>
            <li className="pricing-list-item">
              <span className="bullet">•</span>
              <span className="item-text">Communication channels (WhatsApp / Email / AI calls)</span>
            </li>
            <li className="pricing-list-item">
              <span className="bullet">•</span>
              <span className="item-text">CRM syncing complexity</span>
            </li>
          </ul>
        </div>

        <button className="get-quote-btn" onClick={handleGetQuote}>Get a Quote</button>
      </div>
    </section>
  );
};

export default FlexiblePricing;

