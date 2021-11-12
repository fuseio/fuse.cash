import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'
import Accordion from '../components/Accordion'
import Stars from '@/assets/images/stars.png'
import Arrows from '@/assets/images/arrows-down.png'

import Phone from '@/assets/images/iphone.png'
import Land from '@/assets/images/land.png'
import Apple from '@/assets/images/apple.png'
import Google from '@/assets/images/google.png'
import NavLogo from "@/assets/images/nav-logo.png"

import { ReactComponent as Discord } from '@/assets/images/discord.svg'
import { ReactComponent as Github } from '@/assets/images/github.svg'
import { ReactComponent as Medium } from '@/assets/images/medium.svg'
import { ReactComponent as Telegram } from '@/assets/images/telegram.svg'
import { ReactComponent as Twitter } from '@/assets/images/twitter.svg'
import { ReactComponent as FooterLogo } from '@/assets/images/fuse_logo.svg'
import { ReactComponent as FooterLogoColored } from '@/assets/images/fuse_logo_colored.svg'
import loadable from '@loadable/component'
const HoverIcon = loadable(() => import('@/components/HoverIcon'))

const faqs = [
  {
    question: 'What is Fuse Cash?',
    ans: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
  },
  {
    question: 'What is Fuse Dollar?',
    ans: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
  },
  {
    question: 'What is Fuse Network?',
    ans: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
  },
  {
    question: 'Why Fuse Cash better then other wallets?',
    ans: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
  },
  {
    question: 'Where I can read more about Fuse Ecosystem?',
    ans: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text',
  },
];

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
    <>
    <nav className='nav'>
    <img src={NavLogo} alt='logo'/>
    <button className='nav__button'>Download app</button>
    </nav>
    <section className='main' style={{ backgroundImage: `url(${Stars})` }}>
      <img style={{ display: 'none' }} src={Stars} />
      <div className="main__title" ref={titleRef}>
        <div style={{transform:"rotate(-17deg) translateX(-29px)"}}>
      <h1>Friendly Crypto</h1>
      <h2 className="main__subTitle">money has arrived </h2>
        </div>
      </div>
      <div className='images'>
        <img className='star' src={Arrows} ref={starRef} alt='Star' />
        <img className='phone' src={Phone} ref={phoneRef} alt='phone' />
      </div>
      <button className="download">
        Download app
      </button>

      <div className="download_store">
        <a rel='noreferrer noopener' target='_blank' href='https://apps.apple.com/us/app/fuse-cash/id1559937899'>
            <img src={Apple} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://play.google.com/store/apps/details?id=io.fuse.cash'>
            <img src={Google} />
          </a>
      </div>

      <section className='faq'>
          <h2 className='faq__title'>FAQ</h2>
          <div className='faq__accordion'>
            <Accordion items={faqs} titleKey='question' contentKey='ans' />
          </div>
        </section>
      

      <div className='use_your'>
        Use your crypto money everyday to buy, swap and save.  All without fees.  You know... like cash.
      
      </div>

      <div className='image__wrapper'>
        <div className='image'>
          <img className='land' src={Land} alt='land' />
          
          <div className='contacts_us grid-x  align-justify'>
            <div className="logo">
              <img src={NavLogo}  alt="logo"/>
              <h2>Contact us: <br/> <span>hello@fuse.io</span></h2>
            </div>
      
            <div className="footer-links">
              <h3>DApp</h3>
              <a>Fuse Swap</a>             
              <a>Fuse Rewards</a>
              <a>Fuse Staking</a>
            </div>

            <div className="footer-links">
              <h3>Social Media</h3>
              <a>Twitter</a>             
              <a>GitHub</a>
              <a>Discord</a>
              <a>Medium</a>
              <a>Telegram</a>
            </div>

            <div className="footer-links">
              <h3>Support</h3>
            </div>
            <div className="footer-last">
              <div className="footer_input">
                <input type="text" placeholder="subscriber to our newsletters"/>
                <button>subscriber</button>
              </div>
              <div className="download_store">
        <a rel='noreferrer noopener' target='_blank' href='https://apps.apple.com/us/app/fuse-cash/id1559937899'>
            <img src={Apple} />
          </a>
          <a rel='noreferrer noopener' target='_blank' href='https://play.google.com/store/apps/details?id=io.fuse.cash'>
            <img src={Google} />
          </a>
      </div>
            </div>
      </div>
        </div>
      </div>
     
    </section>
    </>
  )
}

export default HomePage
