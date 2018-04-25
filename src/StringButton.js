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
        onClick={this.onClick}><strong>{this.props.string.note.simpleName}</strong></button>
      );
    }
  }

  const activeScalar = 1.3;
  const diameter = 11;
  const activeDiameter = diameter * activeScalar;
  const sizeUnit = 'vh';
  const fontSize =  diameter * 5/11;
  const activeFontSize = fontSize * activeScalar;
  const fonstSizeUnit = 'vh';

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
      width: diameter + sizeUnit,
      height: diameter + sizeUnit,
      borderRadius: '50%',
      borderStyle: 'none',

      fontSize: fontSize + fonstSizeUnit,
      color: 'white',
      fontFamily: 'helvetica, sans-serif',

      margin: initialMargin + sizeUnit,

      transition: 'all ' + transitionTime + 's',
      transformOrigin: '50% 50%',

      boxShadow: shadowLength + 'px ' + shadowLength + 'px ' + blur + 'px ' + shadowColor

    },
    active: {
      width: activeDiameter + sizeUnit,
      height: activeDiameter + sizeUnit,
      margin: transitionedMargin + sizeUnit,
      fontSize: activeFontSize + fonstSizeUnit,
      boxShadow: activeShadowLength + 'px ' + activeShadowLength + 'px ' + activeBlur + 'px ' + shadowColor
    }

  }
