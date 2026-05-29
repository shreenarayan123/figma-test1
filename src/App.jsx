import React from 'react'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import GamesGallery from './components/GamesGallery'
import './App.css'

export default function App() {
  return (
    <div id="app" className="app-container">
      <Hero />
      <GamesGallery />
      <SearchBar />
    </div>
  )
}
