import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import panBueno from '../images/panBueno.jpg';
import baguette from '../images/baguette.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import panBono from '../images/panBono.jpg';
import alfajor from '../images/Alfajor.jpg';
import galletaMantequilla from '../images/galletaMantequilla.jpg';
import bannerProductos from '../images/bannerProductos.jpg';
import '../styles/ProductList.css';
import '../styles/ProductDetails.css';

const ProductList = ({ addToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };


  // Datos simulados de productos
  const products = [
    { id: 1, name: 'Pan el bueno', price: 3500, description: 'pan bien bueno', image: panBueno },
    { id: 2, name: 'Torta chocolate', price: 7500, description: 'torta de chocolate de la buena', image: tortaChocolate },  
    { id: 3, name: 'Baguette', price: 3500, description: 'pan crujiente y loco', image: baguette },
    { id: 4, name: 'Pan de bono', price: 3000, description: 'el mejor pan del mundo', image: panBono },
    { id: 5, name: 'Alfajor', price: 2000, description: 'deliciosa galleta argentina', image: alfajor },
    { id: 6, name: 'galleta mantequilla', price: 2500, description: 'galleta de mantequilla con chips de chocolate', image: galletaMantequilla },
  ];

  return (
    <div className='product-container'>
      <div className="banner">
        <img className="banner-image" src={bannerProductos} alt="banner imagen"/>
        <div className="banner-description">
          <h2>Descubre nuestras delicias</h2>
          <p>En nuestra panadería, horneamos con pasión y tradición. Cada bocado es una experiencia única, llena de sabores auténticos y frescura inigualable.</p>
          <p>No te pierdas nuestras ofertas especiales. ¡Ven y disfruta de lo mejor en panadería!</p>
      </div>
    </div>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-card">
            <img className="product-img" src={product.image} alt={product.name} onClick={() => openDetails(product)} />
              <div className="card-body">
                <p>{product.description}</p>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      {selectedProduct && (
        <div className="overlay" onClick={closeDetails}>
          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
            closeDetails={closeDetails}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;

