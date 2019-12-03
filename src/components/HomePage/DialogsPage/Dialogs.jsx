import React from 'react'
import './DialogsPage.scss'
import Dialog from "./Dialog";


const Dialogs = () => {
    return (
        <div className='dialogs-wrapper'>
            <Dialog unread={3} isOnline={true} isMe={true} isRead={false}/>
            <Dialog  isRead={true}/>
            <Dialog isRead={false}/>
        </div>
    )
};


export default Dialogs