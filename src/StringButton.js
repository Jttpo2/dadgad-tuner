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
    let style = Object.assign({},
      styles.stringButton,
      this.props.isActive && styles.active
    );

    return (
      <button
        // style={this.props.isActive ? styles.active : styles.stringButton }
        style={style}
        onClick={this.onClick}>{this.props.string.note.simpleName}</button>
      );
    }
  }

  const diameter = '4.5rem';
  const activeDiameter = '6.5rem';
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

    },
    active: {
      width: activeDiameter,
      height: activeDiameter
    }

  }
