import React from 'react'
import './LanguageConfirmedText.scss'
import { useTranslation } from 'react-i18next'

import useTerminal from '../../utils/contexts/TerminalContext'

const LanguageConfirmedText = () => {

    const { t } = useTranslation()
    const { values } = useTerminal() 
    const { isLanguage } = values


    return (
        <div className="language-confirmed-container">
            <p className={`language-confirmed-first-animation ${isLanguage ? 'visible' : ""}`}>{t('traduction:language-confirmed')}</p>
            <p className={`language-confirmed-second-animation ${isLanguage ? 'visible' : ""}`}>{t('traduction:status-asked')}</p>
        </div>
    )
}


export default LanguageConfirmedText