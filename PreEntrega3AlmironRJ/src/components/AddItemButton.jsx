import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/AddItemButton.css";

const AddItemButton = ({ item, quantity, setQuantity }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
    }
  };

  return (
    <div className="add-item-button-container">
      <button className="add-item-button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default AddItemButton;