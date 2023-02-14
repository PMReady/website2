import React from 'react'
//import Header from '../components/header/Header'
import Navbar from '../components/NavBar/Navbar'
import "./Events.scss"
import EventImage from "../assets/events-image.jpg"
import Footer from '../components/footer/Footer'


/* 
NOTE:
Embedded calendar used is Styled Calendar and uses the iframe componenet as well as a script call in public->index.html
*/
const Events = () => {
  const calendarStyles = {
    height: "1000px",
    width: "100%",
    border: "none"
  }
  return (
    <div className="pm__events-page">
        <Navbar />
        <div id="events" className="events-page_header">
          <div className="events-page_header-content slide-right">
            <h1>Upcoming Events!</h1>
            <p>Welcome to PMReady! We have event every few weeks. Look at the calendar down below, and mark your calendar! Every one is welcome to attend our events!</p>
            <button>Subscribe to our Mailing List</button>
          </div>
          <img src={EventImage} alt="events"></img>
        </div>
        <div className="events-page_calendar">
          <iframe src="https://embed.styledcalendar.com/#dprqr3y2l1B18ryLq4b9" title="Styled Calendar" className="styled-calendar-container" data-cy="calendar-embed-iframe" style={calendarStyles}></iframe>
        </div>
        <Footer />
    </div>

  )
}

export default Events