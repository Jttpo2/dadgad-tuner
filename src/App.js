import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Constants from './Constants.js';
import InstrumentString from './InstrumentString.js';
import Note from './Note.js';
import { Tuner } from './Tuner.js';

class App extends Component {
  constructor(props) {
    super(props);

    this._strings = this.initStrings();
  }

  initStrings() {
    // let stringNames = ['D1', 'A1'];//, 'D2', 'G1', 'A2', 'D3'];
    let stringNames = ['D1', 'A1', 'D2', 'G1', 'A2', 'D3'];
    return stringNames.map((stringName) => {
      return new InstrumentString(new Note(stringName));
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 style={styles.title}>DADGAD tuner</h1>
        </header>
        <Tuner strings={this._strings}></Tuner>
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
      height: '100%',
      // textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column'
  },
  header: {
    backgroundColor: Constants.primaryColor,
    // height: '10%',
    // padding: '20px',
    flex: 0.2,
    color: 'white',

    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.5em'
  }
}
