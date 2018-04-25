import React, { Component } from 'react';

import Constants from './Constants.js';

export class StringButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onClick = (event) => {
    this.props.handleButtonClick(event);
  };

  render() {
    return (
      <button
        style={styles.stringButton}
        onClick={this.onClick}>{this.props.string.note.simpleName}</button>
      );
    }
  }

  const diameter = '5rem';
  const styles = {
    stringButton: {
      background: Constants.stringButtonColor,
      // flex: 0.07,
      width: diameter,
      height: diameter,
      borderRadius: '50%',

      fontSize: '2.5em',
      color: 'white',
      fontFamily: 'helvetica, sans-serif'

    }
  }
