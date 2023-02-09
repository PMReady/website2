import React from 'react'
import { useState } from 'react';
import Navbar from '../components/NavBar/Navbar.js';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary.js';
import "./Home.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import image from "../assets/testwallpaper.jpg"

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
  const [animationToggle, setAnimationToggle] = useState(false);

  return (
    <>
    <div className="home-container">
      <Navbar />
      <Header button={true} title="It's time to become a Product Manager" description={<Description/>}/>
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
              <img src={image} alt="plant" />
              <p>Label 1</p>
            </li>
            <li>
              <img src={image} alt="plant" />
              <p>Label 1</p>
            </li>
            </ul>
            <ul>
            <li>
              <img src={image} alt="plant" />
              <p>Label 1</p>
            </li>
            <li>
              <img src={image} alt="plant" />
              <p>Label 1</p>
            </li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
    </>
    
  )
}

export default Home;