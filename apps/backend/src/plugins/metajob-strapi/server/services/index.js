"use strict";

const jobService = require("./job");
const bookmarkService = require("./bookmark");
const chatService = require("./chat");
const messageService = require("./message");
const companyService = require("./company");
const jobDetailsService = require("./job-detail");
const appliedJobService = require("./applied-job");

const resumeService = require("./resume");
const skillService = require("./skill");

const jobCategoryService = require("./job-category");
module.exports = {
  job: jobService,
  bookmark: bookmarkService,
  chat: chatService,
  message: messageService,
  company: companyService,
  "job-detail": jobDetailsService,
  "applied-job": appliedJobService,
  resume: resumeService,
  skill: skillService,
  "job-category": jobCategoryService,
};
