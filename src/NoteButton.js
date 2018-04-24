import React, { Component } from 'react';

import Constants from './Constants.js';

export class NoteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: this.props.note.simpleName,
      isActive: false

    };
  }

  onClick = (event) => {
      this.props.onClick(event);
  };

  render() {
    return (
      <button
        style={styles.noteButton}
        onClick={this.onClick}>{this.state.displayName}</button>
    );
  }
}

const diameter = '5rem';
const styles = {
  noteButton: {
    background: Constants.noteButtonColor,
    // flex: 0.07,
    width: diameter,
    height: diameter,
    borderRadius: '50%',

    fontSize: '2.5em',
    color: 'white',
    fontFamily: 'helvetica, sans-serif'

  }
}
