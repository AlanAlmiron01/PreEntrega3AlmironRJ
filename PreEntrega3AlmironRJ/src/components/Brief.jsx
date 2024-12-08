// src/components/Brief.jsx

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; 
import "../styles/Brief.css";

const Brief = () => {
  const { cart, getCartTotal, removeFromCart } = useCart();
  const navigate = useNavigate(); 

  // Función para manejar la redirección al checkout
  const handleCheckout = () => {
    navigate("/checkout"); // Redirige al formulario de checkout
  };

  return (
    <div className="brief-container">
      <h2 className="brief-header">Resumen del Carrito</h2>
      <div className="brief-details">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="brief-item">
              <div className="brief-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="brief-item-info">
                <span>{item.name}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Precio: ${item.price}</span>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="brief-total">
          <p>Total: ${getCartTotal()}</p>
          <button className="brief-button" onClick={handleCheckout}>
            Ir al Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Brief;
