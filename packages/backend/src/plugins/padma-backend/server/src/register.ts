import type { Core } from '@strapi/strapi';
import { registerComponents } from './utils/registerComponents';

const register = async ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  try {
    await registerComponents({ strapi });

    strapi.log.info('Components registered successfully');
  } catch (error) {
    strapi.log.error('Error registering components:', error);
    throw error;
  }
};

export default register;
