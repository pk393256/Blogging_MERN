const userModel = require("../model/user");
const express = require('express');

const route = express.Router();
async function registerUser(req, res) {
    
        let email=req.body.email
        console.log('email',email)
        try {
            let ifPresent = await userModel.find({email});
        // console.log('ifPresent', ifPresent);
        if (ifPresent.length>0) {
            res.status(409).send('User already present');
            console.log('if this runs after send');
        }
        } catch (error) {
            console.log('error message 1',error)
            
        }
        try {
            let data = { name, email, password } = req.body;
        let createUser = await userModel.create(data);
        // userModel.save();
        res.status(200).send(createUser)
        } catch (error) {
            console.log('error message 2',error)
        }
        
    
}

async function getAllUser(req,res,next){
    try{
        // req.context['abc']='abc';
        // console.log(req.context.yellow)
        let allUser = await userModel.find({});
        // console.log(req)
        res.status(200).send(allUser);
    }catch(err){
        res.status(400).send('No user found');
        throw err;
    }
}
// route.post('/post',registerUser);
module.exports = {
    registerUser,
    getAllUser
};