import React, { Component } from 'react';

import { NoteButton } from './NoteButton.js';

export class Tuner extends Component {
  constructor(props) {
    super(props);

    // this.noteButtonClicked = this.noteButtonClicked.bind(this);
  }

  noteButtonClicked(id, event) {
    console.log(id);
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
      <div>{noteButtons}</div>
    );
  }
}
