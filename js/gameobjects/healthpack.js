class HealthPack extends Phaser.GameObjects.Sprite{
    constructor(scene){
        super(scene,800, Math.random()*200+300, 'health');
        this.overlapped = false;
    }
    touch(player){
        this.setActive(false);
        this.setVisible(false);
        this.overlapped = true;
    }
}