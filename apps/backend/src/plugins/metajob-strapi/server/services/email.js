// plugins/my-plugin/services/email.js
const fs = require("fs");
const path = require("path");

const loadTemplate = async (templateName) => {
  const filePath = path.join(
    __dirname,
    "../../../email-templates",
    templateName,
  );
  return fs.promises.readFile(filePath, "utf8");
};

module.exports = {
  loadTemplate,
};
