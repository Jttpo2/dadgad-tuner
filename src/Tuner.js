import Radium from 'radium';
import React, { Component } from 'react';

import Constants from './Constants.js';
import Colors from './Colors.js';
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

    const stopButtonTextStyle = [
      styles.ctrlButtonText,
      styles.stopButtonText
    ];
    const nextButtonTextStyle = [
      styles.nextButtonText,
      styles.ctrlButtonText
    ]

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
            <button onClick={this.stopClicked.bind(this)} style={stopButtonStyle} key='stopbutton'><div style={stopButtonTextStyle}>Stop</div></button>
            <button onClick={this.nextClicked.bind(this)} style={nextButtonStyle} key='nextButton'><div style={nextButtonTextStyle}>Next</div></button>
          </div>
        </div>
      );
    }
  }

  const goldenRatioAdAdjustment = 7;
  const ctrlButtonTextOffset = 5;

  const styles = {
    container: {
      // background: 'yellow',
      background: 'linear-gradient(to bottom right, ' + Colors.background1  + ' ' + Colors.bg1GradientPercentage + ', ' + Colors.background2 + ')',
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      flex: 1,
      [MediaQueries.portrait]: {
      },
      [MediaQueries.landscape]: {
      }
    },
    stringButtonContainer: {
      // background: 'yellow',
      display: 'flex',

      [MediaQueries.portrait]: {
        flex: 0.25,

        height: '90%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // flex: 0.9,
      },
      [MediaQueries.landscape]: {
        position: 'relative',
        top: -(Constants.goldenRatio - 1.5) * 100 + goldenRatioAdAdjustment + 'vh',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 0.8
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
      flex: 0.5,

      borderStyle: 'none',
      color: Colors.controlButtonTextColor,
      fontSize: Constants.controlButtonFontSizeStandard,
      textShadow: '0px 0px 11px rgba(255, 255, 255, 0.6)',
      background: 'none',

      ':focus': {
        outline: 'none'
      },
      [MediaQueries.portrait]: {
        height: '100%',
      },
      [MediaQueries.landscape]: {

      },
      [MediaQueries.breakpointLarge]: {
      },
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    stopButton: {
      // background: 'green',
    },
    nextButton: {
      // background: 'grey'
    },
    ctrlButtonText: {
      [MediaQueries.landscape]: {
        position: 'relative',
        top: Constants.stringButtonDiameter + 0 + goldenRatioAdAdjustment + 'vh',
      }
    },
    stopButtonText: {
      [MediaQueries.portrait]: {
        position: 'relative',
        right: ctrlButtonTextOffset + 'vw'
      }
    },
    nextButtonText: {
      [MediaQueries.portrait]: {
      position: 'relative',
      left: ctrlButtonTextOffset + 'vw'
    }
    }
  }

  export default Radium(Tuner);
