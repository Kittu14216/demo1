import React from "react";
import { useParams, Link } from "react-router-dom";
import { food_list } from "../../assets/assets"; // Adjust the import path as necessary
import "./CategoryItems.css";

const CategoryPage = () => {
  const { category } = useParams();
  const items = food_list.filter((food) => food.category === category);

  if (items.length === 0) return <div>No items found for this category</div>;

  return (
    <div className="category-page">
      <h2 className="CategoryHeading">{category}</h2>
      <div className="food-items">
        {items.map((food) => (
          <Link to={`/item/${food._id}`} key={food._id} className="food-item">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
