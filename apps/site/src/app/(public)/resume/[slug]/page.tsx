import React from "react"
import { notFound } from "next/navigation"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"
import { CandidateProfile } from "@padma/metajob-ui"
import { getLanguageFromCookie } from "@/utils/language"

export default async function page({ params }: { params: { slug: string } }) {
   const pageSlug = params?.slug

   // redirect to 404 page if no pageSlug found
   if (!pageSlug || pageSlug === "null") {
      notFound()
   }

   const language = getLanguageFromCookie()

   // *** get candidates data from strapi ***
   const { data, error } = await find(
      // "api/candidates",
      "api/metajob-strapi/resumes",
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
      "force-cache"
   )

   // if (error) {
   //    return <div>Something went wrong</div>
   // }
   return <CandidateProfile data={data?.data} language={language} />
}

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()

   // *** fetch seo data
   const { data } = await find(
      "api/metajob-strapi/resumes",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: {
            seo: {
               populate: "*"
            }
         },
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-cache"
   )

   // if seo is not available, return default data
   if (!data?.data?.[0]?.attributes?.seo) {
      return {
         title: data?.data[0]?.attributes?.name || "Title not found",
         description: data?.data[0]?.attributes?.description || "Description not found"
      }
   }

   return StrapiSeoFormate(data?.data?.[0]?.attributes?.seo, `/resume/${pageSlug}`)
}
