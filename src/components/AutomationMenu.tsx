import { useState } from 'react';
import './AutomationMenu.css';

interface AutomationItem {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  setupPrice: number;
  monthlyPrice: number;
  subOptions?: SubOption[];
  hasTierDropdown?: boolean;
  quoteDetails?: string; // Additional details to show in quote (e.g., volume)
}

interface SubOption {
  id: string;
  label: string;
  monthlyPrice: number;
}

interface PhoneTier {
  id: string;
  label: string;
  description: string;
  monthlyPrice: number;
  details: string; // For quote display
}

interface VolumeOption {
  id: string;
  label: string;
  description: string;
  monthlyPrice: number;
}

const AutomationMenu = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState<string[]>([]);
  const [selectedPhoneTier, setSelectedPhoneTier] = useState<string>('');
  const [selectedDataVolume, setSelectedDataVolume] = useState<string>('');

  const automations: AutomationItem[] = [
    {
      id: 'linkedin',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'LinkedIn Scraping & Personalised Outreach',
      description: 'Pull candidate lists based on role, location, and seniority, then send tailored messages via LinkedIn, WhatsApp, or email. Includes 1000 outreach per month.',
      setupPrice: 350,
      monthlyPrice: 250,
      quoteDetails: '1000 outreach/month'
    },
    {
      id: 'cv-extraction',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI CV Extraction & Parsing',
      description: 'Automatically read CVs and push structured data straight into Ceipal.',
      setupPrice: 250,
      monthlyPrice: 30
    },
    {
      id: 'whatsapp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'WhatsApp Pre-Screening Assistant',
      description: 'Conversational AI interviews candidates and updates the CRM.',
      setupPrice: 250,
      monthlyPrice: 50,
      subOptions: [
        {
          id: 'whatsapp-appointment',
          label: 'Add Appointment Setting (+£50/month)',
          monthlyPrice: 50
        },
        {
          id: 'whatsapp-retargeting',
          label: 'Add CRM Retargeting (+£100/month)',
          monthlyPrice: 100
        }
      ]
    },
    {
      id: 'phone-screening',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI Phone Screening Call',
      description: 'Fully autonomous pre-screening call reading from a script and updating the CRM.',
      setupPrice: 0,
      monthlyPrice: 0,
      hasTierDropdown: true
    },
    {
      id: 'weekly-client-reports',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9L13 14L9 10L3 16" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Weekly Reports to Client',
      description: 'Automated report showing all candidates the client has interviewed, with outcomes and feedback.',
      setupPrice: 150,
      monthlyPrice: 50
    },
    {
      id: 'weekly-internal-report',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8M16 17H8M10 9H8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Weekly Internal Report',
      description: 'Internal weekly summary for your team with activity metrics and pipeline status.',
      setupPrice: 150,
      monthlyPrice: 50
    },
    {
      id: 'data-cleaning',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.08V12" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Ceipal Data Cleaning & Enhancement',
      description: 'Auto-detect missing information and gather it automatically via AI.',
      setupPrice: 250,
      monthlyPrice: 0,
      hasTierDropdown: true
    }
  ];

  const phoneTiers: PhoneTier[] = [
    {
      id: 'low-tier',
      label: 'Low Tier - 3 callers, 60p/min (£900/month)',
      description: 'Low Tier - 3 callers, 60p/min',
      details: 'Low Tier (3 callers, 60p/min): £900.00/month (1500 mins)',
      monthlyPrice: 900
    },
    {
      id: 'medium-tier',
      label: 'Medium Tier - 5 callers, 50p/min (£1,250/month)',
      description: 'Medium Tier - 5 callers, 50p/min',
      details: 'Medium Tier (5 callers, 50p/min): £1,250.00/month (2500 mins)',
      monthlyPrice: 1250
    },
    {
      id: 'top-tier',
      label: 'Top Tier - 10 callers, 40p/min (£2,000/month)',
      description: 'Top Tier - 10 callers, 40p/min',
      details: 'Top Tier (10 callers, 40p/min): £2,000.00/month (5000 mins)',
      monthlyPrice: 2000
    }
  ];

  const dataVolumeOptions: VolumeOption[] = [
    {
      id: 'volume-300',
      label: '300 candidates - £100/month',
      description: '300 candidates',
      monthlyPrice: 100
    },
    {
      id: 'volume-500',
      label: '500 candidates - £150/month',
      description: '500 candidates',
      monthlyPrice: 150
    },
    {
      id: 'volume-1000',
      label: '1000 candidates - £200/month',
      description: '1000 candidates',
      monthlyPrice: 200
    }
  ];

  const handleToggle = (id: string) => {
    setSelectedItems(prev => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        // If unchecking, also clear sub-options and tier/volume selection
        if (id === 'whatsapp') {
          setSelectedSubOptions(prevSub =>
            prevSub.filter(subId => !subId.startsWith('whatsapp-'))
          );
        }
        if (id === 'phone-screening') {
          setSelectedPhoneTier('');
        }
        if (id === 'data-cleaning') {
          setSelectedDataVolume('');
        }
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubOptionToggle = (subId: string) => {
    setSelectedSubOptions(prev =>
      prev.includes(subId) ? prev.filter(id => id !== subId) : [...prev, subId]
    );
  };

  const handlePhoneTierChange = (tierId: string) => {
    setSelectedPhoneTier(tierId);
  };

  const handleDataVolumeChange = (volumeId: string) => {
    setSelectedDataVolume(volumeId);
  };

  const calculateTotal = () => {
    const selected = automations.filter(item => selectedItems.includes(item.id));
    let totalSetup = selected.reduce((sum, item) => sum + item.setupPrice, 0);
    let totalMonthly = selected.reduce((sum, item) => sum + item.monthlyPrice, 0);

    // Add sub-options monthly costs
    selected.forEach(item => {
      if (item.subOptions) {
        item.subOptions.forEach(subOption => {
          if (selectedSubOptions.includes(subOption.id)) {
            totalMonthly += subOption.monthlyPrice;
          }
        });
      }
    });

    // Add phone tier monthly cost
    if (selectedItems.includes('phone-screening') && selectedPhoneTier) {
      const tier = phoneTiers.find(t => t.id === selectedPhoneTier);
      if (tier) {
        totalMonthly += tier.monthlyPrice;
      }
    }

    // Add data volume monthly cost
    if (selectedItems.includes('data-cleaning') && selectedDataVolume) {
      const volume = dataVolumeOptions.find(v => v.id === selectedDataVolume);
      if (volume) {
        totalMonthly += volume.monthlyPrice;
      }
    }

    return { totalSetup, totalMonthly };
  };

  const formatQuoteItem = (item: AutomationItem) => {
    let description = `${item.title}: `;
    const parts: string[] = [];

    if (item.setupPrice > 0) {
      parts.push(`£${item.setupPrice} setup`);
    }
    if (item.monthlyPrice > 0) {
      parts.push(`£${item.monthlyPrice}/month`);
    }

    description += parts.join(' + ');

    // Add tier/volume info in parentheses
    if (item.id === 'phone-screening' && selectedPhoneTier) {
      const tier = phoneTiers.find(t => t.id === selectedPhoneTier);
      if (tier) {
        const tierInfo = tier.label.match(/\(([^)]+)\)/)?.[1] || '';
        description += ` (${tierInfo})`;
      }
    }

    if (item.id === 'data-cleaning' && selectedDataVolume) {
      const volume = dataVolumeOptions.find(v => v.id === selectedDataVolume);
      if (volume) {
        description += ` (${volume.description})`;
      }
    }

    return description;
  };

  const { totalSetup, totalMonthly } = calculateTotal();

  return (
    <section className="automation-menu" id="automations">
      <div className="container">
        <div className="menu-header">
          <h2>Pick-and-Mix Automation Menu</h2>
          <p className="menu-subtitle">Build your custom automation package</p>
        </div>

        <div className="menu-content">
          <div className="automation-list">
            {automations.map((automation) => (
              <div key={automation.id} className="automation-item">
                <input
                  type="checkbox"
                  id={automation.id}
                  checked={selectedItems.includes(automation.id)}
                  onChange={() => handleToggle(automation.id)}
                  className="automation-checkbox"
                />
                <label htmlFor={automation.id} className="automation-label">
                  <div className="automation-icon">{automation.icon}</div>
                  <div className="automation-details">
                    <h3 className="automation-title">{automation.title}</h3>
                    <p className="automation-description">{automation.description}</p>
                    <p className="automation-price">
                      {automation.setupPrice > 0 && automation.monthlyPrice > 0 && (
                        <>£{automation.setupPrice} setup + £{automation.monthlyPrice}/month</>
                      )}
                      {automation.setupPrice > 0 && automation.monthlyPrice === 0 && (
                        <>£{automation.setupPrice} setup</>
                      )}
                      {automation.setupPrice === 0 && automation.monthlyPrice > 0 && (
                        <>£{automation.monthlyPrice}/month</>
                      )}
                      {automation.setupPrice === 0 && automation.monthlyPrice === 0 && (
                        <>Pricing on request</>
                      )}
                    </p>
                  </div>
                </label>

                {/* Sub-options for items with expandable options */}
                {automation.subOptions && selectedItems.includes(automation.id) && (
                  <div className="sub-options">
                    {automation.subOptions.map((subOption) => (
                      <div key={subOption.id} className="sub-option-item">
                        <input
                          type="checkbox"
                          id={subOption.id}
                          checked={selectedSubOptions.includes(subOption.id)}
                          onChange={() => handleSubOptionToggle(subOption.id)}
                          className="sub-option-checkbox"
                        />
                        <label htmlFor={subOption.id} className="sub-option-label">
                          {subOption.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tier dropdown for phone screening */}
                {automation.hasTierDropdown && selectedItems.includes(automation.id) && automation.id === 'phone-screening' && (
                  <div className="tier-dropdown-container">
                    <label className="tier-label">Select Tier (based on number of callers)</label>
                    <select
                      value={selectedPhoneTier}
                      onChange={(e) => handlePhoneTierChange(e.target.value)}
                      className="tier-select"
                    >
                      <option value="">Choose tier</option>
                      {phoneTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Volume dropdown for data cleaning */}
                {automation.hasTierDropdown && selectedItems.includes(automation.id) && automation.id === 'data-cleaning' && (
                  <div className="tier-dropdown-container">
                    <label className="tier-label">Select Volume (bundled discount)</label>
                    <select
                      value={selectedDataVolume}
                      onChange={(e) => handleDataVolumeChange(e.target.value)}
                      className="tier-select"
                    >
                      <option value="">300 candidates - £100/month</option>
                      {dataVolumeOptions.map((volume) => (
                        <option key={volume.id} value={volume.id}>
                          {volume.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="quote-sidebar">
            <div className="quote-card">
              <div className="quote-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11H3V18H9V11Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 11H15V18H21V11Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C9 9.67392 8.47322 8.40215 7.53553 7.46447C6.59785 6.52678 5.32608 6 4 6H3V11" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 11C21 9.67392 20.4732 8.40215 19.5355 7.46447C18.5979 6.52678 17.3261 6 16 6H15V11" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Your Quote</h3>
              </div>

              {selectedItems.length === 0 ? (
                <p className="quote-description">Select services to build your custom quote</p>
              ) : (
                <>
                  <div className="quote-items">
                    {automations
                      .filter(item => selectedItems.includes(item.id))
                      .map((item) => {
                        // Build main item description
                        let mainDescription = `${item.title}: `;
                        const parts: string[] = [];

                        if (item.setupPrice > 0) {
                          parts.push(`£${item.setupPrice} setup`);
                        }
                        if (item.monthlyPrice > 0) {
                          parts.push(`£${item.monthlyPrice}/month`);
                        }

                        mainDescription += parts.join(' + ');

                        // Add quote details in parentheses (e.g., outreach volume)
                        if (item.quoteDetails) {
                          mainDescription += ` (${item.quoteDetails})`;
                        }

                        // Add volume info in parentheses for data cleaning
                        if (item.id === 'data-cleaning' && selectedDataVolume) {
                          const volume = dataVolumeOptions.find(v => v.id === selectedDataVolume);
                          if (volume) {
                            mainDescription += ` (${volume.description})`;
                          }
                        }

                        return (
                          <div key={item.id} className="quote-item-group">
                            <p className="quote-item-text">{mainDescription}</p>

                            {/* Show selected sub-options */}
                            {item.subOptions && item.subOptions
                              .filter(subOption => selectedSubOptions.includes(subOption.id))
                              .map((subOption) => {
                                const subLabel = subOption.label.split('(')[0].trim();
                                return (
                                  <p key={subOption.id} className="quote-item-text quote-sub-text">
                                    + {subLabel}: £{subOption.monthlyPrice}/month
                                  </p>
                                );
                              })}

                            {/* Show selected phone tier as separate line */}
                            {item.id === 'phone-screening' && selectedPhoneTier && (
                              <p className="quote-item-text">
                                {phoneTiers.find(t => t.id === selectedPhoneTier)?.details}
                              </p>
                            )}
                          </div>
                        );
                      })}
                  </div>

                  <div className="quote-summary">
                    <div className="quote-totals">
                      <div className="quote-line">
                        <span>Setup Fees:</span>
                        <span className="quote-amount">£{totalSetup.toFixed(2)}</span>
                      </div>
                      <div className="quote-line">
                        <span>Monthly Fees:</span>
                        <span className="quote-amount">£{totalMonthly.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="quote-total">
                      <span>Total:</span>
                      <span className="quote-total-amount">£{(totalSetup + totalMonthly).toFixed(2)}</span>
                    </div>

                    <button className="checkout-button">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationMenu;

