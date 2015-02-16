function Bot() {
    var BOT_RADIUS = 2;
    var BOT_COLOR = 0x000000;

    var agent = new Agent("Bot", BOT_RADIUS, BOT_COLOR);

    // Matter.Body.setVelocity(agent.getBody(), { x: 1, y: 0});

    function update(timestamp) {
        agent.update(timestamp);

    }

    return extend(agent, {
        update: update

    });
}
