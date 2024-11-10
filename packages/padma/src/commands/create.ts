// src/commands/create.ts
import {Command, Args, Flags} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'
import {execSync} from 'child_process'
import inquirer from 'inquirer'

export default class Create extends Command {
  static description = 'Create a new Padma Project'

  static examples = [
    `<%= config.bin %> create padma my-project
    // Creates a new project folder named "my-project" with the selected theme and package manager options.`,
  ]

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  static flags = {
    force: Flags.boolean({char: 'f', description: 'Force creation even if the folder exists', default: false}),
    theme: Flags.string({char: 't', description: 'Specify a theme to install'}),
  }

  async run() {
    const {args, flags} = await this.parse(Create)
    const projectName = args.projectName
    const force = flags.force
    const selectedTheme = flags.theme

    const projectPath = path.resolve(process.cwd(), projectName)
    this.log(`Project path: ${projectPath}`)

    // Get the current file name and directory
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    // Resolve the path to the templates directory
    const templateFolder = path.resolve(__dirname, '../../templates/site')

    this.log(`Template path: ${templateFolder}`)
    this.log(`Checking if the folder ${projectName} exists...`)

    // Check if the project folder already exists
    const projectFolderExists = await fs.pathExists(projectPath)

    if (projectFolderExists && !force) {
      this.log(`Error: The folder ${projectName} already exists. Use --force to overwrite.`)
      return
    }

    // Prompt for package manager and theme if not provided in flags
    const {packageManager, themePackage} = await inquirer.prompt([
      {
        type: 'list',
        name: 'packageManager',
        message: 'Choose a package manager:',
        choices: ['npm', 'yarn', 'pnpm'],
        default: 'pnpm',
      },
      {
        type: 'list',
        name: 'themePackage',
        message: 'Choose a theme to install:',
        choices: [
          'blank-theme',
          'river-theme',
          'metablog-theme',
          // Add more theme options here
        ],
        default: selectedTheme || 'blank-theme', // Use flag theme if provided
      },
    ])

    try {
      // Create the folder if it does not exist
      await fs.ensureDir(projectPath)
      this.log('Folder created successfully.')

      if (!fs.existsSync(templateFolder)) {
        this.log('Error: The template folder does not exist.')
        return
      }

      this.log(`Using template from: ${templateFolder}`)

      // Copy the template files to the new project folder
      fs.copySync(templateFolder, projectPath)
      this.log(`Successfully copied template files to ${projectName}`)

      // Install dependencies with the chosen package manager
      this.log('Installing dependencies...')
      execSync(`${packageManager} install`, {cwd: projectPath, stdio: 'inherit'})

      this.log('Dependencies installed successfully.')
      this.log('Project setup completed successfully.')
    } catch (error) {
      this.log('Error setting up the project. Please check the template folder or the permissions.')
      this.log(String(error))
    }
  }
}
