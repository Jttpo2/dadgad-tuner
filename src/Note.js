export default class Note {
  constructor(scientificPitchNotationNameString) {
    // Input in the form of: C#4, Bb6, D3
    this._sPNName = scientificPitchNotationNameString;
    this._octave = scientificPitchNotationNameString.slice(-1); // Last character
    this._letter =  scientificPitchNotationNameString.slice(0, 1);
    this._isSharp = scientificPitchNotationNameString.includes('#');
    this._isFlat = scientificPitchNotationNameString.includes('b');
  }

  static get sharp() {
    return '#';
  }

  static get flat() {
    return 'b';
  }

  get fullName() {
    return this._sPNName;
  }

  get simpleName() {
    return this._letter + (this._isSharp ? Note.sharp : '') + (this._isFlat ? Note.flat : '');
  }

  get octave() {
    return this._octave;
  }

  equals(that) {
    return this._sPNName === that._sPNName;
  }

  toString() {
    return this._sPNName;
  }
}
