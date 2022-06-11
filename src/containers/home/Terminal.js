import React from 'react'
import './Terminal.scss'

import TerminalHeader from "../../components/headers/TerminalHeader"
import TerminalWindow from "../../components/windows/TerminalWindow"

const Terminal = () => {
    return (
        <div className="terminal-container">
            <TerminalHeader />
            <TerminalWindow />
        </div>
    )
}

export default Terminal