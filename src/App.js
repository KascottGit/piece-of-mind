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

  function saveGame() {
    //open file browser to save current game
  }


  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return <MainMenu />;
      case 'newGame':
        return <NewGame startGame={startGame} />;
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
        <button onClick={saveGame} className="Menu-Button">Save Game</button>
        <FilePicker onFileChange={loadGame} className="Menu-Button">Load Game</FilePicker>
        <button onClick={newGame} className="Menu-Button">New Game</button>
      </div>
      {renderGameState()}
      <div className='Menu-Button-Group'>
        <button className="Menu-Button">Tidy Up</button>
        <button className="Menu-Button">Toggle Edges</button>
        <button className="Menu-Button">Show Image</button>
      </div>
    </div>
  );
}

function NewGame({ startGame }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setImagePreview(null);
    }
  };

  return (
    <>
      <div className='Puzzle-Container'>
        <button onClick={startGame} className='solid-button'>
          Start Game
        </button>
        <div className="Horizontal-Group">
          <button className='solid-button'>
            Size
          </button>
          <button className='solid-button'>
            Use Rotation
          </button>
        </div>
        <FilePicker accept="image/*" onFileChange={handleFileChange} className='solid-button'>
          Load Puzzle Image
        </FilePicker>
        <div className='Image-Box'>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="max-w-full h-32 object-contain mx-auto rounded-md" />
          )}
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
