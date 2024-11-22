// src/commands/create.ts
import {Command, Args, Flags} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {execSync} from 'child_process'

export default class Create extends Command {
  static description = 'Create a new Padma Project'

  static examples = [
    `<%= config.bin %> create padma my-project
    // Creates a new project folder named "my-project" and adds a core folder inside it.`,
  ]

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  static flags = {
    force: Flags.boolean({char: 'f', description: 'Force creation even if the folder exists', default: false}),
    theme: Flags.string({char: 't', description: 'Specify a theme to install'}),
  }

  detectPackageManager(): string {
    try {
      execSync('yarn --version', {stdio: 'ignore'})
      return 'yarn'
    } catch {
      try {
        execSync('pnpm --version', {stdio: 'ignore'})
        return 'pnpm'
      } catch {
        return 'npm'
      }
    }
  }

  async run() {
    const {args, flags} = await this.parse(Create)
    const projectName = args.projectName
    const force = flags.force

    const projectPath = path.resolve(process.cwd(), projectName)
    const corePath = path.join(projectPath, 'core') // The core folder inside the user project
    this.log(`Project path: ${projectPath}`)
    this.log(`Core path: ${corePath}`)

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    // Paths to template folders
    const templateProjectFolder = path.resolve(__dirname, '../../templates/project')
    const templateCoreFolder = path.resolve(__dirname, '../../templates/core')

    this.log(`Template project path: ${templateProjectFolder}`)
    this.log(`Template core path: ${templateCoreFolder}`)

    const projectFolderExists = await fs.pathExists(projectPath)

    if (projectFolderExists && !force) {
      this.log(`Error: The folder ${projectName} already exists. Use --force to overwrite.`)
      return
    }

    const packageManager = this.detectPackageManager()
    this.log(`Detected package manager: ${packageManager}`)

    try {
      // Create the project folder
      await fs.ensureDir(projectPath)
      this.log('Project folder created successfully.')

      // Copy the project template files
      if (await fs.pathExists(templateProjectFolder)) {
        fs.copySync(templateProjectFolder, projectPath)
        this.log('Successfully copied project template files.')
      } else {
        this.log('Error: The project template folder does not exist.')
        return
      }

      // Copy the core folder to the new project's `core` folder
      if (await fs.pathExists(templateCoreFolder)) {
        await fs.ensureDir(corePath)
        fs.copySync(templateCoreFolder, corePath)
        this.log('Successfully copied core template files to the project/core folder.')
      } else {
        this.log('Error: The core template folder does not exist.')
        return
      }

      // Modify package.json to set the name field
      const packageJsonPath = path.join(projectPath, 'package.json')
      if (await fs.pathExists(packageJsonPath)) {
        const packageJson = await fs.readJson(packageJsonPath)
        packageJson.name = projectName
        await fs.writeJson(packageJsonPath, packageJson, {spaces: 2})
        this.log('Updated package.json with the project name.')
      }

      // Install dependencies with the detected package manager
      this.log('Installing dependencies...')

      if (packageManager === 'yarn') {
        execSync('yarn install', {cwd: projectPath, stdio: 'inherit'})
      } else if (packageManager === 'pnpm') {
        execSync('pnpm install', {cwd: projectPath, stdio: 'inherit'})
      } else {
        execSync('npm install', {cwd: projectPath, stdio: 'inherit'})
      }

      this.log('Dependencies installed successfully.')

      // Run the development server
      this.log('Starting the development server...')
      if (packageManager === 'yarn') {
        execSync('yarn dev', {cwd: projectPath, stdio: 'inherit'})
      } else if (packageManager === 'pnpm') {
        execSync('pnpm dev', {cwd: projectPath, stdio: 'inherit'})
      } else {
        execSync('npm run dev', {cwd: projectPath, stdio: 'inherit'})
      }
    } catch (error) {
      this.log('Error setting up the project. Please check the template folder or the permissions.')
      this.log(String(error))
    }
  }
}
