import './css/main.css';
import { useEffect } from 'react';

const apiURL = 'http://www.omdbapi.com?apikey=d93aeb11'
// d93aeb11

const movie = {
  "Title": "Superman Returns",
  "Year": "2006",
  "imdbID": "tt0348150",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('superman')
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className='page-title'>Movie List API</h1>
        <div className='card-movie'>
          <img src={movie.Poster} alt={movie.Title} className='card-img'/>
          <h3>{movie.Title}</h3>
          <div className='card-details'>
            <span>{movie.Year}</span>
            <p className='movie'>{movie.Type}</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
