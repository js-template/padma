'use strict';

/**
 * dashboard-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dashboard-home.dashboard-home');
