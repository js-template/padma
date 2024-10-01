import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import type { Metadata } from "next"
import DynamicBlockRenderer from "./body"
import React from "react"

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   // const language = getLanguageFromCookie();
   // fetch data
   // FIXME: Need only poplate seo not full data
   const product = await find(
      "api/home-page",
      {
         populate: "deep",
         publicationState: "live"
         //locale: [language]
      },
      "force-cache"
   )

   return StrapiSeoFormate(product?.data?.data?.attributes?.seo)
}

export default async function Home() {
   const { data, error } = await find(
      "api/home-page",
      {
         populate: "deep",
         publicationState: "live",
         locale: ["en"]
      },
      "no-store"
   )

   // if (error) {
   //    throw error;
   // }

   return (
      <>
         <DynamicBlockRenderer initialData={data} />

         {/* JSON_LD for SEO */}
         {/* {data?.data?.attributes?.seo?.structuredData && (
            <Script
               id='json-ld-structured-data'
               type='application/ld+json'
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(data?.data?.attributes?.seo?.structuredData)
               }}
            />
         )} */}
      </>
   )
}
