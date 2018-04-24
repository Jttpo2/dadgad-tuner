export default class SoundLibrary {
  constructor() {
    this.notes = new Map();

    this.notes.set('C4', './notes/test.wav');
  }

  getPathTo(note) {
    return this.notes.get(note);
  }
}
