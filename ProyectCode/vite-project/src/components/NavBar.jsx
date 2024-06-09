import React, { useState } from 'react';
import '../styles/NavBar.css';
import carrito from '../icons/carrito.ico';
import lupa from '../icons/lupa.ico';
import cerrarSesiones from '../icons/cerrarSesion.ico';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png';
import appFirebase from '../conexion/credenciales';
import { getAuth, signOut } from 'firebase/auth';

const NavBar = ({ usuario }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const auth = getAuth(appFirebase);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <nav className={`navbar ${menuOpen ? 'responsive' : ''}`}>
        <div className="logo-container">
          <NavLink to="/" className="active-link"><img src={logo} alt="Logo de la aplicación" className="logo" /></NavLink>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item"><NavLink to="/" className="active-link" onClick={toggleMenu}>Inicio</NavLink></li>
          <li className="nav-item"><NavLink to="/ProductList" className="active-link" onClick={toggleMenu}>Productos</NavLink></li>
          <li className="nav-item"><NavLink to="/AboutUsPage" className="active-link" onClick={toggleMenu}>Sobre Nosotros</NavLink></li>
          <li className='nav-item'><NavLink className="search-link" to="/SearchBar" onClick={toggleMenu}><img className="icons" src={lupa} alt="Lupa" /></NavLink></li>
          <li className="nav-item"><NavLink className="cart-link" to="/cart" onClick={toggleMenu}><img className="icons" src={carrito} alt="Carrito" /></NavLink></li>
          {usuario && (
            <li className="nav-item">
              <img src={cerrarSesiones} alt="Cerrar Sesión" onClick={cerrarSesion} className="icon-cerrar-sesion" />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
