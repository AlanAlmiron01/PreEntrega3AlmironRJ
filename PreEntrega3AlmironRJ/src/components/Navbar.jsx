import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <h1>Termos Stanley</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Inicio</Link>
        <CartWidget cartItems={cartItems} />
      </div>
    </nav>
  );
};

export default Navbar;