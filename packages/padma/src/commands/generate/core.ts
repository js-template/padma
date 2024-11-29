import {Command} from '@oclif/core'
import fs from 'fs-extra'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

export default class Core extends Command {
  static description = 'Generate the core folder in the current project'

  static examples = [`npx padma generate core`]

  async run() {
    // Define paths
    const rootFolder = process.cwd()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const templateFolder = path.resolve(__dirname, '../../../templates/core')

    const targetFolder = path.join(rootFolder, 'core')

    this.log(`Generating "core"...`)
    this.log(`Template folder: ${templateFolder}`)
    this.log(`Target folder: ${targetFolder}`)

    try {
      // Check if the target folder already exists
      if (await fs.pathExists(targetFolder)) {
        this.log(`The "core" folder already exists at the target location.`)
        return
      }

      // Ensure the template folder exists
      if (!(await fs.pathExists(templateFolder))) {
        this.error(`Template folder not found: ${templateFolder}`)
        return
      }

      // Copy the template folder to the target location
      await fs.copy(templateFolder, targetFolder)
      this.log(`Successfully generated "core".`)
    } catch (error: any) {
      this.error(`Failed to generate "core". ${error.message}`)
    }
  }
}
