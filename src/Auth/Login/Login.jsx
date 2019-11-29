import React from 'react'
import '../Auth.scss'
import {NavLink} from "react-router-dom";
import LoginForm from "./LoginForm";
import Block from "../common/Block";


const Login = () => {

    return (
        <div>
            <div className='loginFromText'>
                <h1>Войдите в аккаунт</h1>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <LoginForm/>
                <div>
                    <NavLink to='/registration'>Зарегистрироваться</NavLink>
                </div>
            </Block>
        </div>
    )
};



export default Login
