import './styles.css'
import { useState } from 'react'

const movieDB = {
  Hindi: [
    { name: 'Shershah', rating: '4/5' },
    { name: "URI", rating: '4/5' },
  ],

  Tamil: [
    {
      name: 'Karnan',
      rating: '3/5',
    },
    {
      name: "Thalaivii",
      rating: '4.5/5',
    },
  ],
  English: [
    {
      name: 'Harry Potter and the Sorcerer',
      rating: '4/5',
    },
    {
      name: 'The Father',
      rating: '5/5',
    },
  ],
}

export default function App() {
  const [selectedGenre, setGenre] = useState('English')
  function genreClickHandler(genre) {
    setGenre(genre)
  }
  return (
    <div className='App'>
      <h1> 🎞️ goodMovie </h1>
      <p style={{ fontSize: 'smaller' }}>
        Checkout my favorite Movie. Select a genre to get started{' '}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: 'pointer',
              background: '#E5E7EB',
              borderRadius: '0.5rem',
              padding: '0.5rem  1rem',
              border: '1px solid black',
              margin: '1rem 0.3rem',
            }}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: 'left' }}>
        <ul style={{ paddingInlineStart: '0' }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: 'none',
                padding: '1rem',
                border: '1px solid #D1D5DB',
                width: '70%',
                margin: '1rem 0rem',
                borderRadius: '0.5rem',
              }}>
              <div style={{ fontSize: 'larger' }}> {movie.name} </div>
              <div style={{ fontSize: 'smaller' }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}