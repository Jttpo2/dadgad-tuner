import React, { Component } from 'react';

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
      <button onClick={this.onClick}>{this.state.displayName}</button>
    );
  }
}
