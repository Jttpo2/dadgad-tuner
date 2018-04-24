import React, { Component } from 'react';

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
      <div>
        {noteButtons}
        <button onClick={this.stopClicked.bind(this)}>Stop</button>
        <button onClick={this.nextClicked.bind(this)}>Next</button>
      </div>
    );
  }
}
