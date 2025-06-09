import React, { useContext, useEffect, useState } from 'react'
import './chapter.css'
import { assets } from '../../../assets/assets'
import { systemContext } from '../../../context/systemContext'
import humanizeDuration from 'humanize-duration'

const Chapter = ({chapter,setPlay,setId}) => {
    let [lectures,setLectures]=useState([]);
    let [showLectures,setShowLectures]=useState(false);
    let {chapterTime}=useContext(systemContext);

    useEffect(()=> {
        setLectures(chapter.chapterContent);
    },[])

    let handle=(lec)=> {
        setId(lec.lectureUrl.split('/').pop());
        setPlay(true)
    }

    return (
        <div className='chapter'>
            {/* shown part */}
            <div className="shownPart" onClick={()=> setShowLectures(!showLectures)}>
                <div className="name">
                    <img src={assets.down_arrow_icon} alt="arrow" loading='lazy' className={`${!showLectures ? '-rotate-90' : 'rotate-0'}`}/>
                    <h3>{chapter.chapterTitle}</h3>
                </div>
                <div className="duration">
                    <p>{lectures.length} lectures</p>
                    <p>-</p>
                    <p>{chapterTime(chapter)}</p>
                </div>
            </div>
            {/* hidden Part */}
            <div className={`lectures ${showLectures? 'relative' :'absolute'}`}>
                {
                    lectures.map((lec)=>
                        <div className="lecture" key={lec.lectureId}>
                            <div className="lecName" onClick={()=> handle(lec)}>
                                <img src={assets.play_icon} alt="vidoe icon" loading='lazy'/>
                                <p>{lec.lectureTitle}</p>
                            </div>
                            <div className="duration">
                                <p className="time">{humanizeDuration(lec.lectureDuration*60*1000,{units:['h','m']})}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Chapter
