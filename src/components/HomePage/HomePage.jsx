import React from 'react'
import './HomePage.scss'
import MessagePage from "./MessagePage/MessagePage";
import Dialogs from "./DialogsPage/Dialogs";

const HomePage = () => {
    return (
        <div className='home'>
            {/*<Dialogs/>*/}
            <MessagePage/>
        </div>
    )
};


export default HomePage