"use strict";
const { createCoreService } = require("@strapi/strapi").factories;

/**
 * bookmark service
 */

module.exports = createCoreService("plugin::metajob-strapi.bookmark");
