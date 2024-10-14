// src/plugins/metajob-strapi/server/register.js
"use strict";
const jobCardComponent = require("./components/blocks/job-card");

module.exports = ({ strapi }) => {
  console.log("jobCardComponent", jobCardComponent);
  // Add the components to the Page collection's dynamic zone
  const pageSchema = strapi.contentTypes["api::page.page"];

  strapi.components[jobCardComponent.uid] = jobCardComponent;
  // Ensure the updated schema is recognize
  strapi.contentTypes["api::page.page"] = pageSchema;
};
