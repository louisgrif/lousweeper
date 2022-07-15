import { useState } from 'react';

import { default as Board } from './components/board/index';
import { default as Menu } from './components/menu/index';

import './App.css';

function App() {

  const[numX, setNumX] = useState(undefined);
  const[numY, setNumY] = useState(undefined);
  const[numMines, setNumMines] = useState(undefined);

  class boardTool {
    setNumX(numX) {setNumX(numX)}
    setNumY(numY) {setNumY(numY)}
    setNumMines(numMines) {setNumMines(numMines)}
  }

  return (
    <div className="App"> {
      (numX === undefined || numY === undefined || numMines === undefined) ?
      <Menu boardTool={boardTool} /> :
      <Board numX={numX} numY={numY} numMines={numMines} boardTool={boardTool} />
    }</div>
  );
}

export default App;
