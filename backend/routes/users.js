const express = require('express')
const AdminUserController = require('../Controller/AdminUserController')
const Router = express.Router();
const { userdecode, checkAdmin } = require('../Tokens/tokens');
// Router.get("/",userdecode,checkAdmin,(req,res)=>{
//     res.status(200).json({user:user})
// })
Router.get('/getUser',userdecode,checkAdmin,AdminUserController.getUser)
Router.post('/createUser',AdminUserController.createUser)
Router.delete('/delete/:id',AdminUserController.deleteUserDetail)
module.exports =Router;
