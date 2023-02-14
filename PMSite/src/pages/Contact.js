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
          
          <form className="newsletter-form">
            <input type="email" placeholder="Email*" />
            <button>Subscribe</button>
          </form>
          
        </div>
        <Footer />
    </div>

  )
}

export default Contact