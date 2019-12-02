import React from 'react'
import useForm from "react-hook-form";
import Button from "../common/Button";


const RegistrationForm = () => {

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='loginForm__inputWrapp'>
                    <input ref={register(
                        {
                            required: 'Field is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })} name='email' placeholder='Email' type='email'
                           className={errors.email ? 'input_error' : 'input'}/>
                    {errors.email && errors.email.message && <span className='loginError'>{errors.email.message}</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='username' placeholder='Your name'
                           className={errors.username ? 'input_error' : 'input'}/>
                    {errors.username && <span className='loginError'>Field is required</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='password' placeholder='Password' type='password'
                           className={errors.password ? 'input_error' : 'input'}/>
                    {errors.password && <span className='loginError'>Field is required</span>}
                </div>

                <div className='loginForm__inputWrapp'>
                    <input ref={register({required: true})} name='repeatPassword' placeholder='Repeat password'
                           type='password' className={errors.password ? 'input_error' : 'input'}/>
                    {errors.password && <span className='loginError'>Field is required</span>}
                </div>
                <Button htmlType='submit' name='Sign up' type='primary' size='large'/>
            </form>
        </div>

    )
};

export default RegistrationForm