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
    //Registering lifecycle for resume model
    const resumeLifecycle = require("./plugins/metajob-strapi/server/content-types/resume/lifecycles");
    //Registering lifecycle for company model
    const companyLifecycle = require("./plugins/metajob-strapi/server/content-types/company/lifecycles");
    //Registering lifecycle for applied-job model
    const appliedJobLifecycle = require("./plugins/metajob-strapi/server/content-types/applied-job/lifecycles");

    strapi.db.lifecycles.subscribe({
      models: ["plugin::metajob-strapi.job"], // or use api::job.job for normal models
      ...jobLifecycle,
    });

    // Subscribing to resume model lifecycle events
    strapi.db.lifecycles.subscribe({
      models: ["plugin::metajob-strapi.resume"],
      ...resumeLifecycle,
    });

    // Subscribing to company model lifecycle events
    strapi.db.lifecycles.subscribe({
      models: ["plugin::metajob-strapi.company"],
      ...companyLifecycle,
    });
    // Subscribing to applied-job model lifecycle events
    strapi.db.lifecycles.subscribe({
      models: ["plugin::metajob-strapi.applied-job"],
      ...appliedJobLifecycle,
    });
  },
};
