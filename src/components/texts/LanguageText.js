import React from 'react'
import './LanguageText.scss'

import useVisible from '../../utils/hooks/useVisible'

const LanguageText = () => {

    const { isVisible } = useVisible(4000)

    return (
        <div className="language-text">
            <p className={`language-text-animated ${isVisible ? 'visible' : ''}`}>Please enter your language <span>(FR/EN)</span></p>
        </div>
    )
}

export default LanguageText