import React from 'react'
import Message from "./Message";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const MessagePage = () => {
    return (
        <div>
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
                avatar='https://sun9-41.userapi.com/c638027/v638027865/1ed1a/n5odEli27_Q.jpg?ava=1'
                isTyping={true}
            />
        </div>
    )
};



export default MessagePage