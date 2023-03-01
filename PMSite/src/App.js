import React from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';
import baseURI from './baseurl';


const App = () => {
  const URI = `/${baseURI}/`;
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
        <Route path={URI} index element={<Home />} />
        <Route path={URI + "about"} element={<About />} />
        <Route path={URI + "events"} element={<Events />} />
        <Route path={URI + "contact"} element={<Contact />} />

    </Routes>
    
        
  )
}

export default App;