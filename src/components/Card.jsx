import React from 'react'

const Card = (props) => {

    return (
        <div className='cards-container'>
            <div className='card'>

            <div>
            <img src= {`${props.img}`} alt='img' className='card-image' />
            </div>

            <div className='information'>
                <div style={{display: 'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <p>{props.location}</p>
                    <a href={`${props.URL}`} >View on Google Maps</a>
                </div>
                <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <h1>{props.title}</h1>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p style={{marginLeft: '3rem'}}>{props.description}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
