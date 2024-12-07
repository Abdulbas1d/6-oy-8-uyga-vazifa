import React, { useState } from 'react';
import './index.css';
import { moviesData } from '../../axios';
import Movie from '../../assets/images/movie.jpg';

function FiftyPage() {
  const [movieInput, setMovieInput] = useState('');
  const [notFoundMovie, setNotFoundMovie] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);

  const MY_API_KEY_FOR_MOVIE = '7e497e53';

  function validate() {
    if (!movieInput) {
      alert('Kinoni nomini kiritishingiz kerak!');
      return false;
    }
    return true;
  }

  function handleSearchMovie(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    moviesData
      .get(`?s=${movieInput}&apikey=${MY_API_KEY_FOR_MOVIE}`)
      .then(response => {
        if (response.status === 200 && response.data.Search) {
          setDataMovies(response.data.Search);
          setNotFoundMovie(false);
        } else {
          setDataMovies([]);
          setNotFoundMovie(true); 
        }
      })
      .catch(error => {
        setNotFoundMovie(true);
        setDataMovies([]);
        console.log(error);
      });

    setMovieInput('');
  }

  return (
    <div className='container'>
      <h2 className='titleOne'>Howework Five</h2>

      <form onSubmit={handleSearchMovie} className="form">
        <label htmlFor="movie">Biror bir kino nomini kiriting!</label>
        <input
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
          id="movie"
          name="movie"
          type="text"
          placeholder="Enter movie name..."
        />
        <button className="buttonOne">Search Movie</button>
      </form>

      <div className="movies">
        {notFoundMovie ? <p>Bunday kino topilmadi!</p> : ""}
        {dataMovies && dataMovies.length > 0 && dataMovies.map((value, index) => (
          <div key={index} className="movie">
            <img
              src={value.Poster && value.Poster !== 'N/A' ? value.Poster : Movie}
              alt={value.Title}
            />
            <h3>{value.Title}</h3>
            <p>{value.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiftyPage;