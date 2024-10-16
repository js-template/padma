// theme-loader.ts
import dynamic from "next/dynamic"
import { activeTheme } from "./padma.setting"

export const loadThemeComponent = async (componentKey: string) => {
   // Dynamically import the component from the theme folder
   return dynamic(() => import(`${activeTheme}`).then((mod) => mod.blockComponentMapping[componentKey]?.component))
}
