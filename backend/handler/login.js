// import { Jwt } from "jsonwebtoken";
// import userModel from "../model/user";
const Jwt =require('jsonwebtoken');
const userModel = require("../model/user");
const {secret_key} = require("../secret")
// import { secret_key } from "../secret/secret";
// export userModel

async function login(req,res,next){
    // console.log(req)     
    let data={email,password} = req.body;
    // res.send(req.context)
    try {
        let isPresent = await userModel.find(data);
        if(isPresent.length>0){
            // console.log(isPresent[0])
            isPresent=isPresent[0];
            let data = {
                id:isPresent._id,
                name:isPresent.name,
                email:isPresent.email,
                // password:isPresent.password
            }
            let encData = Jwt.sign(data,secret_key);
            // let abc=req.context;
            // console.log('abc',abc)
            res.status(200).send({token:encData});
        }else{
            res.send('Invalid credential');
        }
    } catch (error) {
        console.log('error in fetching name in login',error);

    }
// next()
}

module.exports={
    login,
}