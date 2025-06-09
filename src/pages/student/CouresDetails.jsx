import React, { useContext, useEffect, useState } from 'react'
import './stdPagesStyle/courseDetails.css'
import { useParams } from 'react-router-dom';
import { assets, dummyCourses } from '../../assets/assets';
import Loading from '../../components/student/loading/Loading';
import Chapter from '../../components/student/chapters/Chapter';
import DetailsRightPart from '../../components/student/detailsRightPart/DetailsRightPart';




const CouresDetails = () => {
    let [theCourse,setCourse]=useState({});
    let [chapters,setChapters]=useState([]);
    let [stdNums,setNums]=useState(0);
    let [videoPlay,setPlay]=useState(false);
    let [videoId,setVideoId]=useState(null);
    let {id} =useParams();


    useEffect(()=> {
        let findCourse=dummyCourses.find((e)=> e._id===id);
        setCourse(findCourse);
        setChapters(findCourse.courseContent);
        setNums(findCourse.enrolledStudents.length)
    },[])

    
    

    return !theCourse ? <Loading/> : (
        <section className='details'>
            <div className="container">
                {/* left part */}
                <div className="leftPart">
                    <div className="mainInfo">
                        <h1 className="name">{theCourse.courseTitle}</h1>
                        <p className="description" dangerouslySetInnerHTML={{__html : theCourse.courseDescription}}></p>
                    </div>
                        {/* rating */}
                    <div className="ratings">
                        <p className="rateNum">{theCourse.rating}</p>
                        <ul className="stars">
                            {[...Array(5)].map((_,i)=>
                            <li key={i}><img src={i<theCourse.rating ? assets.star :assets.star_blank} alt="star" loading='lazy'/></li>)}
                        </ul>
                        <p className="stdNum">{stdNums} students</p>
                    </div>
                    {/* course structure */}
                    <div className="structure">
                        <h2>course structure</h2>
                        <div className="chapters">
                            {
                                chapters.map((ch)=> <Chapter key={ch.chapterId} setPlay={setPlay} setId={setVideoId} chapter={ch}/>)
                            }
                        </div>
                    </div>
                    {/* course description */}
                    <div className="courseDescription">
                        <h2>course description</h2>
                        <p dangerouslySetInnerHTML={{__html: theCourse.courseDescription}}>{}</p>
                    </div>
                    
                </div>

                {/* right part */}
                <DetailsRightPart theCourse={theCourse} play={videoPlay} vId={videoId}/>
            </div>
        </section>
    ) 
}

export default CouresDetails
