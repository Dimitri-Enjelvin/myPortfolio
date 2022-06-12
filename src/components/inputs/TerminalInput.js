import React, { useRef } from 'react'
import './TerminalInput.scss'

import useVisible from '../../utils/hooks/useVisible'


const TerminalInput = () => {

    const inputRef = useRef()
    const { isVisible } = useVisible(7500)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('entered')
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