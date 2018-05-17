const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: [PreloadScene, PlayScene]
};
window.onload = function() {
    const theGame = new Phaser.Game(config);
    theGame.scene.start('PreloadScene');
};