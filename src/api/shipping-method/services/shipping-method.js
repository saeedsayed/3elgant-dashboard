'use strict';

/**
 * shipping-method service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shipping-method.shipping-method');
