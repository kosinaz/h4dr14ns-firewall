import Phaser from '../lib/phaser.js';
import WorldScene from './worldScene.js';

export default class MenuScene extends Phaser.Scene {
  create () {
    this.scene.stop().add('WorldScene', WorldScene, true);
  }
}
