import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <div className="cart-icon">
          <span className="cart-icon-img">🛒</span>
          {totalQuantity > 0 && (
            <div className="cart-item-count">{totalQuantity}</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
