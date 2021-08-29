import React from 'react'
import { ReactComponent as Logo } from '@/assets/images/fuse_cash_logo.svg'

function PendingTransaction () {
  return (
    <section className='pending'>
      <div className='pending__logo'><Logo /></div>
      <div className='pending__typography'>
        <p>
          <span>Your transactions is pending</span><br />
          It might take a few hours to be approve by Ramp
        </p>
        <p>
          You can close the window
        </p>
      </div>
    </section>
  )
}

export default PendingTransaction
