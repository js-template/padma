import { Core } from '@strapi/strapi';
import path from 'path';
import fs from 'fs/promises';

export const registerComponents = async ({ strapi }: { strapi: Core.Strapi }) => {
  // Get existing components from Strapi
  const existingComponents = strapi.components;

  // Construct the path to the `components` directory
  const componentsDir = path.join(__dirname, '../../server/src/components');

  // Read all entries (files and directories) in the components directory
  const entries = await fs.readdir(componentsDir, { withFileTypes: true });

  // Filter out hidden files like `.DS_Store` and only process JSON files and directories
  const jsonFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.json'));
  const directories = entries.filter((entry) => entry.isDirectory());

  // short by 'config, shared, widget, component, single-type, block' folder
  const sortedDirectories = await directories.sort((a, b) => {
    const aOrder = [
      'config',
      'shared',
      'widget',
      'header',
      'component',
      'single-type',
      'block',
    ].indexOf(a.name);
    const bOrder = [
      'config',
      'shared',
      'widget',
      'header',
      'component',
      'single-type',
      'block',
    ].indexOf(b.name);
    return aOrder - bOrder;
  });

  // Create an object to store the new components
  let newComponents: Record<string, any> = {};

  // Process JSON files inside sortedDirectories
  for (const dir of sortedDirectories) {
    const dirPath = path.join(componentsDir, dir.name);
    const dirFiles = await fs.readdir(dirPath);

    for (const file of dirFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(dirPath, file);
        const component = await parseAndValidateComponent(filePath, strapi);
        if (component) {
          newComponents[component.uid] = component;
        }
      }
    }
  }

  // Process JSON files in the root of `componentsDir`
  for (const file of jsonFiles) {
    const filePath = path.join(componentsDir, file.name);
    const component = await parseAndValidateComponent(filePath, strapi);
    if (component) {
      newComponents[component.uid] = component;
    }
  }

  // Find the difference between the new components and the existing components
  const newComponentsKeys = Object.keys(newComponents);
  const existingComponentsKeys = Object.keys(existingComponents);
  let newComponentsDiff = newComponentsKeys.filter((key) => !existingComponentsKeys.includes(key));

  // error comparisons stored
  let errorComparisons = [];

  // Register new components
  if (newComponentsDiff.length > 0) {
    while (newComponentsDiff.length > 0) {
      const key = newComponentsDiff[0];
      try {
        // await preRegisterDummyComponents(strapi, newComponents[key]);
        await strapi.plugin('content-type-builder').services.components.createComponent({
          component: {
            category: newComponents[key].category,
            uid: newComponents[key].uid,
            modelName: newComponents[key].modelName,
            displayName: newComponents[key].info.displayName,
            icon: newComponents[key].info.icon,
            attributes: newComponents[key].attributes,
          },
        });
        strapi.log.info(`Component ${key} registered successfully`);
        // remove the key from newComponentsDiff
        newComponentsDiff = await newComponentsDiff.filter((item) => item !== key);
      } catch (error) {
        strapi.log.error(`Error registering component ${key}: ${error.message}`);
        // // remove the key from newComponentsDiff
        newComponentsDiff = await newComponentsDiff.filter((item) => item !== key);

        // if the error.message === component.alreadyExists then don't add this component to errorComparisons
        if (error.message !== 'component.alreadyExists') {
          // add the key to errorComparisons
          errorComparisons = await [...errorComparisons, key];
          // remove duplicate errorComparisons
          errorComparisons = [...new Set(errorComparisons)];
        }

        // // get the existing component in the newComponentsDiff attributes and register it
        // const existingComponent = newComponents[key].attributes;

        // // collect the attributes type === component to component

        // // get the attributes type === component to component
        // const existingComponentAttributes = Object.keys(existingComponent)
        //   .filter((key) => existingComponent[key].type === 'component') // Filter by type 'component'
        //   .map((key) => existingComponent[key].component);

        // for (const attr of existingComponentAttributes) {
        //   try {
        //     await strapi.plugin('content-type-builder').services.components.createComponent({
        //       component: {
        //         category: newComponents[attr].category,
        //         uid: newComponents[attr].uid,
        //         modelName: newComponents[attr].modelName,
        //         displayName: newComponents[attr].info.displayName,
        //         icon: newComponents[attr].info.icon,
        //         attributes: newComponents[attr].attributes,
        //       },
        //     });

        //     // remove the key from newComponentsDiff
        //     newComponentsDiff = await newComponentsDiff.filter((item) => item !== attr);
        //     strapi.log.info(`Component ${attr} registered successfully`);
        //   } catch (error) {
        //     strapi.log.error(`Error registering component ${attr}: ${error}`);
        //     // remove the key from newComponentsDiff
        //     newComponentsDiff = await newComponentsDiff.filter((item) => item !== attr);
        //     // add the key to errorComparisons
        //     errorComparisons = await [...errorComparisons, attr];
        //     // remove duplicate errorComparisons
        //     errorComparisons = [...new Set(errorComparisons)];
        //   }
        // }
      }

      // hold for 5 second
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (errorComparisons.length > 0) {
      // stop the process and restart it again
      strapi.stopWithError(
        {
          message: `Run again to complete the ${errorComparisons.length} components registration process.`, // This is the primary error message.
        },
        'Components registration was interrupted due to missing attributes component or errors. Please retry.'
      );
    }

    // Reload Strapi
    strapi.log.info('Strapi reloading, New components added');
    await strapi.reload();
  } else {
    strapi.log.info('All components are already registered');
  }
};

// Helper function to parse and validate a component
const parseAndValidateComponent = async (filePath: string, strapi: Core.Strapi) => {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const component = JSON.parse(content);

    // Validate the component structure
    if (
      !component.uid ||
      !component.category ||
      !component.modelName ||
      !component.info?.displayName ||
      !component.info?.icon ||
      !component.attributes
    ) {
      strapi.stopWithError({ message: `Invalid component structure in file: ${filePath}` });
      return null;
    }

    return component;
  } catch (error) {
    strapi.stopWithError({ message: `Error parsing file: ${filePath}: ${error.message}` });
    return null;
  }
};
