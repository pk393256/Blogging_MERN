const Jwt = require('jsonwebtoken');
const userModel = require('../model/user');
const {secret_key} = require('../secret/secret');


async function auth(req,res,next){

    req.context.abc='it worked';

    // let token = req.headers.token;

    // if(token){
    //     let decode_token = Jwt.verify(token,secret_key);
    //     console.log('decode_token',decode_token);
    //     try {
    //         let user = await userModel.find({email:decode_token.email});
    //         if(user.length>0){
    //             req.context.user=user;

    //         }
    //     } catch (error) {
    //         console.log(error)
    //         res.send('login first')
            
    //     }
        
    // }else{
    //     res.send('Invalid token');
    // }
    next()

}

module.exports = {
    auth,
}