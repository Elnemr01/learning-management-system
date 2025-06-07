import React from 'react'
import './callToAction.css'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/assets'

const CallToAction = () => {
    return (
        <div className='callAction'>
            <div className="container">
                <h1>Learn anything, anytime, anywhere</h1>
                <p>
                    Incididunt sint fugiat pariatur cupidatat consectetur sit
                    cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
                <div className="links">
                    <Link className='started'>get started</Link>
                    <Link className='more'>
                        <span>learn more</span>
                        <img src={assets.arrow_icon} alt="check connection" loading='lazy'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
