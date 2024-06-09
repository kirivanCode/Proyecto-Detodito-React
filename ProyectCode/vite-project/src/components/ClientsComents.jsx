import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../conexion/DataBase'; 

import '../styles/ClientsComents.css';

const ClientsComents = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
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

    if (formData.name.trim() === '' || formData.message.trim() === '') {
      alert('Por favor, complete ambos campos antes de enviar.');
      return;
    }

    try {
      const commentsCollection = collection(db, 'comentarios'); 

      await addDoc(commentsCollection, formData);

     
      setComments([...comments, formData]);

     
      setFormData({
        name: '',
        message: '',
      });

      console.log('¡Comentario enviado correctamente a Firestore!');
    } catch (error) {
      console.error('Error al enviar el comentario a Firestore:', error);
    }
  };

  return (
    <div className="clients-comments-container">
      <h2>Comentarios de Clientes</h2>
      <div className="comments-section">
        {comments.length > 0 && (
          <div>
            <h3>Comentarios: </h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  <strong>{comment.name}</strong>: {comment.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <h4>Agregar comentario:</h4>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
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

export default ClientsComents;
