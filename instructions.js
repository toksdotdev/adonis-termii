"use strict";

const { join } = require("path");

module.exports = async cli => {
  await cli.makeConfig("termii.js", join(__dirname, "./config/termii.js"));
  cli.command.completed("create", "config/termii.js");
};
