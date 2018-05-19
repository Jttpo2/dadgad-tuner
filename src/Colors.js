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

const original = {
  background: '#fdfbfb',
  primary: '#f52222',
  secondary: '#f52222',
  textLight: 'white'
}

const sharpAndModern = {
  background: '#fdfbfb',
  primary: '#3cc47c',
  secondary: '#1e392a',
  tertiary: '#828081',
  accent: '#e9c893',
  textLight: 'white'
}

const retro = {
  // background: '#fdfbfb',
  background: '#fedc3d',
  primary: '#000000',
  secondary: '#01abaa',
  tertiary: '#fea680',
  textLight: 'white'
}

const tropicalTones = {
  background: '#eab126',
  primary: '#f24c4e',
  secondary: '#1fb58f',
  tertiary: '1b7b34',
  accent: '',
  textLight: 'white'
}

const modernMinimal = {
  background: '#eddbcd',
  primary: '#c06014',
  secondary: '#000000',
  tertiary: '#cdcdcd',
  accent: '',
  textLight: 'white'
}

const base = original;

const Colors = {
  primaryColor: base.primary,
  // headerColor1: base.secondary,
  // headerColor2: Color(base.secondary).darken(0.2),
  headerColor1: 'none',
  headerColor2: 'none',
  headerGradientPercentage: '50%',
  headerTextColor: base.primary,
  stringButtonColor1: base.primary,
  stringButtonColor2: Color(base.primary).darken(0.3),
  stringButtonGradientPercentage: '63%',
  stringButtonText: base.textLight,
  background1: base.background,
  background2: Color(base.background).darken(0.04),
  bg1GradientPercentage: '50%',
  controlButtonTextColor: base.primary,
  adBackground: '#f0f0f0cc',
  adText: 'lightgrey',
  copyright: 'lightGrey'
}

if (Object.freeze) Object.freeze(Colors);

export default Colors;
