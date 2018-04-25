// Test sounds taken from:
// https://freesound.org/people/SpeedY/packs/469/

const fileTypes = {
    mp3: '.mp3',
    wav: '.wav'
};

export default class SoundLibrary {
  constructor() {
    this.notes = new Map();

    this.notesPath = './mp3/';

    // this.notes.set('C4', this.notesPath + 'test.wav');
    // this.notes.set('D1', this.notesPath + 'test.wav');

    this.notes.set('E1', this.notesPath + 'E1' + fileTypes.mp3);
    this.notes.set('A1', this.notesPath + 'A1' + fileTypes.mp3);
    this.notes.set('D1', this.notesPath + 'D1' + fileTypes.mp3);
    this.notes.set('G1', this.notesPath + 'G1' + fileTypes.mp3);
    this.notes.set('B1', this.notesPath + 'B1' + fileTypes.mp3);
    this.notes.set('E2', this.notesPath + 'E2' + fileTypes.mp3);
  }

  getPathTo(note) {
    let notePath = this.notes.get(note.fullName);
    if (!notePath) {
      console.log('No matching note file for: ' + note);
    }
    return notePath;
  }
}
