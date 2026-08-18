import { useState } from 'react';
import './css/faqSection.css';
import { Link } from 'react-router-dom';

const faqsData = [
  { 
    question: 'What services does Calibre offer?',
    answer: 'We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects.' 
  },
  { 
    question: 'How does a typical project start?',
    answer: 'We begin with an initial consultation to understand your vision and requirements.'
  },
  { 
    question: 'Do you handle renovations as well as design?',
    answer: 'Yes, we provide end-to-end renovation support alongside our design services.' 
  },
  { 
    question: 'Can you work with an existing space or furniture?', 
    answer: 'Absolutely, we can integrate your existing pieces into our design plans.' 
  },
  { 
    question: 'What is the typical project timeline?', 
    answer: 'Timelines vary based on project scope, which we discuss during our initial assessment.' 
  },
];

const FaqsSection = () => {
  // 0 means the first question is open by default. (Change to null if you want all closed initially)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    // Check if the clicked item is already active. If yes, close it (set to null). If no, open it (set to index).
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sk-faq-section">
      <div className="sk-faq-header">
        <div className="sk-faq-labels-wrapper1 stit">
          <span className="sk-faq-orange-square4"></span> Client Resources
        </div>
        <h1 className="sk-faq-title alert">Got Questions?</h1>
        <p className="sk-faq-sub des">We've answered some of the most common questions about our services.</p>
        <Link to="/start-a-project">
        <button className="sk-faq-btn">
          <span className="sk-faq-btn-text stit">Contact Us</span>
          <span className="sk-faq-btn-arrow stit">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="28" 
              viewBox="0 0 24 24" 
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
        </Link>
      </div>

      <div className="sk-faq-accordion">
        {faqsData.map((item, index) => (
          <div 
            key={index} 
            className={`sk-faq-item ${activeIndex === index ? 'sk-faq-active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="sk-faq-question">
              <span className='des'>{item.question}</span>
              <span className="sk-faq-icon">{activeIndex === index ? '—' : '+'}</span>
            </div>
            
            {/* The wrapper that handles the animation */}
            <div className={`sk-faq-answer-wrapper ${activeIndex === index ? 'sk-faq-open' : ''}`}>
              <div className="sk-faq-answer">
                <div className="sk-faq-answer-inner sdes">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;