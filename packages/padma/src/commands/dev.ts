import {Args, Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'
import * as path from 'path'

export default class Dev extends Command {
  static override args = {
    file: Args.string({description: 'file to read'}),
  }

  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Dev)

    // Locate the core package inside node_modules
    const corePath = path.resolve(process.cwd(), 'node_modules/@padmadev/frontend')

    console.log('corePath', corePath)
    execSync('npm run dev', {cwd: corePath, stdio: 'inherit'})

    // this.log(`hello ${name} from /Users/zelalhossain/Desktop/products/padma/packages/padma/src/commands/dev.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
