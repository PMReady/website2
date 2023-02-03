import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/NavBar/Navbar'
import "./Events.scss"

const Events = () => {
  return (
    <div className="pm__events-page">
        <Navbar />
        <Header title="Events" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
        <div>Events</div>
    </div>

  )
}

export default Events