import { cookies } from "next/headers"

export const getLanguageFromCookie = () => {
   const cookieStore = cookies()
   const langCookie = cookieStore.get("lang")
   return langCookie ? langCookie.value : "en"
}
