import Color from 'color';

const gradients = {
  none: {
    col1: 'rgba(0,0,0,0)',
    col2: 'rgba(0,0,0,0)'
  },
  aquaSplash: {
    col1: '#13547a',
    col2: '#80d0c7'
  },
  cleanMirror: {
    col1: '#93a5cf',
    col2: '#e4efe9'
  },
  happyFisher: {
    col1: '#89f7fe',
    col2: '#66a6ff'
  },
  everlastingSky: {
    col1: '#fdfcfb',
    col2: '#e2d1c3'
  },
  cloudyKnoxville: {
    col1: '#fdfbfb',
    col2: '#ebedee'
  },
  heavyRain: {
    col1: '#e2ebf0',
    col2: '#cfd9df'
  },
  passion: {
    col1: '#e53935',
    col2: '#e35d5b'
  }
}

// let usedGradient = gradients.happyFisher;
// let usedGradient = gradients.everlastingSky;
let usedGradient = gradients.cloudyKnoxville;
// let usedGradient = gradients.heavyRain;
// let usedGradient = gradients.passion;
// let usedGradient = gradients.none;

const base = {
  primaryColor: '#f52222',
  textLight: '#ffffff'
  //     // #cc1111
  //     // #f55555,
}

const Colors = {
  primaryColor: base.primaryColor,
  headerColor1: base.primaryColor,
  headerColor2: Color(base.primaryColor).darken(0.2),
  headerGradientPercentage: '50%',
  headerTextColor: base.textLight,
  stringButtonColor1: base.primaryColor,
  stringButtonColor2: Color(base.primaryColor).darken(0.3),
  stringButtonGradientPercentage: '63%',
  stringButtonText: base.textLight,
  background1: usedGradient.col1,
  background2: usedGradient.col2,
  bg1GradientPercentage: '50%',
  controlButtonTextColor: base.primaryColor,
  adBackground: '#f0f0f0cc',
  adText: 'lightgrey'
}

if (Object.freeze) Object.freeze(Colors);

export default Colors;