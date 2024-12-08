import React, { useState } from "react";
import { db } from "../firebase-config"; 
import { collection, addDoc } from "firebase/firestore"; 
import "../styles/Checkout.css"; 
const Checkout = ({ cart, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    country: "",
    phone: "",
  });
  const [orderStatus, setOrderStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!formData.name || !formData.lastName || !formData.address || !formData.country || !formData.phone) {
      setOrderStatus("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Almacenar la orden en Firebase
      const orderRef = await addDoc(collection(db, "orders"), {
        customer: formData,
        items: cart,
        totalPrice,
        date: new Date(),
      });

      setOrderStatus(`Orden realizada con éxito. ID: ${orderRef.id}`);
      
      
      setFormData({
        name: "",
        lastName: "",
        address: "",
        country: "",
        phone: "",
      });
    } catch (error) {
      setOrderStatus("Hubo un error al realizar la orden, por favor intenta de nuevo.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Formulario de Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-field">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>País:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="checkout-btn">Finalizar Compra</button>
      </form>

      {orderStatus && <p className="order-status">{orderStatus}</p>}
    </div>
  );
};

export default Checkout;
