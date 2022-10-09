import React from 'react'
import '../css/Navbar.css'

import logo_personal from './../../logo/Pesonal_logo.webp'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo_personal} alt="logo not found" />
                </div>

                <div className='navigation'>
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Services
                    </div>

                    <div>
                        Portfolio
                    </div>
                    <div>
                        Pricing
                    </div>
                    <div>
                        Blog
                    </div>
                    <div>
                        Pages
                    </div>
                    <div>
                        Contact
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar