import React from 'react'
import './Hero.css'
import heroArt from '../assets/hero_bg.png'

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-content">
          <h1 className="hero-title">HIGH RISK. HIGH REWARD.<br />INSTANT RESULT</h1>
          <button className="hero-cta">PLAY</button>
        </div>
        <div className="hero-art" aria-hidden>
          <img className="hero-art-image" src={heroArt} alt="hero art" />
        </div>
      </div>
    </section>
  )
}
