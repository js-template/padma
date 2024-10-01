'use strict';

/**
 * sidebar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sidebar.sidebar');
