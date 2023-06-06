
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faBriefcase, faTags, faMagnet } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleAdminSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          name,
          role,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert("Admin Signup Successful");
    } catch (error) {
      console.error(error);
      alert("Admin Signup Unsuccessful");
    }
  };
  return (
    <section className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="signup-form">
              <h2 className="text-center">Create an Admin Account</h2>
              <div className="text-center my-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <form onSubmit={handleAdminSignup}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faTags} />
                      </span>
                    </div>
                   
                     <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id='name'
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id='password'
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faMagnet} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id='role'
                      placeholder="Define Role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                {/* Other form fields */}
                <div className="form-group text-center">
                  
                  
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                 
                 <Link to="/AdminLogin" className='btn btn-primary btn-block' style={{marginLeft:50}}>Already have an account? Log in</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSignup;
