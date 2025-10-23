// src/auth.config.ts
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
   pages: {
      signIn: "/login",
      error: "/error"
   },
   callbacks: {
      authorized({ auth, request: { nextUrl } }) {
         // Check if the user is authenticated
         // Initialize protected routes
         // Here, all routes except the login page is protected

         // *** Here add your protracted URL
         /**
          * Under the dashboard pages is protracted
          */
         if (nextUrl?.pathname.includes("/dashboard")) return false
         return true
      }
   },
   providers: [] // Add providers with an empty array for now
} satisfies NextAuthConfig
