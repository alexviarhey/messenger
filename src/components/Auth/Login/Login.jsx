import React from 'react'
import '../Auth.scss'
import {NavLink} from "react-router-dom";
import LoginForm from "./LoginForm";
import Block from "../common/Block";


const Login = () => {

    return (
        <div>
            <div className='loginFromText'>
                <h1>Log in to your account.</h1>
                <p>Please, log in to your account.</p>
            </div>
            <Block>
                <LoginForm/>
                <div>
                    <NavLink to='/registration'>Sign up</NavLink>
                </div>
            </Block>
        </div>
    )
};



export default Login
