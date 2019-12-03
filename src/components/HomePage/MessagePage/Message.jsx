import React from 'react'
import './MessagePage.scss'
import MessageCheck from "../common/MessageCheck";
import AudioMessage from "./AudioMessage";


const Message = ({text, date, avatar, isMe, isRead, isTyping, audio}) => {

    return (
        <div className={isMe ? 'message_me' : 'message'}>
            <div className='message__avatar'>
                <img src={avatar} alt="user_photo"/>
            </div>
            <div className='message__content'>
                <div className={!audio ? 'message__bubble' : 'message__bubble-audio'}>
                    {text && <div className='message__text'>{text}</div>}
                    {isTyping &&
                    <div className='message__typing'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                    {audio &&
                    <AudioMessage audioSrc={audio} />
                    }
                </div>
                {date && <div className='message__date'>{date}</div>}
            </div>
            {isMe &&
            <div className='message_me__check'>
                <MessageCheck isRead={isRead} />
            </div>
            }
        </div>
    )
};


export default Message