// ProductDetails.jsx
import React from 'react';
import '../styles/ProductDetails.css';

const ProductDetails = ({ product, addToCart, closeDetails }) => {
  return (
    <div className="product-details-container">
      <img className="product-details-img" src={product.image} alt={product.name} />
      <div className="product-details-info">
        <div className="close-button" onClick={closeDetails}>&times;</div>
        <div className="product-description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className="product-price">
          <strong>Precio:</strong> ${product.price.toFixed(2)}
        </div>
        {product.ingredients && (
          <div className="product-ingredients">
            <h3>Ingredientes:</h3>
            <p>{product.ingredients}</p>
          </div>
        )}
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  );
  };
  
  export default ProductDetails;
  
