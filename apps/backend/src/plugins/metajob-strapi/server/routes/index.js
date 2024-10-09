"use strict";

const { message } = require("../content-types");

module.exports = {
  job: require("./job"),
  bookmark: require("./bookmark"),
  chat: require("./chat"),
  message: require("./message"),
  company: require("./company"),
};
