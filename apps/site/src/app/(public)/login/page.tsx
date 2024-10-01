// material-ui
import AuthLogin from "@/components/auth-login"
import { Grid } from "@mui/material"
import { auth } from "auth"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
   title: "Login | MUI Next.js Boilerplate",
   description: "Login page for MUI Next.js Boilerplate"
}

type Props = {
   searchParams?: Record<"callbackUrl" | "error", string>
}

const LoginPage = async ({ searchParams }: Props) => {
   const session = await auth()

   if (session) {
      redirect("/dashboard")
   }

   return (
      <Grid container direction='column' justifyContent='flex-end' sx={{ minHeight: "85vh" }}>
         <Grid item xs={12}>
            <Grid container justifyContent='center' alignItems='center' sx={{ minHeight: "calc(100vh - 68px)" }}>
               <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                  <Grid container spacing={2} alignItems='center' justifyContent='center'>
                     <Grid item xs={12}>
                        <AuthLogin error={searchParams?.error} callbackUrl={searchParams?.callbackUrl} />
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}

export default LoginPage
