import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="search-bar-section">
      <div className="search-bar-wrapper">
        <div className="search-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="search-divider" />
        <input
          id="search-input"
          type="text"
          placeholder="Search your game or event..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          autoComplete="off"
        />
        <button className="search-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
      </div>
    </div>
  )
}
