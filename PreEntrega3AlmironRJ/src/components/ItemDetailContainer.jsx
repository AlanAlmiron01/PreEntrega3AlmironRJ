import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/productService"; 
import { useParams } from "react-router-dom"; 
import "../styles/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId); 
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]); 

  const handleAddToCart = (item) => {
    
    console.log("Producto agregado al carrito:", item);
  };

  return (
    <div className="item-detail-container">
      {product ? (
        <ItemDetail item={product} onAddToCart={handleAddToCart} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;