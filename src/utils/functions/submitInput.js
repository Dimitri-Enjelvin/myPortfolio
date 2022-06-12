const submitTerminalInput = (event, values, func, lang, inputRef) => {

    const { handleLanguageChangeToEN, handleLanguageChangeToFR } = lang
    const { isLanguage, isName, isStatus } = values
    const { setLanguage, setName, setStatus, setErrors } = func

    event.preventDefault()

    const value = inputRef.current.value
    const french = value === "FR" || value === "Fr" || value === "fr" || value === "French" || value === "Français"
    const english = value === "EN" || value === "En" || value === "en" || value === "English" || value === "Anglais"
    const recruiter = value === "Recruiter" || value === "Recruteur" || value === "recruiter" || value === "recruteur"
    const customer = value === "Customer" || value === "Client" || value === "customer" || value === "client"

    // empty input case

    if(value === undefined || value === "") {
        console.log('please type something')
    }
    // wrong language case

    if(!isLanguage && value && !french && !english) {
        setErrors({language: 'language does not exist' })
    }

    // english and french language case

    if(!isLanguage && french) {
        setLanguage(true);
        setErrors({language: '' })
        // handleLanguageChangeToFR()
        console.log('french chosen')
    }

    if(!isLanguage && english) {
        setLanguage(true);
        setErrors({language: '' })
        // handleLanguageChangeToEN()
        console.log('english chosen')
    }

    // wrong status case

    if(isLanguage && !isStatus && value && !recruiter && !customer) {
        console.log('enter a real job please')
    }

    // recruiter and customer case

    if(isLanguage && !isStatus && recruiter) {
        console.log('its a recruiter')
        setStatus(true)
    }

    if(isLanguage && !isStatus && customer) {
        setStatus(true)
        console.log('its a customer')
    }

    // name case

    if(isLanguage && isStatus && value) {
        setName(true)
        console.log('its a name')
    }

    // Reset input value

    inputRef.current.value = ""
}

export { submitTerminalInput }