import React from 'react'
import { assets, dummyCourses } from '../../../assets/assets'

const CourseCard = ({course}) => {
    return (
        <div className='courseCard'>
            <div className="image">
                <img src={assets.add_icon} alt="check connection" loading='lazy'/>
            </div>
            <h2 className="courseName">Web Development Bootcamp</h2>
        </div>
    )
}

export default CourseCard
