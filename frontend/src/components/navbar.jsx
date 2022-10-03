import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext/authContext';

export function Navbar() {
    const dispatch = useContext(AuthContext).dispatchAction;
    const isAuth = useContext(AuthContext).isAuth.token
    const navigate = useNavigate();
    return (
        <>{(isAuth == '' || isAuth == undefined) ?
            <div style={{ display: "flex", gap: "30%", marginLeft: '40%', marginBottom: '5%' }}>
                <Link to='/register'>Register</Link>
                {/* <span style={{width:'100%'}}></span> */}

                <Link to='/login'>Login</Link>


            </div>
            :
            <>
            <Link to='/login' onClick={()=>dispatch('logout','')}>Logut</Link>
            {navigate('/posts')}
            </>
            // <button onClick={()=>dispatch('logout','')}>Logout</button>
        }
        </>
    )


}