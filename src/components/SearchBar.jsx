import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="search-bar-wrapper">
      <div className="search-icon-box">
        <i className="ti ti-search"></i>
      </div>
      <input
        type="text"
        placeholder="Search your game or event"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  )
}
