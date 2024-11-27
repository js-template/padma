import fs from "fs"
import path from "path"

type ThemeComponents = {
   getPublicComponents: Record<string, any>
   getPrivateComponents: Record<string, any>
}

export const loadActiveTheme = async (): Promise<ThemeComponents | null> => {
   try {
      // Locate the settings file
      // const settingsPath = path.resolve(process.cwd(), "./../padma.settings.json")

      // if (!fs.existsSync(settingsPath)) {
      //    throw new Error(`Settings file not found at ${settingsPath}`)
      // }

      // Read and parse the settings file
      //const settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"))

      // if (!settings.activeTheme) {
      //    throw new Error("Active theme is not defined in the settings file.")
      // }

      const { getPublicComponents, getPrivateComponents } = await import("@padmadev/blank-theme")

      console.log("Active theme loaded from config:")

      return { getPrivateComponents, getPublicComponents }
   } catch (error: any) {
      console.error("Error loading active theme:", error.message)
      return null // Return null on error
   }
}

// Get a specific theme component by its key
// export const getThemeComponent = (componentKey: string): any | null => {
//    return activeThemeComponents[componentKey] || null // Access the outer scoped variable
// }
