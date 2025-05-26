import { createContext } from "react";



export const systemContext=createContext();


import React from 'react'

const SysContextProvider = ({children}) => {
    let value={};
    return (
        <systemContext.Provider value={value}>
            {children}
        </systemContext.Provider>
    )
}

export default SysContextProvider
