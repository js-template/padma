export const settings = {
  activeTheme: "@padmadev/blank-theme", // Default active theme
};

export const themeResolver: Record<string, () => Promise<any>> = {
  "@padmadev/blank-theme": () => import("@padmadev/blank-theme"),
};
