// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ title, price, image, category, rating, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>
      <p><strong>Categoría:</strong> {category}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Rating:</strong> {rating.rate} ⭐ ({rating.count} valoraciones)</p>
      {onAddToCart && (
        <button onClick={onAddToCart} style={{ marginTop: '10px' }}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default Card;
