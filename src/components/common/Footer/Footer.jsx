import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";

import fbIcon from "../../../assets/facebook.webp";
import pinIcon from "../../../assets/pinterest.webp";
import inIcon from "../../../assets/linkedin.webp";
import igIcon from "../../../assets/instagram.webp";

import footerDesign from "../../../assets/footer-bg.webp";
import footerDesign1 from "../../../assets/footer-bg1.webp";

const Footer = () => {
  // State for email and loading status
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Matha links click panna top-ku poga
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Google Sheet Submit Function
  const handleEmailSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    
    if (!email) {
      alert("Please enter your email ID!");
      return;
    }

    setIsSubmitting(true);

    // நீங்க காப்பி பண்ண URL-ஐ இங்கே போடவும் 👇
    const scriptURL = "https://script.google.com/macros/s/AKfycbzl6q5dt10PfFgdY1Da1pkkJnlYYMsr8wgVyzS-DEbBH57qIlwJA30pycGru_1b4YC9/exec"; 
    
    const formData = new FormData();
    formData.append("email", email);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google App Script requires no-cors mode for direct fetch
      });
      
      alert("Thanks! Your email has been added.");
      setEmail(""); // Form-ஐ clear செய்ய
    } catch (error) {
      console.error("Error!", error.message);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer-section">
      <img src={footerDesign} alt="Design" className="footer-bg-design" />
      <img src={footerDesign1} alt="Design" className="footer-bg1-design" />
      <div className="footer-wrapper">
        <div className="footer-links">
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/projects" onClick={scrollToTop}>Projects</Link>
          <Link to="/Approach" onClick={scrollToTop}>Approach</Link>
          <Link to="/our-studio" onClick={scrollToTop}>Our Studio</Link>
          <Link to="/start-a-project" onClick={scrollToTop}>Contact</Link>
          <Link to="/insights" onClick={scrollToTop}>Blog</Link>
        </div>

        <div className="footer-center">
          <div className="info-box">
            <h4>Location :</h4>
            <p>
              63A, TNHB Colony, sowbagaya nagar,
              <br />
              Civil Aerodrome Post, Coimbatore,
              <br />
              Tamil Nadu 641014
            </p>

            <p className="contact-line">
              <span className="phone-under">Call us:99949 68165</span>
            </p>

            <p className="mail-line">
              <span className="mail-under">Email:Admin@skykapture.com</span>
            </p>
          </div>

          <div className="newsletter-box">
            <h4>Studio Notes :</h4>
            {/* Form tag add panni onSubmit function-ஐ call panrom */}
            <form onSubmit={handleEmailSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter Your Mail ID......." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                <span className="submit-text">
                  {isSubmitting ? "Sending..." : "Submit"}
                </span>
                <span className="submit-arrow-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="28"
                    viewBox="2 3 20 20"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-right">
          <h4>Studio Updates :</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1EitqQbwfi/" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" className="social-icon" />
            </a>
            
            <Link to="/"><img src={pinIcon} alt="Pinterest" className="social-icon" /></Link>
            <Link to="/"><img src={inIcon} alt="LinkedIn" className="social-icon" /></Link>
            
            <a href="https://www.instagram.com/skykaptureinteriors?igsh=MTdvZTl5NG82OXVuNw==" target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-brand">
        <h1>SKY Kapture + Interiors</h1>
      </div>
    </footer>
  );
};

export default Footer;