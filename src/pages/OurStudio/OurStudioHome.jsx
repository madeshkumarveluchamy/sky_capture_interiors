import React, { useState, useRef } from "react"; 
import Navbar from "../../components/common/navbar/Navbar";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import "./css/OurStudioHome.css";

// Importing Existing Assets
import ceoImg from '../../assets/ceoimage.webp'; 
import serviceIcon1 from '../../assets/ourstudioicon1.webp'; 
import serviceIcon2 from '../../assets/ourstudioicon2.webp'; 
import serviceIcon3 from '../../assets/ourstudioicon3.webp'; 

import teamImg1 from '../../assets/ceoimage.webp'; 
import teamImg2 from '../../assets/studioteam1.webp'; 
import teamImg3 from '../../assets/studioteam2.webp'; 
import teamImg4 from '../../assets/studioteam3.webp'; 
import ProjectFAQ from '../Project/ProjectFAQ';

// ==========================================
// SLOT COUNTER ANIMATION COMPONENT
// ==========================================
const SlotCounter = ({ value, baseDirection = "up", startRolling }) => {
  const digits = Array.from(String(value));

  return (
    <span className="studio-counter-slot-wrapper">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit))) return <span key={i} className="studio-counter-static-char">{digit}</span>;
        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="studio-counter-digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={{ y: startRolling ? (finalDirection === "up" ? "-90.9%" : "0%") : (finalDirection === "up" ? "0%" : "-90.9%") }}
              transition={{ duration: 2.0, ease: [0.45, 0.05, 0.55, 0.95], delay: i * 0.15 }}
              className="studio-counter-digit-strip inter-font"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span> {digit}</span>
                </  >  
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const OurStudioHome = () => {
  
  const teamMembers = [
    { name: "Ananya K", role: "Senior Project Manager", img: teamImg1, linkedin: "#", instagram: "#" },
    { name: "Arjun Mehta", role: "Principal Architect", img: teamImg2, linkedin: "#", instagram: "#" },
    { name: "Priya Selvan", role: "Lead Design Architect", img: teamImg3, linkedin: "#", instagram: "#" },
    { name: "Rohan", role: "Lead Structural Consultant", img: teamImg4, linkedin: "#", instagram: "#" }
  ];

  // --- SCROLL ANIMATION LOGIC ---
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,   
    restDelta: 0.001
  });

  const yAll = useTransform(smoothProgress, [0, 0.4], [150, 0]);
  const lineWidth = useTransform(smoothProgress, [0, 0.4], ["0%", "100%"]);

  const [startRolling, setStartRolling] = useState(false);
  
  // --- NEW STATE: To track which team member card is open ---
  const [openTeamIndex, setOpenTeamIndex] = useState(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4 && !startRolling) {
      setStartRolling(true);
    } else if (latest < 0.4 && startRolling) {
      setStartRolling(false);
    }
  });

  // --- NEW FUNCTION: Toggle Team Member Social Icons ---
  const handleToggleTeam = (index) => {
    // If the clicked card is already open, close it (set to null). Otherwise, open it.
    setOpenTeamIndex(openTeamIndex === index ? null : index);
  };

  return (
    <div>
      <div className="studio-home-page-container">
        <div className="studio-home-content-wrapper">
          
          {/* ----- SCROLL LOCK (STICKY) WRAPPER WITH CSS CLASSES ----- */}
          <div ref={containerRef} className="scroll-lock-wrapper">
            
            <div className="scroll-lock-sticky">

            
              <main className="studio-home-grid-layout" style={{ marginTop: 0 }}>
                <div className="studio-home-header-block">
                  <div className="studio-home-section-title">
                    <span className="studio-home-yellow-square"></span>
                    <h2 className="Futura-font">Our Studio</h2>
                  </div>
                  <div className="studio-home-title-underline"></div>
                </div>

                <div className="studio-home-about-indicator">
                  <span className="studio-home-number inter-font stit">01</span>
                  <span className="studio-home-dash">—</span>
                  <span className="studio-home-text inter-font stit">ABOUT US</span>
                </div>

                <article className="studio-home-text-right">
                  <h1 className="studio-home-hero-heading Futura-font">
                    Shaping purposeful spaces through clarity and craftsmanship.
                    Where innovative design meets structural integrity. Transforming
                    your vision into timeless, inhabitable art
                  </h1>
                  <p className="studio-home-hero-description inter-font des">
                    An architecture firm specializes in designing innovative,
                    functional, and sustainable buildings, blending creativity with
                    engineering expertise to transform spaces and meet the unique
                    needs of clients
                  </p>

                  {/* --- COUNTERS SECTION --- */}
                  <div className="studio-counter-container" style={{ marginTop: "4rem" }}>
                    
                    {/* Row 1 */} 
                    <div style={{ position: "relative", padding: "2.5rem 0", overflow: "hidden" }}>
                      <motion.div style={{ position: "absolute", top: 0, left: 0, height: "1px", backgroundColor: "rgba(0,0,0,0.15)", width: lineWidth }} />
                      <motion.div style={{ y: yAll, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="studio-counter-metric-number" style={{ margin: 0, fontSize: "4rem", fontWeight: "400", color: "#111", display: "flex", alignItems: "center" }}>
                          <SlotCounter value={360} baseDirection="up" startRolling={startRolling} />
                          <span className="studio-counter-metric-suffix" style={{ marginLeft: "5px" }}>+</span>
                        </h2>
                        <div className="studio-counter-metric-text inter-font" style={{ fontSize: "16px", color: "#333", textAlign: "left" }}>
                          Successful<br />Projects Done
                        </div>
                      </motion.div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ position: "relative", padding: "2.5rem 0", overflow: "hidden" }}>
                      <motion.div style={{ position: "absolute", top: 0, left: 0, height: "1px", backgroundColor: "rgba(0,0,0,0.15)", width: lineWidth }} />
                      <motion.div style={{ y: yAll, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="studio-counter-metric-number" style={{ margin: 0, fontSize: "4rem", fontWeight: "400", color: "#111", display: "flex", alignItems: "center" }}>
                          <SlotCounter value={12} baseDirection="up" startRolling={startRolling} />
                        </h2>
                        <div className="studio-counter-metric-text padleft inter-font" style={{ fontSize: "16px", color: "#333", textAlign: "left" }}>
                          Years of<br />Experience
                        </div> 
                      </motion.div> 
                    </div>

                    {/* Row 3 */}
                    <div style={{ position: "relative", padding: "2.5rem 0", overflow: "hidden" }}>
                      <motion.div style={{ position: "absolute", top: 0, left: 0, height: "1px", backgroundColor: "rgba(0,0,0,0.15)", width: lineWidth }} />
                      <motion.div style={{ position: "absolute", bottom: 0, left: 0, height: "1px", backgroundColor: "rgba(0,0,0,0.15)", width: lineWidth }} />
                      <motion.div style={{ y: yAll, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="studio-counter-metric-number" style={{ margin: 0, fontSize: "4rem", fontWeight: "400", color: "#111", display: "flex", alignItems: "center" }}>
                          <SlotCounter value={97} baseDirection="up" startRolling={startRolling} />
                          <span className="studio-counter-metric-suffix" style={{ marginLeft: "5px" }}>%</span>
                        </h2>
                        <div className="studio-counter-metric-text inter-font" style={{ fontSize: "16px", color: "#333", textAlign: "left" }}>
                          Client<br />Success Rate
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </article>
              </main>
            </div>
          </div>
          {/* --- SCROLL LOCK ENDS HERE --- */}

          {/* CEO SECTION */}
          <section className="ceo-section" style={{ marginTop: "4rem" }}>
            <div className="ceo-container">
              <div className="ceo-text-content">
                <div className="ceo-quote-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ceo-quote-svg">
                    <path d="M10 7H4V13H7.5C7.5 15.4853 5.48528 17.5 3 17.5V19.5C6.58985 19.5 9.5 16.5899 9.5 13V7H10ZM20 7H14V13H17.5C17.5 15.4853 15.4853 17.5 13 17.5V19.5C16.5899 19.5 19.5 16.5899 19.5 13V7H20Z" />
                  </svg>
                </div>
                <h2 className="ceo-quote-text Futuraa-font tit">
                  "OUR MISSION IS TRANSFORMING VISIONARY IDEAS INTO ENDURING STRUCTURAL REALITIES."
                </h2>
                <p className="ceo-author inter-font stit">Sky Kapture, Founder</p>
              </div>
              <div className="ceo-image-wrapper">
                <img src={ceoImg} alt="CEO & Founder" className="ceo-image" />
              </div>
            </div>
          </section>

          {/* C. SERVICES SECTION */}
          <section className="studio-services-section">
            <div className="studio-services-header-row">
              <div className="studio-services-indicator">
                <span className="studio-services-number inter-font stit">02</span>
                <span className="studio-services-dash inter-font">—</span>
                <span className="studio-services-text inter-font stit">AWARDS</span>
              </div>
              <h2 className="studio-services-main-title Futura-font tit">We offer wide range of<br />services</h2>
              <div className="studio-services-spacer"></div>
            </div>
            <div className="studio-services-grid">
              <div className="studio-services-card studio-services-border-right">
                <div className="studio-services-icon-wrapper"><img src={serviceIcon1} alt="Innovative Vision" className="studio-services-icon" /></div>
                <h3 className="studio-services-card-title inter-font stit">Innovative Vision</h3>
                <p className="studio-services-card-desc inter-font des">Stux creates unique architectural designs that redefine modern living spaces</p>
                <span className="studio-services-card-num inter-font">(01)</span>
              </div>
              <div className="studio-services-card studio-services-border-right">
                <div className="studio-services-icon-wrapper"><img src={serviceIcon2} alt="Affordable Price" className="studio-services-icon" /></div>
                <h3 className="studio-services-card-title inter-font stit">Affordable Price</h3>
                <p className="studio-services-card-desc inter-font des">We provide premium architectural solutions at highly competitive market prices.</p>
                <span className="studio-services-card-num inter-font">(02)</span>
              </div>
              <div className="studio-services-card">
                <div className="studio-services-icon-wrapper"><img src={serviceIcon3} alt="Expert Team" className="studio-services-icon" /></div>
                <h3 className="studio-services-card-title inter-font stit">Expert Team</h3>
                <p className="studio-services-card-desc inter-font des">Precision and detail define every structure built by our experts.</p>
                <span className="studio-services-card-num inter-font">(03)</span>
              </div>
            </div>
          </section>

          {/* D. TEAMS SECTION */}
          <section className="studio-team-section">
            <div className="studio-team-header-row">
              <div className="studio-team-indicator">
                <span className="studio-team-number inter-font stit">03</span>
                <span className="studio-team-dash">—</span>
                <span className="studio-team-text inter-font stit">TEAMS</span>
              </div>
              <h2 className="studio-team-main-title Futura-font tit">
                Our Creative Team Behind
                <br />
                success
              </h2>
            </div>

            <div className="studio-team-grid">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  /* ADDED 'active' CLASS BASED ON STATE */
                  className={`studio-team-card ${openTeamIndex === index ? 'active' : ''}`}
                >
                  <div className="studio-team-image-box">
                    <img src={member.img} alt={member.name} className="studio-team-img" />
                    <div className="studio-team-social-panel">
                      <a href={member.linkedin} className="studio-team-social-icon studio-team-ln" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="#202A44">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                      <a href={member.instagram} className="studio-team-social-icon studio-team-ig" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#202A44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      
                      {/* ADDED onClick EVENT TO THE BUTTON */}
                      <button 
                        className="studio-team-trigger-btn"
                        onClick={() => handleToggleTeam(index)}
                      >
                        <span className="studio-team-plus-symbol">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="studio-team-info">
                    <h3 className="studio-team-name inter-font des">{member.name}</h3>
                    <p className="studio-team-role inter-font ">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      <ProjectFAQ />
    </div>
  );
}

export default OurStudioHome;