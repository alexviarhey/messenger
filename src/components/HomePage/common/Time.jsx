import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow";


const Time = ({date, className}) => {
    return (
        <div className={className}>
            {formatDistanceToNow(date, {addSuffix: true})}
        </div>
    )
};


export default Time