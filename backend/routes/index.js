const express = require('express');
// const { createPost } = require('../handler/post');
const { registerUser,getAllUser } = require('../handler/user');
const {login} = require('../handler/login')
const {auth} = require('../secret/auth')
// const {}=require('../handler/user')
const userRoute = express.Router()
userRoute.get('/user',getAllUser)
userRoute.post('/login',auth,login)
userRoute.post('/user',registerUser);
// userRoute.post('/post',createPost);
module.exports=userRoute;