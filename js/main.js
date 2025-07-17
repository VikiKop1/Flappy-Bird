import Canvas from "./canvas.js";
import GameLoop from "./gameLoop.js";
import Pipes from "./pipes.js";
import Bird from "./bird.js";
import Score from "./score.js";
import GameOver from "./gameOver.js";
import Medal from "./medal.js";
import Config from "./config.js";
import GameStart from "./gameStart.js";

class Game {
    constructor() {
        this.canvas = new Canvas();
        this.pipes = new Pipes();
        this.bird = new Bird();
        this.score = new Score();
        this.gameOver = new GameOver();
        this.medal = new Medal(this.score);
        this.config = new Config();
        this.gameStart = new GameStart();
        
        this.gameLoop = new GameLoop(this.updata.bind(this), this.draw.bind(this));
        this.score.localStorageScore();
        
        this.canvas.element.addEventListener('click', () => {
            this.config.gamePlaying = true;
        });

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32 || event.code === 'Space') {
                this.config.gamePlaying = true;
            }
        });

        this.canvas.element.addEventListener('touchstart', () => {
            this.config.gamePlaying = true;
        });
    };

    updata() {
        if (this.config.gamePlaying) {
            this.pipes.updata(this.bird, this.gameLoop, this.gameOver, this.score, this.medal);
            this.bird.updata();
        }

        if (localStorage.getItem('playSoundAfterReload') === 'true') {
            this.audioAfterReload = new Audio();
            this.audioAfterReload.src = "./sounds/swooshing.wav";
            this.audioAfterReload.play();
        
            localStorage.removeItem('playSoundAfterReload');
        }
    };

    draw() {
        this.canvas.context.fillStyle = "#70c5ce";
        this.canvas.context.fillRect(0, 0, this.canvas.element.width, this.canvas.element.height);

        this.canvas.draw();
        this.pipes.draw();
        this.bird.draw();
        if (this.config.gamePlaying) this.score.draw();
        if (!this.config.gamePlaying) this.gameStart.draw();
    }
}
new Game();