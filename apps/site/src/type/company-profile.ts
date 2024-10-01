export type ICompanyProfileData = {
   name: string
   tagline: string
   phone: string
   email: string
   logo: string
   website: string
   facebook: string
   twitter: string
   about: {
      id: number
      text: string
   }[]
   industry: string
   companySize: string
   avgSalary: string
   location: string
   jobs: {
      tags: string[]
      jobTitle: string
      location: string
      vacancy: number
      salary: string
      datePosted: string
      logo: string
      id: number
   }[]
   comments: {
      id: number
      name: string
      rating: number
      date: string
      comment: string
      avatar: string
   }[]
}
