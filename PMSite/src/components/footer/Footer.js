import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import baseURI from '../../baseurl'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  const URI = `/${baseURI}`;
  return (
    <div className="pm__footer-container">
      <div className="pm__footer-header">
        <h1><HashLink smooth to={URI+"/#home"}>PMReady</HashLink></h1>
        <p>Couldn't find what you were looking for? Contact us through email to get in touch.</p>
      </div>
      <div className="pm__footer-links">
        <h1>Contact Us</h1>
        <p><a href="https://www.linkedin.com/company/pmready/">LinkedIn</a></p>
        <p><a href="https://www.instagram.com/bupmready/">Instagram</a></p>
        <p><Link className="a" to="/contact">Contact Form</Link></p>
      </div>
      <div className="pm__footer-links">
        <h1>Learn More</h1>
        <p><HashLink smooth to={URI+"/about#our-mission"}> 
            Our Mission
          </HashLink></p>
       
        <p><HashLink smooth to={URI+"/about#team-page"}> 
            Our Team
          </HashLink></p>
        <p><HashLink smooth to={URI+"/events#events"}>Events</HashLink></p>
      </div>
      <div className="pm__footer-links">
        <h1>Get Involved</h1>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSehGxF8NR1nl4X58WX6CrA5FEPnIyx5Rd4bLAQkER9jeWYZ1w/viewform">Mailing List Signup</a></p>
      </div>
    </div>
  )
}

export default Footer