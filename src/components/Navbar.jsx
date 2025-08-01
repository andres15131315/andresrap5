// Importamos React y el componente Link para navegar sin recargar la página
import React from 'react';
import { Link } from 'react-router-dom';

// Componente funcional de la barra de navegacion
const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px', color: 'white' }}>
      {/* Enlace a la pagina de inicio */}
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Inicio</Link>

      {/* Enlace a la pagina de productos */}
      <Link to="/productos" style={{ marginRight: '10px', color: 'white' }}>Productos</Link>

      {/* Enlace a la pagina del carrito */}
      <Link to="/carrito" style={{ color: 'white' }}>Carrito</Link>
    </nav>
  );
};

// Exportamos el componente para usarlo en otros archivos
export default Navbar;
