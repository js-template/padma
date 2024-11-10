## Getting Started with Padma

### 1. Create a New Padma Project

Enter the following command in your terminal to create a new Padma project:

```bash
npx padma create my-project
```

### 2. Select a Starter Theme

If it's your first time using Padma, we recommend that you select `@padma/river-theme` to start with.

```
? Pick a starter theme to clone: @padma/river-theme (recommended)
```

A directory with the same name as the project you used will be created. It will have a structure similar to this:

```
my-project/
|__ node_modules/
|__ src/app   
|__ package.json
|__ padma.settings.js
|__ favicon.ico
|__ packages/
    |__blank-theme
```

### 3. Run the Project Locally

Execute this command from the terminal to run the project locally:

```bash
cd my-project && npx padma dev
```

A development server will be started. This server will be listening on [http://localhost:3000](http://localhost:3000) and will watch for any changes inside the packages directory.

### 4. Make Changes to Your Site

Now you're ready to make changes to your site:

Open the project directory in your preferred code editor/IDE and try editing some of the files under `packages/river-theme`. Each time you save a change, the browser will automatically reload and display the new version, as these changes are detected by the development server.

## Set Your Own `Strapi` Installation

A good next step is to set your own Strapi installation as the data source.

You can connect your own Strapi site to your Padma project by updating `config/theme.settings.ts`:

```bash
// Example connection setup
```

Your site at [http://localhost:3000](http://localhost:3000) won't auto-update with this change, as auto-updates only occur with changes to files in the packages directory. So, you will need to manually refresh the page in your browser.

You should now see your own posts in the Padma project displayed in the browser.

## What's Next?

### Follow the Step-by-Step Tutorial

Padma's primary learning resource is the Step-by-Step Tutorial. This is the perfect place to start if you're new to Padma or even if you've previously used Padma but feel that your knowledge is incomplete or fragmented.

### Check Padma's Guides

There are several Guides that will help you understand working with Padma and assist you in solving some of the common challenges that come up when working with Dynamic SSR (Server-Side Rendering) in React apps connected to Strapi.

### Check the API Reference

The main reference resource is the API Reference. This is where you'll find detailed information about the Padma CLI, packages, plugins, and themes. Once you've mastered the basics of working with Padma, this is where you're likely to spend most of your time when working on projects.

### Deploy Your Site

When you're done developing and are ready to launch your new site, follow the instructions in the Deployment section to learn how to deploy your finished Padma site. We recommend that you start by deploying your site to Vercel.
