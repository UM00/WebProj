import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserList';
import backgroundImage from '../images/background.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';



const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');



    const handleAddUser = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:3001/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              age: age,
              email: email,
              address: address,
              phoneNo: phoneNo,
            }),
          });
      
          const data = await response.json();
          console.log(data);
          alert('User added successfully');
        } catch (error) {
          console.error(error);
          alert('Failed to add user');
        }
      };
      

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        opacity: 0.7,
      }}
    >
      <a href="/getAdmin">
      <FontAwesomeIcon style={{marginLeft:1100,fontSize:30,marginTop:20}}
        icon={faCog}
        className="settings-icon"
      />
      </a>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="text"
            className="form-control"
            id="phoneNo"
            placeholder="Enter phone number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
       <button type="submit" className="btn btn-primary" style={{marginLeft:0}}>Add User</button>
       <a href="/getUser">
        <button
          type="button"
          className="btn btn-secondary ml-2"
          style={{marginLeft:20}}
         >View Users</button>
         </a> 
         <Link to="/AdminLogin" className="btn btn-danger" style={{marginTop:5,marginLeft:20}}>
              LogOut
            </Link>
      </form>
    </div>
  );
};
export default AddUser;
