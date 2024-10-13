"use strict";
const fs = require("fs");
const path = require("path");

// Function to load email template
const loadTemplate = async (templateName) => {
  const filePath = path.join(
    __dirname,
    "../../../email-templates",
    templateName,
  );
  return fs.promises.readFile(filePath, "utf8");
};

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Log job creation
    console.log("Job created:", result);

    // Load the welcome email template
    const emailTemplate = await loadTemplate("welcome.html");

    const populatedOwner = await strapi
      .service("plugin::metajob-strapi.job")
      .findOne(result.id, {
        populate: "*", // Change this to your relation name
      });

    const emailReciver = populatedOwner.owner.email;
    const firstName = populatedOwner.owner.firstName;

    console.log("emailReciver", process.env.EMAIL_EMAIL);
    // // Send email after job creation
    await strapi.plugins["email"].services.email.send({
      to: emailReciver, // Assuming result contains the email of job creator
      from: process.env.EMAIL_EMAIL,
      subject: "Job Created Successfully",
      text: `Your job posting "${result.title}" has been successfully created.`,
      html: emailTemplate, // Use the HTML content
    });
  },
};
