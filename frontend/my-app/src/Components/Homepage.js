import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background3.jpg';

const HomePage = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'stretch',
        backgroundPosition: 'stretch',
        minHeight: '100vh',
        opacity: 0.7,
        marginTop:0
      }}
    >
    <div className="container" style={{justifyContent:'center'}}>
      <h2 style={{marginLeft:400}}>Admin Home Page</h2>
      <div className="card mx-auto" style={{ maxWidth: '300px' ,marginTop:100}}>
        <div className="card-body">
          <h5 className="card-title">Welcome, Admin!</h5>
          <p className="card-text">Please select an option:</p>
          <div className="d-grid gap-2">
            <Link to="/AdminLogin" className="btn btn-primary">
              Login
            </Link>
            <Link to="/admin/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
