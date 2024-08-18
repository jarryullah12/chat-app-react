import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Admin() {
    const [students, setstudents] = useState([]);
  
    useEffect(() => {
      // Fetch students that need approval
      const fetchstudents = async () => {
        try {
          const response = await axios.get('http://localhost:5000/admin');
          setstudents(response.data);
        } catch (error) {
          console.error('Error fetching students', error);
        }
      };
  
      fetchstudents();
    }, []);
  
    const handleApprove = async (id, isApproved) => {
      try {
        const response = await axios.put(`http://localhost:5000/admin/${id}/approve`, {
          isApproved,
        });
  
        // Update the students state with the new approval status
        setstudents(students.map(student => student._id === id ? response.data : student));
      } catch (error) {
        console.error('Error updating approval status', error);
      }
    };
  
    return (

        <div>
        <h1>Admin Approve students</h1>
        <ul>
          {students.map(student => (
            <li key={student._id}>
              {student.name}
              
              <input
                type="checkbox"
                checked={student.isApproved}
                onChange={() => handleApprove(student._id, !student.isApproved)}
              />
            </li>
          ))}
        </ul>
      </div>


     
    );
  }
export default Admin;
