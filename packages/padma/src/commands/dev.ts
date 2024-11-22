import {Command} from '@oclif/core'
import {execSync} from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export default class Dev extends Command {
  static override description = 'Run the development server for @padmadev/core'

  static override examples = ['npx padma dev']

  public async run(): Promise<void> {
    // Define the settings path relative to the current working directory
    const settingsPath = path.resolve(process.cwd(), 'padma.settings.json')

    //console.log(`Settings path: ${settingsPath}`)

    // Check if the settings file exists
    if (!fs.existsSync(settingsPath)) {
      throw new Error(`Settings file not found at ${settingsPath}`)
    }

    // Read and parse the settings file
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'))

    // Check if activeTheme is defined in the settings file
    if (!settings.activeTheme) {
      throw new Error('Active theme is not defined in the settings file.')
    }

    // Use the activeTheme setting from the settings file
    //  const activeTheme = settings.activeTheme
    const corePath = path.resolve(process.cwd(), './core')
    const rootPath = process.cwd() // Root directory is the current working directory

    // Check if the core folder exists
    if (!fs.existsSync(corePath)) {
      this.error(`The core folder does not exist. Please run "npx padma generate core" to initialize it.\n`)
    }

    // Detect the package manager by checking for lock files in the root
    const packageManager = this.detectPackageManager(rootPath)

    if (!packageManager) {
      this.error(
        'No lock file found in the root directory. Please ensure your project is set up with a package manager (npm, yarn, or pnpm).',
      )
    }

    try {
      // Run the appropriate dev command in the core directory
      const devCommand = packageManager === 'yarn' ? 'yarn dev' : packageManager === 'pnpm' ? 'pnpm dev' : 'npm run dev'

      this.log(`Running "${devCommand}" in ${corePath}`)
      execSync(devCommand, {cwd: corePath, stdio: 'inherit'})
    } catch (error) {
      this.error('Failed to run the development server for @padmadev/core.', {
        exit: 1,
      })
    }
  }

  private detectPackageManager(rootPath: string): 'npm' | 'yarn' | 'pnpm' | null {
    if (fs.existsSync(path.join(rootPath, 'yarn.lock'))) {
      return 'yarn'
    }
    if (fs.existsSync(path.join(rootPath, 'pnpm-lock.yaml'))) {
      return 'pnpm'
    }
    if (fs.existsSync(path.join(rootPath, 'package-lock.json'))) {
      return 'npm'
    }
    return null
  }
}
