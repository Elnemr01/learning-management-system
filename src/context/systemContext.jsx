import humanizeDuration from "humanize-duration";
import { createContext, useState } from "react";
import React from 'react'





export const systemContext=createContext();

const SysContextProvider = ({children}) => {
    let currency=import.meta.env.VITE_CURRENCY || '$';
    let [searchVal,setSearchVal]=useState('');
    let [previous_searchVal,setPrevious_searchVal]=useState('');
    let [showSearchVal,setshowSearchVal]=useState(false);
    let [previous_showSearchVal,setPrevious_showSearchVal]=useState(false);
    let [videoPlayer,setPlayer]=useState(null);

    // calc chapter Time
    let chapterTime=(chapter)=> {
        let time=0;
        chapter.chapterContent.map((lec)=> time+=lec.lectureDuration)

        return humanizeDuration(time*60*1000, {units:['h','m']});
    }
    // calc course time
    let courseTime = (course) => {
        if (!course || !Array.isArray(course.courseContent)) return '0m';

        let time = 0;
        
        course.courseContent.forEach((chapter) => {
            if (Array.isArray(chapter.chapterContent)) {
                chapter.chapterContent.forEach((lecture) => {
                    time += lecture.lectureDuration || 0;
                });
            }
        });

        return humanizeDuration(time * 60 * 1000, {
            units: ['h', 'm'],
            round: true
        });
    };
    // calc lecture num

    let lectureNum = (course) => {
        if (!course || !Array.isArray(course.courseContent)) return 0;

        let lecNum = 0;

        course.courseContent.forEach((chapter) => {
            if (Array.isArray(chapter.chapterContent)) {
                lecNum += chapter.chapterContent.length;
            }
        });

        return lecNum;
    };



    let value={
        currency,
        searchVal,
        setSearchVal,
        showSearchVal,
        setshowSearchVal,
        previous_searchVal,
        setPrevious_searchVal,
        previous_showSearchVal,
        setPrevious_showSearchVal,
        chapterTime,
        courseTime,
        lectureNum,
        videoPlayer,
        setPlayer
        
    };
    return (
        <systemContext.Provider value={value}>
            {children}
        </systemContext.Provider>
    )
}

export default SysContextProvider
