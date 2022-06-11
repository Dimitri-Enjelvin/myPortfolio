import React from 'react'
import './BubbleButton.scss'

const BubbleButton = ({ color }) => {

    if(color === 'red') {
        return (
            <div className="bubble-red" />
        )
    }

    if(color === 'orange') {
        return (
            <div className="bubble-orange" />
        )
    }

    if(color === 'green') {
        return (
            <div className="bubble-green" />
        )
    }
  
}

export default BubbleButton