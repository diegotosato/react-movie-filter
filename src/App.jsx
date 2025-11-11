import { useState, useEffect } from "react"

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

  const [search, setSearch] = useState('')

  useEffect(() => {
    const filteredFilms = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setFilms(filteredFilms)

    if (search.length === 0) {
      setFilms(initialFilms)
    }
  }, [films, search])

  return (
    <>
      <div className="container">

        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

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
