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
      {/* Definicion de las rutas  */}
      <Routes>
        {/* Pagina de inicio */}
        <Route path="/" element={<Home />} />

        {/* Pagina de productos, se le pasa la funcion agregarAlCarrito como prop */}
        <Route path="/productos" element={<Products agregarAlCarrito={agregarAlCarrito} />} />

        {/* Pagina del carrito, se le pasa el estado carrito como prop */}
        <Route path="/carrito" element={<CartPage carrito={carrito} />} />
      </Routes>
    </>
  );
};

export default App;
