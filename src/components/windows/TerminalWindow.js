import React from 'react';
import './TerminalWindow.scss';

import useLoading from '../../utils/hooks/useLoading'

import LoadingText from '../texts/LoadingText'
import ConnectedText from '../texts/ConnectedText'
import LanguageText from '../texts/LanguageText'
import LanguageConfirmedText from '../texts/LanguageConfirmedText'
import TerminalInput from '../inputs/TerminalInput'


const TerminalWindow = () => {

    const { isLoading } = useLoading()

    return (
        <div className="terminal-window">

            {isLoading ?
            
                <LoadingText />
            :
            <>
                <ConnectedText />
                <LanguageText />
                <LanguageConfirmedText />
                <TerminalInput />
            </>
            }
            
            
        </div>
    )
}

export default TerminalWindow