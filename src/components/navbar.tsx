import React, { useState } from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/CHATTER.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="parent-nav">
      <div className="navbar-container">
        <div>
          <a href="#" className="navbarLogo">
            <img src={Logo} alt="logo" className="navbarLogoImg" />
          </a>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`navbarLinks ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <div className="authButtonsContainer">
            <button className="authButton">
              <div className="authButtonContent">
                <div className="authButtonText">Log in</div>
              </div>
            </button>
            <button className="authButton signupButton">
              <div className="authButtonContent">
                <div className="authButtonText">Sign up</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
