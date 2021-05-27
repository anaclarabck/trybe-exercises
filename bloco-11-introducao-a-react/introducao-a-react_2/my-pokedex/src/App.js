import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import pokedex from './data';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Pokedex pokedex={ pokedex }/>
    </div>
  );
}

export default App;
