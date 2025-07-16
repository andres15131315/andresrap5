import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productos.map(p => (
           <Card key={p.id} title={p.title} price={p.price} image={p.image} category={p.category} rating={p.rating}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
