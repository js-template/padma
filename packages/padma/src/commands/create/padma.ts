// src/commands/create.ts
import {Command, Args} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'
import {execSync} from 'child_process'
import inquirer from 'inquirer'
export default class Create extends Command {
  static description = 'Create a new Padma demo project'

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  async run() {
    const {args} = await this.parse(Create)
    const projectName = args.projectName
    //console.log('projectName', projectName)

    const projectPath = path.resolve(process.cwd(), projectName)
    console.log('projectPath', projectPath)

    // Get the current file name and directory
    //@ts-ignore
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    // Resolve the path to the templates directory
    const templateFolder = path.resolve(__dirname, '../../../templates/site')
    console.log('templateFolder', templateFolder)

    this.log(`Checking if the folder ${projectName} exists...`)

    // Check if the demo folder already exists
    const demoFolderExists = await fs.pathExists(projectPath)

    if (demoFolderExists) {
      this.log(`Error: The folder ${projectName} already exists.`)
      return
    }

    // Prompt for package manager and theme selection
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
        default: 'blank-theme', // Default to 'default-theme-package'
      },
    ])

    // Create the folder if it does not exist
    try {
      await fs.ensureDir(projectPath, (err) => {
        console.log('error on creating folder', err) // => null
        console.log('success!')
      })
      // Creates the directory if it doesn't exist

      this.log('Folder created successfully.')

      // Check if the template folder exists
      if (fs.existsSync(templateFolder)) {
        this.log('Template folder exists.')
      } else {
        this.log('Error: The template folder does not exist.')
        return
      }

      this.log(`Using template from: ${templateFolder}`)

      // Copy the template files to the new demo folder
      fs.copySync(templateFolder, projectPath)

      this.log(`Successfully copied template files to ${projectName}`)

      // Optionally: Install dependencies or run setup scripts
      // Install dependencies with the chosen package manager
      // this.log('Installing dependencies...')
      // execSync(`${packageManager} install`, {cwd: projectPath, stdio: 'inherit'})
      // this.log('Dependencies installed successfully.')

      // const installCommand = packageManager === 'npm' ? 'install' : 'add'
      // this.log(`Installing theme package: ${themePackage}...`)
      // execSync(`${packageManager} ${installCommand} ${themePackage}`, {cwd: projectPath, stdio: 'inherit'})
      // this.log(`Theme package ${themePackage} installed successfully.`)

      this.log('Project setup completed successfully.')
    } catch (error) {
      this.log('Error setting up the project. Please check the template folder or the permissions.')
      this.log(String(error))
    }
  }
}
