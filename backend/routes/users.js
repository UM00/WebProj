const express = require('express')
const AdminUserController = require('../Controller/AdminUserController')
const Router = express.Router();


Router.get('/getUser',AdminUserController.getUser)
Router.post('/createUser',AdminUserController.createUser)
Router.delete('/:id',AdminUserController.deleteUserDetail)


module.exports =Router;