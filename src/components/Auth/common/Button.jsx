import React from 'react'
import {Button as ButtonBasic} from 'antd'
import 'antd/dist/antd.css';
import '../Auth.scss'


const Button = (props) => {
    return (
        <ButtonBasic {...props}>{props.name}</ButtonBasic>
    )
};



export default Button