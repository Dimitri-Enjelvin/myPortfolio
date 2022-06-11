import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const TerminalLink = () => {
  return (
    <a className="terminalLink" href="https://github.com/Dimitri-Enjelvin">
        <StaticImage src="../assets/images/github-logo.png" alt="Github logo" />
        <p className="terminalLink_text">github.com/Dimitri-Enjelvin</p>
    </a>
  )
}

export default TerminalLink