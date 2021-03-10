import React, { useState } from 'react'

function HoverIcon ({ Icon, Hover, href }) {
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
      target='_blank'
      href={href}
    >
      {isHover ? <Hover /> : <Icon />}
    </a>
  )
}

export default HoverIcon
