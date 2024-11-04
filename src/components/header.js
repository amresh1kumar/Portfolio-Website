import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div>
         <header>
            <nav className="navbar">
               <ul className="navbar-list">
                  <li>
                     <Link to="/Homepage">Amresh</Link>
                  </li>
                  <li>
                     <Link to="/Homepage">Home</Link>
                  </li>
                  <li>
                     <Link to="/About">About</Link>
                  </li>
                  <li>
                     <Link to="/Resume">Resume</Link>
                  </li>
                  <li>
                     <a href="mailto:amreshbkp0111@gmail.com">
                        <img src={`${process.env.PUBLIC_URL}/icons8-gmail.svg`} alt="Gmail" />
                     </a>
                  </li>
                  <li>
                     <a href="https://github.com/amresh1kumar">
                        <img src={`${process.env.PUBLIC_URL}/icons8-github.svg`} alt="GitHub" />
                     </a>
                  </li>
                  <li>
                     <a href="https://x.com/amresh1kumar">
                        <img src={`${process.env.PUBLIC_URL}/icons8-x.svg`} alt="X" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/amresh1kumar/">
                        <img src={`${process.env.PUBLIC_URL}/icons8-linkedin%20(2).svg`} alt="LinkedIn" />
                     </a>
                  </li>
               </ul>
            </nav>
         </header>
      </div>
   );
};

export default Header;
