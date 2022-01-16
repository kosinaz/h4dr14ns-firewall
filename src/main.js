import Phaser from './lib/phaser.js';
import LoadScene from './scenes/loadScene.js';

export default new Phaser.Game({
  physics: {
    arcade: {
      debug: true,
      gravity: {
        y: 200,
      }
    },
    default: 'arcade'
  },
  scale: {
    height: 768,
    mode: Phaser.Scale.FIT,
    width: 1366,
  },
  scene: LoadScene,
});