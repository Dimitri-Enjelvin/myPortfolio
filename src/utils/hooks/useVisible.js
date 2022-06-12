import { useState, useEffect } from 'react'


export default function useVisible(timer) {

    const [isVisible, setVisible] = useState(false)


    useEffect(() => {
      
        setTimeout(() => {
            setVisible(prev => !prev)
        }, timer);

    }, [timer])
    


    return { isVisible }
}