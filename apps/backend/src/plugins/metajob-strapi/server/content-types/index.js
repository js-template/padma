"use strict";

const jobSchema = require("./job/schema.json");

const bookmakrksSchema = require("./bookmark/schema.json");
const chatSchema = require("./chat/schema.json");
const messageSchema = require("./message/schema.json");

const companySchema = require("./company/schema.json");
const jobDetailsSchema = require("./job-detail/schema.json");
const jobAppliedSchema = require("./applied-job/schema.json");

const resumeSchema = require("./resume/schema.json");

const skillSchema = require("./skill/schema.json");
const jobCategorySchema = require("./job-category/schema.json");

const emailHistorySchema = require("./email-history/schema.json");

const jobComponentSchema = require("./../components/blocks/job-card");

module.exports = {
  job: {
    schema: jobSchema,
  },
  bookmark: {
    schema: bookmakrksSchema,
  },
  chat: {
    schema: chatSchema,
  },
  message: {
    schema: messageSchema,
  },
  company: {
    schema: companySchema,
  },
  "job-detail": {
    schema: jobDetailsSchema,
  },
  "applied-job": {
    schema: jobAppliedSchema,
  },
  resume: {
    schema: resumeSchema,
  },
  skill: {
    schema: skillSchema,
  },
  "job-category": {
    schema: jobCategorySchema,
  },
  "email-history": {
    schema: emailHistorySchema,
  },
};
