import React, { useState, useEffect } from 'react'
import './LanguageConfirmedText.scss'
import { useTranslation } from 'react-i18next'

import useTerminal from '../../utils/hooks/useTerminal'

const LanguageConfirmedText = () => {

    const { t } = useTranslation()
    const { values } = useTerminal() 
    const { isLanguage } = values
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {

        if(!isLanguage) return
      
        setTimeout(() => {
            setVisible(true)
        }, 4000)

    }, [isLanguage])
    

    if(!isLanguage) return

    if(isLanguage) {
        return (
            <div className="language-confirmed-container">
                <p className="language-confirmed-animation">  
                {t('traduction:language-confirmed')}
                </p>
                {isVisible ? (
                <p className="language-confirmed-animation-2">
                    {t('traduction:status-asked')}
                </p>
                ) : null }
                
        </div>
        )
    }

}


export default LanguageConfirmedText