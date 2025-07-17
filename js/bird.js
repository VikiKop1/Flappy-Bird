import Canvas from "./canvas.js";
import Config from "./config.js";

export default class Bird {
    constructor() {
        this.canvas = new Canvas();
        this.config = new Config();

        this.flapBird = new Audio();
        this.flapBird.src = "./sounds/flap.wav";

        this.dieBird = new Audio();
        this.dieBird.src = './sounds/die.wav';

        this.birdSize = [34, 26];
        this.birdPosition = {
            sX: 277,
            sY: 113,
            x: (this.canvas.element.width / 2) - (this.birdSize[0] / 2),
            y: 210
        };

        this.birdJump = 0;
        this.birdSpeed = 3;
        this.birdRotation = 0;
        this.birdRadius = 12;

        this.control();
    };

    draw() {
        this.config.index += 0.3;
        this.birdY = this.birdPosition.sY + Math.floor((this.config.index % 9) / 3) * this.birdSize[1];

        this.canvas.context.save();
        this.canvas.context.translate(this.birdPosition.x, this.birdPosition.y);
        this.canvas.context.rotate(this.birdRotation);
        this.canvas.context.drawImage(this.canvas.spriteSheet, this.birdPosition.sX, this.birdY, this.birdSize[0], this.birdSize[1], Math.floor(-this.birdSize[0] / 2), Math.floor(-this.birdSize[1] / 2), this.birdSize[0], this.birdSize[1]);
        this.canvas.context.restore();
    };

    updata() {
        this.fall();
        if (this.birdJump >= this.birdSpeed) {
            this.birdRotation = 25 * this.config.degree;
        } else {
            this.birdRotation = -25 * this.config.degree;
        }
    };

    control() {
        if (document.documentElement.clientWidth > 1080) {
            this.canvas.element.addEventListener('click', () => {
                this.flap();
                this.flapBird.play();
            });
        } else {
            this.canvas.element.addEventListener('touchstart', () => {
                this.flap();
                this.flapBird.play();
            });
        }

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32 || event.code === 'Space') {
                this.flap();
                this.flapBird.play();
            }
        });
    };

    flap() {
        this.birdJump = -this.birdSpeed;
    };

    fall() {
        this.birdJump += this.config.gravity;
        this.birdPosition.y += this.birdJump;
        this.checkCollision();
    };

    checkCollision() {
        if (this.birdPosition.y <= 10) {
            this.birdPosition.y = 10;
            this.birdJump = 0;
        }
    }
}