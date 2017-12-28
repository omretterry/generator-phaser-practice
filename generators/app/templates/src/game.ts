/// <reference path='../defs/phaser.d.ts' />

class SimpleGame {
	game: Phaser.Game;
	happy;
	angry;

	constructor() {
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
	}

	preload() {
		this.game.load.image('happy', 'assets/happy.png');
		this.game.load.image('angry', 'assets/angry.png');
	}

	create() {
		this.happy = this.game.add.sprite(0,0,'happy');
		this.angry = this.game.add.sprite(100,100,'angry');
	}
}

window.onload = () => {
	var game = new SimpleGame();
}