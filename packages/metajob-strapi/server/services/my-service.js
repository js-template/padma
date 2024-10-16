"use strict";

module.exports = ({ strapi }) => ({
  async getWelcomeMessage() {
    const entry = await strapi.db.query("api::job.job").count();
    //console.log("ENtry", entry);

    return {
      totalJobs: entry,
    };
  },
});
