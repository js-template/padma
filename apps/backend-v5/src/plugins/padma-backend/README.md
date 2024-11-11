# Strapi v5 plugin boilerplate

This is a `strapi` plugin with the `collection` and `component` content types. It also has a `service` that can be used to fetch data from the `collection` content type. to use this plugin, you need to add to your strapi project and configure it.

## Installation

Add this plugin to your strapi project following the steps below:

1. Create a `plugins` directory in the `src` directory of your strapi project if it does not exist.
2. Copy the `test-plugin` directory to the `plugins` directory.
3. To enable the plugin, add the following to the `./config/plugins.js` file:

```javascript
module.exports = ({ env }) => ({
  // ...
  'plugin-setup': {
    enabled: true,
    resolve: './src/plugins/plugin-setup',
  },
  // ...
});
```

Then, you'll need to build your admin panel:

```bash
# Using Yarn
yarn build

# Or using NPM
npm run build
```

## Development mode

To run the plugin in development mode, you can use the following command:

```bash
# Using Yarn
yarn build
--------------
yarn watch

# Or using NPM
npm run build
--------------
npm run watch
```
