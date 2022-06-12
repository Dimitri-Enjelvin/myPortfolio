import React, { useState, createContext } from 'react'


const TerminalContext = createContext()


const TerminalContextProvider = ( {children} ) => { 

    const [isLanguage, setLanguage] = useState(false)
    const [isName, setName] = useState(false)
    const [isStatus, setStatus] = useState(false)

    const [errors, setErrors] = useState({
        language: "",
        name: "",
        status: "",
    })


    const values = {
        isLanguage,
        isName,
        isStatus,
        errors,
    }

    const func = {
        setLanguage,
        setName,
        setStatus,
        setErrors,
    }

    return (
        <TerminalContext.Provider value={{values, func}}>
            {children}
        </TerminalContext.Provider>
    )
}

export { TerminalContext, TerminalContextProvider }