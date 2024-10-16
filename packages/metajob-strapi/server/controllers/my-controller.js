"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      // Await the promise to get the resolved value
      const welcomeMessage = await strapi
        .plugin("metajob-strapi")
        .service("myService")
        .getWelcomeMessage();

      // Send the resolved value as the response body
      ctx.body = welcomeMessage;
    } catch (error) {
      // Handle any errors that occur during the execution
      ctx.throw(500, `An error occurred: ${error.message}`);
    }
  },
});
