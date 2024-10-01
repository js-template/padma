// src/middlewares/your-custom-middleware.js
"use strict";

module.exports = () => {
  return async (ctx, next) => {
    await next();

    if (
      ctx.request.url === "/api/auth/local/register" &&
      ctx.response.status === 200
    ) {
      // Now we can apply our logic, but we have to retrieve the user

      const userArray = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          filters: { email: ctx.request.body.email },
        },
      );

      if (!userArray || userArray.length === 0) {
        // Handle error, can't find user
      }

      const user = userArray[0];

      const roles = await strapi.entityService.findMany(
        "plugin::users-permissions.role",
        {
          filters: { type: "authenticated" },
        },
      );

      // Check if the role has been found
      if (!roles || roles.length === 0) {
        // Error handling
      }

      const authorRole = roles[0];

      const updatedUser = await strapi.entityService.update(
        "plugin::users-permissions.user",
        user.id,
        {
          data: {
            role: ctx.request.body.role || authorRole.id,
          },
        },
      );
    }
  };
};
