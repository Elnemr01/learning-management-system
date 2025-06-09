import React, { use, useContext, useEffect, useState } from 'react'
import './rightPart.css'
import { assets } from '../../../assets/assets'
import { systemContext } from '../../../context/systemContext'
import Loading from '../loading/Loading'
import { useUser } from '@clerk/clerk-react'
import { toast, ToastContainer } from 'react-toastify'
import YouTube from 'react-youtube'

const DetailsRightPart = ({theCourse,play,vId}) => {

    let {user}=useUser();
    
    let {currency,courseTime,lectureNum}=useContext(systemContext);



    let aboutCourse=[
        'Lifetime access with free updates.',
        'Step-by-step, hands-on project guidance.',
        'Downloadable resources and source code.',
        'Quizzes to test your knowledge.',
        'Certificate of completion.',
    ]

    let handleEnrollBtn =()=> {
        if(!user) {
            toast.warning('Login to enroll this courses');
        }
        else {
            toast.success('Course Enrolled');
        }
    }




    if(!theCourse) return <Loading/>
    return (
        <div className="rightPart">
            <div className="image courseVideo">
                {play ? <YouTube videoId={vId} opts={{playerVars: {autoplay : 1}}}/> : <img src={theCourse.courseThumbnail} alt="check connection" loading='lazy'/>}
            </div>
            <div className="data">
                <ul className="allPrices">
                    <li>{currency}{(theCourse.coursePrice-(theCourse.coursePrice*theCourse.discount)/100).toFixed(2)}</li>
                    <li>{currency}{theCourse.coursePrice}</li>
                    <li>{theCourse.discount}% off</li>
                </ul>
                <ul className="courseTime">
                    <li>
                        <img src={assets.star} alt="star" loading='lazy'/>
                        {theCourse.rating}
                    </li>
                    <li>|</li>
                    <li>
                        <img src={assets.time_clock_icon} alt="time icon" loading='lazy'/>
                        {courseTime(theCourse)}
                    </li>
                    <li>|</li>
                    <li>
                        <img src={assets.lesson_icon} alt="lesson incon" loading='lazy'/>
                        {lectureNum(theCourse)} lessons
                    </li>
                </ul>
                <button onClick={()=> handleEnrollBtn()}>enroll now</button>
                <ToastContainer />
                <div className="about">
                    <h2>What's in the course?</h2>
                    <ul className="aboutCourse">
                        {
                            aboutCourse.map((ele,i)=> <li key={i}>{ele}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailsRightPart
