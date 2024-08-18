import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

      const [getstud, SetGetstud] = useState([]);
      console.log(getstud)
      //get student Data
      const getstuddata = async () => {
  
          const res = await fetch("http://localhost:5000/getstud", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              }
          });
  
          const data = await res.json();
  
          if (res.status === 422 || !data) {
              console.log("error ");
          } else {
              SetGetstud(data)
              console.log("get data");
          }
      }
  
      useEffect(() => {
          getstuddata();
      }, [])


  //search Student
  const [searchInput,setSearchInput]=useState('');
  const searchStud=(searchval)=>{
      setSearchInput(searchval)
  }
  return (
      <div className='container mt-5'>
          <div className='d-flex'>
              <h4>All Student Information</h4>
          
          </div>

          <div className='underline'></div>
          <table className="table table-bordered mt-5">
              <thead className='table-dark'>
                  <tr>
                      <th scope="col">No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Contact </th>
                      <th scope="col">Action </th>
                  </tr>
              </thead>
              <tbody>


                  {getstud.map((val)=>{
                     
                      return (
                          <>

                              <tr key={val.id}>
                                  <th scope="row">{val.id + 1}</th>
                                  <td>{val.name}</td>
                                  <td>{val.address}</td>
                                  <td>{val.subject}</td>
                                  <td>{val.contact}</td>
                                  <td>
                                      <Link className='btn btn-success ms-2' to={`/allstud`}>View</Link>
                                      <Link className='btn btn-success ms-2' to={`/Count`}>Count</Link>
                                      <Link className='btn btn-success ms-2' to={`/Admin`}>Admin</Link>

                                  </td>
                              </tr>


                          </>
                      )
                  })}




              </tbody>
          </table>

      </div>
  )
}




// total 


