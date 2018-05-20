class PlayScene extends Phaser.Scene {
    constructor() {
      super('PlayScene');
      this.health = 100;
      this.running = true;
      this.index = 0;
      this.level = 1;
      this.Velo = -150;  
    }
    create () {
        //add background
        this.background = this.add.tileSprite(400,300,800,600,'background');
        //bottom platform
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        //add player
        this.player = this.physics.add.sprite(100, 450, 'dude',1);
        this.player.setCollideWorldBounds(true);
        //add player and platform collision
        this.physics.add.collider(this.player, this.platforms);
        //running and stop animation for character
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 4 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'stop',
            frames: [ { key: 'dude', frame: 1 } ],
            frameRate: 20
        });

        this.anims.create({
            key:'jump',
            frames: [ {key: 'jumpdude', frame: 1}],
            frameRate: 20
        });
        
        this.pawn  = this.physics.add.group({classType: Pawn, runChildUpdate: true});
        this.healthpack  = this.physics.add.group({classType: HealthPack, runChildUpdate: true, gravityY:-500});
        this.physics.add.collider(this.pawn, this.platforms);
        this.physics.add.overlap(this.player, this.pawn, this.fight, null, this);
        this.physics.add.overlap(this.player, this.healthpack, this.touch, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.healthText = this.add.text(16, 16, 'Health: 100', { fontSize: '32px',  fill: '#fff' });
        this.scoreText = this.add.text(550, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    }
  
    update() {
    if (this.running) {
        if(this.player.body.touching.down){
            this.player.anims.play('right',true);
        } else {
            this.player.anims.play('jump',true);
        }
        this.background.tilePositionX += 1;
        this.spawnPawns();
        this.spawnHealthPack();
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.anims.play('jump',true);
            this.player.setVelocityY(-400);
        }
        }
    }
    fight(player, pawn){
        if (pawn.overlapped == false){
            this.health -= 10;
            this.healthText.setText('Health: ' + this.health);
            pawn.fight(player);
            }
        if (this.health <= 0) {
            this.physics.pause();
            this.endRun(player);
        }
    }
    touch(player, dum){
        if (dum.overlapped == false){
            if(this.health + 5 <= 100){
                this.health += 5;
            } else {
                this.health = 100;
            }
            this.healthText.setText('Health: ' + this.health);
            dum.touch(player);
            }
    }
    spawnPawns(){
        if (this.index%(Math.floor(200/this.level)) == 0){
            let chance = Math.random();
            if ( chance >= 0.24){
            var ayy = this.pawn.create();
            }
            this.pawn.setVelocityX(this.Velo);
            }
            this.index++;
            this.scoreText.setText('Score: ' + Math.floor(this.index/10));
            if(this.index%2000==0){
                this.level *= 1.3;
            }
            if(this.index%4000==0){
                this.Velo -= 25;
            }
    }
    spawnHealthPack(){
        if (this.index%(Math.floor(200/this.level)) == 0){
            let chance = Math.random();
            if ( chance >= 0.02*this.level){
                this.healthpack.create();
                this.healthpack.setVelocityX(this.Velo-Math.random()*150);
            }
        }
    }
    endRun(player) {
        this.running = false;
        player.anims.play('stop',true);
    }
  }