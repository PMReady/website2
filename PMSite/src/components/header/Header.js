import React from 'react'
import "./Header.scss"
// import image from "../../assets/Home1.png"
import { Link } from 'react-router-dom'

// Header for the main home page


const Header = ({ title, description, button=false, image }) => {
  return (
    <div className="pm__header" id="home">
      <div className="pm__header-image slide-right">
        <img className="slide-right fade-in" src={image} alt="plant" />
      </div>
      <div className="pm__header-content">
        <h1 className='slide-right'>{ title }</h1>
        <div className="pm__header-content_description">
          <p className='slide-right'>{ description }</p>
        </div>

        { button ? 
          <Link to="/about">
            <button className='about-button slide-right'>About Us</button>
          </Link> 
          : 
          <div></div>
        }
        
      </div>

      
    </div>
  )
}

export default Header;