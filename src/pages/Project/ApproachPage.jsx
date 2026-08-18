import { useEffect, useRef } from "react";
import "../../pages/Project/css/ApproachPage.css";
import { Link } from "react-router-dom";
import imgResidential from "../../../src/assets/residential.webp"; 
import imgInteriors from "../../../src/assets/interiors.webp"; 
import imgCommercial from "../../../src/assets/commercial.webp"; 
import imgStyling from "../../../src/assets/styling.webp"; 
import imgVirtual from "../../../src/assets/virtual.webp"; 

function AnimatedApproachBlock({ item }) {
  const blockRef = useRef(null);
  const numberRef = useRef(null);
  const h3Ref = useRef(null);
  const pRef = useRef(null);
  
  // Animation oru thadava thaan nadakanum nu track panna
  const hasAnimated = useRef(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Element view-la illana OR already animate aagiruntha return aagidum
        if (!entry.isIntersecting || hasAnimated.current) return;
        
        hasAnimated.current = true;

        const block = entry.target;

        // 1) Image zoom-in animation
        const imgWrapper = block.querySelector(".block-image-wrapper");
        if (imgWrapper) {
          imgWrapper.classList.add("animate-in");
        }

        // 2) Number count-up animation
        if (numberRef.current) {
          const targetStr = item.projectsCount.replace("+", "");
          const target = parseInt(targetStr, 10);
          if (!target) return;

          let curr = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            curr += step;
            if (curr >= target) {
              curr = target;
              clearInterval(timer);
            }
            const suffix = item.projectsCount.includes("+") ? "+" : "";
            numberRef.current.textContent = curr + suffix;
          }, 95);
        }

        // 3) Smooth Fade-Up animation trigger
        timeoutIdRef.current = setTimeout(() => {
          if (h3Ref.current) {
            h3Ref.current.classList.add("visible");
          }
          if (pRef.current) {
            pRef.current.classList.add("visible");
          }
        }, 300);

        // Stop observing once animated
        observer.unobserve(block);
      });
    }, {
      threshold: 0.3
    });

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
      // Cleanup timer properly
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [item.projectsCount]);

  return (
    <article
      ref={blockRef}
      className={`approach-row-block ${item.isReversed ? "row-reversed" : ""}`}
    >
      <div className="block-image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className={`approach-hero-img ${item.imageClass}`}
        />
        <div className="floating-text-overlay">
          <h3 ref={h3Ref} className="inter-font tit">{item.title}</h3>
          {/* Direct-a desc-ai fix pannitom */}
          <p ref={pRef} className="jost-font sdes">{item.desc}</p> 
        </div>
        <div className="projects-badge">
          <span className="badge-num inter-font" ref={numberRef}>
            0 {/* Initial-a 0 irukkatum */}
          </span>
          <span className="badge-txt Futura-font sdes">Recent Projects</span>
        </div>
      </div>

      <div className="block-details-wrapper">
        <div className="vertical-accent-line"></div>
        <div className="details-content">
          <h2 className="section-title-approach Futura-font tit">{item.title}</h2>
          <h4 className="section-subtitle-approach Futura-font stit">{item.subtitle}</h4>

          <ul className="specs-list">
            {item.points.map((point, index) => (
              <li key={index} className="specs-item">
                <span className="list-square-bullet ">▪</span>
                <p className="plus-font sdes">{point}</p>
              </li>
            ))}
          </ul>

<Link to="/projects" className="view-all-project-btns">
          <div className="view-all-project-btn">
            <button className="view-text-btn Futura-font des">View All Project</button>
            <button className="view-arrow-btn"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="2 1 20 20" 
  fill="none" 
  stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
  strokeWidth="1.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></button>
          </div></Link>
        </div>
      </div>
    </article>
  );
}

function ApproachPage() {
  const approachData = [
    {
      id: 1,
      title: "Residential Design",
      subtitle: "Our Approach",
      desc: "We believe a home should be a seamless extension of the people who live within it. Our residential practice blends architectural rigor with intimate interior design, crafting spaces that are as functional as they are beautiful.",
      projectsCount: "15+",
      points: [
        "Spatial Planning & Layout Optimization",
        "Bespoke Furniture & Material Curation",
        "Lighting, Color & Texture Harmonization",
        "Smart technology integration",
        "Human Centric Comfort Solutions"
      ],
      image: imgResidential,
      imageClass: "img-pos-group-odd",
      isReversed: false
    },
    {
      id: 2,
      title: "Interiors Design",
      subtitle: "Our Approach",
      desc: "Our interior design practice is defined by clarity, intention, and a modern ethos. We strip away the unnecessary to highlight beautiful materials, precise detailing, and spatial harmony.",
      projectsCount: "20+",
      points: [
        "Intentional Space Planning",
        "Bespoke Furniture Curation",
        "Material & Finish Selection",
        "Lighting & Atmosphere Design",
        "Curated furniture, fixtures, and equipment"
      ],
      image: imgInteriors,
      imageClass: "img-pos-group-even",
      isReversed: true
    },
    {
      id: 3,
      title: "Commercial Interior Design",
      subtitle: "Our Approach",
      desc: "We elevate finished spaces through thoughtful styling and artistic curation. Our approach brings harmony, warmth, and personality to every room, ensuring that textures, objects, and lighting coalesce into a singular, refined narrative.",
      projectsCount: "30+",
      points: [
        "Strategic Space Programming",
        "Brand-Aligned Interior Identity & Aesthetic",
        "Lighting, Color & Texture Harmonization",
        "Employee Wellness Integration",
        "Integrated Client Experience & Flow Design"
      ],
      image: imgCommercial,
      imageClass: "img-pos-group-odd",
      isReversed: false
    },
    {
      id: 4,
      title: "Styling & Decor",
      subtitle: "Our Approach",
      desc: "Our interior design practice is defined by clarity, intention, and a modern ethos. We strip away the unnecessary to highlight beautiful materials, precise detailing, and spatial harmony.",
      projectsCount: "10+",
      points: [
        "Artistic Composition & Spatial Arrangement",
        "Curated Object & Decor Selection",
        "Texture, Tone, and Palette Harmonization",
        "Atmospheric Lighting & Vignette Styling",
        "Bespoke Finishing Touches & Details"
      ],
      image: imgStyling,
      imageClass: "img-pos-group-even",
      isReversed: true
    },
    {
      id: 5,
      title: "Virtual E-Design",
      subtitle: "Our Approach",
      desc: "We bring professional design expertise directly to you, regardless of location. Our virtual design process offers a streamlined, collaborative experience, providing you with comprehensive design plans, curated material palettes, and precise spatial layouts.",
      projectsCount: "18+",
      points: [
        "Remote Spatial Planning & Digital Visualization",
        "Curated Online Product & Material Sourcing",
        "Comprehensive Digital Design Packages",
        "Clear Implementation Guides & Technical Specs",
        "Collaborative Virtual Consultations"
      ],
      image: imgVirtual,
      imageClass: "img-pos-group-odd",
      isReversed: false
    }
  ];

  return (
    <main className="approach-container">
      <header className="approach-header-section">
        <div className="header-left">
          <span className="orange-square-tag"></span>
          <p className="tag-text Futura-font stit">End-to-End Solutions for<br />Modern Spaces</p>
        </div>
        <h1 className="main-headline Futura-font tit">
          Architectural Intelligence<br />Curated Design.
        </h1>
        <div className="header-right">
          <p className="intro-paragraph Futura-font des">
            From structural form to the final interior detail, we craft contemporary environments designed for clarity, comfort, and timeless precision.
          </p>
        </div>
      </header>

      <section className="approach-blocks-list">
        {approachData.map((item) => (
          <AnimatedApproachBlock key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default ApproachPage;