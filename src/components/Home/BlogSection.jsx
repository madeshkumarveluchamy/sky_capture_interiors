
import './css/BlogSection.css';
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'How thoughtful architecture elevates everyday living', date: 'Jun 9, 2026', location: 'Coimbatore', img: blog1 },
  { id: 2, title: 'Why spatial flow matters in residential architecture', date: 'Sep 5, 2025', location: 'Coimbatore', img: blog2 },
  { id: 3, title: 'Sustainable design principles in modern architecture', date: 'Feb 11, 2026', location: 'Coimbatore', img: blog3 },
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blogs">
      <div className="blog-header">
        <div className="label-tag3 stit ">
          <span className="orange-square3"></span> Architectural Insights
        </div>
        <div className="title-wrapper-blog ">
          <h2 className='tit'>Blog Articles</h2>
        </div>
        <div className="actions-wrapper">
          <p className='des'>We share insights on design, planning, and our process.</p>
          <Link to="/start-a-project"><button className="blog-btn">
    <span className="blog-btn-text des">Read More</span>
    <span className="blog-btn-arrow des"><svg 
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
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="img-holder">
              <img src={post.img} alt={post.title} />
              <span className="cat-pill sdes">Architecture</span>
            </div>
            <div className="meta-info sdes">{post.date} • {post.location}</div>
            <h3 className='stit'>{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;