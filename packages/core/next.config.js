/**
 * @type {import("next").NextConfig}
 */
const { loadEnvConfig } = require("@next/env")
const projectDir = require("path").resolve(__dirname, "..") // Move up to root
loadEnvConfig(projectDir)

module.exports = {
   env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      STRAPI_AUTH_TOKEN: process.env.STRAPI_AUTH_TOKEN,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
   },
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true
   },
   images: {
      remotePatterns: [
         {
            protocol: "https" || "http",
            hostname: "res.cloudinary.com"
         },
         {
            protocol: "https" || "http",
            hostname: "ui-avatars.com"
         },
         {
            protocol: "https" || "http",
            hostname: "via.placeholder.com"
         }
      ]
   }
}
