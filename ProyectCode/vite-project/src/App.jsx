// Ivan Dario Sierra Vega
// Oscar Felipe Segovia Alvarado
// Carlos Mauricio Rios Velasquez

//App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import Footer from './components/Footer';
import Login from './components/Login';
import whatsappApi from './icons/whatsappApi.ico';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './styles/App.css';

const auth = getAuth();

function App() {

  const [usuario, setUsuario] = useState(null);
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
      setCartItems([]);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const addToCart = (product) => {

    
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // El producto ya está en el carrito, aumentar la cantidad
      increaseQuantity(product.id);
    } else {
      // El producto no está en el carrito, agregarlo con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCartItems(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const openWhatsAppChat = () => {
    
    const phoneNumber = '3005873017';

   
    const message = '¡Hola! Estoy interesado en hacer un pedido.';

   
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

   
    window.open(whatsappURL, '_blank');
  };

  
  /*  <NavBar cartItemCount={cartItems.length} />*/
  /*<Route path="/SearchBar" element={<SearchBar />} />*/

  return (
    <div>
      <Router>
        {usuario ? (
          <>
            <NavBar usuario={usuario} cerrarSesion={cerrarSesion} cartItemCount={cartItems.length} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ProductList" element={<ProductList addToCart={addToCart} />} />
              <Route path="/AboutUsPage" element={<AboutUsPage />} />
              <Route
                path="/cart"
                element={
                  <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                  />
                  }
              />
            </Routes>
            <img src={whatsappApi} alt="WhatsApp" className="whatsapp-button" onClick={openWhatsAppChat} />
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
