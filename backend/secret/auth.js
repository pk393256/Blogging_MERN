const Jwt = require('jsonwebtoken');
const userModel = require('../model/user');
const {secret_key} = require('../secret');


async function auth(req,res,next){

    
    // console.log('token',token)
    // req.context.abc=token;
    
        
        let token = req.headers.token;
        console.log('header',req.headers)
            // console.log('token',token)
            if(token!=''){
            try {
                let decode_token = Jwt.verify(token,secret_key);
            
                // console.log('decode_token',decode_token);
               
                try {
                    let user = await userModel.find({email:decode_token.email});
                    if(user.length>0){
                        req.context.user=user;
        
                    }else{
                        res.send('login first')
                    }
                } catch (error) {
                    console.log(error)
                    // res.send('login first')
                    return 
                    
                }
            
            } catch (error) {
                res.send('invalid token')
                return
            }
           
            
            }



         else {
            res.send('token not provided')
            return 
        }
        
    next()

}

module.exports = {
    auth,
}