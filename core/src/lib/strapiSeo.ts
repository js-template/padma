const { NEXTAUTH_URL } = process.env

// *** StrapiSeo type ***
export type StrapiSeo = {
   metaTitle: string
   metaDescription: string
   keywords: string
   metaRobots: string
   canonicalURL: string
}

// *** StrapiSeoFormate function ***
/**
 * @param {StrapiSeo} seoData
 * @param {string} path
 * @returns {Object}
 * @description
 * This function is used to format the StrapiSeo data to the format that is required by the SEO component.
 * It takes the StrapiSeo data and path as an argument and returns the formatted data.
 * If the path is not provided, it will use the NEXTAUTH_URL as the default path.
 * The function returns an object with the title, description, keywords, robots, icons, and alternates.
 * The title, description, and keywords are taken from the StrapiSeo data.
 * The robots are taken from the StrapiSeo data and split into index and follow.
 * The icons are set to the default favicon.
 * The canonical URL is taken from the StrapiSeo data, if not provided, it will use the NEXTAUTH_URL and the path.
 * The function returns the formatted data.
 * @example
 * StrapiSeoFormate(seoData, path);
 * // returns { title: 'title', description: 'description', keywords: ['keyword1', 'keyword2'], robots: { index: true, follow: true }, icons: { icon: '/favicon.ico' }, alternates: { canonical: 'https://example.com' } }
 * @example
 * StrapiSeoFormate(seoData);
 * // returns { title: 'title', description: 'description', keywords: ['keyword1', 'keyword2'], robots: { index: true, follow: true }, icons: { icon: '/favicon.ico' }, alternates: { canonical: 'https://example.com/path' } }
 */
export const StrapiSeoFormate = (seoData: StrapiSeo, path?: string) => {
   // *** If the StrapiSeo data is not provided, return the default data ***
   if (!seoData) {
      return {
         title: "Title not found",
         description: "Description not found"
      }
   }

   // *** Return the formatted data ***
   return {
      title: seoData?.metaTitle || "",
      description: seoData?.metaDescription || "",
      keywords: seoData?.keywords?.split(",") || [],
      robots: {
         index: seoData?.metaRobots?.split(",")[0] === "index" ? true : false,
         follow: seoData?.metaRobots?.split(",")[1] === "follow" ? true : false
      },
      icons: {
         icon: "/favicon.ico"
      },
      alternates: {
         canonical: seoData?.canonicalURL || `${NEXTAUTH_URL}${path || ""}`
      }
   }
}
