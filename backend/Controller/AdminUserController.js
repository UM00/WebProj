const mongoose = require('mongoose');
const UserSchema =require('../models/user')
const AdminSchema = require('../models/admin');
const jwt = require("jsonwebtoken");
const Router = require("../routes/users");
const { userdecode, checkAdmin } = require('../Tokens/tokens');



exports.getUser = async(req,res,next)=>{
    const user = await UserSchema.find({}).sort({ createdAt: -1 });
    console.log(user);
    res.status(200).json(user);
  }

  exports.createUser = async (req, res) => {
    const { Name, Age, Email, Address,PhoneNo } = req.body;
    try {
      const user = await UserSchema.create({
        
        Name,
        Age,
        Email,
        Address,
        PhoneNo
        
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ mssg: error.message });
    }
  };

  exports.deleteUserDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID Format' });
    }
    const UserDetail = await UserSchema.findOneAndDelete({ _id: id });

    if (UserDetail) {

      res.status(200).json(UserDetail);
    }
    else {
      res.status(404).json({ error: 'No Such User Exist' });
    }
  };





exports.Adminsignup = async (req , res)=>{
    const {username , password , name, role} = req.body;
  try {
    const Admin = new AdminSchema.create({
        username,
        password,
        name,
        role
    });
    res.status(200).json(Admin);
  }catch (error) {
    res.status(400).json({ mssg: error.message });
  }
}



