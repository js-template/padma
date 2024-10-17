import React from "react"
import { notFound } from "next/navigation"
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

   // *** fetch seo data
   const { data } = await find(
      "api/posts",
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
      "no-cache"
   )

   // if seo is not available, return default data
   if (!data?.data?.[0]?.attributes?.seo) {
      return {
         title: data?.data[0]?.attributes?.title || "Title not found",
         description: data?.data[0]?.attributes?.description || "Description not found"
      }
   }

   return StrapiSeoFormate(data?.data?.[0]?.attributes?.seo, `/blog/${pageSlug}`)
}
export default async function Page({ params }: { params: { slug: string } }) {
   const pageSlug = params?.slug

   // redirect to 404 page if no pageSlug found
   if (!pageSlug || pageSlug === "null") {
      notFound()
   }

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
         locale: language ? [language] : ["en"]
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
         locale: language ? [language] : ["en"]
      },
      "force-cache"
   )

   // *** get  blogs-details page data from strapi ***
   const { data: blogPageData, error: blogPageError } = await find(
      "api/blog-detail",
      {
         populate: "deep",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   // *** get  blogs-category data from strapi ***
   const { data: blogCategoryData, error: blogCategoryError } = await find(
      "api/categories",
      {
         populate: {
            image: {
               fields: ["url"]
            },
            posts: {
               count: true
            }
         },
         fields: ["title", "slug"],
         pagination: {
            pageSize: 10, //fetch 10 blog-categories
            page: 1
         },
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   if (error) {
      return <div>Something went wrong</div>
   }

   return (
      <>
         <BlogDetails
            data={data?.data}
            recentBlogs={recentBlogs?.data}
            blogPageData={blogPageData?.data?.attributes}
            blogCategories={blogCategoryData?.data}
            language={language}
         />
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
