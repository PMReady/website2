import { React, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.scss"
import Logo from "../../assets/pmready-logo.png"

// BEM Naming used

// TODO: Eventually replace a tags with actual <Link> using react router dom

const Links = () => {
  return(
    <>
      <p><NavLink activeclassname="active" to="/">Home</NavLink></p>
      <p><NavLink activeclassname="active" to="/about">About</NavLink></p>
      <p><NavLink activeclassname="active" to="/events">Events</NavLink></p>
      <p><NavLink activeclassname="active" to="/contact">Contact Us</NavLink></p>
    </>
  )
}


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pm__navbar">
      <div className="pm__navbar-links">
        <div className="pm__navbar-links_logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="pm__navbar-links_container">
          <Links />
        </div>
      </div>
      <div className="pm__navbar-menu">
        { toggleMenu ? 
        <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : 
        <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="pm__navbar-menu_container scale-up-center">
            <div className="pm__navbar-menu_container-links">
              <Links />
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar