import React from 'react';
import './TerminalWindow.scss';

import useLoading from '../../utils/hooks/useLoading'

import LoadingText from '../texts/LoadingText'
import LanguageText from '../texts/LanguageText'

const TerminalWindow = () => {

    const { isLoading } = useLoading()

    return (
        <div className="terminal-window">
            
            {isLoading ?
            
                <LoadingText />
            :

                <LanguageText />

            }
            
            
        </div>
    )
}

export default TerminalWindow