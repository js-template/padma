import {Command, Args, Flags} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {execSync} from 'child_process'
import inquirer from 'inquirer'
import chalk from 'chalk'

export default class Create extends Command {
  static description = 'Create a new Padma Project'

  static examples = [
    'npx padma create my-project',
    // Creates a new project folder named "my-project" and adds a core folder inside it.,
  ]

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  static flags = {
    force: Flags.boolean({char: 'f', description: 'Force creation even if the folder exists', default: false}),
    theme: Flags.string({char: 't', description: 'Specify a theme to install'}),
  }

  async detectPackageManager(): Promise<string> {
    const availableManagers: string[] = []

    try {
      execSync('yarn --version', {stdio: 'ignore'})
      availableManagers.push('yarn')
    } catch {
      // yarn not available
    }

    try {
      execSync('pnpm --version', {stdio: 'ignore'})
      availableManagers.push('pnpm')
    } catch {
      // pnpm not available
    }

    availableManagers.push('npm') // npm is the fallback

    if (availableManagers.length === 1) {
      return availableManagers[0]
    }

    console.log('Detected package managers:', availableManagers)

    const {selectedManager} = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedManager',
        message: 'Which package manager would you like to use?',
        choices: availableManagers,
      },
    ])

    return selectedManager
  }

  async run() {
    const {args, flags} = await this.parse(Create)
    const projectName = args.projectName
    const force = flags.force

    const projectPath = path.resolve(process.cwd(), projectName)
    const corePath = path.join(projectPath, 'core')

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const templateProjectFolder = path.resolve(__dirname, '../../templates/project')
    const templateCoreFolder = path.resolve(__dirname, '../../templates/core')

    const projectFolderExists = await fs.pathExists(projectPath)

    if (projectFolderExists && !force) {
      this.log(`Error: The folder ${projectName} already exists. Use --force to overwrite.`)
      return
    }

    // Consolidated prompts
    const packageManager = await this.detectPackageManager()
    const {initializeGit} = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'initializeGit',
        message: 'Would you like to initialize a Git repository?',
        default: true,
      },
    ])

    try {
      // Create the project folder
      this.log(chalk.green('Creating project...'))
      await fs.ensureDir(projectPath)
      // this.log('Project folder created successfully.')

      // Copy the project template files
      if (await fs.pathExists(templateProjectFolder)) {
        fs.copySync(templateProjectFolder, projectPath)
        //this.log('Successfully copied project template files.')
      } else {
        this.log('Error: The project template folder does not exist.')
        return
      }

      // Copy the core folder
      if (await fs.pathExists(templateCoreFolder)) {
        await fs.ensureDir(corePath)
        fs.copySync(templateCoreFolder, corePath)
        // this.log('Successfully copied core template files.')
      } else {
        this.log('Error: The core template folder does not exist.')
        return
      }

      // Path to the .env.example file in the project template
      const envExamplePath = path.join(projectPath, 'env.example')
      // Path to the .env file in the project
      const envFilePath = path.join(projectPath, '.env')

      if (await fs.pathExists(envExamplePath)) {
        // Rename .env.example to .env
        await fs.rename(envExamplePath, envFilePath)
      } else {
        // If env.example doesn't exist, create a default .env file
        const defaultEnvContent = `NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="qKWJzKxvne1W33Ky1jX//bAmPwBHZ74+g2iu4TIqa5Q="
STRAPI_ENDPOINT="https://padma-production.up.railway.app"
STRAPI_AUTH_TOKEN=""
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
`
        await fs.writeFile(envFilePath, defaultEnvContent, 'utf8')
        this.log(chalk.green('Default .env file created.'))
      }

      // Update package.json with project name and package manager-specific settings
      const packageJsonPath = path.join(projectPath, 'package.json')
      if (await fs.pathExists(packageJsonPath)) {
        const packageJson = await fs.readJson(packageJsonPath)

        packageJson.name = projectName

        // Update scripts based on the package manager
        if (packageManager === 'pnpm') {
          packageJson.scripts.dev = 'npx padma dev' // Only change here
          packageJson.scripts.build = 'pnpm --filter @padmadev/core build'
          packageJson.scripts.start = 'pnpm --filter @padmadev/core start'

          // Create a pnpm-workspace.yaml file
          const pnpmWorkspacePath = path.join(projectPath, 'pnpm-workspace.yaml')
          const pnpmWorkspaceContent = `packages:\n  - 'packages/*'\n  - 'core'\n`
          await fs.writeFile(pnpmWorkspacePath, pnpmWorkspaceContent, 'utf8')
          //this.log('Created pnpm-workspace.yaml for pnpm compatibility.')
        } else if (packageManager === 'npm') {
          packageJson.scripts.dev = 'npx padma dev' // Only change here
          packageJson.scripts.build = 'cd core && npm run build'
          packageJson.scripts.start = 'cd core && npm run start'

          // Remove "workspaces" key (optional, depending on npm's workspace support)
          delete packageJson.workspaces
          // this.log('Updated scripts for npm compatibility.')
        } else {
          // For yarn, keep the default scripts
          packageJson.scripts.dev = 'npx padma dev' // Only change here
          //this.log('No changes needed for yarn.')
        }

        await fs.writeJson(packageJsonPath, packageJson, {spaces: 2})
        //this.log('Updated package.json with appropriate scripts and configurations.')
      }

      // Create a blank yarn.lock if yarn is selected
      if (packageManager === 'yarn') {
        const yarnLockPath = path.join(projectPath, 'yarn.lock')
        await fs.ensureFile(yarnLockPath)
        //this.log('Created a blank yarn.lock file.')
      }

      this.log(chalk.green('Project created successfully.'))

      // Install dependencies
      this.log(chalk.green('Installing dependencies...'))
      execSync(`${packageManager} install`, {cwd: projectPath, stdio: 'inherit'})
      this.log(chalk.green('Dependencies installed successfully.'))

      // Initialize Git if selected
      if (initializeGit) {
        this.log('Initializing Git repository...')
        execSync('git init', {cwd: projectPath, stdio: 'inherit'})
        execSync('git add .', {cwd: projectPath, stdio: 'inherit'})
        execSync('git commit -m "Initial commit"', {cwd: projectPath, stdio: 'inherit'})
        this.log('Git repository initialized successfully.')
      }

      // Start development server
      this.log('Starting the development server...')
      const devCommand = packageManager === 'yarn' ? 'yarn dev' : `${packageManager} run dev`
      execSync(devCommand, {cwd: projectPath, stdio: 'inherit'})
    } catch (error) {
      this.log('Error setting up the project. Please check the template folder or permissions.')
      this.log(String(error))
    }
  }
}
