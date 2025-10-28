import React, { useState, useEffect, useRef, useMemo } from 'react';
import logo from './logo.svg';
import FilePicker from './FilePicker';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('test');// 'menu', 'newGame', 'playing', 'solved'

  function newGame() {
    setGameState('newGame');
  }
  function startGame() {
    setGameState('game');
  }
  function continueGame(file) {
    startGame();
    //open file browser to load saved game
  }
  function loadImage(file) {
    //load image for new game
  }


  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu newGame={newGame} continueGame={continueGame} />;
      case 'newGame':
        return <NewGame startGame={startGame} loadImage={loadImage} />;
      case 'game':
        return <Game />;
      case 'test':
        return <Test />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderGameState()}
    </div>
  );
}

function MainMenu({ newGame, continueGame }) {
  return (
    <div className="Menu-Container">
      <button onClick={newGame}>
        New Game
      </button>
      <FilePicker accept=".puzzle" onFileChange={continueGame}>
        Open Saved Game
      </FilePicker>
    </div>
  );
};

function NewGame({ startGame, loadImage }) {
  return (
    <div className="Menu-Container">
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
  );
}

function Game() {
  return (
    <div className="Puzzle-Container">
      Game Component
    </div>
  );
}

function Test() {
  return (
    <>
      <div className='Menu-Button-Group'>
        <button className="Menu-Button">Save</button>
        <button className="Menu-Button">Load Game</button>
        <button className="Menu-Button">New Game</button>
      </div>
      <div className='Puzzle-Container'>
        
      </div>
      <div className='Menu-Button-Group'>
        <button className="Menu-Button">Tidy Up</button>
        <button className="Menu-Button">Edges Only</button>
        <button className="Menu-Button">Hint</button>
      </div>
    </>
  );
}

export default App;
