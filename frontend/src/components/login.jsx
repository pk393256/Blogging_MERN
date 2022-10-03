import {useState,useEffect, useContext} from 'react';
import { AuthContext } from '../authContext/authContext';



export function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState('');

    const props = useContext(AuthContext);
    console.log('props',props);

    async function submit(e){
        e.preventDefault();
        let data={email,password}
        // console.log(data)
        await fetch('http://localhost:8080/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json())
        .then((f)=>{props.dispatchAction('login',f.token)})
        
        console.log('token',props.isAuth)
        // console.log(token)
    }

    return (
        <>
        <h1>{props.isAuth.token}</h1>
        {(props.isAuth.token==undefined || props.isAuth.token=='')?
        (<form onSubmit={submit}>
            <input 
            text='text'
            placeholder='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            text='text'
            placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input type='submit'/>
        </form>)
        :
        <button onClick={()=>props.dispatchAction('logout','')}>logout</button>
}
        </>
    )

}