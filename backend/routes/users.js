const express = require('express')
const AdminUserController = require('../Controller/AdminUserController')
const Router = express.Router();
const { userdecode, checkAdmin } = require('../Tokens/tokens');
// const PaymentControll = require('../Controller/PaymentController');
const PaymentControll = require('../Controller/PaymentController')

// Router.get("/",userdecode,checkAdmin,(req,res)=>{
//     res.status(200).json({user:user})
// })

Router.get('/getUser',AdminUserController.getUser)
Router.post('/createUser',userdecode,checkAdmin,AdminUserController.createUser)
Router.delete('/delete/:id',userdecode,checkAdmin,AdminUserController.deleteUserDetail)
// Router.post("/Adminsignup" , AdminUserController.Adminsignup)
Router.post("/admin/signup", AdminUserController.Adminsignup);
//Router.post("/AdminLogin",AdminUserController.AdminLogin)
Router.post("/AdminLogin", AdminUserController.AdminLogin);
Router.get("/getAdmin",AdminUserController.getAdmin)
Router.put('/updateUser/:id',userdecode,checkAdmin,AdminUserController.updateUserDetail);
// Router.post('/processPayment',PaymentControll.processPayment);

module.exports=Router;
