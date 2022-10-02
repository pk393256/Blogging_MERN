const express = require('express');
// const { createPost } = require('../handler/post');
const { registerUser,getAllUser } = require('../handler/user');
// const {}=require('../handler/user')
const userRoute = express.Router()
userRoute.post('/user',registerUser);
userRoute.get('/user',getAllUser)
// userRoute.post('/post',createPost);
module.exports=userRoute;