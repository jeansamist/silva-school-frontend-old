import React from 'react'

export default function Hero({ children, title = 'Hero', background = '' }) {
  return (
    <div className='hero'>
      <div className="hero-content">
        <div className="hero-title">{title}</div>
        {children ? <div className='hero-text'>{children}</div> : ''}
      </div>
    </div>
  )
}
