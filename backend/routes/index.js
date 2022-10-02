const express = require('express');
// const { createPost } = require('../handler/post');
const { registerUser,getAllUser } = require('../handler/user');
const {login} = require('../handler/login')
const {auth} = require('../secret/auth');
const { getAllPost, createPost, updatePost, deletePost } = require('../handler/post');
// const {}=require('../handler/user')
const userRoute = express.Router()
userRoute.get('/user',getAllUser)
userRoute.post('/login',login)
userRoute.post('/user',registerUser);
userRoute.get('/post',auth,getAllPost);
userRoute.post('/post',auth,createPost);
userRoute.patch('/post/:_id',auth,updatePost);
userRoute.delete('/post/:_id',auth,deletePost);
// userRoute.post('/post',createPost);
module.exports=userRoute;