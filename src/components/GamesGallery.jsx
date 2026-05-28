import React from 'react'
import './GamesGallery.css'

const games = [
  {
    id: 1,
    title: 'Sugar Rush',
    developer: 'pragmatic play',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/73cab64a0b1254d540aa61b9adcc7c6215f60b48?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  },
  {
    id: 2,
    title: 'Gates Of Olympus',
    developer: 'pragmatic play',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/9fd192f21247b01d61508f3c76a6fc504766b2ab?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.067',
    id_masked: 'PGd***'
  },
  {
    id: 3,
    title: 'Book Of Dead',
    developer: 'Pragmatic play',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/1aa5136043d2998363ce8f1a153ca744e1f07cda?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  },
  {
    id: 4,
    title: 'Deadwood',
    developer: 'Nolimit city',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/36c24e3ad41deb8aff37991e94190cad4ec87a11?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  },
  {
    id: 5,
    title: 'The Dog House',
    developer: 'bc game',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad77f8c171a8344382c809acbd683e7da66d4c97?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  },
  {
    id: 6,
    title: 'Fire In The Hole 2',
    developer: 'nolimit city',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4f8f207bb30b632387371d5e10041f6c5eb1108b?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  },
  {
    id: 7,
    title: 'Sugar Rush',
    developer: 'pragmatic play',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/2c7f85aa18f7039c557872a47a46a05c01c9b485?placeholderIfAbsent=true&apiKey=a9f27f8eac8944d98108e9f6032b2530',
    price: 'USD 1.04',
    id_masked: 'PGd***'
  }
]

export default function GamesGallery() {
  return (
    <section className="gallery-wrapper">
      <div className="gallery-container">
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-wrapper">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="game-overlay">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-developer">{game.developer}</p>
                </div>
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
