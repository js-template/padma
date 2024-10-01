module.exports = async (policyContext, config, { strapi }) => {
  // *** get PolicyError from the strapi utils
  const { PolicyError } = require("@strapi/utils").errors;
  // Assuming the user is authenticated and their membership information is available in the context
  const userId = policyContext.state.user.id;

  if (userId) {
    // *** Retrieve user's membership information from an API endpoint
    const userInfo = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      userId,
      {
        populate: ["membership", "membership.create_ads_limit"],
      }
    );

    // *** get user membership feature
    const userCreateAdsLimit = userInfo.membership.create_ads_limit;

    // *** Retrieve the user's ads from the database
    const entry = await strapi.entityService.findMany(
      "api::manage-ad.manage-ad",
      {
        filters: {
          seller: userId,
        },
        populate: {
          likes: { count: true },
        },
      }
    );

    // *** check if user has reached the limit
    if (entry.length < userCreateAdsLimit) {
      console.log("user can create ad");
      return true;
    } else {
      console.log("user can not create ad");
      throw new PolicyError("You are not allowed to create more ads");
    }
  }

  // *** For other routes or methods, allow access
  throw new PolicyError("You are not allowed to create more ads");
};
