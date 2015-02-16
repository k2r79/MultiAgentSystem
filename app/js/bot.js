function Bot() {
    var BOT_RADIUS = 2;
    var BOT_COLOR = 0x000000;

    var agent = new Agent("Bot", BOT_RADIUS, BOT_COLOR);
    var timeSinceLastForce = 0;

    function update(timestamp) {
        timeSinceLastForce += timestamp;

        agent.update(timestamp);

        if (timeSinceLastForce > 200 + Math.random() * 2000) {
            Matter.Body.setVelocity(agent.getBody(), { x: -5 + Math.random() * 10, y: -5 + Math.random() * 10});

            timeSinceLastForce = 0;
        }
    }

    return extend(agent, {
        update: update

    });
}
