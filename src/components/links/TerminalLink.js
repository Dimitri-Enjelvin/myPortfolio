import React from 'react'
import './TerminalLink.scss'

import { StaticImage } from "gatsby-plugin-image"

const TerminalLink = () => {
  return (
    <a className="terminal-link" href="https://github.com/Dimitri-Enjelvin">
        <StaticImage src="../assets/images/github-logo.png" alt="Github logo" width={10} height={10} />
        <p className="terminal-link-text">github.com/Dimitri-Enjelvin</p>
    </a>
  )
}

export default TerminalLink