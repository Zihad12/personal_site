import React from 'react'
import './../css/About_Me.css'

import AboutMeImage from './../../logo/About_Me.webp'

function About_Me() {
    return (
        <>
            <div className='container'>

                <div className='img-container'>
                    <img src={AboutMeImage} alt="" srcSet="" />

                </div>

                <div className='text-container'>

                    <h4 style={{ marginBottom: '30px', fontSize: '14px', fontWeight: '400' }}>ABOUT ME</h4>
                    <h2 style={{ fontSize: '40px', fontWeight: '600' }}> PERSONAL DETAILS </h2>

                    <p className='paragraph'> Here, I focus on a range of items and features that we use in life without giving them a second thought.
                        such as Coca Cola.Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                    <button className='btn'> View Full Details </button>

                </div>
            </div>

        </>
    )
}

export default About_Me