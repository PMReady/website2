import React from 'react'
import Navbar from '../components/NavBar/Navbar.js';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary.js';
import "./Home.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll'


const Description = () => {
  return(
    <div>
      <span>Don't know what you want to do in the future?</span>< br/>
      <span>Try Product Management</span> 
    </div>
  )
}


const Home = () => {

  return (
    <>
    <div className="home-container">
      <Navbar />
      <Header button={true} title="It's time to become a Product Manager" description={<Description/>}/>
      {/* <div ref={node}></div> */}
      <div className="summary-container">
        <AnimationOnScroll offset={600} duration={0.7} animateIn="square-animation" animateOnce={true}>
          <Summary />
        </AnimationOnScroll>
      </div>
      
      {/* // className={`${isVisible ? "square-animation" : ''}`}>>  */}
    </div>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    </>
    
  )
}

export default Home;