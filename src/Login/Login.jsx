import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';
import { useStateValue } from '../Reducer/stateProvider'
import { actionTypes } from '../Reducer/reducer';

const Login = () => {
    const [state, dispatch] = useStateValue();
    const loginHandler = () => {
        auth
            .signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                })
            })
            .catch(er => {
                console.log(er.message)
            })
        }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://metafizzy.co/img/2019/slack-armchair-single.png" alt="Slack logo"/>
                <h1>Sign in to this app using your google account</h1>
                <Button onClick={loginHandler} >Log in with Google</Button>
            <h3>Made with ❤️ by <strong>Bhavesh Mishra &#169;	 2020 </strong></h3>
            <img src="https://qph.fs.quoracdn.net/main-thumb-75404983-200-uhkywcicratwwjzpmrghebiakcftanhi.jpeg" alt="my profile" className="login__my-image" />
            </div>
        </div>
    )
}

export default Login
