import React, { useContext, useEffect, useState } from 'react'
import './courseSection.css'
import CourseCard from '../courseCard/CourseCard';
import { Link } from 'react-router-dom';
import { systemContext } from '../../../context/systemContext';
import { dummyCourses } from '../../../assets/assets';

const CourseSection = () => {
    let [courses,setAllCourses]=useState([]);


    useEffect(()=> {
        setAllCourses(dummyCourses.slice(0,4));
    },[]);
    

    return (
        <div className='CourseSection'>
            <div className="container">
                <div className="title">
                    <h1>Learn from the best</h1>
                    <p>
                        Discover our top-rated courses across various categories.
                        From coding and design to business and wellness,
                        our courses are crafted to deliver results.
                    </p>
                </div>
                <div className="courses">
                    {
                        courses.map((c)=> <CourseCard course={c} key={c._id}/>)
                    }
                </div>
                <Link to={'/course-list'}>Show all courses</Link>
            </div>
        </div>
    )
}

export default CourseSection
