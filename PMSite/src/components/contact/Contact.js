import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="pm__contact">
      <div className="contact-form_content">
        <h1>CONTACT US</h1>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the club email here.</p>
      </div>
      <div className='contact-form'>
        <form>
            <ul>
                <li className='half'>
                  <label>First Name*</label>
                    <input type="text" name="name" placeholder="First Name" required />
                </li>
                <li className='half'>
                <label>First Name*</label>
                    <input type="email" name="email" placeholder="Last Name" required />
                </li>
                <li className='half'>
                <label>Email*</label>
                    <input placeholder="Email" type="text" name="email" required />
                </li>
                <li>
                <label>Your Inquiry</label>
                    <textarea className="message" placeholder='Message' name="message" required></textarea>
                </li>
                <li>
                    <button type="submit" className='flat-button'>Submit</button>
                </li>
            </ul>
        </form>
    </div>
    </div>
  )
}

export default Contact