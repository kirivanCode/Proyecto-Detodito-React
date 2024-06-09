import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import panBono from '../images/panBono.jpg';
import alfajor from '../images/Alfajor.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import baguette from '../images/baguette.jpg';
import etiquetaDePrecio from '../icons/etiquetaDePrecio.ico';
import destacados from '../icons/destacados.ico';
import '../styles/Home.css';
import ContactUs from './ContactUs';
import ClientsComents from './ClientsComents';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Home = () => {
  const images = [panBono, alfajor, tortaChocolate];

  const products = [
    { id: 1, name: 'Torta de chocolate', price: 7500, description: 'torta de chocolate de la buena', image: tortaChocolate },  
    { id: 2, name: 'Baguette', price: 3500, description: 'pan crujiente y loco', image: baguette },
    { id: 3, name: 'Pan de bono', price: 3000, description: 'el mejor pan del mundo', image: panBono },
    { id: 4, name: 'Alfajor', price: 2000, description: 'deliciosa galleta argentina', image: alfajor },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, //cantidad de imagenes en el slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, //tiempo creo que en milisegundos 
  };

  const productSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    
    <div className="home-container">
      <section className="welcome-section">
        <h2>PANADERIA DETODITO</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
              <img className='slider-img' src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <p className='welcome-text'>Descubre una amplia variedad de productos horneados frescos con amor y cuidado.</p>
      </section>
      
      <section className="products-section">
        <section className="special-offers-section">
          <div className="offer-header">
            <h2 className='offer-h2'>Ofertas Especiales</h2>
            <img className="icons" src={etiquetaDePrecio} alt="Etiqueta Precio" /> 
          </div>
          <p>No te pierdas nuestras ofertas especiales de esta semana. ¡Aprovecha y disfruta de deliciosos panes y pasteles!</p>
          <Slider  className="offers-slider" {...productSliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="offers-slick-slide">
                <div className="product-card">
                  <img className='offers-slider-img' src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                  <p>Precio: ${product.price} COP</p>
                </div>
              </div>
            ))}
          </Slider>
          <NavLink to="./ProductList" className="ver-mas-button">
            Ver más productos
          </NavLink>
        </section>

        <section className="featured-products-section">
          <div className='featured-product-header'>
            <div className="featured-header">
              <h2 className='featured-h2'>Productos Destacados</h2>
              <img className="icons" src={destacados} alt="destacados" /> 
            </div>
          </div>
          <div className="product-card">
            <h3>Alfajor</h3>
            <img className='img' src={alfajor} alt="Alfajor" />
            <p>Elaborado con granos enteros y semillas para un sabor nutritivo.</p>
          </div>
          <div className="product-card">
            <h3>Pastel de Chocolate</h3>
            <img className='img' src={tortaChocolate} alt="Pastel de Chocolate" />
            <p>Un clásico irresistible que te hará volver por más.</p>
          </div>
          <div className="product-card">
            <h3>Baguette</h3>
            <img className='img' src={baguette} alt="Baguette" />
            <p>pan crujiente y loco.</p>
          </div>
          <div className="product-card">
            <h3>Pan de Bono</h3>
            <img className='img' src={panBono} alt="Pan Bono" />
            <p>el mejor pan del mundo.</p>
          </div>
          <NavLink to="./ProductList" className="ver-mas-button">
            Ver más productos
          </NavLink>
        </section>
      </section>

      <section className="customer-testimonials-section">
        <div className="testimonial">
          <ClientsComents />
        </div>
      </section>
      
      <section className="contactUs-section">
        <div className="contactUs">
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default Home;
