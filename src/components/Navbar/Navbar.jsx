import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={closeMobileMenu}
      >
        <li>
          <NavLink exact to="/" activeClassName="active" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/Tomato Seeds"
            activeClassName="active"
            className="nav-item"
          >
            Tomato Seeds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/Chilli Seeds"
            activeClassName="active"
            className="nav-item"
          >
            Chilli Seeds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/Vegetable Seeds"
            activeClassName="active"
            className="nav-item"
          >
            Vegetable Seeds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/Flower Seeds"
            activeClassName="active"
            className="nav-item"
          >
            Flowers
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active" className="nav-item">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" activeClassName="active" className="nav-item">
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
