import React from 'react'

const PrimaryButton = ({ type, text }) => {
    return (
      <button className="primary-button">
        <p className="primary-button-text">{text}</p>
      </button>
    )
}

export default PrimaryButton