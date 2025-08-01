// Importamos React y los hooks necesarios
import React, { useEffect, useState } from 'react';
// Importamos el componente para mostrar productos
import Card from './Card';
// Importamos los estilos
import './ProductList.css';

const ProductList = ({ agregarAlCarrito }) => {
  // Estado para productos, estado de carga y texto de busqueda
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);

  // Cargar productos al iniciar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err))
      .finally(() => setLoading(false)); //  sea exito o error, se termina de cargar
  }, []);

  // Filtrar productos segun el texto ingresado por el usuario
  const productosFiltrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        // Texto que aparece cuando el campo está vacío
        placeholder="Buscar por nombre"
        // El valor actual del campo está vinculado al estado 'busqueda'
        value={busqueda}
        // Cada vez que el usuario escribe, actualiza el estado 'busqueda' con el nuevo valor
        onChange={(e) => setBusqueda(e.target.value)}
         // Clase CSS para aplicar estilos personalizados
        className="search-input"
      />

      {/* Mostrar mensaje mientras carga o las tarjetas cuando ya están disponibles */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productosFiltrados.map(p => (
             <Card
            key={p.id} // Clave unica
            title={p.title} // Titulo del producto
             price={p.price} // Precio del producto
            image={p.image} // Imagen del producto
            category={p.category} // Categoria a la que pertenece el producto
            rating={p.rating} // Objeto con la calificacion 
            onAddToCart={() => agregarAlCarrito(p)} // Funcion que se ejecuta cuando se hace clic en "Agregar al carrito", pasando el producto actual
    />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
