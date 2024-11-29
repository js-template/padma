import {Command} from '@oclif/core'
import {execSync} from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export default class Build extends Command {
  static override description = 'Build the Next.js app and prepare for standalone deployment in the root directory'

  static override examples = ['npx padma build']

  public async run(): Promise<void> {
    const corePath = path.resolve(process.cwd(), 'core')
    const rootPath = process.cwd() // This is the root directory

    try {
      // Step 1: Run the Next.js build command inside the core directory
      this.log(`Running "yarn build" in ${corePath}`)
      execSync('yarn build', {cwd: corePath, stdio: 'inherit'})

      // Step 2: Copy the .next folder to the root directory
      this.log('Copying .next folder to root directory')
      execSync(`cp -r ${path.join(corePath, '.next')} ${rootPath}`, {stdio: 'inherit'})

      // Step 3: Copy the public and static files to the root directory for standalone mode
      this.log('Copying public and static folders to root directory')
      execSync(`cp -r ${path.join(corePath, 'public')} ${rootPath}`, {stdio: 'inherit'})
      execSync(`cp -r ${path.join(corePath, '.next/static')} ${rootPath}/.next`, {stdio: 'inherit'})

      this.log(
        'Build completed successfully! You can now run the server with node .next/standalone/server.js from the root directory.',
      )
    } catch (error) {
      this.error('Build failed.', {exit: 1})
    }
  }
}
