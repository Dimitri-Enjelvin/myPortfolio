import React from 'react'
import './LoadingText.scss'

const LoadingText = () =>{
  return (
    <div className="loading-text-container">
        <p className="loading-text-stable"> &gt;&gt; Loading</p>
        <p className="loading-text-animated">😎</p>
        <p className="loading-text-animated">😎</p>
        <p className="loading-text-animated">😎</p>
    </div>
  )
}


export default LoadingText