import './css/main.css';
import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>decrement -</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>increment +</button>
    </div>
  );
}

export default App;