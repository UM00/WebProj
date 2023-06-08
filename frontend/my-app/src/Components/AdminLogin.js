import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/AdminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      console.log(data.token);
      localStorage.setItem('token', data.token);
      if (response.status === 200) {
        alert('Admin logged in successfully');
        window.location.href = '/addUser';
      }
      else {
        alert('Admin login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleAdminLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
               <a href="/admin/signup"><p className="btn btn-primary">Sign or With</p></a> 
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div
                className="divider d-flex align-items-center my-4"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                <div
                  style={{
                    flex: '1',
                    height: '1px',
                    background: '#eee',
                  }}
                ></div>
              </div>
              <div className="container">
               <h2>Admin Login</h2>
          
           <div className="form-group">
            <label htmlFor="username">Username</label>
           <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
          
      
    </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          backgroundColor: '#007bff',
          color: '#fff',
        }}
      >
        <div className="text-white mb-3 mb-md-0" style={{marginTop:205}}>
          &copy; UMOO-Production 2023 All rights reserved.
        </div>
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
