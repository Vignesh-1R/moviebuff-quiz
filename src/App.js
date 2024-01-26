import './App.css';
import Menu from "./components/Menu";
import Quiz from './components/Quiz';
import { useState } from 'react';
import {GameStateContext} from './helpers/Contexts';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState('menu');
  const[userName, setUserName] = useState("")
  const[score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName,score,setScore}}>
      {gameState=== "menu" && <Menu />}
      {gameState === "playing" && <Quiz />}
      {gameState === "finished" && <EndScreen />}
      {/* {userName} */}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
