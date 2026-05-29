import React from 'react'
import './GamesGallery.css'

import comp104 from '../assets/Component 104.png'
import comp105 from '../assets/Component 105.png'
import comp106 from '../assets/Component 106.png'
import comp107 from '../assets/Component 107.png'
import comp108 from '../assets/Component 108.png'
import comp109 from '../assets/Component 109.png'
import comp110 from '../assets/Component 110.png'

const games = [
  { id: 1, image: comp104, id_masked: 'PGd***', price: 'USD 1.04' },
  { id: 2, image: comp105, id_masked: 'PGd***', price: 'USD 1.067' },
  { id: 3, image: comp106, id_masked: 'PGd***', price: 'USD 1.04' },
  { id: 4, image: comp107, id_masked: 'PGd***', price: 'USD 1.04' },
  { id: 5, image: comp108, id_masked: 'PGd***', price: 'USD 1.04' },
  { id: 6, image: comp109, id_masked: 'PGd***', price: 'USD 1.04' },
  { id: 7, image: comp110, id_masked: 'PGd***', price: 'USD 1.04' },
]

export default function GamesGallery() {
  return (
    <section className="gallery-wrapper">
      <div className="gallery-container">
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-wrapper">
                <img src={game.image} alt={`Game ${game.id}`} className="game-image" />
              </div>
              <div className="game-info">
                <div className="game-id">{game.id_masked}</div>
                <div className="game-price">{game.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
