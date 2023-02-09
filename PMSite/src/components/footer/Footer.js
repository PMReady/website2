import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="pm__footer-container">
      <div className="pm__footer-header">
        <h1>PMReady</h1>
        <p>Couldn't find what you were looking for? Contact us through email to get in touch.</p>
      </div>
      <div className="pm__footer-links">
        <h1>Contact Us</h1>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>
      <div className="pm__footer-links">
        <h1>Learn More</h1>
        <p>Our Mission</p>
        <p>Team</p>
        <p>Events</p>
      </div>
      <div className="pm__footer-links">
        <h1>Get Involved</h1>
        <p>Mailing List Signup</p>
      </div>
    </div>
  )
}

export default Footer