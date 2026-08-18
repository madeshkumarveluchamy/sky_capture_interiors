import React, { useState, useEffect } from "react";
import "../ProjectDetail/css/ProjectDetailPage.css";

import imgMainHero from "../../../../src/assets/residential.webp";
import imgKitchenView from "../../../../src/assets/interiors.webp";
import imgExteriorVilla from "../../../../src/assets/villa-ext.webp";
import imgWarmNightView from "../../../../src/assets/villa-night.webp";

import iconClient from "../../../../src/assets/icon-client.webp";
import iconLocation from "../../../../src/assets/icon-location.webp";
import iconServices from "../../../../src/assets/icon-services.webp";
import iconDuration from "../../../../src/assets/icon-duration.webp";
import iconArea from "../../../../src/assets/icon-area.webp";
import iconFacing from "../../../../src/assets/icon-facing.webp";

function ProjectDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [
    imgMainHero,
    imgKitchenView,
    imgExteriorVilla,
    imgWarmNightView,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  const mainImage = sliderImages[currentSlide];

  return (
    <div className="project-detail-container">
      <header className="project-detail-header">
        <div className="header-meta-left">
          <div className="solutions-tag">
            <span className="accent-square"></span>
            <p className="stit Futura-font ">
              End-to-End Solutions for
              <br />
              Modern Spaces
            </p>
          </div>

          <div className="project-title-wrapper">
            <span className="featured-pill sdes">Featured Project</span>

            <div className="client-loc-row">
              <div className="meta-inline-item">
                <img src={iconClient} alt="Client" className="meta-icon" />
                <span className="sdes">Mr. Kumaravel Pandian</span>
              </div>
              <div className="meta-inline-item">
                <img src={iconLocation} alt="Location" className="meta-icon" />
                <span className="sdes">RS Puram, Coimbatore.</span>
              </div>
            </div>

            <h1 className="project-main-title tit">Horizon Glass Villa</h1>
            <p className="project-hero-desc sdes">
              We believe a home should be a seamless extension of the people who
              live within it. Our residential practice blends architectural
              rigor with intimate interior design, crafting spaces that are as
              functional as they are beautiful.
            </p>
            <span className="brand-subtext des">SKY KAPTURE INTERIORS</span>
          </div>
        </div>

        <div className="header-meta-right">
          <div className="studio-top-intro-para">
            <p className="sdes">
              From structural form to the final interior detail, we craft
              contemporary environments designed for clarity, comfort, and
              timeless precision.
            </p>
          </div>
          <div className="header-preview-right">
            <img
              src={imgMainHero}
              alt="Horizon Glass Villa Cover"
              className="side-preview-img"
            />
          </div>
        </div>
      </header>

      <section className="property-metrics-bar">
        <div className="metric-box">
          <img src={iconServices} alt="Services" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit">Services</h4>
            <p className="des">Full Interior | Exterior</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconDuration} alt="Duration" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit">Duration</h4>
            <p className="des">Ongoing...</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconArea} alt="Total Area" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit">Total Area</h4>
            <p className="des text-center">2,826 Sq. Ft</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconFacing} alt="Site Facing" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit">Site Facing</h4>
            <p className="des ">South</p>
          </div>
        </div>
      </section>

      <div className="mesh-panel-box1">
        <img src={imgMainHero} alt="Mesh Panel Main Hero" />
      </div>

      <section className="detail-approach-specs">
        <div className="specs-col-left">
          <div className="approach-header-spine">
            <div>
              <h3 className="tit">Our Approach</h3>
            </div>
          </div>
          <ul className="approach-bullet-points">
            <li className="des">
              <span className="bullet-sq">▪</span> Spatial Planning & Layout
              Optimization
            </li>
            <li className="des">
              <span className="bullet-sq">▪</span> Bespoke Furniture & Material
              Curation
            </li>
            <li className="des">
              <span className="bullet-sq">▪</span> Lighting, Color & Texture
              Harmonization
            </li>
            <li className="des">
              <span className="bullet-sq">▪</span> Smart technology integration
            </li>
            <li className="des">
              <span className="bullet-sq">▪</span> Human Centric Comfort
              Solutions
            </li>
          </ul>
        </div>

        <div className="specs-col-right">
          <p className="narrative-p des">
            We are currently crafting a premier 2,826 Sq. Ft. residence,
            blending architectural precision with aesthetic excellence. This
            project represents our commitment to building unbeatable,
            high-performance living spaces. By integrating comprehensive
            interior and exterior design solutions, we ensure every detail is
            perfectly balanced to create an exceptional home.
          </p>
          <p className="summary-fields-p sdes">
            <strong className="des">Services:</strong> We are providing full-suite
            architectural, interior, and exterior design services.
            <br />
            <strong className="des">Duration:</strong> This project is currently in progress,
            moving steadily toward completion.
            <br />
            <strong className="des">Total Area:</strong> The residence encompasses 2,826 Sq. Ft.
            of meticulously planned space.
          </p>
        </div>
      </section>

      <section className="gallery-split-mesh-grid">
        <div className="mesh-top-full">
          <img src={imgKitchenView} alt="Static Mesh Top View" />
        </div>

        <div className="mesh-bottom-split">
          <div className="mesh-panel-box">
            <img src={imgExteriorVilla} alt="Static Mesh Left View" />
          </div>
          <div className="mesh-panel-box">
            <img src={imgWarmNightView} alt="Static Mesh Right View" />
          </div>
        </div>
      </section>

      <section className="immersive-slider-wrapper">
      <div className="main-slider-viewport">
  <img
    key={currentSlide}
    src={mainImage}
    alt={`Horizon Glass Villa Layout ${currentSlide + 1}`}
    className="slider-active-image"
  />
  
  {/* Left / Prev Arrow */}
 <button className="slider-nav-btn prev" onClick={handlePrevSlide}>
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M35 12H5M5 12L14 4M5 12L14 20" 
        stroke="#000000" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {/* Right / Next Arrow */}
  <button className="slider-nav-btn next" onClick={handleNextSlide}>
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 12H35M35 12L26 4M35 12L26 20" 
        stroke="#000000" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;


