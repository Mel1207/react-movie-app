import './css/main.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>LastName: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person  name="Mel" lastName="Pualon" age={27}/>
      <Person  name="John" lastName="Pualon" age={28}/>
    </div>
  );
}

export default App;
