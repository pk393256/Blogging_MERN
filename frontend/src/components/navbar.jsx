import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../authContext/authContext';

export function Navbar() {
    const dispatch = useContext(AuthContext).dispatchAction;
    const isAuth = useContext(AuthContext).isAuth.token

    return (
        <>{(isAuth == '' || isAuth == undefined) ?
            <div style={{ display: "flex", gap: "30%", marginLeft: '40%', marginBottom: '5%' }}>
                <Link to='/register'>Register</Link>
                {/* <span style={{width:'100%'}}></span> */}

                <Link to='/login'>Login</Link>


            </div>
            :
            <button onClick={()=>dispatch('logout','')}>Logout</button>
        }
        </>
    )


}