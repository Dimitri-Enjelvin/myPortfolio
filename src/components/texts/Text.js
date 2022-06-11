import React from 'react'

const Text = ({ color, text }) => {
  return (
    <p className={
        color === "red" ? "text-red" 
        : color === "orange" ? "text-orange"
        : "text-green"
    }>
        {text}
    </p>
  )
}

export default Text