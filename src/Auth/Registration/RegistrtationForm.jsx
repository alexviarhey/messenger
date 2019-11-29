import React from 'react'
import useForm from "react-hook-form";
import Button from "../common/Button";
import {NavLink} from "react-router-dom";

const RegistrationForm = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='email' placeholder='email' type='email' className='input'/>
                    {errors.email && <span className='loginError'>Field is required</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='username' placeholder='Your name' className='input'/>
                    {errors.username && <span className='loginError'>Field is required</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='password' placeholder='password' type='password' className='input'/>
                    {errors.password && <span className='loginError'>Field is required</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='repeatPassword' placeholder='Repeat password' type='password' className='input'/>
                    {errors.password && <span className='loginError'>Field is required</span>}
                </div>
                <Button htmlType='submit' name='SignUp' type='primary' size='large'/>
            </form>
            <div>
                <NavLink to='/login'>Войти в аккаунт</NavLink>
            </div>
        </div>

    )
};

export default RegistrationForm