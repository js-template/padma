// app/api/find/route.ts

import { NextRequest, NextResponse } from "next/server"
import qs from "qs"

export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url)

   const model = searchParams.get("model") as string
   const query = JSON.parse(searchParams.get("query") as string)
   const cache = (searchParams.get("cache") as "force-cache" | "no-cache" | "no-store") || "force-cache"
   const revalidate = searchParams.get("revalidate")
      ? parseInt(searchParams.get("revalidate") as string, 10)
      : undefined

   // console.log("Model", model, "query", query, "cache", cache)
   const result = await find(model, query, cache, revalidate)

   if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 })
   }

   return NextResponse.json({ data: result.data })
}

/**
 * Function to get data
 */
export const find = async (
   model: string,
   query: any = {},
   cache: "force-cache" | "no-cache" | "no-store" = "force-cache",
   revalidate?: number
) => {
   const queryString = qs.stringify(query, {
      arrayFormat: "indices",
      encode: false,
      indices: false
   })

   try {
      const response = await fetch(`${process.env.STRAPI_ENDPOINT}/${model}/?${queryString}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`
         },
         ...{
            ...(revalidate ? {} : { cache }),
            ...(revalidate
               ? {
                    next: {
                       revalidate: revalidate
                    }
                 }
               : {})
         }
      })

      if (!response.ok) {
         throw new Error(`Failed to fetch data: ${response.statusText}`)
      }

      const data = await response.json()

      return { data, error: null }
   } catch (error: any) {
      console.error(`Error during API call: ${error.message}`)
      return {
         data: null,
         error: error.message || "An error occurred during data fetch"
      }
   }
}
