import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { blockComponentMapping } from "@padma/metajob-ui"
export const dynamicParams = false // true | false,

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// Load the active theme components
// const loadThemeComponents = async () => {
//    await loadActiveTheme() // Load the components from the active theme
// }

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
   const language = getLanguageFromCookie()

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
         locale: language ? [language] : ["en"]
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
      <>
         {/* {blocks.map((block: any, index: number) => {
            const ComponentToRender = getThemeComponent(block.__component) // Get the component from the active theme

            if (ComponentToRender) {
               // Pass down data and any additional props
               return <ComponentToRender key={index} data={block} language={language} {...block} />
            }
            return null // Handle missing components gracefully
         })} */}
         {blocks?.map((block: any, index: number) => {
            const BlockConfig = blockComponentMapping[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} data={block} language={language} {...block} />
            }
            return null // Handle the case where the component mapping is missing
         })}
      </>
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
