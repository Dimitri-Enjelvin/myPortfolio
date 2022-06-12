import React from 'react'
import './LanguageText.scss'

import useVisible from '../../utils/hooks/useVisible'
import useTerminal from '../../utils/hooks/useTerminal'

const LanguageText = () => {

    const { isVisible } = useVisible(4000)
    const { values } = useTerminal()
    const { errors } = values

    return (
        <>
        <div className="language-text">
            <p className={`language-text-animated ${isVisible ? 'visible' : ''}`}>Please enter your language <span>(FR/EN)</span></p>
        </div>
        {errors.language && <p className="language-error">{errors.language}</p>}
        </>
    )
}

export default LanguageText