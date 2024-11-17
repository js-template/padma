import {Args, Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'

export default class Backend extends Command {
  static override description = 'Install Strapi from a template'

  static override args = {
    projectName: Args.string({description: 'Name of the project to create', required: false}),
  }

  static override flags = {
    packageManager: Flags.string({
      char: 'p',
      description: 'Choose a package manager (yarn or npm)',
      options: ['yarn', 'npm'],
      default: 'yarn',
    }),
    template: Flags.string({
      description: 'Template URL for Strapi',
      default: 'https://github.com/js-template/padma',
    }),
    branch: Flags.string({
      description: 'Template branch',
      default: 'components-create-strapi5',
    }),
    templatePath: Flags.string({
      description: 'Template path',
      default: 'apps/backend-v5',
    }),
    noInteractive: Flags.boolean({
      char: 'i',
      description: 'Disable interactive prompts',
      default: true,
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Backend)

    const {projectName} = args ?? 'my-project'
    const {packageManager, template, branch, templatePath, noInteractive} = flags

    // Construct the command
    const command =
      packageManager === 'yarn'
        ? `yarn create strapi-app ${projectName} --template ${template} --template-branch=${branch} --template-path=${templatePath}`
        : `npx create-strapi-app@latest ${projectName} --template ${template} --template-branch=${branch} --template-path=${templatePath}`

    const fullCommand = noInteractive ? `${command} --no-install` : command

    this.log(`Creating a new backend : ${projectName}`)

    try {
      // Execute the command synchronously
      const output = execSync(fullCommand, {stdio: 'inherit'})
      this.log(output.toString())
    } catch (error) {
      this.error(`Failed to execute command: ${error instanceof Error ? error.message : error}`)
    }
  }
}
