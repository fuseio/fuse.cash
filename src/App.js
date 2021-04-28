
import React, { StrictMode, Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { lazy } from '@loadable/component'
import { Route } from 'wouter'
const HomePage = lazy(() => import('@/pages/HomePage'))
const Privacy = lazy(() => import('@/pages/PrivacyPolicy'))

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
        <Route path='/privacy' component={Privacy} />
        <Route path='/' component={HomePage} />
      </Suspense>
    </StrictMode>
  )
}

export default hot(module)(App)
