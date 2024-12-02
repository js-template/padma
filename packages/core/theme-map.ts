// theme-map.ts

export const themeMap: Record<string, () => Promise<any>> = {
   "@padmadev/blank-theme": () => import("@padmadev/blank-theme")
}
