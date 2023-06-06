
import React, { useEffect, useState } from 'react';

const AdminDetails = () => {
  const [admins, setadmins] = useState([]);

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await fetch('http://localhost:3001/getAdmin');
      const data = await response.json();
      setadmins(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <h2>Admin Details</h2>
      {admins.map((admin) => (
      <div className="card">
        <div className="card-body">
          
          <p className="card-text">Name: {admin.username}</p>
          <p className="card-text">Password: {admin.password}</p>
        </div>
        
      </div>
      ))}
      <a href="/addUser">
      <button>Back</button>
      </a>
    </div>
    
  );
};

export default AdminDetails;
