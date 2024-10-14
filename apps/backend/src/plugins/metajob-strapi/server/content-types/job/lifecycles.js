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

    // Load the welcome email template
    const emailTemplate = await loadTemplate("welcome.html");

    // Get the title and current time
    const title = result.title; // Get the title from the created job
    const currentTime = new Date().toISOString(); // Get current time in ISO format
    const subject = `Job Created Successfully: ${title}`;

    // Receiver email from the populated owner
    const populatedOwner = await strapi
      .service("plugin::metajob-strapi.job")
      .findOne(result.id, {
        populate: "*", // Change this to your relation name
      });

    const emailReceiver = populatedOwner.owner.email;

    // Try to send the email and handle success or failure
    try {
      // Send email after job creation
      await strapi.plugins["email"].services.email.send({
        to: emailReceiver, // Receiver's email
        from: process.env.EMAIL_EMAIL,
        subject: title, // Customized subject
        text: `Your job posting "${title}" has been successfully created on ${currentTime}.`,
        html: emailTemplate, // Use the HTML content
      });

      // Insert into email history collection after email is sent successfully
      const emailHistoryEntry = {
        title: subject,
        datetime: currentTime,
        receiver: emailReceiver,
      };

      // Create the email history entry using `entityService.create`
      const entry = await strapi.entityService.create(
        "plugin::metajob-strapi.email-history",
        {
          data: emailHistoryEntry, // Insert the email history data
        },
      );

      console.log("Email sent and email history entry created:", entry);
    } catch (error) {
      console.error(
        "Error sending email or creating email history entry:",
        error,
      );
    }
  },
};
