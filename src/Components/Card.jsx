import React from 'react'
import Pin from '../images/pin.svg'

export default function Card(props) {
    return (
        <main className="main">
            <img src={props.imageUrl} alt="location-img" />
            <div className="main--info">
                <div className="main--location">
                    <img src={Pin} alt="pin-logo" />
                    <span>{props.location}</span>
                    <a href= {props.googleMapsUrl}>
                        View on Google Maps Link
                    </a>
                </div>
                <h1 className='main--title'>{props.title}</h1>
                <div className="main--date">
                    <span className='main--date-start'>{props.startDate}</span> - <span className='main--date-end'>{props.endDate}</span>
                </div>
                <p className="main--text">
                    {props.description}
                </p>
            </div>
        </main>
    )
}