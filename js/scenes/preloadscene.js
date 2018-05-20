class PreloadScene extends Phaser.Scene {
    constructor() {
      super({key: 'PreloadScene'});
    }

    preload ()
    {
        this.load.image('background','../knightgame/assets/bkg.png');
        this.load.image('ground','../knightgame/assets/platform.png');
        this.load.spritesheet('health','../knightgame/assets/plates.png',{ frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('pawn','../knightgame/assets/Ghost.png', { frameHeight: 78, frameWidth: 59 });
        this.load.spritesheet('dude', '../knightgame/assets/dude.png', { frameWidth: 71.5, frameHeight: 80 });
        this.load.spritesheet('jumpdude', '../knightgame/assets/jump.png',{frameWidth: 66, frameHeight: 79 });
    }

    create() {
      this.scene.start('PlayScene');
    }
  }
