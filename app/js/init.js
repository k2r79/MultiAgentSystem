function init() {
    var canvasElement = document.querySelector("#canvas");

    var stage = new PIXI.Stage(0xcccccc);
    var renderer = new PIXI.autoDetectRenderer(800, 600, canvasElement);

    var world = new World();

    // Create the bots
    for (var botIndex = 0; botIndex < 400; botIndex++) {
        var bot = new Bot();
        world.add(bot);
        world.setRandomPosition(bot);
    }

    // Create the resources
    var resource = new Resource();
    world.add(resource);
    world.setRandomPosition(resource);

    stage.addChild(world.sprite);

    var prevTimestamp = 0;

    function animate(timestamp) {

        var deltaTime = timestamp - prevTimestamp;
        prevTimestamp += deltaTime;

        world.render(deltaTime);
        renderer.render(stage);

        requestAnimFrame(animate);
    }

    requestAnimFrame(animate);
}
