import { useState } from "react"

function App() {
  const initialFilms = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [films, setFilms] = useState(initialFilms)

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {
            films.map(film => (
              <li className="list-group-item">{film.title}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App
