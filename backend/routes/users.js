const express = require('express')
const AdminUserController = require('../Controller/AdminUserController')
const Router = express.Router();
const { userdecode, checkAdmin } = require('../Tokens/tokens');
const { Adminsignup } = require('../Controller/AdminUserController');

// Router.get("/",userdecode,checkAdmin,(req,res)=>{
//     res.status(200).json({user:user})
// })

Router.get('/getUser',AdminUserController.getUser)
Router.post('/createUser',AdminUserController.createUser)
Router.delete('/delete/:id',AdminUserController.deleteUserDetail)
// Router.post("/Adminsignup" , AdminUserController.Adminsignup)
Router.post("/admin/signup", AdminUserController.Adminsignup);
//Router.post("/AdminLogin",AdminUserController.AdminLogin)
Router.post("/AdminLogin", userdecode, checkAdmin, AdminUserController.AdminLogin);
Router.get("/getAdmin",AdminUserController.getAdmin)
Router.put('/updateUser/:id', AdminUserController.updateUserDetail);

module.exports=Router;
