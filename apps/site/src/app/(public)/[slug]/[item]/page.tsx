import { Fragment } from "react"
import { notFound } from "next/navigation"
import { find } from "@/lib/strapi"
import { getPublicComponents } from "@padma/metajob-ui" // Same as in your other pages

export default async function DynamicPages({
   params
}: {
   params: { slug: string; item: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const pageSlug = params?.slug // e.g., "job", "resume"
   const singleType = params?.item // e.g., "fullstack" or "designer"

   const language = "en" // Fetch the language or use a default

   // Fetch the permalink structure from Strapi
   const { data: permalinkData } = await find(
      "api/permalink",
      {
         populate: "*",
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   const singlePages = permalinkData?.data?.attributes?.singlePage
   const singlePageData = singlePages?.find((page: any) => page.slug === pageSlug)

   // If no matching page is found, return 404
   if (!singlePageData) {
      return notFound()
   }

   const collectionModel = singlePageData?.collectionModel

   const singleModel = singlePageData?.singelModel

   //    console.log("collectionModel", collectionModel)
   //    console.log("singleModel", singleModel)

   // Fetch the content data based on the collection model (e.g., jobs, resumes)
   const { data: singleData, error: singleError } = await find(
      singleModel,
      {
         populate: "deep",
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   // console.log("singleModel", singleData)

   if (!singleData) {
      return notFound()
   }

   // Fetch additional page details (if needed)
   const { data: pageDetails, error: pageDeatilsError } = await find(
      collectionModel,
      {
         filters: {
            slug: {
               $eq: singleType
            }
         },
         populate: "deep",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   const pageDetailsData = pageDetails?.data?.[0]?.attributes

   //console.log("pageDetailsData", pageDetailsData)

   const blocks = singleData?.data?.attributes?.blocks || []
   //console.log("blocks", blocks)

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: any, index: number) => {
            // @ts-ignore
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} data={block} pageDetails={pageDetailsData} language={language} />
            }
            return null // Handle missing component mapping case
         })}
      </Fragment>
   )
}
