import React from 'react'

const BubbleButton = ({ color }) => {

    if(color === 'red') {
        return (
            <div className="bubble_red" />
        )
    }

    if(color === 'orange') {
        return (
            <div className="bubble_orange" />
        )
    }

    if(color === 'green') {
        return (
            <div className="bubble_green" />
        )
    }
  
}

export default BubbleButton