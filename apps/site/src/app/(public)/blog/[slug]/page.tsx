import React from "react"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"
import { BlogDetails } from "@padma/metajob-ui"
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
   const { data } = await find(
      "api/posts",
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
      "no-cache"
   )
   // if data?.data?.attributes?.seo is not available, return default data
   if (!data?.data[0]?.attributes?.seo) {
      return {
         title: data?.data[0]?.attributes?.title || "Title not found",
         description: data?.data[0]?.attributes?.description || "Description not found"
      }
   }

   return StrapiSeoFormate(data?.data[0]?.attributes?.seo, `/posts/${pageSlug}`)
}
export default async function Page({ params }: { params: { slug: string } }) {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()
   // *** get blogs data from strapi ***
   const { data, error } = await find(
      "api/posts",
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
      "force-cache"
   )
   // *** get recent blogs data from strapi ***
   const { data: recentBlogs, error: recentBlogsError } = await find(
      "api/posts",
      {
         populate: {
            featuredImage: {
               fields: ["url"]
            }
         },
         fields: ["title", "slug", "publishedAt"], // Fields to include in the response
         pagination: {
            pageSize: 3, //fetch 3 recent job
            page: 1
         },
         publicationState: "live",
         locale: [language]
      },
      "force-cache"
   )

   if (error) {
      return <div>Something went wrong</div>
   }

   return (
      <>
         <BlogDetails data={data?.data} recentBlogs={recentBlogs?.data} />
         {data?.data[0]?.attributes?.seo?.structuredData && (
            <Script
               id='json-ld-structured-data'
               type='application/ld+json'
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(data?.data[0]?.attributes?.seo?.structuredData)
               }}
            />
         )}
      </>
   )
}
