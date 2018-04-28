import React, { Component } from 'react';

import { StyleRoot } from 'radium';

import Constants from './Constants.js';
import InstrumentString from './InstrumentString.js';
import Note from './Note.js';
import Tuner from './Tuner.js';

class App extends Component {
  constructor(props) {
    super(props);

    this._strings = this.initStrings();
  }

  initStrings() {
    // let stringNames = ['D1', 'A1'];//, 'D2', 'G1', 'A2', 'D3'];
    // let stringNames = ['D1', 'A1', 'D2', 'G1', 'A2', 'D3'];
    let stringNames = ['E1', 'A1', 'D1', 'G1', 'B1', 'E2'];
    return stringNames.map((stringName) => {
      return new InstrumentString(new Note(stringName));
    });
  }

  render() {
    return (
      <StyleRoot style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>DADGAD tuner</h1>
        </header>
        <Tuner strings={this._strings}></Tuner>
      </StyleRoot>
    );
  }
}

export default App;

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column'
  },
  header: {
    backgroundColor: Constants.primaryColor,
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
