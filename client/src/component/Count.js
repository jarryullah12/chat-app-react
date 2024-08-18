import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Count() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const fetchCount = async () => {
        try {
          const response = await axios.get('http://localhost:5000/Count');
          setCount(response.data.count);
        } catch (error) {
          console.error('Error fetching the product count', error);
        }
      };
  
      fetchCount();
    }, []);
  
    return (
      <div>
        <h1>Total Products: {count}</h1>
      </div>
    );
  }

  export default Count;