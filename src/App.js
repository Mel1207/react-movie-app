import './App.css';

const App = () => {
  const name = "Mel"
  const isNameShowing = false

  return (
    <div className="App">
      <div>hey {isNameShowing ? name: 'someone else'}</div>
    </div>
  );
}

export default App;
