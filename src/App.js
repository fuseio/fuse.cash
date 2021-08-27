
import React, { StrictMode, Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { lazy } from '@loadable/component'
import { Route, Switch } from 'wouter'
const HomePage = lazy(() => import('@/pages/HomePage'))
const Privacy = lazy(() => import('@/pages/PrivacyPolicy'))
const PendingTransaction = lazy(() => import('@/pages/PendingTransaction'))

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
        <Switch>
          <Route path='/privacy' component={Privacy} />
          <Route path='/pending' component={PendingTransaction} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Suspense>
    </StrictMode>
  )
}

export default hot(module)(App)
