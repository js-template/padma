## Getting Started with Padma

### 1. Create a New Padma Project

Run the following command to create a new Padma project:

```bash
npx padma create my-project
```

### 2. Select a Package Manager

During project setup, you'll be prompted to choose your preferred package manager. If you're not sure, you can go with the default one.

```
? Which package manager would you like to use? (npm, yarn, pnpm)
```

### 3. Initialize Git (Optional)

You will also be asked if you want to initialize a Git repository for your project. If you choose yes, it will automatically create a Git repository for you.

```
? Would you like to initialize a Git repository? (y/n)
```

### 4. Project Structure

Once the project is created, the directory will be structured as follows:

Sure! Here's the updated section that includes information on creating a custom theme within the `packages` folder:

---

### Project Structure

Once the project is created, the directory will be structured as follows:

```
my-project/
|__ node_modules/
|__ packages/
|   |__ blank-theme
|__ package.json
|__ padma.settings.ts
|__ favicon.ico
```

The `blank-theme` will be inside the `packages/` folder as the default theme. You can also create your own custom themes within the `packages/` folder, just like the `blank-theme`. To do so, create a new folder under `packages/` and add your theme files. Then, update the `padma.settings.ts` file to point to your custom theme.

For example, you could create a new theme called `custom-theme`:

```
my-project/
|__ packages/
|   |__ blank-theme
|   |__ custom-theme
```

Afterward, update the `padma.settings.ts` to use `custom-theme`:

```ts
// In padma.settings.ts
{
  "activeTheme": "@padmadev/custom-theme'",
}
```

### 5. Run the Project Locally

To run the project locally, use the following command:

```bash
cd my-project && npx padma dev
```

This starts the development server at [http://localhost:3000](http://localhost:3000), and it will automatically reload whenever you make changes in the `packages/` directory.

### 6. Make Changes to Your Site

Now, open the project in your code editor and make edits to the `packages/blank-theme` folder. The browser will auto-refresh to reflect the changes.

## Set Up Your Own Strapi Installation

You can connect your own Strapi instance to Padma by editing the `config/theme.settings.ts` file.

```bash
// Example connection setup for Strapi
```

Note: Changes to Strapi data won't automatically update on the site unless they are made within the `packages/` directory. You’ll need to manually refresh the browser to see new data.

## What's Next?

### Follow the Step-by-Step Tutorial

Start with Padma's Step-by-Step Tutorial to learn how to use Padma effectively.

### Check Padma's Guides

Explore various guides to help you work with Padma, including troubleshooting and common challenges.

### Check the API Reference

Once you're comfortable with the basics, refer to the API Reference for detailed information about Padma CLI, packages, plugins, and themes.

### Deploy Your Site

When you're ready to deploy your site, follow the instructions in the Deployment section. We recommend using Vercel for an easy deployment process.
