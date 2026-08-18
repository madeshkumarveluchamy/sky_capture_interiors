import React, { useState } from 'react';
import './ContactPage.css';
import ProjectFAQ from '../Project/ProjectFAQ';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  // Loading and Success message states
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // INTHA IDATHULA UNGA GOOGLE APPS SCRIPT URL-A PASTE PANNUNGA (Munnadi step-la kedaichathu)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzvECDe5b76P0JmWbpVHMXBvqhcRENQvvLLvXFQ92-fppIsjIRQkCYumKKx5f5swqeg/exec";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(''); // Pazhaya message-a clear panna

    const formData = new FormData(e.target);

    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        setLoading(false);
        setStatusMsg("Thanks for contacting us! We will get back to you soon.");
        e.target.reset(); // Form inputs-a clear pannidum
      })
      .catch((error) => {
        setLoading(false);
        setStatusMsg("Something went wrong. Please try again.");
        console.error('Error!', error.message);
      });
  };

  return (
    <>
    <div className="contactus-wrapper">
      <div className="contactus-container">
        
        {/* --- Top Title Section --- */}
        <h1 className="contactus-main-title Futura-font ">Contact</h1>
        
        <div className="contactus-top-bar">
          <span className="contactus-presence-text inter-font sdes">// STUDIO PRESENCE</span>
          <a href="mailto:Admin@skykapture.com" className="contactus-email-link inter-font">
            Admin@skykapture.com
          </a>
        </div>

        {/* --- Info Grid Section (3 Columns) --- */}
        <div className="contactus-info-grid">
          
          <div className="contactus-info-col">
            <h3 className="contactus-info-label geist-font tit">Location</h3>
            <p className="contactus-info-text inter-font des">
              63A, TNHB Colony, sowbagaya nagar, Civil<br />
              Aerodrome Post, Coimbatore, Tamil Nadu 641014
            </p>
          </div>

          <div className="contactus-info-col">
            <h3 className="contactus-info-label geist-font tit">Contact Number</h3>
            <div className="contactus-phone-links geist-font ">
              <a href="tel:+919994968165">+91 99949 68165</a>
            </div>
          </div>

          <div className="contactus-info-col contactus-col-right">
            <h3 className="contactus-info-label contactus-info-labels geist-font tit">Connect With Us</h3>
            <div className="contactus-social-icons">
              {/* Facebook - Updated Link */}
              <a href="https://www.facebook.com/share/1EitqQbwfi/" target="_blank" rel="noopener noreferrer" className="contactus-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              {/* Pinterest */}
              <Link to="/" className="contactus-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.9 6.44 9.34-.09-.78-.18-2.06.04-2.92.19-.8 1.28-5.4 1.28-5.4s-.32-.64-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.36.69 1.36 1.52 0 .92-.59 2.3-.89 3.58-.25 1.07.54 1.94 1.6 1.94 1.92 0 3.4-2.02 3.4-4.94 0-2.58-1.86-4.38-4.5-4.38-3.04 0-4.83 2.28-4.83 4.64 0 .92.35 1.91.8 2.45.09.1.1.2.07.31l-.26 1.06c-.04.14-.13.17-.28.1-1.04-.49-1.69-2.03-1.69-3.26 0-2.66 1.94-5.1 5.56-5.1 2.91 0 5.18 2.08 5.18 4.86 0 2.9-1.82 5.23-4.35 5.23-1.02 0-2-.53-2.33-1.16l-.64 2.4c-.23.86-.85 1.94-1.27 2.6A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg>
              </Link>
              {/* LinkedIn */}
              <Link to="/"  className="contactus-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              {/* Instagram - Updated Link */}
              <a href="https://www.instagram.com/skykaptureinteriors?igsh=MTdvZTl5NG82OXVuNw==" target="_blank" rel="noopener noreferrer" className="contactus-icon-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

        </div>

        {/* --- Bottom Split Section --- */}
        <div className="contactus-main-split">
          
          {/* Left Text Column */}
          <div className="contactus-left-content">
            <h2 className="contactus-heading Futura-font ">Tell us about<br/>your project</h2>
            <p className="contactus-desc inter-font des">
              Share a brief overview of your project, including location, scope, and timeline. 
              The studio carefully reviews each enquiry before arranging an initial conversation.
            </p>
          </div>

          {/* Right Form Column */}
          <div className="contactus-right-form">
            {/* onSubmit add panniyachu */}
            <form className='forms' onSubmit={handleSubmit}>
              <div className='contactform '>
                
                {/* Status Message Display */}
                {statusMsg && (
                  <div style={{ marginBottom: '15px', color: statusMsg.includes('wrong') ? 'red' : 'green', fontSize: '14px' }} className="geist-font">
                    {statusMsg}
                  </div>
                )}

                <div className="contactus-form-row">
                  <div className="contactus-form-group">
                    <label className="contactus-label mono-font des">NAME *</label>
                    {/* name="name" add panniyachu */}
                    <input type="text" name="name" className="contactus-input" required />
                  </div>
                  <div className="contactus-form-group">
                    <label className="contactus-label mono-font des">EMAIL *</label>
                    {/* name="email" add panniyachu */}
                    <input type="email" name="email" className="contactus-input" required />
                  </div>
                </div>

                <div className="contactus-form-group">
                  <label className="contactus-label mono-font des">PHONE NUMBER *</label>
                  {/* name="phone" add panniyachu */}
                  <input type="tel" name="phone" className="contactus-input" required />
                </div>

                <div className="contactus-form-group">
                  <label className="contactus-label mono-font des">MESSAGE *</label>
                  {/* name="message" add panniyachu */}
                  <textarea name="message" className="contactus-textarea" required></textarea>
                </div>
              </div>

              <div className="contactus-submit-row">
                {/* disabled and loading text add panniyachu */}
                <button type="submit" className="contactus-submit-btn mono-font des" disabled={loading}>
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                <p className="contactus-disclaimer geist-font sdes">
                  We typically respond to project<br/>
                  enquiries within 1–2 business days.
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
        
    </div>
    <ProjectFAQ />
    </>
  );
};

export default ContactPage;