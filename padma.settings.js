export const settings = {
  activeTheme: "@padmadev/blank-theme", // Default active theme
};

export const themeResolver = {
  "@padmadev/blank-theme": () => import("@padmadev/blank-theme"),
};
