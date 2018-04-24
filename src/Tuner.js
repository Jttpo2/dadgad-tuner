import React, { Component } from 'react';

import { NoteButton } from './NoteButton.js';
import SoundLibrary from './SoundLibrary.js';

export class Tuner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testNote: 'C4'
    }

    this.soundLibrary = new SoundLibrary();
  }

  noteButtonClicked(id, event) {
    console.log(id);

  }

  componentDidMount() {
    let note = this.state.testNote;
    let c4Audio = document.getElementById(note);
    c4Audio.src = this.soundLibrary.getPathTo(note);

    c4Audio.load();
    c4Audio.play();
  }

  render() {
    let noteButtons = [];
    this.props.notes.forEach((noteValue) => {
        noteButtons.push(
          <NoteButton
            note={noteValue}
            key={noteValue}
            onClick={this.noteButtonClicked.bind(this, noteValue)}/>);
    });

    return (
      <div>
        {/* <div>
        </div> */}
        <audio id={this.state.testNote}></audio>
        {noteButtons}
      </div>
    );
  }
}
