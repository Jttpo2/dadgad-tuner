import React, { Component } from 'react';

import Constants from './Constants.js';
import { StringButton } from './StringButton.js';
import SoundLibrary from './SoundLibrary.js';
import SoundPlayer from './SoundPlayer.js';

export class Tuner extends Component {
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
        <button onClick={this.stopClicked.bind(this)} style={styles.stopButton}>Stop</button>
        <div style={styles.stringButtonContainer}>
          {stringButtons}
        </div>
        <button onClick={this.nextClicked.bind(this)} style={styles.nextButton}>Next</button>
      </div>
    );
  }
}

// const buttonSideMargin = '15px';
const styles = {
  container: {
    // background: 'yellow',
    height: '100%',
    display: 'flex',
    flexFlow: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',

    flex: 1
  },
  stringButtonContainer: {
    // background: 'blue',
    height: '98%',

    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.5
  },
  stopButton: {
    // height: '50%',
    // width: '20%',
    position: 'relative',
    flex: 0.5,
    // top: '50%',
    // transform: 'translateY(-50%)',
    // left: buttonSideMargin,

    color: Constants.primaryColor,
    fontSize: Constants.controlButtonFontSize
    // background: 'green'
  },
  nextButton: {
    position: 'relative',
    flex: 0.5,
    // height: '50%',
    // width: '20%',
    // top: '50%',
    // transform: 'translateY(-50%)',
    // right: buttonSideMargin,

    color: Constants.primaryColor,
    fontSize: Constants.controlButtonFontSize
    // background: 'grey'
  }
}
