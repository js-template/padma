import type { Metadata } from "next"
import NotFoundBody from "./notFoundBody"

// REVIEW: Meta data Should not be static
//FIXME: Page should be dynamic

// will be dynamic page and filtered by slug
// slug- 404-page
export const metadata: Metadata = {
   title: "Page Not Found | MUI Next.js Boilerplate",
   description: "Page not found for MUI Next.js Boilerplate"
}

export default function NotFound() {
   return <NotFoundBody />
}
