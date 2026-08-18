
import '../../pages/Project/css/ProjectFAQ.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
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

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const FAQSection = () => {
  // ஆரம்பத்தில் எந்த கேள்வியும் திறந்திருக்கக் கூடாது என்பதால் 'null' கொடுக்கப்பட்டுள்ளது
  const [activeIndex, setActiveIndex] = useState(null);

  // க்ளிக் செய்யும் போது, ஏற்கனவே திறந்திருந்தால் மூடிவிடும் (null), இல்லையென்றால் திறக்கும் (index)
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="label-wrapper1 stit">
          <span className="orange-square4"></span> Client Resources
        </div>
        <h1 className="faq-title">Got Questions?</h1>
        <p className='faq-sub des'>We've answered some of the most common<br/> questions about our services.</p>
        <Link to="/start-a-project" onClick={scrollToTop}><button className="faq-btn">
          <span className="faq-btn-text stit">Contact Us</span>
          <span className="faq-btn-arrow"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
  strokeWidth="1.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span>
        </button></Link>
      </div>

      <div className="faq-accordion1">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <span className='des'>{item.question}</span>
              <span className="icon">{activeIndex === index ? '—' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer sdes">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;