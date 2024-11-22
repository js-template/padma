import "./envConfig.js"

/** @type {import("next").NextConfig} */
module.exports = {
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
   },
   reactStrictMode: true,
   env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
   }
}
