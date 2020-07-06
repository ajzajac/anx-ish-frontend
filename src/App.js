import React from 'react';
import './App.css';
import flowers from './images/flowers.png'

function App() {
  return (
    <div className="App">
        <div className='landing-page-left'>
          <p>anx-ish</p>
          <p>...coming soon!</p>
        </div>
        <div className='landing-page-right'>
          <img src={flowers}></img>
        </div>
    </div>
  );
}

export default App;
