import Game from './components/Game';
import Rules from "./components/Rules";
import './style/style.css';



function App() {
  return (
    <div className="App">
      <h1 className="h1color">MASTERMIND</h1> 
      <Rules />
      <Game />
      
    </div>
  );
}

export default App;
