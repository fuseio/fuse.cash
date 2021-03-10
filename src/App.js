
import React, { StrictMode, Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { lazy } from '@loadable/component'
const HomePage = lazy(() => import('@/pages/HomePage'))

function Loader () {
  return (
    <div className='loader-container'>
      <div className='loader' />
    </div>
  )
}

function App () {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    </StrictMode>
  )
}

export default hot(module)(App)
