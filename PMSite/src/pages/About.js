import React from 'react'
import Navbar from '../components/NavBar/Navbar.js';
import "./About.scss";
import image from "../assets/about-image.jpg"
import HeaderV2 from '../components/header/HeaderV2.js';
import Footer from '../components/footer/Footer.js';
import TeamCard from '../components/teamcard/TeamCard.js';
import TeamImage from "../assets/eboard/index.js"


// Header for the main home page

const About = () => {
  return (
    <div className="pm__about-container">
      <Navbar />
      <HeaderV2 image={image} title="Why Product Management?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <div id="our-mission" className="about-page_mission-statement fade-in">
        <h1 className='slide-right'>Our Mission</h1>
        <p className='slide-right'>
        PMReady is a club that aims to promote and educate members of the BU community of the social and technological crossover there are in tech. We hope to build a community oriented and collaborative space for students interested in Project Management that hope to expand their knowledge and experience. We welcome all experience levels and look forward to being welcomed into the CS club community. 
        </p>
      </div>
      
      <div id="team-page" className="about-page_our-team">
        <h1>Our Team</h1>
        <div className="about-page_our-team_cards">
          {/* There is hover effect, maybe have eboard member quote showing */}
          <TeamCard className="about-card _1" name="Macy So" role="President" link="https://www.linkedin.com/in/macyso/" image={TeamImage.Macy} />
          <TeamCard className="about-card _2" name="Marielle Belomme" role="Vice President" link="https://www.linkedin.com/in/msbelomme/" image={TeamImage.Marielle} />
          <TeamCard className="about-card _3" name="Abigail Gualda" role="Vice President" link="https://www.linkedin.com/in/abigail-gualda/" image={TeamImage.Abby} />
          <TeamCard className="about-card _4" name="Manya Bajaj" role="Secretary" link="https://www.linkedin.com/in/manya-bajaj-a41566252" image={TeamImage.Manya} />
          <TeamCard className="about-card _5" name="Aidan Ruvins" role="Treasurer" link="https://www.linkedin.com/in/aidan-ruvins" image={TeamImage.Aidan} />
          <TeamCard className="about-card _6" name="Cindy Fremont" role="Event Coordinator" link="http://linkedin.com/in/cindy-frempong-7567631a3" image={TeamImage.Cindy} />
          <TeamCard className="about-card _7" name="Owen Mariani" role="Event Coordinator" link="http://linkedin.com/in/owen-mariani" image={TeamImage.Owen} />
          <TeamCard className="about-card _8" name="Brianna Li" role="Social Media" link="https://www.linkedin.com/in/lbrianna" image={TeamImage.Brianna} />
          <TeamCard className="about-card _9" name="Derek Xu" role="Digital Media" link="https://www.linkedin.com/in/xuderek04/" image={TeamImage.Derek} />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default About;