import React from 'react';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import UserList from '../src/Components/UserList';
import AddUser from '../src/Components/AddUser';
import AdminSignup from './Components/AdminSignup';
import HomePage from './Components/Homepage';
import AdminLogin from './Components/AdminLogin';
import ControllPage from './Components/AdminDetails';
import AdminDetails from './Components/AdminDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>} />
      <Route path='/admin/signup' element={<AdminSignup/>} />
      <Route path='/AdminLogin' element={<AdminLogin/>} />
      <Route path="/getUser" element={<UserList/>} />
      <Route path="/addUser" element={<AddUser/>} />
      <Route path="/getAdmin" element={<AdminDetails/>} />   

    </Routes>
    </BrowserRouter>

  );
};

export default App;
