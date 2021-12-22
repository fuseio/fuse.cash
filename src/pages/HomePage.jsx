import React, { useRef, useEffect, useState } from 'react'
import Rellax from 'rellax'
import Accordion from '../components/Accordion'
import Stars from '@/assets/images/stars.png'
import Arrows from '@/assets/images/arrows-down.png'

import Phone from '@/assets/images/iphone.png'
import Land from '@/assets/images/land.png'
import Apple from '@/assets/images/apple.png'
import Google from '@/assets/images/google.png'
import NavLogo from '@/assets/images/nav-logo.png'
import FooterLogo from '@/assets/images/footerLogo.png'
import FirstPlanet from '@/assets/images/planet1.png'
import SecondPlanet from '@/assets/images/planet2.png'
import ThirdPlanet from '@/assets/images/planet3.png'
import QRCode from 'react-qr-code'

const faqs = [
  {
    question: 'What is Fuse Cash?',
    ans: 'Fuse Cash is a mobile wallet for transacting with crypto assets. Fuse Cash is, in a way, just like some of the mobile wallets you probably interacted with, such as Venmo, ApplePay or Lydia. But instead of enabling you to store, send and receive traditional currencies like USD and EUR, Fuse Cash allows you to do the same with crypto assets, and more.',
    extraAns: 'Fuse Cash runs on the Fuse Network blockchain. The transactions that you make with the Fuse Cash wallet take place on the decentralized Fuse Network blockchain. However, unlike with many other crypto wallets, this does not mean that you will need to pay network fees to send transactions. You will also not need to worry about your public address or that of the person you are sending funds to, blockchain explorers, etc. We have designed Fuse Cash such that unless the blockchain aspect is important for you, you do not need to keep in mind that it is there, underneath.',
    link: 'http://help.fuse.cash/en/articles/5409057-what-is-fuse-cash'
  },
  {
    question: 'What is Fuse Dollar?',
    ans: 'FuseDollar (fUSD) is a US Dollar-pegged stablecoin that is minted on the Fuse Network blockchain. It was created to make cryptocurrencies and DeFi simple for everyday people.',
    link: 'http://help.fuse.cash/en/articles/5408565-what-is-fuse-dollar'
  }

]

function HomePage () {
  const starRef = useRef()
  const moonRef = useRef()
  const phoneRef = useRef()
  const titleRef = useRef()
  const [toggleNavPopup, setToggleNavPopup] = useState(false)
  const [toggleMainPopup, setToggleMainPopup] = useState(false)
  const [toggleZIndex, settoggleZIndex] = useState(false)

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
      speed: 3,
      center: true,
      round: true
    })
    return () => {
      rellax.destroy()
    }
  }, [])

  const handleNavPopup = () => {
    setToggleNavPopup(!toggleNavPopup)
    settoggleZIndex(true)
  }
  const handleMainPopup = () => {
    setToggleMainPopup(!toggleMainPopup)
    settoggleZIndex(true)
  }

  const handleClosePopup = () => {
    settoggleZIndex(false)
    setToggleNavPopup(false)
    setToggleMainPopup(false)
  }

  return (
    <>
      <div onClick={handleClosePopup} className='backdrop' style={{ zIndex: toggleZIndex ? ('99999') : ('0') }} />
      <nav className='nav'>
        <img src={NavLogo} alt='logo' />
        <div className='nav__content'>
          <button onClick={handleNavPopup} className='nav__button'>Download app</button>

          <div className={`nav__popup ${toggleNavPopup ? 'nav__popup--open' : ''}`}>
            <h3>Scan</h3>
            <QRCode size='138' value='https://click.fuse.cash/mrxn/7496231e?af_qr=true' />
          </div>
          <a href='https://click.fuse.cash/mrxn/7496231e' rel='noreferrer noopener' target='_blank' className='nav__buttonMobile'>Download app</a>
        </div>
      </nav>
      <section className='main' style={{ backgroundImage: `url(${Stars})` }}>
        <img className='main__firstPlanet' src={FirstPlanet} alt='first-planet' ref={titleRef} />
        <img className='main__secondPlanet' src={SecondPlanet} alt='second-planet' ref={starRef} />
        <img className='main__thirdPlanet' src={ThirdPlanet} alt='third-planet' ref={phoneRef} />
        <img style={{ display: 'none' }} src={Stars} />
        <div className='main__MobileView'>
          <div className='main__title'>
            <svg xmlns='http://www.w3.org/2000/svg' height='352.304' viewBox='0 0 814.661 352.304'>
              <g id='Group_5' data-name='Group 5' transform='matrix(0.996, -0.087, 0.087, 0.996, -0.289, 64.609)'>
                <path id='Path_1' data-name='Path 1' d='M773.239,0,0,110.083,14.536,216.992,781.865,107.75l5.909-.841Z' transform='translate(0 66.267)' fill='#fff' stroke='#47cc8a' strokeMiterlimit='10' strokeWidth='9' />
                <g id='Group_4' data-name='Group 4' transform='translate(30.899 0)'>
                  <g id='Group_2' data-name='Group 2'>
                    <path id='Path_2' data-name='Path 2' d='M0,54.342V6.33L45.04,0V15.6L18.8,19.291v3.316l25.264-3.551V32.373L18.8,35.924V51.7Z' transform='translate(0 91.633)' fill='#fff' />
                    <path id='Path_3' data-name='Path 3' d='M52.471,45.133l-18.4,2.586-5.6-10.359-9.659,1.357V49.864L0,52.507V4.494L29.036.414Q39.553-1.064,45.069,2.733t5.516,13.743A19,19,0,0,1,44.354,30.9ZM18.805,17.4v7.43l8.8-1.236q4.115-.58,4.115-4.293t-4.115-3.137Z' transform='translate(48.469 86.657)' fill='#fff' />
                    <path id='Path_4' data-name='Path 4' d='M0,50.655V2.642L18.805,0V48.012Z' transform='translate(103.625 80.757)' fill='#fff' />
                    <path id='Path_5' data-name='Path 5' d='M0,54.358V6.346L45.154,0V14.919l-26.35,3.7v3.2l25.321-3.559V30.095L18.8,33.653V36.8l26.35-3.7V48.013Z' transform='translate(125.859 73.928)' fill='#fff' />
                    <path id='Path_6' data-name='Path 6' d='M0,55.482V7.471L21.491,4.45,33.208,24.523l1.658-.233V2.57L53.156,0V48.012L32.18,50.96,20,30.952l-1.714.24v21.72Z' transform='translate(174.443 65.976)' fill='#fff' />
                    <path id='Path_7' data-name='Path 7' d='M25.491.513q26.864-3.775,26.864,20.23T25.491,48.525L0,52.108V4.1ZM25.549,32.8q7.944-1.117,7.945-9.405,0-8.344-7.945-7.228l-6.687.94V33.739Z' transform='translate(231.029 61.398)' fill='#fff' />
                    <path id='Path_8' data-name='Path 8' d='M0,50.655V2.643L18.805,0V32.35l24.235-3.4V44.607Z' transform='translate(286.242 55.091)' fill='#fff' />
                    <path id='Path_9' data-name='Path 9' d='M57.786,0,38.239,36.184V50.759L19.49,53.395V38.648L0,8.122,19.662,5.358l8.574,14.571,1.315-.185,8.63-16.988Z' transform='translate(313.563 45.773)' fill='#fff' />
                    <path id='Path_10' data-name='Path 10' d='M27.435,51.625Q14.975,53.377,7.487,47.456T0,29.874A27.776,27.776,0,0,1,7.487,10.189Q14.976,2.164,27.435.411A38.625,38.625,0,0,1,34.894.049a24.58,24.58,0,0,1,6.917,1.4A17.538,17.538,0,0,1,47.7,4.88a17.107,17.107,0,0,1,4.144,6.02,26.64,26.64,0,0,1,2,8.893L36.009,22.3q-1.257-6.739-8.574-5.711a9.827,9.827,0,0,0-6.23,3.418,10.65,10.65,0,0,0-2.515,7.241q0,4.345,2.515,6.534a7.451,7.451,0,0,0,6.23,1.669q7.317-1.029,8.574-8.293l17.833-2.506a31.167,31.167,0,0,1-2.772,11.478A22.954,22.954,0,0,1,44.9,44.255a32.1,32.1,0,0,1-8.117,4.885A38.5,38.5,0,0,1,27.435,51.625Z' transform='translate(386.494 37.776)' fill='#fff' />
                    <path id='Path_11' data-name='Path 11' d='M52.471,45.133l-18.4,2.586-5.6-10.359L18.8,38.718V49.864L0,52.507V4.494L29.036.414Q39.551-1.064,45.068,2.733t5.516,13.743A19,19,0,0,1,44.354,30.9ZM18.8,17.4v7.431l8.8-1.237q4.116-.58,4.116-4.294t-4.116-3.136Z' transform='translate(442.909 31.222)' fill='#fff' />
                    <path id='Path_12' data-name='Path 12' d='M57.786,0,38.238,36.184V50.76L19.49,53.395V38.648L0,8.122,19.662,5.358l8.574,14.571,1.315-.185,8.63-16.988Z' transform='translate(490.921 20.847)' fill='#fff' />
                    <path id='Path_13' data-name='Path 13' d='M0,52.454V4.442L28.693.409Q50.3-2.626,50.3,16.864q0,19.547-21.491,22.569l-10,1.405v8.974ZM18.805,25.291l8.115-1.141a5.462,5.462,0,0,0,3.2-1.478,4.241,4.241,0,0,0,1.2-3.141,3.18,3.18,0,0,0-1.172-2.779,4.21,4.21,0,0,0-3.115-.563l-8.23,1.157Z' transform='translate(550.135 16.204)' fill='#fff' />
                    <path id='Path_14' data-name='Path 14' d='M52.357,0V15.6l-16.8,2.362V50.374L16.8,53.009V20.6L0,22.962V7.359Z' transform='translate(602.147 5.978)' fill='#fff' />
                    <path id='Path_15' data-name='Path 15' d='M27.779,51.631q-12.8,1.8-20.291-4.093T0,29.928A27.754,27.754,0,0,1,7.488,10.214q7.488-8,20.291-9.8,12.745-1.791,20.235,4.1T55.5,22.128a27.755,27.755,0,0,1-7.487,19.714Q40.523,49.84,27.779,51.631ZM21.32,33.906a8.122,8.122,0,0,0,6.458,1.549,10.577,10.577,0,0,0,6.459-3.365,10.353,10.353,0,0,0,2.63-7.342q0-4.572-2.63-6.633a8.193,8.193,0,0,0-6.459-1.522,10.619,10.619,0,0,0-6.488,3.341,10.383,10.383,0,0,0-2.6,7.367Q18.691,31.818,21.32,33.906Z' transform='translate(654.904 0)' fill='#fff' />
                  </g>
                  <g id='Group_3' data-name='Group 3' transform='translate(4.672 104.138)'>
                    <path id='Path_16' data-name='Path 16' d='M0,48.773V7.147L20.416,4.277l4.411,19.449,1.189-.166L30.427,2.87,50.844,0V41.627l-15.511,2.18V29.783l-1.239.174L31.368,44.364,19.475,46.036,16.75,32.4l-1.239.173V46.592Z' transform='translate(0 91.428)' fill='#47cc8a' />
                    <path id='Path_17' data-name='Path 17' d='M24.084,44.764q-11.1,1.561-17.593-3.549T0,25.948A24.061,24.061,0,0,1,6.491,8.856Q12.983,1.922,24.084.363q11.05-1.554,17.542,3.555t6.492,15.267a24.059,24.059,0,0,1-6.492,17.092Q35.134,43.21,24.084,44.764ZM18.484,29.4a7.042,7.042,0,0,0,5.6,1.344,9.179,9.179,0,0,0,5.6-2.917,8.977,8.977,0,0,0,2.279-6.367q0-3.963-2.279-5.75a7.107,7.107,0,0,0-5.6-1.319,9.212,9.212,0,0,0-5.625,2.9A9,9,0,0,0,16.2,23.67Q16.2,27.586,18.484,29.4Z' transform='translate(53.074 85.981)' fill='#47cc8a' />
                    <path id='Path_18' data-name='Path 18' d='M0,48.1V6.477L18.632,3.858l10.159,17.4,1.437-.2V2.228L46.086,0V41.626L27.9,44.182,17.343,26.835l-1.486.209v18.83Z' transform='translate(103.421 77.563)' fill='#47cc8a' />
                    <path id='Path_19' data-name='Path 19' d='M0,47.129V5.5L39.148,0V12.935L16.3,16.145V18.92l21.953-3.085V26.092L16.3,29.178V31.9l22.845-3.21V41.627Z' transform='translate(152.48 71.642)' fill='#47cc8a' />
                    <path id='Path_20' data-name='Path 20' d='M50.1,0,33.153,31.372V44.008L16.9,46.293V33.508L0,7.041,17.047,4.646,24.48,17.278l1.141-.16L33.1,2.389Z' transform='translate(192.868 64.427)' fill='#47cc8a' />
                    <path id='Path_21' data-name='Path 21' d='M29.436,2.292,45.74,0V41.626l-16.3,2.291V29.942L16.3,31.789V45.763L0,48.054V6.428L16.3,4.137V18.111l13.133-1.845Z' transform='translate(256.842 56.049)' fill='#47cc8a' />
                    <path id='Path_22' data-name='Path 22' d='M35.531,41.913l-1.339-4.322L18.187,39.84l-1.388,4.7L0,46.906,14.768,3.2,37.562,0,52.33,39.551ZM21.8,27.389l8.772-1.232-3.024-9.536L24.827,17Z' transform='translate(304.068 50.561)' fill='#47cc8a' />
                    <path id='Path_23' data-name='Path 23' d='M21.832,44.99q-11.794,1.607-17-1.377T.028,32.048l14.619-2.054q0,3.32,7.186,2.359a14.434,14.434,0,0,0,4.633-1.171q1.512-.78,1.512-1.674v-.3a1.511,1.511,0,0,0-.025-.2.8.8,0,0,0-.074-.237,2.078,2.078,0,0,0-.149-.226.867.867,0,0,0-.272-.234,3.66,3.66,0,0,0-.4-.193,2.592,2.592,0,0,0-.545-.146c-.216-.036-.463-.066-.744-.095a6.96,6.96,0,0,0-.916-.02l-5.5-.07q-.743.007-2.4.016T14.4,27.8q-.893-.023-2.478-.1a19.556,19.556,0,0,1-2.5-.243q-.918-.168-2.231-.529a6.759,6.759,0,0,1-2.081-.9A18.216,18.216,0,0,1,3.447,24.7a5.8,5.8,0,0,1-1.388-1.812,11.383,11.383,0,0,1-.816-2.437A14.115,14.115,0,0,1,.92,17.3,13.577,13.577,0,0,1,6.2,6.4Q11.476,2.045,21.931.575A47.615,47.615,0,0,1,30.7.035a18.857,18.857,0,0,1,6.64,1.47,8.43,8.43,0,0,1,4.386,4.289,16.959,16.959,0,0,1,1.264,7.727L28.473,15.563q-.645-3.23-6.889-2.352-5,.7-5,2.735a2.337,2.337,0,0,0,.025.393,2.427,2.427,0,0,0,.2.517,1.1,1.1,0,0,0,.719.543,4.367,4.367,0,0,0,1.387.151l4.361.082q1.19.031,3.321,0t3.567-.055a33.468,33.468,0,0,1,3.419.138,22.864,22.864,0,0,1,3.345.5A13.029,13.029,0,0,1,39.771,19.3a7.309,7.309,0,0,1,2.38,1.846,8.726,8.726,0,0,1,1.461,2.817,12.632,12.632,0,0,1,.57,3.958,13.547,13.547,0,0,1-5.5,11.378Q33.18,43.495,21.832,44.99Z' transform='translate(354.982 43.64)' fill='#47cc8a' />
                    <path id='Path_24' data-name='Path 24' d='M35.531,41.911,34.193,37.59,18.187,39.84l-1.387,4.7L0,46.9,14.768,3.2,37.563,0,52.33,39.55ZM21.8,27.389l8.772-1.233-3.023-9.536L24.827,17Z' transform='translate(412.939 35.261)' fill='#47cc8a' />
                    <path id='Path_25' data-name='Path 25' d='M45.492,39.13,29.535,41.372l-4.857-8.981L16.3,33.568v9.663L0,45.523V3.9L25.173.359q9.118-1.282,13.9,2.01t4.782,11.916a16.473,16.473,0,0,1-5.4,12.5ZM16.3,15.084v6.442l7.632-1.072q3.568-.5,3.567-3.722t-3.567-2.72Z' transform='translate(466.756 29.079)' fill='#47cc8a' />
                    <path id='Path_26' data-name='Path 26' d='M45.492,39.13,29.534,41.372l-4.856-8.981L16.3,33.57v9.663L0,45.524V3.9L25.174.359q9.118-1.282,13.9,2.011t4.782,11.916a16.473,16.473,0,0,1-5.4,12.5ZM16.3,15.085v6.442l7.632-1.073q3.566-.5,3.567-3.722t-3.567-2.72Z' transform='translate(514.576 22.358)' fill='#47cc8a' />
                    <path id='Path_27' data-name='Path 27' d='M0,43.918V2.291L16.3,0V41.626Z' transform='translate(562.396 17.244)' fill='#47cc8a' />
                    <path id='Path_28' data-name='Path 28' d='M14.768,46.9,0,7.354,16.8,4.993l8.574,25.158,1.635-.23,8.524-27.56L52.33,0,37.562,43.7Z' transform='translate(580.186 9.68)' fill='#47cc8a' />
                    <path id='Path_29' data-name='Path 29' d='M0,47.128V5.5L39.149,0V12.934L16.3,16.144v2.776l21.953-3.086V26.092L16.3,29.177V31.9l22.845-3.211V41.626Z' transform='translate(634.002 3.969)' fill='#47cc8a' />
                    <path id='Path_30' data-name='Path 30' d='M22.1.445q23.29-3.272,23.291,17.54T22.1,42.071L0,45.178V3.551Zm.05,27.992q6.886-.967,6.887-8.153,0-7.235-6.887-6.267l-5.8.815v14.42Z' transform='translate(676.124 0)' fill='#47cc8a' />
                  </g>
                </g>
              </g>
            </svg>
            <img src={Arrows} alt='down-arrows' />
          </div>
          <div className='images'>
            <img className='phone' src={Phone} alt='phone' />
          </div>

          <div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className={`large_popup ${toggleMainPopup ? 'large_popup--open' : ''}`}>
                <QRCode size='298' value='https://click.fuse.cash/mrxn/7496231e?af_qr=true' />
                <h3>Scan Me</h3>
              </div>
              <button onClick={handleMainPopup} className='download'>
                Download app
              </button>
              <a href='https://click.fuse.cash/mrxn/7496231e' rel='noreferrer noopener' target='_blank' className='downloadMobile'>
                Download app
              </a>
            </div>

            <div className='download_store'>
              <a rel='noreferrer noopener' target='_blank' href='https://apps.apple.com/us/app/fuse-cash/id1559937899'>
                <img src={Apple} />
              </a>
              <a rel='noreferrer noopener' target='_blank' href='https://play.google.com/store/apps/details?id=io.fuse.cash'>
                <img src={Google} />
              </a>
            </div>
            <img className='arrow-downMobile' src={Arrows} alt='down-arrows' />
          </div>
        </div>
        <section className='faq'>
          <h2 className='faq__title'>FAQ</h2>
          <div className='faq__accordion'>
            <Accordion items={faqs} titleKey='question' contentKey='ans' />
          </div>
        </section>

        <div className='use_your'>
          Use your crypto money everyday to buy, swap and save.  All without fees.<br />
          You know... like cash.

        </div>

        <div className='image__wrapper'>
          <div className='image'>
            <img className='land' src={Land} alt='land' />

            <div className='footer grid-x  align-justify'>
              <div className='logo'>
                <img src={FooterLogo} alt='logo' />
                <h2>Contact us: <br /> <span>hello@fuse.io</span></h2>
              </div>

              <div className='footer-links'>
                <h3>DApp</h3>
                <a>Fuse Swap</a>
                <a>Fuse Rewards</a>
                <a>Fuse Staking</a>
              </div>

              <div className='footer-links'>
                <h3>Social Media</h3>
                <a>Twitter</a>
                <a>GitHub</a>
                <a>Discord</a>
                <a>Medium</a>
                <a>Telegram</a>
              </div>

              <div className='footer-links'>
                <h3>Support</h3>
              </div>
              <div className='footer-last'>
                <div className='footer_input'>
                  <input type='text' placeholder='subscriber to our newsletters' />
                  <button>subscriber</button>
                </div>
                <div className='footer-downloadContainer'>
                  <div className='footer-QR'>

                    <QRCode size='100' value='https://click.fuse.cash/mrxn/7496231e?af_qr=true' />
                  </div>
                  <div className='download_store-footer'>

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
        </div>

      </section>
    </>
  )
}

export default HomePage
