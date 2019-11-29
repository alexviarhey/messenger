import React, {useState} from 'react'
import Block from "../common/Block";
import RegistrationForm from "./RegistrtationForm";
import Icon from "antd/es/icon";
import '../Auth.scss'


const Registration = () => {
    const [register, setRegister] = useState(false);
    return (
        <div>
            <div className='loginFromText'>
                <h1>Регистрация</h1>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!register ?
                    <RegistrationForm />
                    :
                    <div className='auth_success_block'>
                        <div>
                            <Icon className='auth_success_block__icon' theme='twoTone' type="exclamation-circle" />
                        </div>
                        <div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>
                    </div>
                }
            </Block>
        </div>
    )

};




export default Registration