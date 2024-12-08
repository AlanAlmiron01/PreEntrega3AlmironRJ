
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../services/productService"; 
import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); 
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Termos Stanley</h2>
      <ItemList products={products} /> {/* Pasamos los productos al componente ItemList */}
    </div>
  );
};

export default ItemListContainer;