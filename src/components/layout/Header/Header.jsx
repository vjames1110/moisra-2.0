import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

// Logo Import

import logo from "../../../logos/moisra-logo-3.png"


import MegaMenu from "../MegaMenu/MegaMenu";

import "./Header.css";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">

      <div className="container header-container">

        <Link to="/" className="logo">
          <img 
            src={logo}
            alt="MOISRA Logo"
          ></img>    
        </Link>

        <nav className={`nav ${mobileMenu ? "active" : ""}`}>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <MegaMenu />

          <Link to="/clients">Clients</Link>

          <Link to="/contact">Contact</Link>

          <button className="quote-btn">
            Get Quote
          </button>

        </nav>

        <button
          className="mobile-toggle"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? (
            <IoClose />
          ) : (
            <HiBars3 />
          )}
        </button>

      </div>

    </header>
  );
}

export default Header;