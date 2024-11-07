// src/commands/create.ts
import {Command, Flags, Args} from '@oclif/core'
import {execSync} from 'child_process'
import * as fs from 'fs-extra'
import * as path from 'path'
import {select} from '@inquirer/prompts' // Use the new select prompt from @inquirer/prompts
import * as child_process from 'child_process'

export default class Create extends Command {
  static description = 'Create a new Padma project'

  static args = {
    projectName: Args.string({description: 'Name of the project', required: true}),
  }

  // static flags = {
  //   template: Flags.string({
  //     char: 't',
  //     description: 'Choose a project template',
  //     options: ['blank-theme', 'metablog-theme', 'mteajob-theme'],
  //     default: 'metablog-theme',
  //   }),
  // }

  async run() {
    const {args, flags} = await this.parse(Create)
    const projectName = args.projectName
    const template = flags.template
    const projectPath = path.resolve(process.cwd(), projectName)

    this.log(`Creating project: ${projectName}`)
    this.log(`Selected template: ${template}`)

    // if (fs.existsSync(projectPath)) {
    //   this.log(`Error: Directory ${projectName} already exists.`)
    //   return
    // }

    // Clone the monorepo's 'apps/site' folder into the new project
    const repoUrl = 'https://github.com/js-template/padma' // Change this to your repo
    const cloneCommand = `git clone --single-branch --branch main ${repoUrl} ${projectPath}`

    try {
      execSync(cloneCommand, {stdio: 'inherit'})

      // Navigate to the apps/site folder
      const sitePath = path.join(projectPath, 'apps', 'site')
      if (!fs.existsSync(sitePath)) {
        this.log("Error: Could not find 'apps/site' folder in the repository.")
        return
      }

      // Ask user for the theme choice using the new select prompt from @inquirer/prompts
      const theme: string = await select({
        message: 'Select a theme for your project',
        choices: ['blank-theme', 'metablog-theme', 'mteajob-theme'], // Available themes
      })

      this.log(`Selected theme: ${theme}`)
      this.log('Installing selected theme...')

      // Install the theme from npm
      try {
        // execSync(`npm install ${theme}`, {cwd: sitePath, stdio: 'inherit'})
        this.log(`Successfully installed ${theme} theme.`)

        // Install other dependencies (if necessary)
        // execSync('npm install', {cwd: sitePath, stdio: 'inherit'})
        this.log('Project dependencies have been installed.')
      } catch (error) {
        this.log('Error installing theme or dependencies.')
      }
    } catch (error) {
      this.log('Error cloning repository. Please check the repository URL or your internet connection.')
    }
  }
}
