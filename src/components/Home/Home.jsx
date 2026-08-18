import { useState, useEffect } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

// Thumbnail images மட்டுமே import செய்கிறோம்
import thumb2 from '../../assets/thumb7.webp';
import thumb1 from '../../assets/thumb4.webp';
import thumb3 from '../../assets/thumb5.webp';
import thumb4 from '../../assets/thumb6.webp';

const thumbs = [
  {
    image: thumb2,
    title: 'Azure Hallway',
    link: '#1',
    heading: 'Where Aesthetics Meet Purposeful Living',
    description: 'We create interiors that blend timeless elegance with modern functionality, reflecting your story and lifestyle. Let\'s build something beautiful together.',
    watermark: 'design'
  },
  {
    image: thumb1,
    title: 'Coastal Serenity',
    link: '#2',
    heading: 'Experience The Coastal Serenity',
    description: 'Bring the calm and soothing vibes of the ocean into your home with our specialized coastal design approach.',
    watermark: 'spaces'
  },
  {
    image: thumb3,
    title: 'Elegant Space',
    link: '#3',
    heading: 'Redefining Elegant Spaces',
    description: 'Luxurious textures and premium finishes that elevate your everyday living experience to a whole new level.',
    watermark: 'vision'
  },
  {
    image: thumb4,
    title: 'Minimalist Dining',
    link: '#4',
    heading: 'The Beauty of Minimalist Dining',
    description: 'Less is more. Create a clutter-free, highly functional dining area that focuses on what truly matters.',
    watermark: 'living'
  },
];

const Home = () => {
  const [currentThumb, setCurrentThumb] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumb((prev) => (prev + 1) % thumbs.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      
      {/* =========================================
          Background Slider (இது Full Screen-ல் இருக்கும்)
          ========================================= */}
      {thumbs.map((thumb, index) => (
        <div
          key={`bg-${index}`}
          className={`hero-bg ${index === currentThumb ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${thumb.image})`,
          }}
        ></div>
      ))}
      
      {/* =========================================
          Content Limiter (இது 2000px-க்கு மேல் விரியாது)
          ========================================= */}
      <div 
        className="hero-content-limiter" 
        style={{ 
          maxWidth: '2000px', 
          margin: '0 auto', 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          zIndex: 2 // Background-க்கு மேலே தெரிய
        }}
      >
        {/* மெயின் கன்டென்ட் */}
        <main className="main-content">
          <div className="left-indicator-bar">
              <div className={`indicator-dot top-dot ${currentThumb % 2 === 0 ? 'filled' : 'hollow'}`}></div>
              <div className="vertical-line"></div>
              <div className={`indicator-dot bottom-dot ${currentThumb % 2 === 0 ? 'hollow' : 'filled'}`}></div>
            </div>

          <div className="text-section">
            <h1 className="hero-title" key={`title-${currentThumb}`}>
              {thumbs[currentThumb].heading}
            </h1>
            <p className="hero-description" key={`desc-${currentThumb}`}>
              {thumbs[currentThumb].description}
            </p>

            <div className="thumbnail-card">
              <img
                key={currentThumb}
                src={thumbs[currentThumb].image}
                alt={thumbs[currentThumb].title}
                className="thumb-img thumb-fade"
              />
              <div className="thumbnail-footer">
                <span className="thumb-title">{thumbs[currentThumb].title}</span>
                <a href={thumbs[currentThumb].link} className="thumb-arrow">➔</a>
              </div>
            </div>

            <div className="action-row">
              <a href="#add" className="plus-btn">🞡</a>
              <Link to="start-a-project" className="book-call-btn">Book a Call</Link>
            </div>
          </div>
        </main>

        <div className="watermark-wrap">
          <div className="huge-watermark" key={`wm-${currentThumb}`}>
            {thumbs[currentThumb].watermark.split("").map((letter, index) => (
              <span
                key={index}
                className="reveal-letter"
                style={{ animationDelay: `${index * 0.1}s` }} 
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div> {/* End of Content Limiter */}

    </div>
  );
};

export default Home;