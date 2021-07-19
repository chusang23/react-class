import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = { color : 'yellow', fontSize: '30px' }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ posts }>개발 blog</div>
      </div>
    </div>
  );
}

export default App;
