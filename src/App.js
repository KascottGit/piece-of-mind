import React, { useState, useEffect, useRef, useMemo } from 'react';
import logo from './logo.svg';
import FilePicker from './FilePicker';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');// 'menu', 'newGame', 'playing', 'solved'

  function newGame() {
    setGameState('newGame');
  }
  function startGame() {
    setGameState('game');
  }
  function loadGame(file) {
    startGame();
    //open file browser to load saved game
  }
  function loadImage(file) {
    //load image for new game
  }
  function saveGame() {
    //open file browser to save current game
  }


  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu />;
      case 'newGame':
        return <NewGame startGame={startGame} loadImage={loadImage} />;
      case 'game':
        return <Game />;
      case 'test':
        return
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className='Menu-Button-Group'>
        <button onClick={saveGame} className="Menu-Button">Save</button>
        <button onClick={loadGame} className="Menu-Button">Load Game</button>
        <button onClick={newGame} className="Menu-Button">New Game</button>
      </div>
      {renderGameState()}
      <div className='Menu-Button-Group'>
        <button className="Menu-Button">Tidy Up</button>
        <button className="Menu-Button">Edges Only</button>
        <button className="Menu-Button">Hint</button>
      </div>
    </div>
  );
}

function NewGame({ startGame, loadImage }) {
  return (
    <>
      <div className='Puzzle-Container'>
        <button onClick={startGame}>
          Start Game
        </button>
        <div className="Horizontal-Group">
          <button>
            Size
          </button>
          <button>
            Use Rotation
          </button>
        </div>
        <FilePicker accept="image/*" onFileChange={loadImage}>
          Load Puzzle Image
        </FilePicker>
        <div className='Image-Box'>
          Puzzle Preview
        </div>
      </div>
    </>
  );
}

function Game() {
  return (
    <div className="Puzzle-Container">
      Game Component
    </div>
  );
}

function MainMenu() {
  return (
    <div className='Puzzle-Container'>

    </div>
  );
}

export default App;
