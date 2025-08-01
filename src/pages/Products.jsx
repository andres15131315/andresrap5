// src/pages/Products.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ agregarAlCarrito }) => {
  return (
     <div>
      {/* Mostramos la lista de productos y le pasamos la funcion para agregar al carrito */}
      <ProductList agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default Products;
