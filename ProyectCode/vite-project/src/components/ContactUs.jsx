import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../conexion/DataBase'; 
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const contactosCollection = collection(db, 'contactos');

      
      await addDoc(contactosCollection, formData);

      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      console.log('¡Formulario enviado correctamente a Firestore!');
    } catch (error) {
      console.error('Error al enviar el formulario a Firestore:', error);
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contacta con Nosotros</h2>
      <p>¡Estamos aquí para ayudarte! Completa el formulario y nos pondremos en contacto contigo.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Asunto:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <input name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default ContactUs;
