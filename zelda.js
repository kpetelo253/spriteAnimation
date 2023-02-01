class Zelda {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Zelda.png"), 0, 0, 90, 102, 10, 0.2); // next time. crop height with extra space.

        this.x = 0;
        this.y = 0;
        this.speed = 300;
    };

    update() {
        this.y += this.speed * this.game.clockTick;
        if (this.y > 768) this.y = 0;
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./Zoro.png"), 0, 0); // draws entire frame
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y); // animates entire frame
    };

}