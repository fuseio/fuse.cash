
import React, { StrictMode } from 'react'
import { hot } from 'react-hot-loader'
import HomePage from '@/pages/HomePage'

function App () {
  return (
    <StrictMode>
      <HomePage />
    </StrictMode>
  )
}

export default hot(module)(App)
