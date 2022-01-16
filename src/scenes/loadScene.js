import Phaser from '../lib/phaser.js';
import MenuScene from './worldScene.js';

export default class LoadScene extends Phaser.Scene {
  create () {
    this.scene.stop().add('MenuScene', MenuScene, true);
  }
}