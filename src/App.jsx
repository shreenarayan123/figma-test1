import React from 'react'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import GamesGallery from './components/GamesGallery'

export default function App() {
  return (
    <div id="app" style={{fontFamily: 'sans-serif', padding: 24}}>
      <Hero />
      <SearchBar />
      <GamesGallery />
    </div>
  )
}
