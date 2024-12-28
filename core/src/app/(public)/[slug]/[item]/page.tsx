import { Fragment } from "react"
import { notFound } from "next/navigation"
import { auth } from "@/context/auth"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { Metadata } from "next"
import { loadActiveTheme } from "config/theme-loader"

// ?? Next.js will invalidate the cache when a
// ?? request comes in, at most once every 60 seconds.
export const revalidate = 60

// ?? We'll prerender only the params from `generateStaticParams` at build time.
// ?? If a request comes in for a path that hasn't been generated,
// ?? Next.js will server-render the page on-demand.
export const dynamicParams = false // or false, to 404 on unknown paths

// *** generate page params type
type Props = {
   params: { slug: string; item: string }
}

// *** generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const pageSlug = params?.slug // e.g., "job", "resume"
   const pageItem = params?.item // e.g., "fullstack" or "designer"

   // ?? Fetch the permalink structure from Strapi
   const { data } = await find("api/padma-backend/permalink", {
      populate: "*"
      // publicationState: "live",
      // locale: ["en"]
   })

   // ?? Get the singlePages from the permalink data
   const singlePages = data?.data?.attributes?.singlePage

   // ?? If no matching page is found, return 404
   if (!singlePages) {
      return {
         title: "404 - Not Found",
         description: "Page not found"
      }
   }

   // ?? find the pageItem in the singlePages slug
   const singlePageData = singlePages?.find((page: any) => page.slug === pageSlug)

   // ?? Get he seo data for the page from Strapi
   const { data: seoData } = await find(
      singlePageData?.collectionModel,
      {
         filters: {
            slug: {
               $eq: pageItem
            }
         },
         populate: "*"
      },
      "no-cache"
   )

   // ?? If no matching page is found, return 404
   if (!seoData) {
      return {
         title: "404 - Not Found",
         description: "Page not found"
      }
   }

   // ?? if seo is not available, return default data
   if (!seoData?.data?.[0]?.attributes?.seo) {
      return {
         title: seoData?.data[0]?.attributes?.title || "Title not found",
         description: seoData?.data[0]?.attributes?.description || "Description not found"
      }
   }

   // ?? Return the formatted SEO data
   return StrapiSeoFormate(seoData?.data?.[0]?.attributes?.seo, `/${pageSlug}/${pageItem}`)
}

export default async function DynamicPages({ params }: Props) {
   const session = await auth()

   const pageSlug = params?.slug // e.g., "job", "resume"
   const singleType = params?.item // e.g., "fullstack" or "designer"

   // ?? Fetch the language or use a default
   const language = "en"

   // ?? Fetch the permalink structure from Strapi
   const { data: permalinkData } = await find("api/padma-backend/permalink", {
      populate: "*"
   })

   const singlePages = permalinkData?.data?.singlePage
   const singlePageData = singlePages?.find((page: any) => page.slug === pageSlug)

   // ?? If no matching page is found, return 404
   if (!singlePageData) {
      return notFound()
   }

   const collectionModel = singlePageData?.collectionModel

   const singleModel = singlePageData?.singelModel

   // ?? Fetch the content data based on the collection model (e.g., jobs, resumes)
   const { data: singleData, error: singleError } = await find(
      singleModel,
      {
         populate: "*"
         // publicationState: "live",
         // locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   if (!singleData) {
      return notFound()
   }

   // ?? Fetch additional page details (if needed)
   const { data: pageDetails, error: pageDetailsError } = await find(collectionModel, {
      filters: {
         slug: {
            $eq: singleType
         }
      },
      populate: "*"
      // populate: "deep",
      // locale: language ? [language] : ["en"]
   })

   const pageDetailsData = pageDetails?.data?.[0]

   if (!pageDetailsData) {
      return notFound()
   }

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!", pageDetailsError)
   }

   const blocks = singleData?.data?.blocks || []

   // ?? If no blocks are found, return 404
   if (!blocks) {
      return notFound()
   }

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: any, index: number) => {
            // @ts-ignore
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return (
                  <ComponentToRender
                     key={index}
                     block={block}
                     data={pageDetailsData}
                     language={language}
                     session={session}
                  />
               )
            }
            return null // Handle missing component mapping case
         })}
      </Fragment>
   )
}

// *** Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
   // ?? Fetch the permalink structure from Strapi
   const { data } = await find("api/padma-backend/permalink", {
      populate: "*"
   })

   // ?? Get the singlePages from the permalink data
   const singlePages = data?.data?.attributes?.singlePage || []

   // ?? If no singlePages are found, return an empty array
   let params: Array<{ slug: string; item: string }> = []

   // ?? Loop through all singlePages and fetch the collectionModel data
   await Promise.all(
      singlePages?.map(async (page: { slug: string; collectionModel: string; singelModel: string }) => {
         // ?? Get the collectionModel API data
         const { data: collectionData, error: collectionError } = await find(page.collectionModel, {
            fields: ["slug"],
            filters: {
               slug: {
                  $ne: null
               }
            },
            publicationState: "live",
            locale: ["en"]
         })

         // ?? Store all slugs in the params array
         const mappedSlugs = collectionData?.data?.map((single: any) => ({
            slug: page.slug,
            item: single?.attributes?.slug
         }))

         params = params.concat(mappedSlugs)
      })
   )
   // ?? Return the params array
   return params?.map((post: { slug: string; item: string }) => ({
      slug: post?.slug,
      item: post?.item
   }))
}
