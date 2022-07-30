import './css/main.css';
import { useEffect } from 'react';

const apiURL = 'http://www.omdbapi.com?apikey=d93aeb11'
// d93aeb11

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
      <h1>hey there</h1>
    </div>
  );
}

export default App;
