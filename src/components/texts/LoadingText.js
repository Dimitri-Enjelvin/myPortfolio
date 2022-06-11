import React from 'react'
import './LoadingText.scss'

const LoadingText = () =>{
  return (
    <div className="loading-text-container">
        <div className="loading-text-emoji-container">
            <p className="loading-text-animated">😎</p>
            <p className="loading-text-animated">😎</p>
            <p className="loading-text-animated">😎</p>
        </div>
    </div>
  )
}


export default LoadingText