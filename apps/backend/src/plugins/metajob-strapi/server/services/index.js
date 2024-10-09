"use strict";

const jobService = require("./job");
const bookmarkService = require("./bookmark");
const chatService = require("./chat");
const messageService = require("./message");
const companyService = require("./company");
const jobDetailsService = require("./job-detail");

module.exports = {
  job: jobService,
  bookmark: bookmarkService,
  chat: chatService,
  message: messageService,
  company: companyService,
  "job-detail": jobDetailsService,
};
