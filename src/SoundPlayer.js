export default class SoundPlayer {
  constructor() {
    this.audioElement = new Audio();
    // this.audioElement = document.createElement('audio');
    this.audioElement.innerHTML = 'Your browser does not support the <code>audio</code> tag. Try installing Chrome or Edge.';
    document.body.appendChild(this.audioElement);

    this.lastPlayedSound = null;
  }

  playAndLoop(soundUrl) {
    this.stop();
    if (!soundUrl) {
      console.log('Can\'t play undefined audio.');
        return;
      }
    this.audioElement.src = soundUrl;
    this.audioElement.loop = true;
    this.audioElement.play();
    console.log('Playing sound: ' + soundUrl);
  }

  stop() {
    console.log('Stopping playback.');
    this.audioElement.pause();
  }
}
