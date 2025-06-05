import React from 'react'
import './hero.css'
import { assets } from '../../../assets/assets'
import SearchBar from '../searchBar/SearchBar'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <h1 className="title">
                    Empower your future with the courses designed to <span>fit your choice.</span>
                    <img src={assets.sketch} alt="check connection" loading='lazy'/>
                </h1>
                <p>
                    We bring together world-class instructors, interactive content,
                    and a supportive community to help you achieve your personal and
                    professional goals.
                </p>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Hero
