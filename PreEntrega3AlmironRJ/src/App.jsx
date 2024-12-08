import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import Checkout from "./components/Checkout";
import Brief from "./components/Brief";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCart } from "./context/CartContext"; 
import "./styles/Global.css";

const App = () => {
  const { cart, getCartTotal } = useCart(); 

  const totalPrice = getCartTotal(); 

  return (
    <Router>
      <div className="app">
        <Navbar />
        <CartWidget />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} />} /> {/* Pasa el carrito y el totalPrice como props */}
          <Route path="/brief" element={<Brief />} />
          <Route path="/cart" element={<Brief />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
