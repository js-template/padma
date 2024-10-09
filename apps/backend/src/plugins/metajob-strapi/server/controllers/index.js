"use strict";

// Import the job controller
const jobController = require("./job");
const bookmarkController = require("./bookmark");
const chatController = require("./chat");
const messageController = require("./message");
const companyController = require("./company");

const jobDetails = require("./job-detail");
module.exports = {
  job: jobController,
  bookmark: bookmarkController,
  chat: chatController,
  message: messageController,
  company: companyController,
  "job-detail": jobDetails,
};
