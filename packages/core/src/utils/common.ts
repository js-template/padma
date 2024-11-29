/**
 * This function will create Slug from title
 * @param title as string
 * @returns string slug value
 */
export const createSlug = (title?: string) => {
   if (!title) {
      return ""
   }
   return title
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters (except hyphens)
      .replace(/-{2,}/g, "-") // Replace consecutive hyphens with a single hyphen
}

/**
 * This function will return url array from product gallery
 * @param product gallery data as array
 * @returns array of urls value
 */
export const getUrls = (galleryData?: any) => {
   if (!galleryData) {
      return []
   }
   return galleryData.map((item: any) => item.attributes.url)
}

/**
 * This function format date like "2023-12-13T00:20:50.704Z" to "Dec 13, 2023"
 * @param dateString as string value like "2023-12-13T00:20:50.704Z"
 * @returns date like "Dec 13, 2023"
 */
export const formatDate = (dateString?: any) => {
   if (!dateString) {
      return ""
   }
   const dateFormate = new Date(dateString)
   const date = dateFormate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
   })
   return date
}

/**
 * Get language value function
 * @param ln lan props like "en"
 * @returns language value like "English"
 */

export const getLanguageValue = (ln: "ar" | "en" | "es" | "") => {
   if (ln === "") {
      return ""
   }
   const languageList = { ar: "Arabic", en: "English", es: "Spanish" }
   const lanValue = languageList[ln]
   return lanValue
}
