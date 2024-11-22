import fs from "fs"
import path from "path"

let activeThemeComponents: Record<string, any> = {} // Use 'any' for React components

// Load the active theme components dynamically
export const loadActiveTheme = async () => {
   try {
      // Locate the settings file
      const settingsPath = path.resolve(process.cwd(), "./../padma.settings.json")

      if (!fs.existsSync(settingsPath)) {
         throw new Error(`Settings file not found at ${settingsPath}`)
      }

      // Read and parse the settings file
      const settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"))

      if (!settings.activeTheme) {
         throw new Error("Active theme is not defined in the settings file.")
      }

      const activeTheme = settings.activeTheme

      // @ts-ignore
      const { getPublicComponents, getPrivateComponents } = await import(
         "../../../../../projects/blank-theme/dist/types"
      )

      return { getPrivateComponents, getPublicComponents }
   } catch (error: any) {
      console.error("Error loading active theme:", error.message)
      return null
   }
}

// Get a specific theme component by its key
export const getThemeComponent = (componentKey: string): any | null => {
   return activeThemeComponents[componentKey] || null // Access the outer scoped variable
}
