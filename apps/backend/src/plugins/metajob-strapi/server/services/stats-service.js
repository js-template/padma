module.exports = ({ strapi }) => ({
  async getStatsByRole(role, userId) {
    console.log("UserID from service", userId, "Role", role);
    if (role === "employer") {
      const totalJobs = await strapi.db
        .query("api::job.job")
        .count({ where: { employer: userId } });
      const openJobs = await strapi.db
        .query("api::job.job")
        .count({ where: { employer: userId, status: "open" } });

      //get total jobs
      const closedJobs = await strapi.db
        .query("api::job.job")
        .count({ where: { employer: userId, status: "closed" } });

      return {
        data: [
          {
            title: "Total Jobs",
            subTitle: "Subtitle",
            count: totalJobs,
          },
          {
            title: "Open Jobs",
            subTitle: "Sub title",
            count: openJobs,
          },
          {
            title: "Closed Jobs",
            subTitle: "Sub title",
            count: closedJobs,
          },
        ],
      };
    } else if (role === "candidate") {
      const appliedJobs = await strapi.db
        .query("api::applied-job.applied-job")
        .count({ where: { resume: userId } });

      // const matchedJobs = await strapi.db
      //   .query("api::job.job")
      //   .count({ where: { matchedCandidates: userId } });

      // const favoriteJobs = await strapi.db
      //   .query("api::favorite-job.favorite-job")
      //   .count({ where: { candidate: userId } });

      return { appliedJobs };
    }

    return {}; // In case of an unrecognized role
  },
});
