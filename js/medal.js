import Canvas from "./canvas.js";

export default class Medal {
    constructor(score) {
        this.canvas = new Canvas();

        this.medal = {
            bronze: {sX: 358, sY: 158},
            silver: {sX: 358, sY: 113},
            platinum: {sX: 310, sY: 113},
            gold: {sX: 310, sY: 158},
            source: {sW: 45, sH: 45, x: 72, y: 177}
        };

        this.medalPositionSX;
        this.medalPositionSY;

        this.score = score;
    };

    draw() {
        if (this.score._bestScore > 0 && this.score._bestScore <= 15)  {
            this.medalPositionSX = this.medal.bronze.sX;
            this.medalPositionSY = this.medal.bronze.sY; 
        } else if (this.score._bestScore > 15 && this.score._bestScore <= 30) {
            this.medalPositionSX = this.medal.silver.sX;
            this.medalPositionSY = this.medal.silver.sY;
        } else if (this.score._bestScore > 30 && this.score._bestScore <= 45) {
            this.medalPositionSX = this.medal.platinum.sX;
            this.medalPositionSY = this.medal.platinum.sY;
        } else if (this.score._bestScore > 45) {
            this.medalPositionSX = this.medal.gold.sX;
            this.medalPositionSY = this.medal.gold.sY;
        }

        this.canvas.context.drawImage(this.canvas.spriteSheet, this.medalPositionSX, this.medalPositionSY, this.medal.source.sW, this.medal.source.sH, this.medal.source.x, this.medal.source.y, this.medal.source.sW, this.medal.source.sH);
    }
}