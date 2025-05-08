import React, { useState } from 'react'
import './stdNavbar.css'
import {assets} from "../../../assets/assets"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const isCourseList =useLocation().pathname.includes('/course-list');
    return (
        <header className={`${!isCourseList? 'bg-headerBackColor': 'bg-white'}`}>
            <div className='container'>
                <div className="logo">
                    <img src={assets.logo} alt="check connection" loading='lazy'/>
                </div>
                <ul className="links">
                    <ul className="subLinks">
                        <li><button>become educator</button></li>
                        <li>|</li>
                        <li><Link to={'/enrollments'}>my enrollments</Link></li>
                    </ul>
                    <li><button>create account</button></li>
                </ul>
                {/* for mobile screen */}
                <ul className="mobLinks">
                    <li><button>become educator</button></li>
                    <li>|</li>
                    <li><Link to={'/enrollments'}> <img src={assets.user_icon} alt="check connection" loading='lazy' /> </Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
