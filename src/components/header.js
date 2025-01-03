import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Header = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 700);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 700);

      // Reset sidebar state when switching screen sizes
      if (window.innerWidth > 700) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/Homepage">Amresh</Link>
        </div>

        {/* Sidebar Toggle Button for Small Screens */}
        {isScreenSmall && (
          <div className="menu-bars" onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </div>
        )}

        {/* Navbar List for Large Screens */}
        {!isScreenSmall && (
          <ul className="navbar-list">
            <li><Link to="/Homepage">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li>
              <a href="mailto:amreshbkp0111@gmail.com" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/icons8-gmail.svg`} alt="Gmail" />
              </a>
            </li>
            <li>
              <a href="https://github.com/amresh1kumar" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/icons8-github.svg`} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://x.com/amresh1kumar" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/icons8-x.svg`} alt="X" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amresh1kumar/" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/icons8-linkedin%20(2).svg`} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        )}

        {/* Sidebar for Small Screens */}
        {isScreenSmall && (
          <nav className={showSidebar ? "nav-menu active" : "nav-menu"}>
            {/* Close Button */}
            <div className="close-button">
              <AiIcons.AiOutlineClose onClick={toggleSidebar} />
            </div>

            <ul className="nav-menu-items">
              <li><Link to="/Homepage">Home </Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Resume">Resume</Link></li>
              <li className="nav-item-4">
                <a href="mailto:amreshbkp0111@gmail.com" target="_blank">
                  <img src={`${process.env.PUBLIC_URL}/icons8-gmail.svg`} alt="Gmail" />
                </a>
              </li>
              <li className="nav-item-5">
                <a href="https://github.com/amresh1kumar" target="_blank">
                  <img src={`${process.env.PUBLIC_URL}/icons8-github.svg`} target="new" alt="GitHub" />
                </a>
              </li>
              <li className="nav-item-6">
                <a target="_blank" href="https://x.com/amresh1kumar">
                  <img src={`${process.env.PUBLIC_URL}/icons8-x.svg`} alt="X" />
                </a>
              </li>
              <li className="nav-item-7">
                <a target="_blank" href="https://www.linkedin.com/in/amresh1kumar/">
                  <img src={`${process.env.PUBLIC_URL}/icons8-linkedin%20(2).svg`} alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;
