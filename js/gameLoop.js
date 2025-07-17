export default class GameLoop {
    constructor(draw, updata) {
        this.draw = draw;
        this.updata = updata;

        this.idAnimation = this.animation();
    };

    animation() {
        this.idAnimation = requestAnimationFrame(this.animation.bind(this));

        this.draw();
        this.updata();
    };

    cancelAnimation() {
        cancelAnimationFrame(this.idAnimation);
    }
}