"use strict";

const {
  createAppliedJobTemplate,
} = require("../../../email-templates/appliedJob");

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Receiver email from the populated owner
    const populatedOwner = await strapi
      .service("plugin::metajob-strapi.applied-job")
      .findOne(result?.id, {
        populate: "*", // Change this to your relation name
      });

    // Get the title and current time
    const title = populatedOwner?.list?.title || "Applied Job Demo"; // Get the title from the created applied-job
    const currentTime = new Date().toISOString(); // Get current time in ISO format
    const subject = `Applied Job Successfully: ${title}`;

    const emailReceiver = populatedOwner?.owner?.email;
    const ownerId = populatedOwner?.owner?.id;

    // Try to send the email and handle success or failure
    try {
      // Load the email template
      const jobEmailTemplate = createAppliedJobTemplate(title);

      // Send email after job creation
      await strapi.plugins["email"].services.email.send({
        to: emailReceiver, // Receiver's email
        from: process.env.EMAIL_EMAIL,
        subject: "Job Applied", // Customized subject
        text: `Your job apply for "${title}" has been successfully created on ${currentTime}.`,
        html: jobEmailTemplate, // Use the HTML content
      });

      // Insert into email history collection after email is sent successfully
      const emailHistoryEntry = {
        title: subject,
        datetime: currentTime,
        receiver: emailReceiver,
        owner: {
          id: ownerId,
        },
      };

      // Create the email history entry using `entityService.create`
      const entry = await strapi.entityService.create(
        "plugin::metajob-strapi.email-history",
        {
          data: emailHistoryEntry, // Insert the email history data
        },
      );
    } catch (error) {
      console.error(
        "Error sending email or creating email history entry:",
        error,
      );
    }
  },
};
