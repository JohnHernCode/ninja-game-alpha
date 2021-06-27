import Phaser from 'phaser';


export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    // load background and game logo here
    // this.load.image('bg', BG);
    // this.add.image(0, 0, 'bg').setOrigin(0);
    // this.add.image(config.width / 2 - 35, 100, 'logo');
  }

  create() {
    // buttons to start the game/go to options/or credits screens
    // Game
    // this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'button1', 'button2', 'Play', 'UserScene');
    //
    // Options
    // this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'button1', 'button2', 'Options', 'Options');
    //
    // Credits
    // this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'button1', 'button2', 'Credits', 'Credits');
  }
}
