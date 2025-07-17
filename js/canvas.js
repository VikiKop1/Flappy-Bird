import Config from "./config.js";

export default class Canvas {
    constructor() {
        this.element = document.getElementById('canvas');
        this.context = this.element.getContext('2d');

        this.spriteSheet = new Image();
        this.spriteSheet.src = './img/spritesheet.png';

        this.background = {
            sX: 0,
            sY: 0,
            width: 275,
            height: 226,
            x: 0,
            y: 210
        };

        this.foreground = {
            sX: 277,
            sY: 0,
            width: 222,
            height: 112,
            x: 0,
            y: 368
        };

        this.config = new Config();
    };

    draw() {
        this.config.index += 0.3;
        this.backgroundX = -(Math.floor(this.config.index * this.config.speedBackground) % this.element.width);

        this.context.drawImage(this.spriteSheet, this.background.sX, this.background.sY, this.background.width, this.background.height, this.backgroundX, this.background.y, this.element.width, this.background.height);
        this.context.drawImage(this.spriteSheet, this.background.sX, this.background.sY, this.background.width, this.background.height, this.backgroundX + this.element.width, this.background.y, this.element.width, this.background.height);
    }
}