import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Tuner } from './Tuner.js';
import Note from './Note.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">DADGAD tuner</h1>
        </header>
        <p className="App-intro">

        </p>

        <Tuner notes={notes}></Tuner>
      </div>
    );
  }
}

export default App;

const noteNames = ['D1', 'A1', 'D2', 'G1', 'A2', 'D3'];
const notes = noteNames.map((noteName) => {
  return new Note(noteName);
});
