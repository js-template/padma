export interface IUser {
   id?: number
   firstName: string
   lastName: string
   email: string
   phone: string
   role: {
      id?: number
      name: string
      type: string
   }
   avatar?: {
      id?: number
      url: string
   }
}
