import { find } from "@/lib/strapi"

import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import _ from "lodash"
import { Metadata, ResolvingMetadata } from "next"
import Body from "./body"
import { auth } from "@/context/auth"
import { notFound, redirect } from "next/navigation"
export const dynamicParams = false // true | false,
import React from "react"
// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()
   // fetch data
   const product = await find(
      "api/private-pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: "deep",
         publicationState: "live",
         locale: [language]
      },
      "no-store"
   )
   // FIXME: Format is not looking good
   // if (!product?.data?.data[0]?.attributes?.seo) {
   //    return {
   //       title: product?.data?.data[0]?.attributes?.title || "Title not found",
   //       description: product?.data?.data[0]?.attributes?.description || "Description not found"
   //    }
   // }
   // StrapiSeoFormate(product?.data?.data[0]?.attributes?.seo, pageSlug)

   return {
      title: "hello",
      description: "hello"
   }
}

export default async function DynamicPrivatePages({
   params
}: {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const pageSlug = params?.slug
   const session = await auth()

   // console.log("Page Slug", pageSlug)

   if (!session) {
      redirect("/login")
   }

   // const language = getLanguageFromCookie();

   const { data, error } = await find(
      "api/private-pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         //  FIXME: must need filter by role
         populate: "deep",
         publicationState: "live"
         //locale: ["en"]
      },
      "no-store"
   )

   //    const blocks = data?.data[0]?.attributes.blocks;
   const blocksData = _.get(data, "data[0].attributes", {})
   const blocks = blocksData?.blocks
   const style = blocksData?.styles || {}

   // *** if blocks is empty, return 404 ***
   if (!blocks || blocks?.length === 0) {
      return notFound()
   }

   // *** if error, return error page ***
   // if (error) {
   //    throw error;
   // }

   return (
      <>
         <Body blocks={blocks} styleData={style} pageSlug={pageSlug} session={session} />
         {/* JSON_LD for SEO */}
         {/* {data?.data[0]?.attributes?.seo?.structuredData && (
            <Script
               id='json-ld-structured-data'
               type='application/ld+json'
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(data?.data[0]?.attributes?.seo?.structuredData)
               }}
            />
         )} */}
      </>
   )
}

// Return a list of `params` to populate the [page] dynamic segment
export async function generateStaticParams() {
   const { data, error } = await find(
      "api/private-pages",
      {
         fields: ["slug"],
         publicationState: "live",
         locale: ["en"]
      },
      "no-store"
   )

   return data?.data?.map((post: any) => ({
      slug: post?.attributes?.slug
   }))
}
