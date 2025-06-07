import React, { useState } from 'react'
import './stdNavbar.css'
import {assets} from "../../../assets/assets"
import { Link, useLocation } from 'react-router-dom'
import { useClerk, useUser,UserButton } from '@clerk/clerk-react'

const Navbar = () => {
    const isCourseList =useLocation().pathname.includes('/course-list');
    let {openSignIn}=useClerk();
    let {user}=useUser();



    return (
        <header className={`${!isCourseList? 'bg-headerBackColor': 'bg-white'}`}>
            <div className='container'>
                <div className="logo">
                    <Link to={'/'}><img src={assets.logo} alt="check connection" loading='lazy'/></Link>
                </div>
                <ul className="links">
                    <ul className="subLinks">
                        {user &&
                        <>
                        <li><button>become educator</button></li>
                        <li>|</li>
                        <li><Link to={'/enrollments'}>my enrollments</Link></li>
                        </> 
                        }
                        {user ? <UserButton/> : <li><button onClick={()=> openSignIn()} className='createAcc'>create account</button></li>}
                    </ul>
                </ul>
                {/* for mobile screen */}
                <ul className="mobLinks">
                    {user &&
                    <>
                    <li><button>become educator</button></li>
                    <li>|</li>
                    <li><Link to={'/enrollments'}>my enrollments</Link></li>
                    </>
                    }
                    {
                        user ? <UserButton/> :<img src={assets.user_icon} alt="check connection" loading='lazy' onClick={()=> openSignIn()}/>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar
