import React from 'react'
import "./HeaderV2.scss"
// import image from "../../assets/Home1.png"
import { Link } from 'react-router-dom'

// Header for the main home page


const HeaderV2 = ({ title, description, button=false, image }) => {
  return (
    <div className="pm__header-version_two" id="home">
      <div className="pm__header-content">
        <h1 className='slide-right'>{ title }</h1>
        <div className="pm__header-content_description">
          <p className='slide-right'>{ description }</p>
        </div>
        

        { button ? 
          <Link to="/about">
            <button className='slide-right'>About Us</button>
          </Link> 
          : 
          <div></div>
        }
        
      </div>
      <div className="pm__header-image slide-right">
            <img className="slide-right fade-in" src={image} alt="plant" />
    </div>
      
    </div>
  )
}

export default HeaderV2;