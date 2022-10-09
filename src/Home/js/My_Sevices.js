import React from 'react'

import './../css/My_Sevices.css'

import chart from './../../logo/chart.jpg'
import laptop from './../../logo/laptop.jpg'
import photo from './../../logo/photo.jpg'
import picture from './../../logo/picture.jpg'
import tablet from './../../logo/tablet.jpg'
import rocket from './../../logo/rocket.jpg'


function My_Sevices() {

    const service = [
        { id: 1, Title: 'Web Design', logo: chart, paragraph: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”' },
        { id: 2, Title: 'Web Development', logo: laptop, paragraph: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.' },
        { id: 3, Title: 'Photography', logo: photo, paragraph: 'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.' },
        { id: 4, Title: 'Clipping Path', logo: picture, paragraph: 'Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.' },
        { id: 5, Title: 'Apps Interface', logo: tablet, paragraph: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.' },
        { id: 6, Title: 'Graphic Design', logo: rocket, paragraph: 'You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.' },

    ]
    return (
        <>
            <h1 className='heading' >My Offered Services</h1>
            <p style={{ paddingLeft: '30vw', lineHeight: '1.625em', color: '#777', fontWeight: '300', justifySelf: 'center', width: '35vw' }}> At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected. </p>
            <div className='service-container'>

                {service.map((entry) => {
                    return <div className='entry_style' key={entry.id} >
                        {/* <div className={entry.logo}>  </div> */}
                        <div className='image_title'>

                            <img className='image' src={entry.logo} alt="" />
                            <div className='title'> {entry.Title} </div>
                        </div>

                        <div className='paragraph'> {entry.paragraph} </div>

                    </div>
                })}
            </div>

        </>
    )
}

export default My_Sevices