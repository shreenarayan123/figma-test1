import React from 'react'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import GamesGallery from './components/GamesGallery'

export default function App() {
  return (
    <div id="app" style={{ fontFamily: 'sans-serif', maxWidth: '1100px', margin: '0 auto', padding: '24px 24px 0 24px' }}>
      <Hero />
      <GamesGallery />
      <SearchBar />
    </div>
  )
}
