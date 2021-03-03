import React, { useState } from 'react'
import { ReactComponent as TwitterIcon } from '@/assets/images/twitter_white.svg'
import { ReactComponent as GithubIcon } from '@/assets/images/github_white.svg'
import { ReactComponent as MediumIcon } from '@/assets/images/medium_white.svg'
import { ReactComponent as DiscordIcon } from '@/assets/images/discord.svg'
import { ReactComponent as TelegramIcon } from '@/assets/images/tele.svg'
import FooterLogo from '@/assets/images/fuse_logo.svg'
import FuseCashLogo from '@/assets/images/fuse.cash.svg'

const links = [
  {
    href: 'https://medium.com/fusenet',
    Icon: MediumIcon,
    HoverIcon: MediumIcon
  },
  {
    href: 'https://github.com/fuseio',
    Icon: GithubIcon,
    HoverIcon: GithubIcon
  },
  {
    href: 'https://twitter.com/fuse_network',
    Icon: TwitterIcon,
    HoverIcon: TwitterIcon
  },
  {
    href: 'https://discordapp.com/invite/jpPMeSZ',
    Icon: DiscordIcon,
    HoverIcon: DiscordIcon
  },
  {
    href: 'https://t.me/fuseio',
    Icon: TelegramIcon,
    HoverIcon: TelegramIcon
  }
]

const HoverIcon = ({ Icon, Hover, href }) => {
  const [isHover, setHover] = useState(false)
  return (
    <a
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      rel='noreferrer noopener'
      className='footer__icon cell shrink'
      target='_blank'
      href={href}
    >
      {isHover ? <Hover /> : <Icon />}
    </a>
  )
}

function Footer() {
  return (
    <footer className='footer__wrapper grid-x'>
      <div className='footer'>
        <div className='footer__item'>
          <div className='grid-y align-center'>
            <a rel='noreferrer noopener' className='footer__logo'>
              {/* <FooterLogo /> */}
              <img src={FooterLogo} />
            </a>
            <span>Powered by fuse.io</span>
          </div>
        </div>
        <div className='footer__item'>
          <div className='footer__icons grid-x align-center'>
            {
              links.map((item, key) => (
                <HoverIcon
                  key={key}
                  href={item.href}
                  Icon={() => (
                    <item.Icon />
                  )}
                  Hover={() => (
                    <item.HoverIcon />
                  )}
                />
              ))
            }
          </div>
        </div>
        <div className='footer__item '>
          <div className='grid-y align-center'>
            <img src={FuseCashLogo} alt='fuse.cash' />
            <span className='footer__copyright'>fuse rights 2021</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
