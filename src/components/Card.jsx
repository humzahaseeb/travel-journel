import React from 'react'

const Card = (props) => {

    return (
        <div className='cards-container'>
            <div className='card'>

            <div>
            <img src= {`${props.img}`} alt='img' className='card-image' />
            </div>

            <div className='information'>
                <div className='location'>
                    <p>{props.location}</p>
                    <a href={`${props.URL}`} >View on Google Maps</a>
                </div>

                <div className='description'>
                    <h1>{props.title}</h1>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p className='para'>{props.description}</p>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Card
