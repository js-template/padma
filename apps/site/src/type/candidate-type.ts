import { ICategories } from "./job"

export type ISkillData = {
   data: ISingleSkill[]
}

export type ISingleSkill = {
   id: number
   attributes: SkillAttributes
}

type SkillAttributes = {
   title: string
   value: string
   createdAt: string
   updatedAt: string
   publishedAt: string
}
export type ICandidateData = {
   data: ISingleCandidateData[]
}

export type ISingleCandidateData = {
   id?: number
   attributes: ICandidateAttributes
}

export type ICandidateAttributes = {
   name: string
   location: {
      lat: number | null
      lng: number | null
      place_id: string
      description: string
   }
   experience_year: number
   designation: string
   about: About[]
   characteristics: Characteristic[]
   createdAt: string
   updatedAt: string
   publishedAt: string
   skills: ISkillData
   user: {
      data: UserData
   }
   industry: ICategories
   education: IEducation[]
   experience: any[]
   avatar: Avatar
   slug: string
}

type About = {
   type: string
   children: AboutChild[]
}

type AboutChild = {
   text: string
   type: string
}

type Characteristic = {
   type: string
   children: CharacteristicChild[]
}

type CharacteristicChild = {
   text: string
   type: string
}

type UserData = {
   id: number
   attributes: UserAttributes
}

type UserAttributes = {
   username: string
   email: string
   provider: string
   confirmed: boolean
   blocked: boolean
   name: string | null
   createdAt: string
   updatedAt: string
}

export type IEducation = {
   id: number
   title: string
   description: string
   start_year: number
   end_year: number
}

//

type Avatar = {
   data: {
      id: number
      attributes: AvatarAttributes
   }
}

type AvatarAttributes = {
   name: string
   alternativeText: string | null
   caption: string | null
   width: number
   height: number
   formats: null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string | null
   provider: string
   provider_metadata: ProviderMetadata
   createdAt: string
   updatedAt: string
}

type ProviderMetadata = {
   public_id: string
   resource_type: string
}
