// components.ts

import PlaceholderComponent from "./utils/placeholder"
export * from "./blocks/header"
export * from "./blocks/footer"

export const getPublicComponents = {
   // Block component mapping
   "banner.banner-one": { component: PlaceholderComponent },
   "header.breadcrumbs": { component: PlaceholderComponent },
   "forms.job-filter": { component: PlaceholderComponent }
   // Add other components as needed...
}
