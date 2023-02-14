import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/NavBar/Navbar'
import "./Events.scss"


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
        <Header title="Events" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
        <div className="events-page_calendar">
          <iframe src="https://embed.styledcalendar.com/#dprqr3y2l1B18ryLq4b9" title="Styled Calendar" className="styled-calendar-container" data-cy="calendar-embed-iframe" style={calendarStyles}></iframe>
        </div>
    </div>

  )
}

export default Events