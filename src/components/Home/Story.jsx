import React, { useEffect, useRef, useState } from "react";
import "./css/Story.css";
// MASTER FIX: useScroll மற்றும் useTransform-ஐ framer-motion-ல் இருந்து import செய்கிறோம்
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import studio1 from "../../assets/studio1.webp";
import studio2 from "../../assets/studio2.webp";
import counterBg from "../../assets/counter.webp";
import missionIcon from "../../assets/mission-icon.webp";
import founderImg from "../../assets/founder.webp";
import visionHouse from "../../assets/vision-house.webp";
import ultraBadge from "../../assets/ultra-logo.webp";
import ultimateBadge from "../../assets/ultimate-logo.webp";
import { Link } from "react-router-dom";

const useInViewOnce = (threshold = 0.35) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

// --- 1. Slot Rolling Logic Block ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = Array.from(String(value));

  let digitIndex = 0;

  return (
    <span ref={ref} className="slot-wrapper-inline">
      {chars.map((char, i) => {
        if (isNaN(parseInt(char))) {
          return (
            <span key={i} className="slot-static-char">
              {char}
            </span>
          );
        }

        const isOdd = digitIndex % 2 !== 0;
        const finalDirection = isOdd
          ? baseDirection === "up"
            ? "down"
            : "up"
          : baseDirection;

        digitIndex++;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={
                isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}
              }
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1, 
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                  <span> {char}</span>
                </>
              ) : (
                <>
                  <span>{char}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

// --- 2. Updated CounterStat Component ---
const CounterStat = ({ count, suffix, title, subTitle }) => {
  return (
    <div className="stat-item stat-slot-item">
      <h3 className="slot-number-heading tit">
        <SlotCounter value={count} baseDirection="up" />
        <span className="stat-suffix ">{suffix}</span>
      </h3>
      <p className="des">
        {title}
        {subTitle ? <br /> : null}
        {subTitle}
      </p>
    </div>
  );
};

const Story = () => {
  const [projectRef, projectVisible] = useInViewOnce();
  const [growthRef, growthVisible] = useInViewOnce();
  const [leftImgRef, leftImgVisible] = useInViewOnce(0.4);
  const [rightImgRef, rightImgVisible] = useInViewOnce(0.4);
  const [footerRef, footerVisible] = useInViewOnce(0.45);

  // MASTER FIX: Framer Motion Parallax Logic
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  // Scroll செய்யும் போது Background-ஐ Y அச்சில் -20% லிருந்து +20% வரை நகர்த்துகிறோம்
  const yPos = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="story-standalone-wrapper">
      <section className="studio-section">
        <div className="studio-container">
          <div className="studio-left-content">
            <div>
              
              <div className="studio-tag stit">
                <span className="orange-square-mini"></span> Our Studio
              </div>
              
              <h2 className="studio-title tit">
                We build legacy spaces that bridge the gap between classic
                elegance and modern innovation
              </h2>
            </div>

            <div className="second-div">
              <div
                ref={leftImgRef}
                className={`studio-img-card left-card story-image-card ${
                  leftImgVisible ? "is-visible" : ""
                }`}
              >
                <img
                  src={studio1}
                  alt="Classic elegance bedside table installation"
                />
              </div>

              <div className="studio-text-box">
                <p className="studio-description des">
                  A multidisciplinary practice focused on thoughtful design,
                  sustainable materials, and high-quality execution. From
                  residential builds to large commercial projects, we shape
                  environments with clarity, and purpose.
                </p>
                <Link to="/our-studio" className="story-cta-btn">
                  <span className="cta-text des">Read More</span>
                  <span className="cta-arrow-box des"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#1a1a1a" 
  strokeWidth="1.6" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span>
               </Link>
              </div>
            </div>
          </div>

          <div className="studio-images-wrapper">
            <div
              ref={rightImgRef}
              className={`studio-img-card right-card story-image-card ${
                rightImgVisible ? "is-visible" : ""
              }`}
            >
              <img
                src={studio2}
                alt="Modern minimalist lounge setup with custom frame"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MASTER FIX: Parallax Ref சேர்க்கப்பட்டுள்ளது */}
 {/* JSX-ல் இந்த Section-ஐ இப்படி மாற்றுங்கள் */}
      <section
        className="counter-strip-sections"
        style={{ '--bg-image': `url(${counterBg})` }}
      >
        <div className="counter-white-box">
          <CounterStat
            count={15}
            suffix="+"
            title="Years of"
            subTitle="experiences"
          />
          <div className="stat-divider"></div>
          <CounterStat
            count={100}
            suffix="%"
            title="Client"
            subTitle="satisfaction"
          />
          <div className="stat-divider"></div>
          <CounterStat
            count={180}
            suffix="+"
            title="Completed"
            subTitle="Projects"
          />
        </div>
      </section>

      <section className="grid-dashboard-section">
        <div className="dashboard-container">
          <div className="dashboard-column col-1">
            <div className="dash-card white-card mission-card">
              <h4 className="tit">OUR MISSION</h4>
              <img
                src={missionIcon}
                alt="Isometric abstract architectural line layer vector"
                className="mission-wire-icon"
              />
              <p className="des">
                We are a passionate architecture and design studio dedicated to
                creating spaces that inspire, function, and endure.
              </p>
            </div>

            <div
              ref={projectRef}
              className="dash-card white-card project-count-card"
            >
              <div className="project-count-row">
                <h3 className="slot-number-heading project-h3">
                  <CounterStat count={1.5} suffix="K+" />
                </h3>
                <p className="spaced-tag text-center text-md-start des">
                  PROJECTS
                  <br />
                  DONE
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-column col-2">
            <div className="dash-card dark-card quote-feature-card">
              <div className="badge-row">
                <div className="badge-wrapper-box">
                  <img
                    src={ultraBadge}
                    alt="Ultra Wreath Laurel Vector Badge"
                  />
                </div>
                <div className="badge-wrapper-box">
                  <img
                    src={ultimateBadge}
                    alt="Ultimate Performance Crown Ribbon Badge"
                  />
                </div>
              </div>

              <p className="quote-text stit">
                " GREAT ARCHITECTURE BEGINS <br /> WITH A VISION AND BECOMES A{" "}
                <br />
                LEGACY & PRIME. "
              </p>

              <div
                ref={footerRef}
                className={`founder-footer-profile footer-animate-card ${
                  footerVisible ? "reveal-visible" : ""
                }`}
              >
                <div className="founder-img-box footer-box">
                  <img src={founderImg} alt="Founder Portrait" />
                </div>

                <div className="founder-info-box footer-box">
                  <span className="founder-role sdes">// FOUNDER</span>
                  <h5 className="stit">SKY KAPTURE</h5>
                  <span className="lets-talk-btn sdes">LET'S TALK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-column col-3">
            <div
              ref={growthRef}
              className="dash-card white-card growth-mini-card"
            >
              <div className="growth-row">
                <h3 className="slot-number-heading growth-h3">
                  <CounterStat count={8.9} suffix="%" />
                </h3>
                <span className="growth-tag text-center text-md-start sdes">
                  DAILY PRIME
                  <br />
                  GROWTH
                </span>
              </div>
            </div>

            <div className="dash-card white-card vision-card">
              <h4 className="tit">OUR VISION</h4>
              <p className="des">
                We deliver architecture that not only looks exceptional but also
                improves everyday experiences with good expertise.
              </p>
              <img
                src={visionHouse}
                alt="Multi-level modern premium architectural exterior concept layout render"
                className="vision-house-render"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;