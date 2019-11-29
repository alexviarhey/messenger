import React from 'react'
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import {Route} from "react-router-dom";


const Auth = () => {
    return (
        <div>
            <Route exact path={['/', '/login']} render={() => <Login/>} />
            <Route path={'/registration'} render={() => <Registration/>} />
        </div>
    )
};


export default Auth