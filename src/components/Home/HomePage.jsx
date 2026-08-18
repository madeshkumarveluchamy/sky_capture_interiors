import Home from "./Home"
import Approach from "./Approach"
import Story from "./Story"
import ServicesSection from "./ServicesSection"
import FeaturedWorks from "./FeaturedWorks"
import VoicesOfClients from "./VoicesOfClients"
import ExperienceSection from "./ExperienceSection"
import TeamSection from "./TeamSection"
import BlogSection from "./BlogSection"
import FAQSection from "./FAQSection"
import "./css/HomePage.css"


const HomePage = () => {
  return (
    <div>
    <Home/>
    <Story />
    <Approach />
    <ServicesSection/>
    <FeaturedWorks/>
    <VoicesOfClients/>
    <ExperienceSection/>
    <TeamSection/>
    <BlogSection/>
    <FAQSection/>
  
    
    </div>
  )
}

export default HomePage