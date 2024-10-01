import type { Metadata } from "next"
import NotFoundBody from "./notFoundBody"

export const metadata: Metadata = {
   title: "Page Not Found | MUI Next.js Boilerplate",
   description: "Page not found for MUI Next.js Boilerplate"
}

export default function NotFound() {
   return <NotFoundBody />
}
