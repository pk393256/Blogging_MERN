import {Link} from 'react-router-dom';



export function Navbar(){

    return (
        <>
        <div style={{display:"flex",gap:"20%"}}>
            <Link to='/register'>Register</Link>
            {/* <span style={{width:'100%'}}></span> */}
            <Link to='/login'>Login</Link>
        </div>
        </>
    )


}