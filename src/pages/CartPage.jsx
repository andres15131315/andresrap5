import React from 'react';

const CartPage = ({ carrito }) => {
  return (
    <div>
      {/* Titulo principal de la pagina del carrito */}
      <h2>Carrito de Compras</h2>

      {/* Si el carrito esta vacío, mostramos un mensaje */}
      {carrito.length === 0 && <p>No hay productos en el carrito.</p>}

      {/* Si hay productos, los listamos */}
      {carrito.length > 0 && (
        <ul>
          {carrito.map((producto, i) => (
            <li key={i}>
              {/* Mostramos el título y precio de cada producto */}
              {producto.title} - ${producto.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
