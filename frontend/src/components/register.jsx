
import {useState,useEffect} from 'react';

export function Register(){

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    async function submit(e){
        e.preventDefault()
        // console.log(e.target.email.value)
        // console.log(email)
        let data={name,email,password}
        console.log(data)
        try {
            await fetch('https://blogging3932-app.herokuapp.com/user',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(data)
        })
        } catch (error) {
            console.log(error)
        }
        
    }   
    return (
        <>
        <form onSubmit={submit}>
            <input type='text' placeholder='name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type='text' placeholder='email'  value={email} name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type='text' placeholder='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />    
            <input type='submit'/>
        </form>
        </>
    )
}