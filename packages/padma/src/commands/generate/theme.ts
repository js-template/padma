import {Args, Command, Flags} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'
import chalk from 'chalk'

export default class GenerateTheme extends Command {
  static override description = 'Generate a theme folder in the packages directory'

  static override examples = ['npx padma generate theme --name custom-theme', 'npx padma generate theme']

  static override flags = {
    name: Flags.string({
      char: 'n',
      description: 'Name of the theme',
      default: 'custom-theme',
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(GenerateTheme)

    const themeName = flags.name
    const rootFolder = process.cwd()
    const packagesFolder = path.join(rootFolder, 'packages')
    const themeFolder = path.join(packagesFolder, themeName)

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const templateFolder = path.resolve(__dirname, '../../../templates/theme')

    this.log(chalk.cyan(`Generating theme "${themeName}"...`))

    try {
      // Ensure the packages folder exists
      await fs.ensureDir(packagesFolder)

      // Check if the target theme folder already exists
      if (await fs.pathExists(themeFolder)) {
        this.log(`The theme folder "${themeName}" already exists.`)
        return
      }

      // Ensure the template folder exists
      if (!(await fs.pathExists(templateFolder))) {
        this.error(`Template folder not found: ${templateFolder}`)
        return
      }

      // Copy the template folder to the target theme folder
      await fs.copy(templateFolder, themeFolder)

      // Success message
      this.log(chalk.green(`Theme generation successful! Run your theme from "packages/${themeName}".`))
    } catch (error: any) {
      this.error(`Failed to generate theme "${themeName}". ${error.message}`)
    }
  }
}
