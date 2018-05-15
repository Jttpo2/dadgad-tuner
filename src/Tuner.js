import Radium from 'radium';
import React, { Component } from 'react';

import Constants from './Constants.js';
import StringButton from './StringButton.js';
import SoundLibrary from './SoundLibrary.js';
import SoundPlayer from './SoundPlayer.js';

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
    const stopButtonStyle = Object.assign({},
      styles.controlButton,
      styles.stopButton
    );
    const nextButtonStyle = Object.assign({},
      styles.controlButton,
      styles.nextButton
    );

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
          <button onClick={this.stopClicked.bind(this)} style={stopButtonStyle} key='stopbutton'>Stop</button>
          <div style={styles.stringButtonContainer}>
            {stringButtons}
          </div>
          <button onClick={this.nextClicked.bind(this)} style={nextButtonStyle} key='nextButton'>Next</button>
        </div>
      );
    }
  }

  const styles = {
    container: {
      // background: 'yellow',
      // background: 'linear-gradient(to bottom right, ' + Constants.background1  + ' ' + Constants.bg1GradientPercentage + ', ' + Constants.background2 + ')',
      background: 'linear-gradient(to bottom right, ' + Constants.background1  + ' ' + Constants.bg1GradientPercentage + ', ' + Constants.background2 + ')',
      height: '100%',
      display: 'flex',
      flexFlow: 'row',
      // justifyContent: 'space-evenly',
      alignItems: 'center',

      flex: 1
    },
    stringButtonContainer: {
      // background: 'blue',
      height: '95%',

      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-evenly',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 0.5
    },
    controlButton : {
      position: 'relative',
      height: '100%',
      flex: 0.5,
      // width: '20%',
      // top: '50%',
      // transform: 'translateY(-50%)',

      borderStyle: 'none',
      color: Constants.controlButtonTextColor,
      fontSize: Constants.controlButtonFontSize,
      textShadow: '0px 0px 11px rgba(255, 255, 255, 0.6)',
      background: 'none',

      ':focus': {
        outline: 'none'
      }
    },
    stopButton: {
      // left: buttonSideMargin,
      // background: 'green',
    },
    nextButton: {
      // right: buttonSideMargin,
      // background: 'grey'
    }
  }

  export default Radium(Tuner);
