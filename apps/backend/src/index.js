"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    // Registering lifecycle for job model
    const jobLifecycle = require("./plugins/metajob-strapi/server/content-types/job/lifecycles");

    strapi.db.lifecycles.subscribe({
      models: ["plugin::metajob-strapi.job"], // or use api::job.job for normal models
      ...jobLifecycle,
    });
  },
};
