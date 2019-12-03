import React from 'react'
import './MessagePage.scss'
import Message from "./Message";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const MessagePage = () => {
    return (
        <div className='message-wrapper'>
            <Message
            text='Hello, Alex!'
            avatar='https://sun9-41.userapi.com/c638027/v638027865/1ed1a/n5odEli27_Q.jpg?ava=1'
            date={formatDistanceToNow(new Date(), {addSuffix: true})}
            />

            <Message
                text='Hello, Alex!'
                avatar='https://sun9-35.userapi.com/c636327/v636327272/4fd61/Vf2Fb91U7gA.jpg?ava=1'
                date={formatDistanceToNow(new Date(), {addSuffix: true})}
                isMe={true} isRead={true}
            />

            <Message
                avatar='https://sun9-35.userapi.com/c636327/v636327272/4fd61/Vf2Fb91U7gA.jpg?ava=1'
                isTyping={true}
            />

            <Message
                avatar='https://sun9-35.userapi.com/c636327/v636327272/4fd61/Vf2Fb91U7gA.jpg?ava=1'
                audio='https://notificationsounds.com/soundfiles/5737034557ef5b8c02c0e46513b98f90/file-sounds-1107-slow-jingle-bells.mp3'
            />
        </div>
    )
};



export default MessagePage