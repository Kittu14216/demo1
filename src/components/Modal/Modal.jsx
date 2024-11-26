import React from "react";
import { useParams } from "react-router-dom";
import { food_list } from "../../assets/assets"; // Adjust the import path as necessary
import "./Modal.css"; // Ensure you have appropriate styles

const ItemDetail = () => {
  const { id } = useParams();
  const item = food_list.find((food) => food._id === id);

  if (!item) return <div>Item not found</div>;

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} className="item-image" />
      <p>
        <strong>Price:</strong> ₹{item.price}
      </p>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Ingredients:</strong>{" "}
        {item.ingredients || "Ingredients not specified"}
      </p>
      <p>
        <strong>Process:</strong> {item.process || "Process not specified"}
      </p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ItemDetail;
