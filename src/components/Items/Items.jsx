import React from "react";
import { Link } from "react-router-dom";
import { food_list } from "../../assets/assets"; // Adjust the import path as necessary
import "./Items.css";

const FoodList = () => {
  // Group food items by category
  const categories = food_list.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="food-list-container">
      {Object.keys(categories).map((category) => (
        <div key={category} className="food-category">
          <h2>{category}</h2>
          <div className="food-items">
            {categories[category].map((food) => (
              <div key={food._id} className="food-item">
                <Link to={`/item/${food._id}`}>
                  <img
                    src={food.image}
                    alt={food.name}
                    className="food-image"
                  />
                </Link>
                <h3>{food.name}</h3>
                <p>₹{food.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
