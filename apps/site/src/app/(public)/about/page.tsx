import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import type { Metadata } from "next"
import NextLink from "next/link"
import { Fragment } from "react"

// FIXME: Delete this file
export const metadata: Metadata = {
   title: "About | MUI Next.js Boilerplate",
   description: "About page for MUI Next.js Boilerplate"
}

export default function About() {
   return (
      <Fragment>
         <Typography variant='h4' component='h1' sx={{ my: 4 }}>
            Material UI - Next.js Boilerplate in TypeScript
         </Typography>
         <Box sx={{ maxWidth: "sm" }}>
            <Button variant='contained' component={NextLink} href='/'>
               Go to the home page
            </Button>
         </Box>
      </Fragment>
   )
}
