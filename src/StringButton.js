import Radium from 'radium';
import React, { Component } from 'react';

import Constants from './Constants.js';
import Colors from './Colors.js';
import MediaQueries from './MediaQueries.js';

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

  const diameter = Constants.stringButtonDiameter;
  const sizeUnit = 'vmax';
  const fontSize =  diameter * 5/diameter;
  const fontSizeUnit = 'vmax';

  const shadowLength = 0;
  const activeShadowLength = shadowLength + 2;
  const blur = 0;
  const activeBlur = 30;
  const shadowColor = 'grey';

  const transitionTime = 0.35;

  const pulseTime = 1100;
  const activeScale = 1.18;
  const pulseScale = 1.1;

  var pulseKeyframes = Radium.keyframes({
    '0%': {transform: 'scale(' + activeScale + ')'},
    '50%': {transform: 'scale(' + pulseScale + ')'},
    '100%': {transform: 'scale(' + activeScale + ')'},
  }, 'pulse');

  const styles = {
    stringButton: {
      background: 'radial-gradient(' + Colors.stringButtonColor1 + ' ' + Colors.stringButtonGradientPercentage + ', ' + Colors.stringButtonColor2 + ')',
      // flex: 0.07,

      width: diameter + sizeUnit,
      height: diameter + sizeUnit,
      fontSize: fontSize + fontSizeUnit,

      borderRadius: '50%',
      borderStyle: 'none',

      color: 'white',
      fontFamily: 'helvetica, sans-serif',

      transition: 'all ' + transitionTime + 's',
      transformOrigin: '50% 50%',

      boxShadow: shadowLength + 'px ' + shadowLength + 'px ' + blur + 'px ' + shadowColor,

      ':focus': {
        outline: 'none'
      },
      [MediaQueries.portrait]: {

      },
      [MediaQueries.landscape]: {

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
