import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataBase() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/items');
      setItems(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Items:</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataBase;