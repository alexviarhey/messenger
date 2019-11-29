import React from 'react'
import useForm from "react-hook-form";
import Button from "../common/Button";




const LoginForm = () => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='loginForm__inputWrapp'>
                <input ref={register({required: true})} name='email' placeholder='email' type='email' className='input'/>
                {errors.email && <span className='loginError'>Field is required</span>}
            </div>

            <div className='loginForm__inputWrapp'>
                <input ref={register({required: true})} name='password' placeholder='password' type='password' className='input'/>
                {errors.password && <span className='loginError'>Field is required</span>}
            </div>
            <Button htmlType='submit' name='SignIn' type='primary' size='large'/>
        </form>
    )
};


export default LoginForm