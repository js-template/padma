import { blockComponentMapping } from "@/lib/component.map"
import { find } from "@/lib/strapi"
import { notFound } from "next/navigation"

import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { Metadata, ResolvingMetadata } from "next"
import { Fragment } from "react"
export const dynamicParams = false // true | false,

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()

   // ***fetch seo data
   const product = await find(
      "api/pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: {
            seo: {
               fields: [
                  "metaTitle",
                  "metaDescription",
                  "metaImage",
                  "metaSocial",
                  "keywords",
                  "metaRobots",
                  "structuredData",
                  "metaViewport",
                  "canonicalURL"
               ]
            }
         },
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   if (!product?.data?.data?.[0]?.attributes?.seo) {
      return {
         title: product?.data?.data?.[0]?.attributes?.title || "Title not found",
         description: `Description ${product?.data?.data[0]?.attributes?.title}` || "Description not found"
      }
   }
   return StrapiSeoFormate(product?.data?.data?.[0]?.attributes?.seo, `/${pageSlug}`)
}

export default async function DynamicPages({
   params
}: {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const pageSlug = params?.slug

   // const language = getLanguageFromCookie();

   const { data, error } = await find(
      "api/pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: "deep",
         publicationState: "live",
         locale: ["en"]
      },
      "no-store"
   )

   const blocks = data?.data[0]?.attributes?.blocks || []

   // *** if blocks is empty, return 404 ***
   if (!blocks || blocks?.length === 0) {
      return notFound()
   }

   // *** if error, return error page ***
   // if (error) {
   //    throw error;
   // }

   return (
      <Fragment>
         {blocks?.map((block: any, index: number) => {
            const BlockConfig = blockComponentMapping[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} data={block} {...block} />
            }
            return null // Handle the case where the component mapping is missing
         })}
      </Fragment>
   )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
   const { data, error } = await find(
      "api/pages",
      {
         fields: ["slug"],
         publicationState: "live",
         locale: ["en"]
      },
      "force-cache"
   )

   return data?.data?.map((post: any) => ({
      slug: post?.attributes?.slug
   }))
}
