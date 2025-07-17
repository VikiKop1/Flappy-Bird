import Canvas from "./canvas.js";

export default class gameStart {
    constructor() {
        this.canvas = new Canvas();

        this.imgStart = {
            sX: 0,
            sY: 228,
            width: 173,
            height: 152,
            x: 75,
            y: 20
        };
    };

    draw() {
        this.canvas.context.drawImage(this.canvas.spriteSheet, this.imgStart.sX, this.imgStart.sY, this.imgStart.width, this.imgStart.height, this.imgStart.x, this.imgStart.y, this.imgStart.width, this.imgStart.height);
    }
}