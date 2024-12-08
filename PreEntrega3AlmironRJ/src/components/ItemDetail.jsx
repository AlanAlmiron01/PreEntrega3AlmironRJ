import React from "react";
import "../styles/ItemDetail.css";

const ItemDetail = ({ item, onAddToCart }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={`/assets/${item.image}`} alt={item.name} />
      </div>
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="item-detail-price">${item.price}</p>
        <p className="item-detail-stock">Stock: {item.stock}</p>
        <button onClick={() => onAddToCart(item)} className="add-to-cart-btn">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
