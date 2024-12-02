import settings from "../padma.settings"
import { themeMap } from "../theme-map" // Import the theme map

type ThemeComponents = {
   getPublicComponents: Record<string, any>
   getPrivateComponents: Record<string, any>
}

export const loadActiveTheme = async (): Promise<ThemeComponents | null> => {
   const activeTheme = settings.activeTheme

   console.log("activeTheme", activeTheme)

   try {
      // Use the map to get the correct theme import
      const loadTheme = themeMap[activeTheme]

      if (!loadTheme) {
         throw new Error(`Theme not found: ${activeTheme}`)
      }

      // Dynamically import the theme
      const theme = await loadTheme()
      const { getPublicComponents, getPrivateComponents } = theme

      return { getPublicComponents, getPrivateComponents }
   } catch (error) {
      console.error("Error loading active theme:", error)
      return null // Return null on error
   }
}
