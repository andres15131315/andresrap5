// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, []);

  const productosFiltrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>

      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productosFiltrados.map(p => (
            <Card
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              category={p.category}
              rating={p.rating}
              onAddToCart={() => agregarAlCarrito(p)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
