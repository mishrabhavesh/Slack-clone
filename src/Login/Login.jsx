import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';

const Login = () => {
    const loginHandler = () => {
        auth
            .signInWithPopup(provider)
            .then(res => {
                console.log(res);
            })
            .catch(er => {
                alert(er.message)
            })
        }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://metafizzy.co/img/2019/slack-armchair-single.png" alt="Slack logo"/>
                <h1>Sign in to this app using your google account</h1>
                <Button onClick={loginHandler} >Log in with Google</Button>
            <h3>Made with ❤️ by <strong>Bhavesh Mishra &#169;	 2020 </strong></h3>
            </div>
        </div>
    )
}

export default Login
