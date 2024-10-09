"use strict";

const jobSchema = require("./job/schema.json");

const bookmakrksSchema = require("./bookmark/schema.json");
const chatSchema = require("./chat/schema.json");
const messageSchema = require("./message/schema.json");

const companySchema = require("./company/schema.json");
const jobDetailsSchema = require("./job-detail/schema.json");

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
};
