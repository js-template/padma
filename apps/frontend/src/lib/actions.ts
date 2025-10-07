"use server"

import { signIn, signOut } from "auth"
import { AuthError } from "next-auth"

export async function authenticate(prevState: string | undefined, formData: any) {
   try {
      await signIn("credentials", formData)
   } catch (error) {
      if (error instanceof AuthError) {
         return "log in failed"
      }
      throw error
   }
}

export async function authSignOut() {
   await signOut()
}
