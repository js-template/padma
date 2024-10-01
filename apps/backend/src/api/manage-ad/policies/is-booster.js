module.exports = async (policyContext, config, { strapi }) => {
  // *** get PolicyError from the strapi utils
  const { PolicyError } = require("@strapi/utils").errors;
  // Assuming the user is authenticated and their membership information is available in the context
  const userId = policyContext.state.user.id;

  // *** get adBoost from the request body
  const adBoost = policyContext.request.body.data.adBoost;

  if (adBoost && adBoost === true && userId) {
    // *** Retrieve user's membership information from an API endpoint
    const userInfo = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      userId,
      {
        populate: ["membership", "membership.ads_boost_limit"],
      }
    );

    // *** get user membership feature
    const userAdsBoostLimit = userInfo.membership.ads_boost_limit;

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

    // *** get all adBoost true for the entry data
    const adBoost = entry.filter((ad) => ad.adBoost === true);

    // *** check if user has reached the limit
    if (adBoost.length < userAdsBoostLimit) {
      console.log("user can boost ad");
      return true;
    } else {
      console.log("user can not boost ad");
      throw new PolicyError("You are not allowed to boost this ad");
    }
  }

  // For other routes or methods, allow access
  return true;
};
