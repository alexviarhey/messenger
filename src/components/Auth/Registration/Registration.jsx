import React, {useState} from 'react'
import Block from "../common/Block";
import RegistrationForm from "./RegistrtationForm";
import Icon from "antd/es/icon";
import '../Auth.scss'
import {NavLink} from "react-router-dom";


const Registration = () => {
    const [register, setRegister] = useState(false);
    return (
        <div>
            <div className='loginFromText'>
                <h1>Check in</h1>
                <p>To enter the chat, you need to register</p>
            </div>
            <Block>
                {!register ?
                    <div className='registrationForm'>
                        <RegistrationForm />
                        <div>
                            <NavLink to='/login'>Login to account</NavLink>
                        </div>
                    </div>

                    :
                    <div className='auth_success_block'>
                        <div>
                            <Icon className='auth_success_block__icon' theme='twoTone' type="exclamation-circle" />
                        </div>
                        <div>
                            <h2>Verify your account</h2>
                            <p>An email has been sent to your mail with a link to the account confirmation</p>
                        </div>
                    </div>
                }
            </Block>
        </div>
    )

};




export default Registration