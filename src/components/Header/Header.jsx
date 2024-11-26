import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your Favourite Vegetables and Seeds Here</h2>
        <p>
          "Order fresh, high-quality seeds and vegetables directly to your
          doorstep with Seeds!" 🌱🥕
        </p>
        <Link to="/items">
          <button className="view-menu-button">View Menu</button>
        </Link>
      </div>
    </div>
  );
}
