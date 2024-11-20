import {Args, Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export default class Dev extends Command {
  static override description = 'Run the development server for @padmadev/core'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    force: Flags.boolean({char: 'f', description: 'force the command execution'}),
  }

  static override args = {
    file: Args.string({description: 'file to process (optional)'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Dev)

    // Locate the root `node_modules` directory
    const corePath =
      path.resolve(process.cwd(), '../../node_modules/@padmadev/core') ||
      path.resolve(process.cwd(), 'node_modules/@padmadev/core')

    console.log('corePath', corePath)

    // Check if the corePath exists
    if (!fs.existsSync(corePath)) {
      this.error(
        `@padmadev/core is not installed. Run the following command to install it:\n\n` + `  yarn add @padmadev/core\n`,
      )
      return
    }

    this.log(`Running @padmadev/core from: ${corePath}`)

    try {
      // Run the `yarn dev` command in the core package directory
      execSync('yarn dev', {cwd: corePath, stdio: 'inherit'})
    } catch (error) {
      this.error('Failed to run the development server for @padmadev/core.', {
        exit: 1,
      })
    }

    if (args.file && flags.force) {
      this.log(`You used --force with file: ${args.file}`)
    }
  }
}
