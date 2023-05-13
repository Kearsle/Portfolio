import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/portfolio" className="navbar-logo" onClick={closeMobileMenu}>
            Daniel Kearsley-Brown
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/portfolio/#about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink 
                smooth
                to="/portfolio/#experience" 
                className="nav-links" 
                onClick={closeMobileMenu}
              >
                Experience
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/portfolio/#projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink 
                smooth 
                to="/portfolio/#contact" 
                className="nav-links" 
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
