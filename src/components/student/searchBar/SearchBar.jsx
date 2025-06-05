import React, { useState } from 'react'
import './searchBar.css'
import { assets } from '../../../assets/assets';

const SearchBar = () => {
    let [searchVal,setSearchVal]=useState('');



    let handleSubmitForm =(ev)=> {
        ev.preventDefault();
    }

    return (
        <div className="searchBar">
            <form action="" onSubmit={(ev)=> handleSubmitForm(ev)}>
                <div>
                    <img src={assets.search_icon} alt="check connection" loading='lazy'/>
                    <input type="text" value={searchVal} onChange={(ev)=> setSearchVal(ev.target.value)}
                    placeholder='search for courses'/>
                </div>
                <button type='submit'>search</button>
            </form>
        </div>
    )
}

export default SearchBar
