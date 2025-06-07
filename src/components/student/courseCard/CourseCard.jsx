import React, { useContext } from 'react'
import './courseCard.css'
import { assets, dummyCourses } from '../../../assets/assets'
import { systemContext } from '../../../context/systemContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {

    let {currency}=useContext(systemContext);

    return (
        <Link to={`/course/${course._id}`} className='courseCard'>
            <div className="image">
                <img src={course.courseThumbnail} alt="check connection" loading='lazy'/>
            </div>
            <div className="info">
                <h2 className="courseName">{course.courseTitle}</h2>
                <div className="ratings">
                    <p>5</p>
                    <ul className="stars">
                        {
                            [...Array(5)].map((_,i)=>
                            <li key={i}>
                                <img src={ assets.star}
                                alt="check connection" loading='lazy'/>
                            </li>)
                        }
                    </ul>
                    <p className="num">({course.__v})</p>
                </div>
                <p className="price">{currency}{Math.ceil(course.coursePrice-course.coursePrice*course.discount/100)}</p>
            </div>
        </Link>
    )
}

export default CourseCard
