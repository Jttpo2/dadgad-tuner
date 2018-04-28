import Radium from 'radium';
import React, { Component } from 'react';

import Constants from './Constants.js';

class StringButton extends Component {
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
    let style = [
      styles.stringButton,
      this.props.isActive && styles.active,
      this.props.isPlaying && styles.playing
    ]

    return (
      <button
        style={style}
        onClick={this.onClick}><strong>{this.props.string.note.simpleName}</strong></button>
      );
    }
  }

  export default Radium(StringButton);

  const activeScalar = 1.3;
  const diameter = 11;
  const sizeUnit = 'vh';
  const fontSize =  diameter * 5/11;
  const fontSizeUnit = 'vh';


  const shadowLength = 0;
  const activeShadowLength = shadowLength + 2;
  const blur = 0;
  const activeBlur = 30;
  const shadowColor = 'grey';

  const transitionTime = 0.35;

  const pulseTime = 1100;
  const activeScale = 1.25;
  const pulseScale = 1.1;

var pulseKeyframes = Radium.keyframes({
'0%': {transform: 'scale(' + activeScale + ')'},
'50%': {transform: 'scale(' + pulseScale + ')'},
'100%': {transform: 'scale(' + activeScale + ')'},
}, 'pulse');

  const styles = {
    stringButton: {
      background: Constants.stringButtonColor,
      // flex: 0.07,
      width: diameter + sizeUnit,
      height: diameter + sizeUnit,
      borderRadius: '50%',
      borderStyle: 'none',

      fontSize: fontSize + fontSizeUnit,
      color: 'white',
      fontFamily: 'helvetica, sans-serif',

      transition: 'all ' + transitionTime + 's',
      transformOrigin: '50% 50%',

      boxShadow: shadowLength + 'px ' + shadowLength + 'px ' + blur + 'px ' + shadowColor,

      ':focus': {
        outline: 'none'
      }
    },
    active: {
      transform: 'scale(' + activeScale + ')',
      boxShadow: activeShadowLength + 'px ' + activeShadowLength + 'px ' + activeBlur + 'px ' + shadowColor
    },
    playing: {
      animationName: pulseKeyframes,
      animationDuration: pulseTime + 'ms',
      transformOrigin: 50 + '% '+ 50 + '%',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDelay: transitionTime  + 's'
    }
  }
