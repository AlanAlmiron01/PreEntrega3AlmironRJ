import React from "react";

const ItemQuantitySelector = ({ stock, quantity, setQuantity }) => {
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;