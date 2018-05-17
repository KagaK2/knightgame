class Pawn extends Phaser.GameObjects.Sprite{
    constructor(scene){
        super(scene, 800, 500, 'pawn');
        this.overlapped = false;
    }
    fight(player){
        this.setActive(false);
        this.setVisible(false);
        this.overlapped = true;
    }

}