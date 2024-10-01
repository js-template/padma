export type ICandidate = {
   id: number
   name: string
   location: string
   skills: string[]
   image: string
}
export type ICandidateProfileData = {
   avatar: string
   about: { id: number; text: string }[]
   personalCharacteristics: { id: number; text: string }[]
   education: { id: number; degree: string; school: string; year: string; description: string }[]
   experience: { id: number; title: string; company: string; year: string }[]
   name: string
   designation: string
   skills: string[]
   industry: string
   experienceYears: string
   location: string
   joined: string
}
