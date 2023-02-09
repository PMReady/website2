import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="pm__footer-container">
      <div className="pm__footer-header">
        <h1>PMReady</h1>
        <p>Couldn't find what you were looking for? Contact us through email to get in touch.</p>
      </div>
      <div className="pm__footer-links">
        <h1>Contact Us</h1>
        <p><a>LinkedIn</a></p>
        <p><a>Instagram</a></p>
        <p><Link className="a" to="/contact">Contact Form</Link></p>
      </div>
      <div className="pm__footer-links">
        <h1>Learn More</h1>
        <p><Link to="/about">Our Mission</Link></p>
        <p><Link to="/about">Team</Link></p>
        <p><Link to="/events">Events</Link></p>
      </div>
      <div className="pm__footer-links">
        <h1>Get Involved</h1>
        <p><a>Mailing List Signup</a></p>
      </div>
    </div>
  )
}

export default Footer