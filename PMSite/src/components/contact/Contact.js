import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import "./Contact.scss"

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
        'service_q7q8zzx', //service
        'template_w5nbqfw', // template code
        refForm.current,
        'MWiogrQ3pPEK0TmdF' //INSERT PUBLIC API KEY HERE
    ).then (
        () => {
            alert('Message successfully sent!');
            window.location.reload(false);
        },
        () => {
            alert('Failed to send the message, try again');
        }
    )
  }

  return (
    <div className="pm__contact">
      <div className="contact-form_content">
        <h1>CONTACT US</h1>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the club email here.</p>
      </div>
      <div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <li className='half'>
                  <label>First Name*</label>
                    <input type="text" name="firstName" placeholder="First Name" required />
                </li>
                <li className='half'>
                <label>Last Name*</label>
                    <input type="text" name="lastName" placeholder="Last Name" required />
                </li>
                <li className='half'>
                <label>Email*</label>
                    <input placeholder="Email" type="text" name="email" required />
                </li>
                <li>
                <label>Your Inquiry*</label>
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