import React from 'react'
import useForm from "react-hook-form";
import Button from "../common/Button";


const LoginForm = () => {

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });
    const onSubmit = data => console.log(data);

    return (
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='loginForm__inputWrapp'>
                <input ref={register({
                    required: 'Field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                    }
                })} name='email' placeholder='Email' type='email' className={errors.email ? 'input_error' : 'input'}/>
                {errors.email &&  errors.email.message && <span className='loginError'>{errors.email.message}</span>}
            </div>

            <div className='loginForm__inputWrapp'>
                <input ref={register({required: 'Field is required'})} name='password' placeholder='Password' type='password'
                       className={errors.password ? 'input_error' : 'input'}/>
                {errors.password && errors.password.message && <span className='loginError'>{errors.password.message}</span>}
            </div>
            <Button htmlType='submit' name='Sign in' type='primary' size='large'/>
        </form>
    )
};


export default LoginForm