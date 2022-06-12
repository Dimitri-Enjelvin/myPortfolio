import { useState, useEffect } from 'react'


export default function useLoading() {

    const [isLoading, setLoading] = useState(false)


    // useEffect(() => {

    //     setTimeout(() => {
    //         setLoading(prev => !prev)
    //     }, 10000);
      
    // }, [])
    

    return { isLoading }
}