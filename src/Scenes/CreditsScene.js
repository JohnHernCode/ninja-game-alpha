import Phaser from 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor(config) {
    super('Credits');
    this.config = config;
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.creditImage = this.add.image(400, 200, 'logo');
    this.madeByText = this.add.text(0, 0, 'Created By:', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(this.config.width / 2,
      this.config.height / 2, this.config.width, this.config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.creditImage,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.madeByText.setY(1000);
    this.creditImage.setY(70);
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        // eslint-disable-next-line no-unused-expressions
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        // eslint-disable-next-line no-unused-expressions
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}
