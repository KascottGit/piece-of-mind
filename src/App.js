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
    setGameState('playing');
  }
  function continueGame() {
    //open file browser to load saved game
  }


  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu newGame={newGame} />;
      case 'newGame':
        return <NewGame />;
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
const handleFileSelected = (file) => {
  console.log('File selected by user:', file);
  //setSelectedFile(file);
};

function MainMenu({ newGame }) {
  return (
    <div className="Mid-Box">
      <button onClick={newGame} className='Button'>
        New Game
      </button>
      <FilePicker accept="image/*" onFileChange={handleFileSelected}>
        Open Saved Game
      </FilePicker>
    </div>
  );
};

function NewGame() {
  return (
    <div className="Mid-Box">
      <button>
        Start Game
      </button>
      <div className="Horizontal-Group">
        <button className='Button'>
          Size
        </button>
        <button className='Button'>
          Use Rotation
        </button>
      </div>
      <FilePicker accept="image/*" onFileChange={handleFileSelected}>
        Load Puzzle Image
      </FilePicker>
      <div className='Image-Box'>
        
      </div>
    </div>
  );
}

export default App;
