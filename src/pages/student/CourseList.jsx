import React, { useContext, useEffect, useState } from 'react'
import './stdPagesStyle/courseList.css'
import { systemContext } from '../../context/systemContext';
import SearchBar from '../../components/student/searchBar/SearchBar';
import { assets, dummyCourses } from '../../assets/assets';
import CourseCard from '../../components/student/courseCard/CourseCard';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
    let [courses,setAllCourses]=useState([]);
    let {searchVal,setSearchVal,showSearchVal,setshowSearchVal,previous_searchVal,setPrevious_searchVal} =useContext(systemContext);
    let navigate=useNavigate();

    useEffect(()=> {
        if(showSearchVal) {
            setAllCourses(dummyCourses.filter((e)=> e.courseTitle.toLowerCase().includes(previous_searchVal) ? true : false));
        }
        else {
            setAllCourses(dummyCourses);
        }

    },[previous_searchVal])

    let setSearching =()=> {
        setSearchVal('');
        setPrevious_searchVal('');
        setshowSearchVal(false);
    }

    return (
        <section className='courseList'>
            <div className="container">
                <div className="search">
                    <div className="text">
                        <h2>courses list</h2>
                        <p><span onClick={()=> navigate('/')}>home</span> / courses list</p>
                    </div>
                    <SearchBar/>
                </div>
                {/* search value */}
                {showSearchVal && <div className="valueDiv">
                    <p className="value">
                        <span>{previous_searchVal}</span>
                        <img src={assets.cross_icon} alt="check connection" loading='lazy' onClick={()=> setSearching()}/>
                    </p>
                </div>}
                {/* all courese */}
                <div className="allCourses">
                    {
                        courses.map((c,i)=> <CourseCard key={i} course={c}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default CourseList
