import React from 'react'
import { Header } from '../components/index.js';
import Navbar from '../components/NavBar/Navbar.js';


// Header for the main home page

const About = () => {
  return (
    <div className="pm__about-page">
      <Navbar />
      <Header title="About Us" description="This is the about page"/>
    </div>
  )
}

export default About;