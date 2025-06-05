import React from 'react'
import './footer.css'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import {useUser } from '@clerk/clerk-react'

const Footer = () => {
    let {user} =useUser();
    return (
        <footer>
            <div className="container">
                <div className="tempDiv">
                        <div className="info">
                        <div className="logo">
                            <img src={assets.logo_dark} alt="check connection" loading='lazy'/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias culpa
                            recusandae vitae ab necessitatibus quia laborum repudiandae beatae eaque atque ut sint
                            accusamus suscipit, reiciendis exercitationem natus fugit veritatis!
                        </p>
                    </div>
                    <div className="pages">
                        <h1>company</h1>
                        <ul>
                            <li><Link>home</Link></li>
                            <li><Link to={`${user? '/' : '/'}`}>about us</Link></li>
                            <li><Link to={`${user? '/' : '/'}`}>contact us</Link></li>
                            <li><Link to={`${user? '/' : '/'}`}>private policy</Link></li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h2>subscribe to our newsletter</h2>
                        <p>
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form action="">
                            <input type="email" placeholder='enter your email'/>
                            <button>subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                Copyright 2024 © Elnemr . All Right Reserved.
            </div>
        </footer>
    )
}

export default Footer
