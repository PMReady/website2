import React from 'react'
import { Header } from '../components/index.js';
import Navbar from '../components/NavBar/Navbar.js';
import "./About.scss";


// Header for the main home page

const About = () => {
  return (
    <div className="pm__about-page">
      <Navbar />
      <Header title="Why Product Management?" description="This is the about page"/>
    </div>
  )
}

export default About;