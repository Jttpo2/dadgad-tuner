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

  const diameter = 4.2;
  const activeDiameter = 5.5;
  const fontSize = diameter * 3/4;
  const activeFontSize = activeDiameter * 3/4;
  const transitionTime = 0.3;
  const initialMargin = 0.2;
  // initial margin - (width change (and/or height change)/2), so here 100px is initial margin, and the change is (100px final W/H - 10px initial W/H = 90px change, so 100px - (90px / 2 [= 45px]) = 55px)
  const transitionedMargin = initialMargin - (activeDiameter - diameter)/2;
  const shadowLength = 0;
  const activeShadowLength = shadowLength + 8;
  const blur = 0;
  const activeBlur = 50;
  const shadowColor = 'grey'

  const styles = {
    stringButton: {
      background: Constants.stringButtonColor,
      // flex: 0.07,
      width: diameter + 'rem',
      height: diameter + 'rem',
      borderRadius: '50%',
      borderStyle: 'none',

      fontSize: fontSize + 'em',
      color: 'white',
      fontFamily: 'helvetica, sans-serif',

      margin: initialMargin + 'rem',

      transition: 'all ' + transitionTime + 's',
      transformOrigin: '50% 50%',

      boxShadow: shadowLength + 'px ' + shadowLength + 'px ' + blur + 'px ' + shadowColor

    },
    active: {
      width: activeDiameter + 'rem',
      height: activeDiameter + 'rem',
      margin: transitionedMargin + 'rem',
      fontSize: activeFontSize + 'rem',
      boxShadow: activeShadowLength + 'px ' + activeShadowLength + 'px ' + activeBlur + 'px ' + shadowColor
    }

  }
