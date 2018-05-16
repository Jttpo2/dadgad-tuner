import Radium from 'radium';
import React, { Component } from 'react';

import Constants from './Constants.js';
import StringButton from './StringButton.js';
import SoundLibrary from './SoundLibrary.js';
import SoundPlayer from './SoundPlayer.js';
import MediaQueries from './MediaQueries.js';

class Tuner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      currentString: null
    }

    this.soundLibrary = new SoundLibrary();
    this.soundPlayer = new SoundPlayer();
  }

  stringButtonClicked(string, event) {
    this._play(string);
  }

  nextClicked() {
    this._nextString();
  }

  stopClicked() {
    this.stop();
  }

  _play(string) {
    this.setState({
      currentString: string,
      isPlaying: true
    });
    this.soundPlayer.playAndLoop(this.soundLibrary.getPathTo(string.note));
  }

  stop() {
    this.setState({
      isPlaying: false
    });
    this.soundPlayer.stop();
  }

  _nextString() {
    let currentStringIndex = this.state.currentString ? this.props.strings.indexOf(this.state.currentString) : -1;
    let stringToPlayIndex = currentStringIndex + 1;
    if (stringToPlayIndex === this.props.strings.length) stringToPlayIndex = 0;
    console.log(stringToPlayIndex);
    this._play(this.props.strings[stringToPlayIndex]);
  }

  componentDidMount() {
  }

  render() {
    const stopButtonStyle = [
      styles.controlButton,
      styles.stopButton
    ];

    const nextButtonStyle = [
      styles.controlButton,
      styles.nextButton
    ];

    let stringButtons = [];
    this.props.strings.forEach((string) => {
      stringButtons.push(
        <StringButton
          string={string}
          isActive={this.state.currentString === string}
          isPlaying={this.state.currentString === string && this.state.isPlaying}
          key={string.id}
          handleButtonClick={this.stringButtonClicked.bind(this, string)}
        />);
      });

      return (
        <div style={styles.container}>
          <div style={styles.stringButtonContainer}>
            {stringButtons}
          </div>
          <div style={styles.controlButtonContainer}>
            <button onClick={this.stopClicked.bind(this)} style={stopButtonStyle} key='stopbutton'>Stop</button>
            <button onClick={this.nextClicked.bind(this)} style={nextButtonStyle} key='nextButton'>Next</button>
          </div>
        </div>
      );
    }
  }

  const styles = {
    container: {
      // background: 'yellow',
      // background: 'linear-gradient(to bottom right, ' + Constants.background1  + ' ' + Constants.bg1GradientPercentage + ', ' + Constants.background2 + ')',
      background: 'linear-gradient(to bottom right, ' + Constants.background1  + ' ' + Constants.bg1GradientPercentage + ', ' + Constants.background2 + ')',
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      flex: 1,
      [MediaQueries.portrait]: {
        // flexFlow: 'row'
      },
      [MediaQueries.landscape]: {
        // flexFlow: 'column'
      }
    },
    stringButtonContainer: {
      // background: 'yellow',
      height: '95%',

      display: 'flex',

      [MediaQueries.portrait]: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      [MediaQueries.landscape]: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
      },
      zIndex: 1


    },
    controlButtonContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',

      display: 'flex',
      flexFlow: 'row',
      zIndex: 0,
    },
    controlButton : {
      height: '100%',
      flex: 0.5,

      borderStyle: 'none',
      color: Constants.controlButtonTextColor,
      fontSize: Constants.controlButtonFontSize,
      textShadow: '0px 0px 11px rgba(255, 255, 255, 0.6)',
      background: 'none',

      ':focus': {
        outline: 'none'
      },
      [MediaQueries.landscape]: {
        // flex: 0.2
      }


    },
    stopButton: {
      // background: 'green',
      [MediaQueries.portrait]: {
        // order: '-1'
      }
    },
    nextButton: {
      // background: 'grey'
    }
  }

  export default Radium(Tuner);
