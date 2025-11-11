import { useState, useEffect } from "react"

function App() {

  //array di partenza
  const initialFilms = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' }
  ]

  //destrutturazione dell'array
  const [films, setFilms] = useState(initialFilms)



  //array per creare le voci per la selezione del form select senza ripetizioni di genere
  const singleGenres = []
  for (let i = 0; i < initialFilms.length; i++) {

    const film = initialFilms[i];

    if (!singleGenres.includes(film.genre)) {
      singleGenres.push(film.genre)
    }

  }


  //variabile per copiare l'array originale e non agire sull'originale per evitare dei loop infiniti
  const [staticFilms, setStaticFilms] = useState(films)

  //variabile di appoggio per gestire il filtraggio nell'input search
  const [search, setSearch] = useState('')


  //variabile di appoggio per gestire il filtraggio nel select
  const [select, setSelect] = useState('')



  //filtraggio tramite il search
  useEffect(() => {
    //filtro l'array, estraggo il film, se il titolo include quello che sto scrivendo allora aggiorno lo stato della copia dell'array con quelli filtrati
    const searchedFilms = initialFilms.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setStaticFilms(searchedFilms)

    //se l'utente non cerca nulla allora tengo mostrata tutta la lista
    if (search.length === 0) {
      setStaticFilms(films)
    }

    //questa funzione voglio che si ripeta ogni qual volta io vado a cambiare o l'array originale o mentre sto scrivendo
  }, [films, search])




  //filtraggio tramite il select
  useEffect(() => {
    //filtro l'array originale, estraggo il film, se il genere del film include la mia selezione nel form select allora aggiorno la copia con quelli filtrati
    const selectedFilms = initialFilms.filter(film => film.genre.toLowerCase().includes(select.toLowerCase()))
    setFilms(selectedFilms)

    //se il select ha un valore uguale alla selezione generica (nessuna selezione), allora aggiorno la copia con i film originali
    if (select === '') {
      setFilms(initialFilms)
    }

    //questa funzione voglio che si ripeta ogni volta che viene cambiato il select
  }, [select])






  return (
    <>
      <div className="container">

        <div className="mb-3">
          <select className="form-select" name="generi-dei-film" id="genres" value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value=''>Seleziona un genere</option>
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
