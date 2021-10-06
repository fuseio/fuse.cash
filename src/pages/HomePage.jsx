import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'
import Stars from '@/assets/images/stars.jpg'
import Star from '@/assets/images/space-star.png'
import Moon from '@/assets/images/moon.png'
import Phone from '@/assets/images/iphone.png'
import Land from '@/assets/images/land.png'
import Apple from '@/assets/images/apple.png'
import Google from '@/assets/images/google.png'
import { ReactComponent as Discord } from '@/assets/images/discord.svg'
import { ReactComponent as Github } from '@/assets/images/github.svg'
import { ReactComponent as Medium } from '@/assets/images/medium.svg'
import { ReactComponent as Telegram } from '@/assets/images/telegram.svg'
import { ReactComponent as Twitter } from '@/assets/images/twitter.svg'
import { ReactComponent as FooterLogo } from '@/assets/images/fuse_logo.svg'
import { ReactComponent as FooterLogoColored } from '@/assets/images/fuse_logo_colored.svg'
import loadable from '@loadable/component'
const HoverIcon = loadable(() => import('@/components/HoverIcon'))

function HomePage () {
  const starRef = useRef()
  const moonRef = useRef()
  const phoneRef = useRef()
  const titleRef = useRef()

  useEffect(() => {
    const rellax = new Rellax(titleRef.current, {
      speed: -4,
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
      speed: -2,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  useEffect(() => {
    const rellax = new Rellax(phoneRef.current, {
      speed: -1,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  return (
    <section className='main' style={{ backgroundImage: `url(${Stars})` }}>
      <img style={{ display: 'none' }} src={Stars} />
      <h1 ref={titleRef} className='main__title'>Friendly crypto money has arrived</h1>

      <div className='images'>
        <img className='star' src={Star} ref={starRef} alt='Star' />
        <img className='moon' src={Moon} ref={moonRef} alt='Moon' />
        <img className='phone' src={Phone} ref={phoneRef} alt='phone' />
      </div>

      <div className='use_your'>
        Use your crypto money everyday to buy, swap and save.  All without fees.  You know... like <span>cash.</span>
        <div className='title'>Download the wallet</div>
        <div className='apps'>
          <a rel='noreferrer noopener' target='_blank' href='https://apps.apple.com/us/app/fuse-cash/id1559937899'>
            <img src={Apple} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://play.google.com/store/apps/details?id=io.fuse.cash'>
            <img src={Google} />
          </a>
        </div>
      </div>

      <div className='image__wrapper'>
        <div className='grid-x align-center align-middle'>
          <a rel='noreferrer noopener' target='_blank' href='https://t.me/joinchat/-3WQl1LFK_s3ODg9' className='cell small-28 medium-12 button grid-x align-center'>
            <Telegram />
            <button>Join fuse.cash group!</button>
          </a>
        </div>
        <div className='image'>
          <img className='land' src={Land} alt='land' />
          <div className='grid-y align-center align-middle logo__wrapper'>
            <HoverIcon
              href='https://fuse.io'
              Icon={() => (
                <FooterLogo />
              )}
              Hover={() => (
                <FooterLogoColored />
              )}
            />
            <span>Powered by fuse.io</span>
          </div>
        </div>
      </div>
      <div className='contacts_us grid-x align-middle align-justify'>
        <div className='icons cell medium-12 grid-x align-middle grid-margin-x grid-margin-y'>
          <a
            rel='noreferrer noopener'
            className='cell small-2 grid-x align-center align-middle'
            target='_blank'
            href='https://twitter.com/fuse_network'
          >
            <Twitter />
          </a>
          <a
            rel='noreferrer noopener'
            className='cell small-2 grid-x align-center align-middle'
            target='_blank'
            href='https://github.com/fuseio'
          >
            <Github />
          </a>
          <a
            rel='noreferrer noopener'
            className='cell small-2  grid-x align-center align-middle'
            target='_blank'
            href='https://discordapp.com/invite/jpPMeSZ'
          >
            <Discord />
          </a>
          <a
            rel='noreferrer noopener'
            className='cell small-2  grid-x align-center align-middle'
            target='_blank'
            href='https://medium.com/fusenet'
          >
            <Medium />
          </a>
          <a
            rel='noreferrer noopener'
            className='cell small-2  grid-x align-center align-middle'
            target='_blank'
            href='https://t.me/fuseio'
          >
            <Telegram />
          </a>
        </div>
        <div className='cell shrink'>
          Contact us: <a rel='noreferrer noopener' target='_blank' href='mailto:hello@fuse.io'> hello@fuse.io</a>
        </div>
      </div>
    </section>
  )
}

export default HomePage
