
import React from 'react'


const MessageCheck = ({isRead}) => {
    return (
        <div>
            {isRead ?
                <svg fill="#3674ff" viewBox="0 0 594.149 594.149" width='20' height='20'
                     xmlns="http://www.w3.org/1999/xlink">
                    <path d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
			l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
                </svg>
                :
                <svg fill="#3674ff" viewBox="0 0 448.8 448.8" width='15' height='15'
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="check">
                        <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/>
                    </g>
                </svg>
            }
        </div>
    )
};


export default MessageCheck
