
# Padma Backend

**Padma Backend** is a headless CMS solution built with Strapi.

## Getting Started

To integrate Padma’s custom Strapi plugin, follow these steps:

1. **Install the Plugin**  
   If you already have Strapi installed, add the Padma plugin by running the following command:

   ```bash
   npm install @padmadev/padma-backend
   ```

   ```bash
   yarn add @padmadev/padma-backend
   ```

2. **Configure the Plugin**  
   In your `config/plugins.ts` file, add the following configuration to enable the plugin:

   ```typescript
   // config/plugins.ts
   module.exports = {
     'padma-backend': {
       enabled: true,
     },
   };
   ```

3. **Run the Strapi Application**  
   Start your Strapi application to activate the plugin:

   ```bash
   npm run develop
   ```

---

## Quick Links

- **API Documentation**: [Padma API Docs](https://api-padma.readme.io/reference/get_api-padma-backend-public-pages)
- **Full Documentation**: [Padma Documentation](https://docs.padma.dev)
<!-- - **Live Demo**: [Padma Demo]() -->

---
