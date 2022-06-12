import React from 'react'
import './index.scss'

import { TerminalContextProvider } from '../utils/contexts/TerminalContext'

import Terminal from '../containers/home/Terminal'

const Home = () => {
  return (
    <TerminalContextProvider>
      <div className="home-container"> 
        <Terminal />
      </div>
    </TerminalContextProvider>
  )
}

export default Home