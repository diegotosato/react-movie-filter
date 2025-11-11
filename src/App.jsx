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
  const [fermo, setFermo] = useState(films)

  const [search, setSearch] = useState('')

  useEffect(() => {
    const filteredFilms = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setFermo(filteredFilms)

    if (search.length === 0) {
      setFermo(films)
    }

  }, [films, search])






  return (
    <>
      <div className="container">

        {/* <div className="mb-3">
          <select className="form-select form-select-lg">
            <option value="Seleziona un genere">Selezione un genere</option>
            {
              films.map(film => (
                <option key={film.title} value={film.genre}>{film.genre}</option>
              ))
            }
          </select>
        </div> */}


        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

        <ul className="list-group">
          {
            fermo.map(film => (
              <li key={film.title} className="list-group-item">{film.title}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App
