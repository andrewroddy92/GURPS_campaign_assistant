import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please place the number of dice you wish to roll and the number of sides of the dice.
        </p>
        <p>ie 4d6 means 4 dice with 6 sides</p>
        <input id='diceInput' text='1d6'></input>
      </header>
    </div>
  );
}

export default App;
