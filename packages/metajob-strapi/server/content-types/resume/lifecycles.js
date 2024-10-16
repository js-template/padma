"use strict";

const { createResumeTemplate } = require("../../../email-templates/resume");

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Get the title and current time
    const title = result?.name; // Get the title from the created resume
    const currentTime = new Date().toISOString(); // Get current time in ISO format
    const subject = `Resume Created Successfully: ${title}`;

    // Receiver email from the populated owner
    const populatedOwner = await strapi
      .service("plugin::metajob-strapi.resume")
      .findOne(result?.id, {
        populate: "*", // Change this to your relation name
      });

    const emailReceiver = populatedOwner?.user?.email;
    const ownerId = populatedOwner?.user?.id;

    // Try to send the email and handle success or failure
    try {
      // Load the email template
      const resumeEmailTemplate = createResumeTemplate(title);

      // Send email after resume creation
      await strapi.plugins["email"].services.email.send({
        to: emailReceiver, // Receiver's email
        from: process.env.EMAIL_EMAIL,
        subject: "Resume Created", // Customized subject
        text: `Your resume posting "${title}" has been successfully created on ${currentTime}.`,
        // html: emailTemplate, // Use the HTML content
        html: resumeEmailTemplate, // Use the HTML content
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
