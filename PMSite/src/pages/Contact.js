import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/NavBar/Navbar'
import ContactForm from "../components/contact/Contact"
import "./Contact.scss"
const Contact = () => {
  return (
    <div className="pm__contact-page">
        <Navbar />
        <ContactForm />
        <div className="contact-page_newsletter">
          <h1>Subscribe to our Newsletter</h1>
          <h2>Join our mailing list to be up to date with the latest news and updates from us.</h2>
          
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSehGxF8NR1nl4X58WX6CrA5FEPnIyx5Rd4bLAQkER9jeWYZ1w/viewform" className="newsletter-form">
            {/* <input type="email" placeholder="Email*" /> */}
              <button type="submit">Subscribe</button>

          </form>
          
        </div>
        <Footer />
    </div>

  )
}

export default Contact