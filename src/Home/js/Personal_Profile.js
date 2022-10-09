import React from 'react'

import Personal_image from './../../logo/image_personal_profile.webp'
import "./../css/Personal_Profile.css"

function Personal_Profile() {
    return (
        <>
            <div className='container'>
                <div className='text-portion'>
                    <span style={{ fontSize: '18px', alignSelf: 'flex-start', letterSpacing: '2px', fontWeight: '500', textTransform: 'uppercase' }}>This is me</span>
                    <span style={{ marginTop: '40px', alignSelf: 'flex-start', fontSize: '60px', fontWeight: '600', textTransform: 'uppercase' }}>PHILIP Gilberd</span>
                    <span style={{ width: '55%', textAlign: 'left', lineHeight: '1.2rem', marginTop: '30px', alignSelf: 'flex-start', color: 'grey' }}>You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</span>
                    <button className='btn-style'>Discover Now</button>
                </div>
                <img className='image_style' src={Personal_image} alt="" />

            </div>

        </>
    )
}

export default Personal_Profile