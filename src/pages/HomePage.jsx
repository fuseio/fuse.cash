import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'
import Stars from '@/assets/images/stars.jpg'
import Star from '@/assets/images/space-star.png'
import Moon from '@/assets/images/moon.png'
import Phone from '@/assets/images/iphone.png'
import Land from '@/assets/images/land.png'
import Footer from '@/components/footer'
import Apple from '@/assets/images/apple.png'
import Google from '@/assets/images/google.png'

function HomePage () {
  const starRef = useRef()
  const moonRef = useRef()
  const phoneRef = useRef()
  const titleRef = useRef()
  const landRef = useRef()

  useEffect(() => {
    const rellax = new Rellax(landRef.current, {
      speed: 0,
      center: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

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
      speed: -1.5,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(moonRef.current, {
      speed: 3,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(phoneRef.current, {
      speed: 6,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  return (
    <>
      <section className='main' style={{ backgroundImage: `url(${Stars})` }}>
        <h1 ref={titleRef} className='title'>Friendly crypto money is coming</h1>

        <div className='images'>
          <img className='star' src={Star} ref={starRef} alt='Star' />
          <img className='moon' src={Moon} ref={moonRef} alt='Moon' />
          <img className='phone' src={Phone} ref={phoneRef} alt='phone' />
        </div>

        <div className='use_your'>
          Use your crypto money everyday for Buying, Swapping and Saving, and without fees, you know, like <span>cash.</span>
        </div>

        <div className='coming_soon'>
          <div className='title'>Coming soon</div>
          <div className='apps'>
            <img src={Apple} />
            <img src={Google} />
          </div>
        </div>

        <div className='sign_up'>

          <div className='title'>Sign up to the waiting list</div>
          <input placeholder='Email' className='input' type='email' />
          <button className='button'>Send</button>
        </div>

        <img ref={landRef} className='land' src={Land} alt='land' />
      </section>
      <Footer />
    </>
  )
}

export default HomePage
