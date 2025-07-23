import React from 'react';

const CartPage = ({ carrito }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 && <p>No hay productos en el carrito.</p>}

      {carrito.length > 0 && (
        <ul>
          {carrito.map((producto, i) => (
            <li key={i}>
              {producto.title} - ${producto.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
