import React from 'react'
import Navbar from './js/Navbar'
import Footer from './js/Footer'
import PersonalProfile from './js/Personal_Profile'
import AboutMe from './js/About_Me'
import MySevices from './js/My_Sevices'
import './css/Navbar.css'
import Stats from './js/Stats'
import FeaturedProjects from './js/Featured_Projects'
import ClientsFeedback from './js/ClientsFeedback'
import PaymentPlan from './js/PaymentPlan'
import LatestBlog from './js/LatestBlog'
import LogoCompany from './js/LogoCompany'

const index = () => {
    return (
        <>
            <Navbar></Navbar>
            <PersonalProfile></PersonalProfile>
            <AboutMe></AboutMe>
            <MySevices></MySevices>
            <Stats></Stats>
            <FeaturedProjects></FeaturedProjects>
            <ClientsFeedback></ClientsFeedback>
            <PaymentPlan></PaymentPlan>
            <LatestBlog></LatestBlog>
            <LogoCompany></LogoCompany>

            <Footer></Footer>

        </>
    )
}

export default index