import { StaticImageData } from "next/image"

export type IBlog = {
   id: number
   datePosted: string
   title: string
   text: string
   url: string
   image: StaticImageData | string
}

export type IBlogSectionData = {
   sectionTitle: string
   subTitle: string
   blogs: IBlog[]
}

export type IHeroCardData = {
   title: string
   icon: string
   value: number
}

export interface ICategory {
   id: number
   icon: string
   title: string
   value: number
}

export interface IPopularCtgData {
   sectionTitle: string
   subTitle: string
   catagories: ICategory[]
}

export type IPopularListedJobs = {
   id: number
   status: string
   logo?: HTMLImageElement | string
   jobTitle: string
   location: string
   vacancy: number
   salary: string
   datePosted: string
}
export type IPopularListedJobsData = {
   sectionTitle: string
   subTitle: string
   jobs: IPopularListedJobs[]
}
export type IReviews = {
   id: number
   image: HTMLImageElement | string
   name: string
   role: string
   review: string
}

export type IReviewsSectionData = {
   sectionTitle: string
   subTitle: string
   reviews: IReviews[]
}
