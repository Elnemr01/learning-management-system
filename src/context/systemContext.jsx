import { createContext, useEffect, useState } from "react";
import React from 'react'





export const systemContext=createContext();

const SysContextProvider = ({children}) => {
    let currency=import.meta.env.VITE_CURRENCY || '$';
    let [searchVal,setSearchVal]=useState('');
    let [previous_searchVal,setPrevious_searchVal]=useState('');
    let [showSearchVal,setshowSearchVal]=useState(false);
    let [previous_showSearchVal,setPrevious_showSearchVal]=useState(false);


    let value={
        currency,
        searchVal,
        setSearchVal,
        showSearchVal,
        setshowSearchVal,
        previous_searchVal,
        setPrevious_searchVal,
        previous_showSearchVal,
        setPrevious_showSearchVal
    };
    return (
        <systemContext.Provider value={value}>
            {children}
        </systemContext.Provider>
    )
}

export default SysContextProvider
