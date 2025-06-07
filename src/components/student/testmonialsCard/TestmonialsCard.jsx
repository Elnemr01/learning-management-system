import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/assets'

const TestmonialsCard = ({person}) => {
    return (
        <div className='testmonialsCard'>
            <div className="info">
                <div className="image">
                    <img src={person.image} alt="check connection" loading='lazy'/>
                </div>
                <div className="personal">
                    <h2 className="name">{person.name}</h2>
                    <p className="role">{person.role}</p>
                </div>
            </div>
            <ul className="ratings">
                {
                    [...Array(5)].map((_,i)=>
                        <li key={i}><img src={i<Math.floor(person.rating) ? assets.star : assets.star_blank} alt="check connection" loading='lazy'/></li>
                    )
                }
            </ul>
            <p className="feedBack">{person.feedback}</p>
            <Link to={'/'}>Read more</Link>
        </div>
    )
}

export default TestmonialsCard
