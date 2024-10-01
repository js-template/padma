"use server"
import { revalidatePath } from "next/cache"

export const userRevalidate = async (path: string, pathType: "page" | "layout") => {
   /**
    * if a path and pathType are available, revalidate path
    * @param path
    * @param pathType
    */
   if (path && pathType) {
      revalidatePath(path, pathType)
   }
}
