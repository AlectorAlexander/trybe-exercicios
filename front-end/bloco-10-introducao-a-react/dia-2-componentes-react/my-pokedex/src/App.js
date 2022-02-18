import './App.css';
import Prop from './props';
import pokemons from './data';

function App() {
  
  return (
    <div className="App">
      {
       pokemons.map((element) => <Prop Pokepedia = { element }/>)
     }
    </div>
  );
}

export default App;
