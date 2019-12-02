import React from 'react'
import '../Auth.scss'


const Block = ({children}) => {
    return (
        <div className='block'>
            {children}
        </div>
    )
};

export default Block