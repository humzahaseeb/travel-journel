import React from 'react'
import globe from '../globe-solid.svg'

const header = () => {
    return (
        <div className='header'>
            <img src={globe} alt='globe' />
            <h1> my travel journal.</h1>
        </div>
    )
}

export default header
