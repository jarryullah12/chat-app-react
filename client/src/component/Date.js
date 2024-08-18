// components/AddItem.js
import React, { useState } from 'react';
import axios from 'axios';

const Date = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add', { name, date });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error adding date:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Date:</label>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Add Date</button>
        </form>
    );
    
};

export default Date;