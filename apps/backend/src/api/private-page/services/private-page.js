'use strict';

/**
 * private-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-page.private-page');
