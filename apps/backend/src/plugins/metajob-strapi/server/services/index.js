"use strict";

const jobService = require("./job");
const bookmarkService = require("./bookmark");
const chatService = require("./chat");
const messageService = require("./message");
const companyService = require("./company");
module.exports = {
  job: jobService,
  bookmark: bookmarkService,
  chat: chatService,
  message: messageService,
  company: companyService,
};
