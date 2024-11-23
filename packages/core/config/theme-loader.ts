import path from "path"

let activeThemeComponents: Record<string, any> = {} // Use 'any' for React components

const themePath = path.resolve(process.cwd(), "./../padma.settings.json")

console.log("Theme path:", themePath)

// Load the active theme components
export const loadActiveTheme = async () => {
   const { getPublicComponents, getPrivateComponents } = await import("@padmadev/blank-theme" as any)

   return { getPrivateComponents, getPublicComponents }
}

// Get the theme component by its key
export const getThemeComponent = (componentKey: string): any | null => {
   return activeThemeComponents[componentKey] || null // Access the outer scoped variable
}
