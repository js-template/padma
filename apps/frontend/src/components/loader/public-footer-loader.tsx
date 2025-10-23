"use client"
import React from "react"
import { Divider, Grid, Container, Stack, Skeleton } from "@mui/material"

export const PublicFooterLoader = () => {
   return (
      <Stack>
         <Container maxWidth='lg' sx={{ py: 4 }}>
            <Grid container spacing={4}>
               <Grid item xs={12} sm={6} md={3}>
                  <Stack
                     gap={2}
                     pr={{
                        xs: 0,
                        md: 4,
                        justifyContent: "center"
                     }}>
                     <Skeleton variant='text' width={100} height={36} />
                     <Skeleton variant='rectangular' width={"100%"} height={80} />
                     <Skeleton variant='text' width={100} height={27} />
                     <Skeleton variant='text' width={100} height={27} />
                     <Skeleton variant='text' width={100} height={27} />
                  </Stack>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Stack gap={2}>
                     <Skeleton variant='text' width={100} height={36} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                  </Stack>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Stack gap={2}>
                     <Skeleton variant='text' width={100} height={36} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                  </Stack>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Stack gap={2}>
                     <Skeleton variant='text' width={100} height={36} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                     <Skeleton variant='text' height={24} />
                  </Stack>
               </Grid>
            </Grid>

            <>
               <Divider
                  color={"#FFF"}
                  sx={{
                     my: 4
                  }}
               />
               <Stack direction={"row"} justifyContent={"space-between"}>
                  <Skeleton variant='text' width={200} height={28} />
                  <Stack direction={"row"} gap={2}>
                     <Skeleton variant='rounded' width={28} height={28} />
                     <Skeleton variant='rounded' width={28} height={28} />
                     <Skeleton variant='rounded' width={28} height={28} />
                  </Stack>
               </Stack>
            </>
         </Container>
      </Stack>
   )
}
