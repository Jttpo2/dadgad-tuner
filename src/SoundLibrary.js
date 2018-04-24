export default class SoundLibrary {
  constructor() {
    this.notes = new Map();

    this.notesPath = './notes/';

    this.notes.set('C4', this.notesPath + 'test.wav');
    this.notes.set('D1', this.notesPath + 'test.wav');
  }

  getPathTo(note) {
    let notePath = this.notes.get(note.fullName);
    if (!notePath) {
      console.log('No matching note file for: ' + note);
    }
    return notePath;
  }
}
