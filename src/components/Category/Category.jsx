import React from "react";
import { Link } from "react-router-dom";
import { menu_list } from "../../assets/assets"; // Adjust the import path as necessary
import "./Category.css"; // Ensure you have appropriate styles

const MenuList = () => {
  return (
    <div className="menu-list-container">
      {menu_list.map((menu, index) => (
        <Link
          to={`/category/${menu.menu_name}`} // Use menu_name for the link
          key={index}
          className="menu-link"
        >
          <div className="menu-card">
            <img
              src={menu.menu_image}
              alt={menu.menu_name}
              className="menu-image"
            />
            <h3>{menu.menu_name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
