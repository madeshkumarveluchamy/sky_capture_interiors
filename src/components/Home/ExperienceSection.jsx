import React, { useState } from 'react';
// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import './css/ExperienceSection.css'; // உங்களோட CSS path

import kvnImg from '../../assets/kvn-residence.webp';
import suriyaImg from '../../assets/suriya-villa.webp';
import vallgetsImg from '../../assets/vallgets-residence.webp';
import greenAppleImg from '../../assets/green-apple-residence.webp';

// Desktop-ல் Carousel சுத்துவதற்காக (Loop) டேட்டாவை அதிகப்படுத்தியுள்ளோம்
const projects = [
  {
    id: 1,
    title: 'KVN Residence',
    location: 'Bangalore',
    img: kvnImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  // --- Duplicated Data for Infinite Scroll on Big Screens ---
  {
    id: 5,
    title: 'KVN Residence',
    location: 'Bangalore',
    img: kvnImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 6,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 7,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 8,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const ExperienceSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="experience-section">
      <div className="exp-header">
        <div className="label stit">
          <span className="orange-box"></span>
          Concept → Reality
        </div>

        <h2 className="title tit">
          Experience-led<br />Design, Perfected.
        </h2>

        <div className="header-content">
          <div className="right-side">
            <p className="sub-text1 des">
              A visual library of interiors brought to life<br />
              from blueprint to beauty.
            </p>


            <Link to="/our-studio">
            <button className="view-portfolio-btn">
              <span className="text des">View Portfolio</span>
              <span className="arrow-box des"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Section Using Swiper */}
      <div className="carousel-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true} // கை Icon காட்டும், Drag வேலை செய்யும்
          speed={1200} // ✅ இதுதான் சீக்ரெட்! 1.2 Seconds ரொம்ப smooth ஆக slide ஆகும்
          autoplay={{
            delay: 2500, // ஒவ்வொரு slide-க்கும் இடையே உள்ள நேரம்
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, // ✅ Hover செய்தால் slide நிற்பதற்கு (நல்ல User Experience)
          }}
          breakpoints={{
            // Mobile
            640: {
              slidesPerView: 1,
            },
            // Tablet
            768: {
              slidesPerView: 2,
            },
            // Desktop 
            1024: {
              slidesPerView: 4,
            },
          }}
          className="projects-swiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="project-card" style={{ backgroundImage: `url(${p.img})` }}>
                <div className="video-overlay">
                  <button
                    className="play-button"
                    aria-label={`Play ${p.title} video`}
                    onClick={() => setSelectedVideo(p)}
                  >
                    <span className="play-ring ring-1"></span>
                    <span className="play-ring ring-2"></span>
                    <span className="play-icon">▶</span>
                  </button>
                </div>

                <div className="card-footer">
                  <img src={p.img} alt={p.title} className="footer-thumb" />
                  <div className="footer-text">
                    <h4 className="stit">{p.title}</h4>
                    <p className="sdes">{p.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className="modal-video"
              src={selectedVideo.video}
              controls
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="modal-caption">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;