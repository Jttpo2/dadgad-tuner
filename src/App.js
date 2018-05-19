import React, { Component } from 'react';

import { StyleRoot } from 'radium';

import Constants from './Constants.js';
import MediaQueries from './MediaQueries.js';
import Colors from './Colors.js';
import InstrumentString from './InstrumentString.js';
import Note from './Note.js';
import Tuner from './Tuner.js';
// import AdComponent from './AdComponent.js';

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
        {/* <AdComponent></AdComponent> */}
        <div style={styles.copyright}>©2018 by <a href={'mailto:' + Constants.mailtoAddress} style={styles.copyrightLink}>John Petersson</a></div>
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
    flexFlow: 'column',
    background: 'linear-gradient(to bottom right, ' + Colors.background1  + ' ' + Colors.bg1GradientPercentage + ', ' + Colors.background2 + ')',
  },
  header: {
    position: 'relative',
    top: '5vh',

    background: 'linear-gradient(to bottom right, ' + Colors.headerColor1  + ' ' + Colors.headerGradientPercentage + ', ' + Colors.headerColor2 + ')',
    // flex: 0.15,
    // minHeight: '50px',
    color: Colors.headerTextColor,

    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [MediaQueries.portrait]: {
    },
    [MediaQueries.landscape]: {
      top: '14vh',
    }

  },
  title: {
    fontSize: Constants.headerFontSize
  },
  copyright: {
    position: 'absolute',
    bottom: '0.3em',
    left: '1em',
    // right: 0,
    color: Colors.copyright,
    fontSize: Constants.copyrightFontSize,
    fontFamily: Constants.copyrightFont
  },
  copyrightLink: {
    color: Colors.copyright
  }

}
