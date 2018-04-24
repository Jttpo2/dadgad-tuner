import React, { Component } from 'react';

import Constants from './Constants.js';
import Note from './Note.js';
import { NoteButton } from './NoteButton.js';
import SoundLibrary from './SoundLibrary.js';
import SoundPlayer from './SoundPlayer.js';

export class Tuner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testNote: new Note('D1'),
      isPlaying: false,
      currentNoteIndex: 0
    }

    this.soundLibrary = new SoundLibrary();
    this.soundPlayer = new SoundPlayer();
  }

  noteButtonClicked(id, event) {
    this.playNote(id);
  }

  nextClicked() {
    this.nextNote();
  }

  stopClicked() {
    this.stop();
  }

  playNote(note) {
    this.setState({
      isPlaying: true,
      currentNoteIndex: this.props.notes.indexOf(note)
    });
    this.soundPlayer.playAndLoop(this.soundLibrary.getPathTo(note));
  }

  stop() {
    this.setState({
      isPlaying: false
    });
    this.soundPlayer.stop();
  }

  nextNote() {
    let currentNoteIndex = this.state.currentNoteIndex;
    currentNoteIndex++;

    if (currentNoteIndex === this.props.notes.length) currentNoteIndex = 0;
    this.setState({
        currentNoteIndex: currentNoteIndex
    });

    console.log(currentNoteIndex);
    this.playNote(this.props.notes[currentNoteIndex]);
  }

  componentDidMount() {

  }

  render() {
    let noteButtons = [];
    this.props.notes.forEach((note) => {
        noteButtons.push(
          <NoteButton
            note={note}
            key={note.fullName}
            onClick={this.noteButtonClicked.bind(this, note)}/>);
    });

    return (
      <div style={styles.container}>
        <button onClick={this.stopClicked.bind(this)} style={styles.stopButton}>Stop</button>
        <div style={styles.noteButtonContainer}>
          {noteButtons}
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

    flex: 1
  },
  noteButtonContainer: {
    // background: 'blue',
    // height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // justifyContent: 'space-around',
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
