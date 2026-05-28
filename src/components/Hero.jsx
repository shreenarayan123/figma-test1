import React from 'react'
import './Hero.css'
import heroArt from '../assets/hero-art.png'

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-content">
          <h1 className="hero-title">HIGH RISK. HIGH REWARD.<br/>INSTANT RESULT</h1>
          <button className="hero-cta">PLAY</button>
        </div>
        <div className="hero-art" aria-hidden>
          <img src={heroArt} alt="hero art" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12}} />
        </div>
      </div>
    </section>
  )
}
