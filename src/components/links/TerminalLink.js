import React from 'react'
import './TerminalLink.scss'

import { StaticImage } from "gatsby-plugin-image"

const TerminalLink = () => {
  return (
    <div className="terminal-link">
      
      <a href="https://github.com/Dimitri-Enjelvin">
        <StaticImage src="../../assets/images/github-logo.png" alt="Github logo" width={16} height={16} />
        <p className="terminal-link-text">github.com/Dimitri-Enjelvin</p>
      </a>
        
    </div>
  )
}

export default TerminalLink