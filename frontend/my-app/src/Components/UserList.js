import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/background2.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updatedUser, setUpdatedUser] = useState(null);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/getUser');
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/delete/${userId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.status === 200) {
        // User deleted successfully, fetch updated user list
        fetchUsers();
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/updateUser/${selectedUserId._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log(data);
        fetchUsers();
        setUpdatedUser(null);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (field, value) => {
    setUpdatedUser(prevUser => ({
      ...prevUser,
      [field]: value || ''  
    }));
  };
  
  

  const showProfileCard = (user) => {
    setSelectedUserId(user);
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
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} onClick={() => showProfileCard(user)}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phoneNo}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/addUser">
        <button>Back</button>
      </a>

      {/* Profile Card */}
      {selectedUserId && (
  <section className="vh-100" style={{ backgroundColor: 'white' }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-9 col-lg-7 col-xl-5">
          <div className="card" style={{ borderRadius: '20px', width: 700 }}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ width: '180px', borderRadius: '10px' }}
                  />
                </div>
                <div className="flex-grow-1 ms-3" style={{ width: 500 }}>
                  <h5 className="mb-1">{selectedUserId && selectedUserId.name}</h5>
                  {selectedUserId && (
                    <input
                      type="text"
                      className="form-control"
                      value={updatedUser ? updatedUser.name : ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  )}
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}
                  >
                    <div>
                      <p className="small text-muted mb-1">Age</p>
                      <p className="mb-0">{selectedUserId && selectedUserId.age}</p>
                      {selectedUserId && (
                        <input
                          type="text"
                          className="form-control"
                          value={updatedUser ? updatedUser.age : ''}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      )}
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Email</p>
                      <p className="mb-0">{selectedUserId && selectedUserId.email}</p>
                      {selectedUserId && (
                        <input
                          type="text"
                          className="form-control"
                          value={updatedUser ? updatedUser.email : ''}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      )}
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Phone Number</p>
                      <p className="mb-0">{selectedUserId && selectedUserId.phoneNo}</p>
                      {selectedUserId && (
                        <input
                          type="text"
                          className="form-control"
                          value={updatedUser ? updatedUser.phoneNo : ''}
                          onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                  <button
                      type="button"
                      className="btn btn-primary flex-grow-1"
                      onClick={updateUser}
                    >
                      Save
                    </button>
                    <a href="/getUser">
                      <button type="button" className="btn btn-primary flex-grow-1">
                        Back
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
    </div>
  );
};

export default UserList;
