import React, { useState, useEffect } from 'react';
import confirmado from '../icons/confirmado.ico';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart, decreaseQuantity, increaseQuantity }) => {
  
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [proceedToPayment, setProceedToPayment] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      const subtotal = product.price * product.quantity;
      return total + subtotal;
    }, 0);
  };

  useEffect(() => {
    if (orderConfirmed) {
      setConfirmationVisible(true);
      setOverlayVisible(true);
    }
  }, [orderConfirmed]);

  const handleProceedToPayment = () => {
    setProceedToPayment(true);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
  };

  const handleCloseConfirmation = () => {
    setConfirmationVisible(false);
    setOrderConfirmed(false);
    setOverlayVisible(false);
  };

  return (
    <div className="cart-container">
      <h2>CARRITO DE COMPRAS</h2>
      {overlayVisible && <div className="overlay" onClick={handleCloseConfirmation}/>}
      {cartItems.length === 0 ? (
        <p>¡Tu carrito está vacío! Agrega productos para comenzar tus compras.</p>
      ) : (
        <div>
          <div>
            <ul className="cart-items">
              {cartItems.map((product, index) => (
                <li key={index} className="cart-item">
                  <div>
                    <img src={product.image} alt={product.name} style={{ marginRight: '10px', maxWidth: '50px' }} />
                    <span>{product.name}</span>
                  </div>
                  <div className="cart-item-operations">
                    <span className="cart-item-quantity">{product.quantity} x ${product.price.toFixed(2)} = ${(product.price * product.quantity).toFixed(2)}</span>
                    <button className="quantity-button" onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>
                    <button className="quantity-button" onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                    <button className="delete-button" onClick={() => removeFromCart(product.id)}>
                      Eliminar del carrito
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-container">
              <div className="cart-total">
                <strong>Total:</strong> ${calculateTotal().toFixed(2)}
              </div>
            </div>
          </div>
          {!proceedToPayment ? (
            <button className="proceedPayment-button" onClick={handleProceedToPayment}>
              Proceder al pedido
            </button>
          ) : (
            <div className="billing-info">
              <h3>Información de Facturación</h3>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={billingInfo.name}
                  onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="address">Dirección:</label>
                <input
                  id="address"
                  value={billingInfo.address}
                  onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                />
              </div>
              <button onClick={handleConfirmOrder}>Confirmar pedido</button>
              {confirmationVisible && (
                <div className="order-confirmation">
                  <button className="close-button-confirmation" onClick={handleCloseConfirmation}>
                    &times;
                  </button>
                  <h3 className="confirmation-header">¡Pedido Confirmado!<img className="icons" src={confirmado} alt="confirmado" /></h3>
                  <p>Tus productos serán enviados a la siguiente dirección:</p>
                  <p>
                    <strong>Nombre:</strong> {billingInfo.name}
                    <br />
                    <strong>Dirección:</strong> {billingInfo.address}
                  </p>
                  <p>
                    <strong>Detalle del Pedido:</strong>
                  </p>
                  <ul>
                    {cartItems.map((product, index) => (
                      <li key={index}>
                        {product.name} - {product.quantity} x ${product.price.toFixed(2)} = ${(product.price * product.quantity).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                  <p>
                    <strong>Subtotal:</strong> ${calculateTotal().toFixed(2)}
                  </p>
                  <p>
                    <strong>Total:</strong> ${calculateTotal().toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
