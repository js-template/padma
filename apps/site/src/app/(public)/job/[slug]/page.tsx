import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { Metadata, ResolvingMetadata } from "next"
import { JobDetails } from "@padma/metajob-ui"
import { getLanguageFromCookie } from "@/utils/language"

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug

   // fetch data
   const { data } = await find(
      "api/lists",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         // FIXME: Need only poplate seo not full data
         populate: "deep",
         publicationState: "live",
         locale: ["en"]
      },
      "no-cache"
   )
   // if data?.data?.attributes?.seo is not available, return default data
   if (!data?.data[0]?.attributes?.seo) {
      return {
         title: data?.data[0]?.attributes?.title || "Title not found",
         description: data?.data[0]?.attributes?.description || "Description not found"
      }
   }

   return StrapiSeoFormate(data?.data[0]?.attributes?.seo, `/jobs/${pageSlug}`)
}
export default async function JobDetailsPage({ params }: { params: { slug: string } }) {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()

   // *** get jobs data from strapi ***
   const { data, error } = await find(
      "api/lists",
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

   // *** get  blogs-details page data from strapi ***
   const { data: listDetailsPageData, error: listPageError } = await find(
      "api/list-detail",
      {
         populate: "deep",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   if (error) {
      return <div>Something went wrong</div>
   }
   return (
      <>
         <JobDetails data={data?.data} listPageData={listDetailsPageData?.data?.attributes} language={language} />
      </>
   )
}
