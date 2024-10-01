export type IJobDetailsTitleCard = {
   title: string
   category?: string
   subCategory?: string
   logo: string
   share: {
      id: number
      icon: string
      link: string
      name: string
   }[]
}

export type IJobDetailsPageData = {
   pageTitle: string
   backgroundImage: string
   titleCard: IJobDetailsTitleCard
   jobOverview: {
      title: string
      data: {
         id: number
         title: string
         datePosted: string
         icon: string
      }[]
   }
   description: {
      title: string
      data: {
         id: number
         text: string
      }[]
   }
   requirements: {
      title: string
      data: {
         id: number
         text: string
      }[]
   }
   skills: {
      title: string
      data: string[]
   }
   company: {
      logo: string
      companyName: string
      tagLine: string
      email: string
      phone: string
      website: string
      facebook: string
      twitter: string
   }
}
