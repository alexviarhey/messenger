import React from 'react'
import Time from "../common/Time";
import MessageCheck from "../common/MessageCheck";
import  './DialogsPage.scss'


const Dialog = ({isMe, isRead, isOnline, unread}) => {
    return (
        <div className='dialog'>
            <div className={!isOnline ? 'dialog__avatar' : 'dialog__avatar-online'}>
                <img src='https://sun9-41.userapi.com/c638027/v638027865/1ed1a/n5odEli27_Q.jpg?ava=1' alt="avatar"/>
            </div>
            <div className='dialog__info'>
                <div className='dialog__info-top'>
                    <div className='dialog__info-top-userName'>
                        Aliaxei Viarhei
                    </div>
                    <Time date={new Date()} className='dialog__info-top-date'/>
                </div>
                <div className='dialog__info-bottom'>
                    <div className='dialog__info-bottom-text'>
                        Привет меня зовут Алексей Вергей, а и да, я - супермен
                    </div>
                    {isMe ?
                        <div className='dialog__info-bottom-message-count'>
                            {(unread) > 9 ? '+9' : unread}
                        </div>
                        :
                        <MessageCheck isRead={isRead}/>
                    }
                </div>

            </div>

        </div>
    )
};


export default Dialog