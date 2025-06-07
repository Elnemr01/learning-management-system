import React, { useContext, useState } from 'react'
import './searchBar.css'
import { assets } from '../../../assets/assets';
import { systemContext } from '../../../context/systemContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    let {searchVal,setSearchVal,setshowSearchVal,setPrevious_searchVal}=useContext(systemContext);
    let navigate=useNavigate();



    let handleSubmitForm =(ev)=> {
        ev.preventDefault();
    }


    let goToCoursrList =()=> {
        setPrevious_searchVal(searchVal);
        setshowSearchVal(searchVal==='' ? false : true);
        navigate('/course-list')
    }

    return (
        <div className="searchBar">
            <form action="" onSubmit={(ev)=> handleSubmitForm(ev)}>
                <div>
                    <img src={assets.search_icon} alt="check connection" loading='lazy'/>
                    <input type="text" value={searchVal} onChange={(ev)=> setSearchVal(ev.target.value)}
                    placeholder='search for courses'/>
                </div>
                <button type='submit' onClick={()=> goToCoursrList()}>search</button>
            </form>
        </div>
    )
}

export default SearchBar
