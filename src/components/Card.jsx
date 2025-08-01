
import React from 'react';
// Importamos los estilos CSS 
import './Card.css';

// Componente funcional  que recibe props
const Card = ({ title, price, image, category, rating, onAddToCart }) => {
  return (
    // Contenedor principal de la tarjeta del producto
    <div className="card">
      {/* Imagen del producto */}
      <img src={image} alt={title} className="product-img" />

      {/* Título del producto */}
      <h3>{title}</h3>

      {/* Categoria del producto */}
      <p><strong>Categoría:</strong> {category}</p>

      {/* Precio del producto */}
      <p><strong>Precio:</strong> ${price}</p>

      {/* Rating del producto muestra estrellas y cantidad de valoraciones */}
      <p><strong>Rating:</strong> {rating.rate} ⭐ ({rating.count} valoraciones)</p>

      {/* Boton para agregar el producto al carrito, solo si la funcion onAddToCart esta disponible */}
      {onAddToCart && (
        <button onClick={onAddToCart} style={{ marginTop: '10px' }}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

// Exportamos el componente 
export default Card;
