"use strict";

const jobSchema = require("./job/schema.json");

const bookmakrksSchema = require("./bookmark/schema.json");

module.exports = {
  job: {
    schema: jobSchema,
  },
  bookmark: {
    schema: bookmakrksSchema,
  },
};
