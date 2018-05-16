import React, { Component } from 'react';

import { StyleRoot } from 'radium';

import Constants from './Constants.js';
import Colors from './Colors.js';
import InstrumentString from './InstrumentString.js';
import Note from './Note.js';
import Tuner from './Tuner.js';
import AdComponent from './AdComponent.js';

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
        <AdComponent></AdComponent>
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
    background: 'linear-gradient(to bottom right, ' + Colors.headerColor1  + ' ' + Colors.headerGradientPercentage + ', ' + Colors.headerColor2 + ')',
    flex: 0.15,
    minHeight: '50px',
    color: Colors.headerTextColor,

    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: Constants.headerFontSize
  }
}
