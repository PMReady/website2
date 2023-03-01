import React from 'react'
//import { useState } from 'react';
import Navbar from '../components/NavBar/Navbar.js';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary.js';
import "./Home.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import logo from "../assets/Home1.png";
import image1 from "../assets/Program1.jpg"
import image2 from "../assets/Program2.jpg"
import image3 from "../assets/Program3.jpg"
import image4 from "../assets/Program4.jpg"
import Footer from '../components/footer/Footer.js';

const Description = () => {
  return(
    <div>
      <span>Don't know what you want to do in the future?</span>< br/>
      <span>Try Product Management</span> 
    </div>
  )
}


const Home = () => {

  // toggle animations
  //const [animationToggle, setAnimationToggle] = useState(false);

  const animationToggle = false;
  return (
    <>
    <div className="home-container">
      <Navbar />
      <Header image={logo} button={true} title="It's time to become a Product Manager!" description={<Description/>}/>
      <div className="summary-container">
        { animationToggle ? 
          <AnimationOnScroll offset={600} duration={0.7} animateIn="square-animation" animateOnce={true}>
            <Summary />
          </AnimationOnScroll>
        :
          <Summary />
        }
        

      </div>
      <AnimationOnScroll offset={400} duration={1} animateIn="fade-in" animateOnce={true}>
        <div className="program-container">
          <h1 className="program-container_title">Our Program</h1>
          <div className="program-container_content">
            <ul>
            <li>
              <img src={image1} alt="plant" />
              <p>Phase 1: Research</p>
            </li>
            <li>
              <img src={image2} alt="plant" />
              <p>Phase 2: Planning</p>
            </li>
            </ul>
            
            <ul>
            <li>
              <img src={image3} alt="plant" />
              <p>Phase 3: Prototype</p>
            </li>
            <li>
              <img src={image4} alt="plant" />
              <p>Phase 4: Pitching</p>
            </li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>

      <Footer />
    </div>
    </>
    
  )
}

export default Home;