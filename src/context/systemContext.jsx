import { createContext } from "react";



export const systemContext=createContext();


import React from 'react'

const SysContectProvider = ({children}) => {
    let value={};
    return (
        <systemContext.Provider value={value}>
            {children}
        </systemContext.Provider>
    )
}

export default SysContectProvider
