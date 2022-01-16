import Phaser from '../lib/phaser.js';

export default class WorldScene extends Phaser.Scene {
  create () {
    this.add.text(100, 100, 'world');
  }
}
