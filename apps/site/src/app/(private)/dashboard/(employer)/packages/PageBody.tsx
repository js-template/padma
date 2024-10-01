"use client"
import { Box, Grid, Typography } from "@mui/material"
import toast from "react-hot-toast"
import { membershipMonthlyPlanData } from "./data"
import { PricePlanWithFeatures } from "ui"
import { useState } from "react"

const PackagesPageBody = () => {
   const [loading, setLoading] = useState<boolean>(false)

   // *** on get started button click
   const handleGetStarted = async (type: string) => {
      setLoading(true)

      setTimeout(() => {
         toast.success(`Get started button clicked for : ${type} plan`)
         setLoading(false)
      }, 2000)
   }

   return (
      <Box
         sx={{
            pt: 2,
            pb: 5
         }}>
         <Box>
            <Typography
               variant='h3'
               sx={{
                  mb: 2
               }}>
               We Have Exclusive Plan In Our Pricing
            </Typography>
            <Typography variant='subtitle2'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue feugiat adipiscing urna mauris sit leo
               consectetur tortor, dui.{" "}
            </Typography>
         </Box>

         <Grid
            container
            spacing={3}
            sx={{
               mt: 3
            }}>
            {membershipMonthlyPlanData &&
               membershipMonthlyPlanData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                     <PricePlanWithFeatures
                        data={item}
                        formLoader={loading}
                        currentPlan={2}
                        handleGetStarted={handleGetStarted}
                        isLoader={false}
                     />
                  </Grid>
               ))}

            {/* loading */}
            {!membershipMonthlyPlanData &&
               [1, 2, 3].map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                     <PricePlanWithFeatures
                        currentPlan={2}
                        data={{
                           id: 0,
                           title: "Loading...",
                           description: "Loading...",
                           price: 0,
                           // FIXME: This is a temporary solution
                           features: [
                              {
                                 title: "Access to essential features"
                              },
                              {
                                 title: "Up to 5 users"
                              },
                              {
                                 title: "10 GB of storage"
                              },
                              {
                                 title: "Email support"
                              },
                              {
                                 title: "Basic analytics and reporting"
                              },
                              {
                                 title: "Community access"
                              }
                           ]
                        }}
                        isLoader={true}
                     />
                  </Grid>
               ))}

            {/* Empty */}
            {membershipMonthlyPlanData && membershipMonthlyPlanData.length === 0 && (
               <Grid item xs={12} sm={12}>
                  <Box sx={{ textAlign: "center", width: "100%" }}>
                     <Typography
                        variant='body1'
                        sx={{ color: "text.secondary", fontSize: "20px", textAlign: "center" }}>
                        No subscription found
                     </Typography>
                  </Box>
               </Grid>
            )}
         </Grid>
      </Box>
   )
}

export default PackagesPageBody
