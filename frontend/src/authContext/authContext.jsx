import {createContext,useState,useEffect} from 'react';

export const AuthContext = createContext()


export function AuthContextProvider({children}){
    const [isAuth,setIsAuth] = useState({token:''})
    function dispatchAction(action,payload){
        switch(action){
            case 'login':
                setIsAuth({token:payload})
                return;
            case 'logout':
                setIsAuth({token:''})
                return;
            default:
                return;
        }
    }
    return(
        <AuthContext.Provider value={{isAuth,dispatchAction}}>
            {children}
        </AuthContext.Provider>
    )


}
