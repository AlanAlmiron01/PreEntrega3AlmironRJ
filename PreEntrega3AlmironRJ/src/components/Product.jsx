import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector"; // Asegúrate de que este componente esté disponible
import "../styles/Product.css";

const Product = ({ product }) => {
  const { id, name, description, price, stock, image } = product;
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <p className="product-stock">Stock disponible: {stock}</p>
        
        <ItemQuantitySelector
          stock={stock}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
