import React from 'react'
import './TerminalHeader.scss'

import BubbleButton from '../buttons/BubbleButton'
import TerminalLink from '../links/TerminalLink'


const TerminalHeader = () => {
  return (
    <div className="header-container">

      <div className="bubbles-container">
        <BubbleButton color="red" />
        <BubbleButton color="orange" />
        <BubbleButton color="green" />
      </div>

      <div className="link-container">
        <TerminalLink />
      </div>

    </div>
  )
}

export default TerminalHeader