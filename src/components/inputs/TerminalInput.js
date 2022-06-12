import React, { useRef } from 'react'
import './TerminalInput.scss'

import useVisible from '../../utils/hooks/useVisible'
import useLanguage from '../../utils/hooks/useLanguage'
import useTerminal from '../../utils/hooks/useTerminal'

import { submitTerminalInput } from '../../utils/functions/submitInput'


const TerminalInput = () => {

    const inputRef = useRef()
    const { isVisible } = useVisible(7500)
    const { handleLanguageChangeToEN, handleLanguageChangeToFR } = useLanguage()
    const { values, func } = useTerminal()

    const onSubmit = (event) => {

        const lang = {
            handleLanguageChangeToEN, 
            handleLanguageChangeToFR 
        }

        submitTerminalInput(event, values, func, lang, inputRef)
        
    }

    return (
        <form onSubmit={onSubmit}>
            
            <input 
            ref={inputRef} 
            className={`terminal-input ${isVisible ? 'visible' : ''}`} 
            type="text" 
            maxLength="50" 
            />
        </form>
    )
}

export default TerminalInput