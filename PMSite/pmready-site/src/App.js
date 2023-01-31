import React from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';


const App = () => {
  return (
    // <div className='App'>
    //     <div className='gradient__bg'>
    //         <Navbar />
    //         <Header />
    //     <div>
    //     </div>
    //         <About />
    //         <Contact />
    //         <Events />
    //         <Footer />
    //     </div>
    // </div>
    <Routes>
      <Route path="/"/>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />

    </Routes>
    
        
  )
}

export default App;