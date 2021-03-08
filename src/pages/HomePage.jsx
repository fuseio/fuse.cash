import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'
import Stars from '@/assets/images/stars.png'
import Star from '@/assets/images/space-star.png'
import Moon from '@/assets/images/moon.png'
import Phone from '@/assets/images/iphone.png'
import Land from '@/assets/images/land.png'
import Apple from '@/assets/images/apple.png'
import Google from '@/assets/images/google.png'
import { ReactComponent as FooterLogo } from '@/assets/images/fuse_logo.svg'

function HomePage () {
  const starRef = useRef()
  const moonRef = useRef()
  const phoneRef = useRef()
  const titleRef = useRef()

  useEffect(() => {
    const rellax = new Rellax(titleRef.current, {
      center: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(starRef.current, {
      speed: -3,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(moonRef.current, {
      speed: 0,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(phoneRef.current, {
      speed: 1,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  return (
    <section className='main' style={{ backgroundImage: `url(${Stars})` }}>
      <h1 ref={titleRef} className='title'>Friendly crypto money is coming</h1>

      <div className='images'>
        <img className='star' src={Star} ref={starRef} alt='Star' />
        <img className='moon' src={Moon} ref={moonRef} alt='Moon' />
        <img className='phone' src={Phone} ref={phoneRef} alt='phone' />
      </div>

      <div className='use_your'>
        Use your Crypto money everyday for Buying, Swapping and Saving, and without fees, you know, like <span>cash.</span>
      </div>

      <div className='image__wrapper'>
        <div className='coming_soon__wrapper'>

          <div className='coming_soon'>
            <div className='title'>Coming soon</div>
            <div className='apps'>
              <img src={Apple} />
              <img src={Google} />
            </div>
            <div className='sign_up'>
              <button type='button' className='button vrlps-trigger'>Join our campaign!</button>
            </div>
          </div>
        </div>
        <div className='image'>
          <img className='land' src={Land} alt='land' />
          <div className='grid-y align-center align-middle logo__wrapper'>
            <FooterLogo />
            <span>Powered by fuse.io</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
