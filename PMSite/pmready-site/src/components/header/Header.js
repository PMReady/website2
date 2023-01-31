import React from 'react'
import "./Header.css"
import image from "../../assets/sprout.png"
import { Link } from 'react-router-dom'

// Header for the main home page


const Header = () => {
  return (
    <div className="pm__header section_padding" id="home">
      <div className="pm__header-content">
        <h1>Call To Action Statement Here</h1>
        <div className="pm__header-content_description">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
        </div>
        <Link to="/about">
          <button>About Us</button>
        </Link>
      </div>

      <div className="pm__header-image">
        <img src={image} alt="plant" />
      </div>
    </div>
  )
}

export default Header;