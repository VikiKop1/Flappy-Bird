import Canvas from "./canvas.js";

export default class GameOver {
    constructor() {
        this.canvas = new Canvas();

        this.gameOver = {
            sX: 175,
            sY: 228,
            width: 225,
            height: 160,
            x: 50,
            y: 90
        };

        this.PositionX = 220;
        this.scorePositionY = 188;
        this.bestScorePositionY = 230;
    };

    draw(score, bestScore, medal) {
        this.canvas.spriteSheet.src = "./img/spritesheet.png";

        this.canvas.spriteSheet.onload = () => {
            this.canvas.context.drawImage(this.canvas.spriteSheet, this.gameOver.sX, this.gameOver.sY, this.gameOver.width, this.gameOver.height, this.gameOver.x, this.gameOver.y, this.gameOver.width, this.gameOver.height);
        
            medal.draw();

            this.canvas.context.font = '42px FlappyBird';
            this.canvas.context.lineWidth = 2;

            this.canvas.context.fillStyle = 'white';
            this.canvas.context.fillText(score, this.PositionX, this.scorePositionY);
            this.canvas.context.strokeStyle = 'black';
            this.canvas.context.strokeText(score, this.PositionX, this.scorePositionY);

            this.canvas.context.fillStyle = 'white';
            this.canvas.context.fillText(bestScore, this.PositionX, this.bestScorePositionY);
            this.canvas.context.strokeStyle = 'black';
            this.canvas.context.strokeText(bestScore, this.PositionX, this.bestScorePositionY);
        };
    }
}