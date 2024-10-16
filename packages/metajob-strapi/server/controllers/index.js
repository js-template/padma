"use strict";

// Import the job controller
const jobController = require("./job");
const bookmarkController = require("./bookmark");
const chatController = require("./chat");
const messageController = require("./message");
const companyController = require("./company");
const jobDetails = require("./job-detail");

const appliedJob = require("./applied-job");
const resumeController = require("./resume");

const skillController = require("./skill");
const jobCategory = require("./job-category");
const emailHistory = require("./email-history");

module.exports = {
  job: jobController,
  bookmark: bookmarkController,
  chat: chatController,
  message: messageController,
  company: companyController,
  "job-detail": jobDetails,
  "applied-job": appliedJob,
  resume: resumeController,
  skill: skillController,
  "job-category": jobCategory,
  "email-history": emailHistory,
};
