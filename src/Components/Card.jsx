import React from 'react'
import Jellyfish from '../images/jellyfish.jpg'
import Pin from '../images/pin.svg'

export default function Card(props) {
    return (
        <main className="main">
            <img src={Jellyfish} alt="jellyfish-img" />
            <div className="main--info">
                <div className="main--location">
                    <img src={Pin} alt="pin-logo" />
                    <span>CANADA</span>
                    <a href='https://www.google.com/maps/place/Vancouver+Aquarium/@49.3004911,-123.1330714,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718d7aca6ca7:0x5f251627980ee358!8m2!3d49.3004876!4d-123.1308774'>
                        View on Google Maps Link
                    </a>
                </div>
                <h1 className='main--title'>Vancouver Aquarium</h1>
                <div className="main--date">
                    <span className='main--date-start'>12 Jan, 2014</span> - <span className='main--date-end'>24 Jan, 2014</span>
                </div>
                <p className="main--text">
                    The Vancouver Aquarium is a public aquarium located in Stanley Park in Vancouver,
                    British Columbia, Canada. Aquarium is a centre for marine research, ocean literacy
                    education, climate activism, conservation and marine animal rehabilitation.
                </p>
            </div>
        </main>
    )
}