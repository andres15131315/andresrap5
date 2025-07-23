// src/pages/Products.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ agregarAlCarrito }) => {
  return (
    <div>
      <ProductList agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default Products;
