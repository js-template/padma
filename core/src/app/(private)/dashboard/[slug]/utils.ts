import _ from "lodash"

export const privetPageFetcher = async (url: string) => {
   const response = await fetch(url)
   if (!response.ok) {
      throw new Error("An error occurred while fetching the data.")
   }
   const result = await response.json()

   // data formatted
   const blocksData = _.get(result.data, "data[0].attributes", {})

   return {
      blocks: blocksData?.blocks || [],
      styles: blocksData?.styles || {}
   } // Return the nested data
}
