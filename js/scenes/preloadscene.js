class PreloadScene extends Phaser.Scene {
    constructor() {
      super({key: 'PreloadScene'});
    }
  
    preload ()
    {
        this.load.image('background','../assets/bkg.png');
        this.load.image('ground','../assets/platform.png');
        this.load.spritesheet('health','../assets/plates.png',{ frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('pawn','../assets/Ghost.png', { frameHeight: 78, frameWidth: 59 });
        this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 71.5, frameHeight: 80 });
        this.load.spritesheet('jumpdude', '../assets/jump.png',{frameWidth: 66, frameHeight: 79 });
    }
    
    create() {
      console.log('PreloadScene create');
      this.scene.start('PlayScene');
    }
  }