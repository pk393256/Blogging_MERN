import { Jwt } from "jsonwebtoken";
import userModel from "../model/user";
import { secret_key } from "../secret/secret";


async function login(req,res){
    let data={email,password} = req.body;
    try {
        let isPresent = await userModel.find(data);
        if(isPresent.length>0){
            console.log('present')
            res.send('login successful')
        }else{
            res.send('Invalid credential');
        }
    } catch (error) {
        console.log('error in fetching name in login',error);

    }

}