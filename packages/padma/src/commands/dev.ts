import { Command } from '@oclif/core';
import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

export default class Dev extends Command {
  static override description = 'Run the development server for @padmadev/core';

  static override examples = ['npx padma dev'];

  public async run(): Promise<void> {
    // Define the settings path relative to the current working directory
    const settingsPath = path.resolve(process.cwd(), 'padma.settings.ts');

    // Check if the settings file exists
    if (!fs.existsSync(settingsPath)) {
      this.error(`Settings file not found at ${settingsPath}`);
    }


    // Path to the core directory
    const corePath = path.resolve(process.cwd(), './core');

    // Check if the core folder exists
    if (!fs.existsSync(corePath)) {
      this.error(`The core folder does not exist. Please run "npx padma generate core" to initialize it.`);
    }

    // Detect the package manager by looking up the directory tree for lock files
    const packageManager = this.detectPackageManager(corePath) || 'pnpm'; // Default to pnpm

    try {
      // Run the appropriate dev command in the core directory
      const devCommand = packageManager === 'yarn' ? 'yarn dev' : packageManager === 'pnpm' ? 'pnpm dev' : 'npm run dev';

      this.log(`Running "${devCommand}" in ${corePath}`);
      execSync(devCommand, { cwd: corePath, stdio: 'inherit' });
    } catch (error) {
      this.error('Failed to run the development server for @padmadev/core.', {
        exit: 1,
      });
    }
  }

  // Detect the package manager by looking up the directory tree
  private detectPackageManager(startPath: string): 'npm' | 'yarn' | 'pnpm' | null {
    let currentPath = startPath;

    while (currentPath !== path.parse(currentPath).root) {
      if (fs.existsSync(path.join(currentPath, 'yarn.lock'))) {
        return 'yarn';
      }
      if (fs.existsSync(path.join(currentPath, 'pnpm-lock.yaml'))) {
        return 'pnpm';
      }
      if (fs.existsSync(path.join(currentPath, 'package-lock.json'))) {
        return 'npm';
      }
      currentPath = path.dirname(currentPath); // Move up one directory
    }

    return null; // No package manager detected
  }
}
