
const mongoose = require('mongoose');
const UserSchema = require('../models/user');
const AdminSchema = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userdecode, checkAdmin } = require('../Tokens/tokens');
const{compare}=require('../Tokens/tokens');

exports.getUser = async (req, res, next) => {
  try {
    const users = await UserSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Admin = require('../models/admin');

exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.find({}).sort({ createdAt: -1 });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  console.log("inside ");
  const { name, age, email, address, phoneNo } = req.body;
  console.log(req.body);
  try {
    const user =new UserSchema({
      name,
      age,
      email,
      address,
      phoneNo,
    });
    user.save().then((user)=>{
      res.status(200).json(user);
    }).catch((err)=>{
      res.status(400).json({ error: err.message });
    })
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteUserDetail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID Format' });
  }
  try {
    const userDetail = await UserSchema.findOneAndDelete({ _id: id });
    if (userDetail) {
      res.status(200).json(userDetail);
    } else {
      res.status(404).json({ error: 'No Such User Exists' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserDetail = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID Format' });
  }
  try {
    const userDetail = await UserSchema.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (userDetail) {
      res.status(200).json(userDetail);
    } else {
      res.status(404).json({ error: 'No Such User Exists' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Adminsignup = async (req, res) => {
  const { username, password, name, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new AdminSchema({
      username,
      password : hashedPassword,
      name,
      role,
    });
    admin.save().then((admin)=>{
      res.status(200).json(admin);
    }).catch((err)=>{
      res.status(400).json({ error: err.message });
    })
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.AdminLogin = async (req, res) => {
  const { username, password} = req.body;
  try {
    let admin = await AdminSchema.findOne({ username });
    if (admin) {
      
    const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        
        let token = jwt.sign(
          {
            id: admin._id,
            role: admin.role,
          },
          process.env.SecretKey,
          { expiresIn: '24h' }
        );
        console.log(token);
        res.status(200).json({ message: 'Login Success', admin, token });
      } else {
        res.status(400).json({ message: 'Login Failed' });
      }
    } else {
      res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error', error: error.message });
  }
};
