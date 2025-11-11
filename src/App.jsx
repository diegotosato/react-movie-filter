import { useState, useEffect } from "react"

function App() {

  //array di partenza
  const initialFilms = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  //destrutturazione dell'array
  const [films, setFilms] = useState(initialFilms)


  const singleGenres = []
  for (let i = 0; i < initialFilms.length; i++) {

    const film = initialFilms[i];

    if (!singleGenres.includes(film.genre)) {
      singleGenres.push(film.genre)
    }

  }



  const [staticFilms, setStaticFilms] = useState(films)

  //variabile di appoggio per gestire il filtraggio nell'input search
  const [search, setSearch] = useState('')


  //variabile di appoggio per gestire il filtraggio nel select
  const [select, setSelect] = useState('')


  //filtraggio tramite il search
  useEffect(() => {
    const filteredFilms = staticFilms.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setStaticFilms(filteredFilms)

    if (search.length === 0) {
      setStaticFilms(films)
    }

  }, [films, search])


  // //filtraggio tramite il select
  // useEffect(() => {
  //   const selectedFilms = staticFilms.filter(film => film.genre.toLowerCase().includes(select.toLowerCase()))
  //   setStaticFilms(selectedFilms)
  // }, [])






  return (
    <>
      <div className="container">

        <div className="mb-3">
          <select className="form-select" value onChange={(e) => setSelect(e.target.value)}>
            {
              singleGenres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))
            }
          </select>
        </div>


        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

        <ul className="list-group">
          {
            staticFilms.map(film => (
              <li key={film.title} className="list-group-item">{film.title}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App
