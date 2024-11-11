import type { Core, Schema } from '@strapi/strapi';
import Components from './components';

const register = async ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase

  const data: Schema.Component = {
    collectionName: 'components_test_bars',
    category: 'test',
    modelName: 'bar',
    globalId: 'ComponentTestBar',
    uid: 'test.bar',
    modelType: 'component',
    info: {
      displayName: 'Bar',
      description: 'A test bar component',
    },
    attributes: {
      foo: {
        type: 'string',
      },
    },
    options: {},
    pluginOptions: {},
  };

  // *** get the plugin all components and add the new component

  Object.values(Components).forEach((data) => {
    strapi.components[data.uid] = data;
  });
};

export default register;
