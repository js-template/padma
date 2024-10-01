'use strict';

/**
 * contact-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-list.contact-list');
