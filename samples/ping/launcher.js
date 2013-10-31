/**
 * @module ping sample
 */

var hubiquitus = require(__dirname + "/../../lib/hubiquitus");
var logger = require(__dirname + "/../../lib/logger");

logger.level = "trace";

hubiquitus.start({stats: 'on'})
  .addActor("ping", require("./player")())
  .addActor("pong", require("./player")())
  .send("ping", "pong", "ping");
