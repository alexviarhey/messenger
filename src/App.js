import React from 'react';
import {Route} from "react-router-dom";
import './App.css';

import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage/HomePage";




const App = () => {
    return (
        <div className='wrapper'>
            <Route exact path={['/', '/login', '/registration']} render={() => <Auth />}/>
            <Route exact path={'/home'} render={() => <HomePage />}/>
        </div>
    )
};

export default App;
