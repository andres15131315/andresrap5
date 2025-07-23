// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<CartPage carrito={carrito} />} />
      </Routes>
    </>
  );
};

export default App;
