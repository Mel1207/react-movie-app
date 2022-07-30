import './css/main.css';
import { useEffect, useState  } from 'react';
import IconSearch from './assets/icon-search.svg'
import CardMovie from './components/CardMovie';

const apiURL = 'http://www.omdbapi.com?apikey=d93aeb11'
// d93aeb11

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('superman')
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className='page-title'>Movie List API</h1>
        <div className='searchbox'>
          <input type="text" 
            placeholder='Search movie'
            value={searTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={IconSearch} 
            alt="Search" 
            onClick={() => searchMovies(searTerm)}
          />
        </div>

        {
          movies?.length > 0 
            ? (
              <div className='movies-container'>
                {movies.map(item => ( <CardMovie movie={item}/>))}
              </div>
            ) : (
              <div>
                <h2>No Movies found</h2>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default App;
