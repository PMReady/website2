import React from 'react'
import Navbar from '../components/NavBar/Navbar.js';
import "./About.scss";
import image from "../assets/testwallpaper.jpg"
import HeaderV2 from '../components/header/HeaderV2.js';
import Footer from '../components/footer/Footer.js';
import TeamCard from '../components/teamcard/TeamCard.js';
import MacyImage from "../assets/Macy-So.jpg"


// Header for the main home page

const About = () => {
  return (
    <div className="pm__about-container">
      <Navbar />
      <HeaderV2 image={image} title="Why Product Management?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <div className="about-page_mission-statement fade-in">
        <h1 className='slide-right'>Our Mission</h1>
        <p className='slide-right'>
        PMReady is a club that aims to promote and educate members of the BU community of the social and technological crossover there are in tech. We hope to build a community oriented and collaborative space for students interested in Project Management that hope to expand their knowledge and experience. We welcome all experience levels and look forward to being welcomed into the CS club community. 
        </p>
      </div>
      
      <div className="about-page_our-team">
        <h1>Our Team</h1>
        <div className="about-page_our-team_cards">
          <TeamCard className="about-card _1" name="Macy So" role="President" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _2" name="Marielle Belomme" role="Vice President" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _3" name="Abigail Guaida" role="Vice President" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _4" name="Manya Bajaj" role="Secretary" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _5" name="Aidan Ruvins" role="Treasurer" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _6" name="Cindy Fremont" role="Event Coordinator" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _7" name="Owen Mariani" role="Event Coordinator" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _8" name="Brianna Li" role="Social Media" link="https://google.com" image={MacyImage} />
          <TeamCard className="about-card _9" name="Derek Xu" role="Digital Media" link="https://google.com" image={MacyImage} />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default About;