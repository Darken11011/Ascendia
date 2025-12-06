import './ContactUs.css';

const ContactUs = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/ascendia-ai/secondary-meeting?month=2025-12', '_blank');
  };

  return (
    <>
      <section id="contact" className="contact-us">
        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>

          <div className="contact-info">
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#7c3aed"/>
              </svg>
              <span className="contact-text">27 Furnival Street, EC4A 1JQ, London</span>
            </div>

            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#7c3aed"/>
              </svg>
              <span className="contact-text">contact@ascendia.ai.net</span>
            </div>
          </div>

          <button className="book-call-btn" onClick={handleBookCall}>Book a Call</button>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">Powered by Ascendia AI</p>
      </footer>
    </>
  );
};

export default ContactUs;

