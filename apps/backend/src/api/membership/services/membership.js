'use strict';

/**
 * membership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::membership.membership');
