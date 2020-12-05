import React from 'react'
import './Login.css';
import Logo from '../../assets/pictures/Logo.png';
import { Button } from '@material-ui/core';
import {auth, provider} from '../../firebase';

export interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {

    const signIn = (event: React.MouseEvent) => {
        auth.signInWithPopup(provider)
        .catch(error => console.log(error));
    }
    return (  
        <div className="login">
            <div className="login_logo">
                <img src={Logo} alt=""/>
            </div>
             <Button onClick={signIn}>SignIn</Button>
        </div> 
       
    );
}
 
export default Login;