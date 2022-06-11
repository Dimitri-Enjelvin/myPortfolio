import React from 'react';
import './TerminalWindow.scss';

import LoadingText from '../texts/LoadingText'

const TerminalWindow = () => {

    return (
        <div className="terminal-window">
            <LoadingText />
        </div>
    )
}

export default TerminalWindow