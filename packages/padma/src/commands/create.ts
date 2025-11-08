import {Command, Args, Flags} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {execSync} from 'child_process'
import {select, confirm} from '@inquirer/prompts'
import chalk from 'chalk'

export default class Create extends Command {
  static description = 'Create a new Padma Project'

  static examples = [
    'npx padma create my-project',
    // Creates a new project folder named "my-project" with apps/backend and apps/frontend folders.,
  ]

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  static flags = {
    force: Flags.boolean({char: 'f', description: 'Force creation even if the folder exists', default: false}),
    theme: Flags.string({char: 't', description: 'Specify a theme to install'}),
  }

  private async downloadTemplatesFromGitHub(tempDir: string): Promise<void> {
    this.log(chalk.green('Downloading latest templates from GitHub...'))

    try {
      // Clone the repository to a temporary directory
      execSync(`git clone --depth 1 https://github.com/js-template/padma.git ${tempDir}`, {
        stdio: 'pipe',
      })
      this.log(chalk.green('Templates downloaded successfully.'))
    } catch (error) {
      throw new Error(`Failed to download templates: ${String(error)}`)
    }
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

    const selectedManager = await select({
      message: 'Which package manager would you like to use?',
      choices: availableManagers.map((manager) => ({name: manager, value: manager})),
    })

    return selectedManager
  }

  async run() {
    const {args, flags} = await this.parse(Create)
    const projectName = args.projectName
    const force = flags.force

    const projectPath = path.resolve(process.cwd(), projectName)
    const appsPath = path.join(projectPath, 'apps')
    const backendPath = path.join(appsPath, 'backend')
    const frontendPath = path.join(appsPath, 'frontend')

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const templateProjectFolder = path.resolve(__dirname, '../../templates/project')

    // Create a temporary directory for downloading templates
    const tempDir = path.join(process.cwd(), '.temp-padma-templates')

    const projectFolderExists = await fs.pathExists(projectPath)

    if (projectFolderExists && !force) {
      this.log(`Error: The folder ${projectName} already exists. Use --force to overwrite.`)
      return
    }

    // Consolidated prompts
    const packageManager = await this.detectPackageManager()
    const initializeGit = await confirm({
      message: 'Would you like to initialize a Git repository?',
      default: true,
    })

    try {
      // Create the project folder
      this.log(chalk.green('Creating project...'))
      await fs.ensureDir(projectPath)

      // Copy the project template files
      if (await fs.pathExists(templateProjectFolder)) {
        fs.copySync(templateProjectFolder, projectPath)
      } else {
        this.log('Error: The project template folder does not exist.')
        return
      }

      // Download templates from GitHub
      await this.downloadTemplatesFromGitHub(tempDir)

      // Create apps directory
      await fs.ensureDir(appsPath)

      // Copy backend from downloaded templates
      const downloadedBackendPath = path.join(tempDir, 'apps', 'backend')
      if (await fs.pathExists(downloadedBackendPath)) {
        await fs.ensureDir(backendPath)
        fs.copySync(downloadedBackendPath, backendPath)
        this.log(chalk.green('Backend template copied successfully.'))
      } else {
        this.log('Error: Backend template not found in downloaded repository.')
        return
      }

      // Copy frontend from downloaded templates
      const downloadedFrontendPath = path.join(tempDir, 'apps', 'frontend')
      if (await fs.pathExists(downloadedFrontendPath)) {
        await fs.ensureDir(frontendPath)
        fs.copySync(downloadedFrontendPath, frontendPath)
        this.log(chalk.green('Frontend template copied successfully.'))
      } else {
        this.log('Error: Frontend template not found in downloaded repository.')
        return
      }

      // Clean up temporary directory
      await fs.remove(tempDir)

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
          packageJson.scripts.dev = 'npx padma dev'
          packageJson.scripts.build = 'pnpm --filter "./apps/*" build'
          packageJson.scripts.start = 'pnpm --filter "./apps/frontend" start'
          packageJson.scripts['backend:dev'] = 'pnpm --filter "./apps/backend" develop'
          packageJson.scripts['frontend:dev'] = 'pnpm --filter "./apps/frontend" dev'

          // Create a pnpm-workspace.yaml file
          const pnpmWorkspacePath = path.join(projectPath, 'pnpm-workspace.yaml')
          const pnpmWorkspaceContent = `packages:\n  - 'packages/*'\n  - 'apps/*'\n`
          await fs.writeFile(pnpmWorkspacePath, pnpmWorkspaceContent, 'utf8')
        } else if (packageManager === 'npm') {
          packageJson.scripts.dev = 'npx padma dev'
          packageJson.scripts.build = 'npm run build --workspaces'
          packageJson.scripts.start = 'cd apps/frontend && npm run start'
          packageJson.scripts['backend:dev'] = 'cd apps/backend && npm run develop'
          packageJson.scripts['frontend:dev'] = 'cd apps/frontend && npm run dev'

          // Update workspaces for npm
          packageJson.workspaces = ['packages/*', 'apps/*']
        } else {
          // For yarn
          packageJson.scripts.dev = 'npx padma dev'
          packageJson.scripts.build = 'yarn workspaces run build'
          packageJson.scripts.start = 'yarn workspace frontend start'
          packageJson.scripts['backend:dev'] = 'yarn workspace backend develop'
          packageJson.scripts['frontend:dev'] = 'yarn workspace frontend dev'

          // Update workspaces for yarn
          packageJson.workspaces = ['packages/*', 'apps/*']
        }

        await fs.writeJson(packageJsonPath, packageJson, {spaces: 2})
      }

      // Create a blank yarn.lock if yarn is selected
      if (packageManager === 'yarn') {
        const yarnLockPath = path.join(projectPath, 'yarn.lock')
        await fs.ensureFile(yarnLockPath)
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
      // Clean up temporary directory in case of error
      if (await fs.pathExists(tempDir)) {
        await fs.remove(tempDir)
      }
      this.log('Error setting up the project. Please check the template folder or permissions.')
      this.log(String(error))
    }
  }
}
