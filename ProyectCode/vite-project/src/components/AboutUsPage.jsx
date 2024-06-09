import React from 'react';
import panaderiaDetodito from '../images/panaderiaDetodito.jpg';
import presentacion from '../images/presentacion.jpg';
import '../styles/AboutUsPage.css';


const AboutUsPage = () => {
  return (
    <div className='about-us-container'>
      <section className="about-us-section">
        <h2 className="about-us-header">Sobre Nosotros</h2>
        <img className="about-us-image" src={panaderiaDetodito} alt="Imagen representativa de la panadería" />
        <article className="about-us-content">
          <p className='lema-container'>¡Bienvenido a nuestra panadería colombiana!<br/><br/>
            "Sabores auténticos, tradición en cada bocado. En nuestra panadería colombiana,
            cada producto es un viaje directo a la calidez de los hogares de Colombia.
            Con ingredientes frescos y pasión por la autenticidad, horneamos momentos memorables para tu paladar. 
            ¡Bienvenido a nuestro rincón de Colombia en cada deliciosa creación!"

          </p>
          
          <p className="about-us-presentation-text">Somos un equipo de tres apasionados universitarios emprendiendo en el mundo de la panadería. Con dedicación y amor por la tradición colombiana, trabajamos juntos para ofrecerte experiencias únicas a través de nuestros productos.</p>
        </article>
        
        <img className="about-us-presentation-image" src={presentacion} alt="Presentación del grupo de trabajo" />
        
        
        
      </section>

      <div className="paypal-button-container">
  <h5>Donaciones</h5>
  
</div>

    </div>
  );
};

export default AboutUsPage;