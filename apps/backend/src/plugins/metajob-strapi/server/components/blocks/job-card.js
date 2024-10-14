// src/plugins/your-plugin-name/components/blocks/job-card.js
const jobCardComponent = {
  collectionName: "components_block_job_cards",
  info: {
    displayName: "JobCard",
    description: "",
  },
  category: "blocks",
  componentLink: "block.job-card",
  uid: "block.job-card",
  options: {},
  attributes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    button: {
      type: "component",
      repeatable: false,
      component: "component.link",
    },
    jobs: {
      type: "relation",
      relation: "oneToMany",
      target: "plugin::metajob-strapi.job", // Ensure this points to the correct job model
    },
  },
};

module.exports = jobCardComponent;
