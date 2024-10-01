"use client"
import { useGlobalContext } from "@/context/store"
import { Box } from "@mui/material"
import { AddCompanyForm } from "ui"

const AddCompanyPageBody = () => {
   const { direction } = useGlobalContext()
   return (
      <Box
         sx={{
            py: 2
         }}>
         <AddCompanyForm direction={direction} />
      </Box>
   )
}

export default AddCompanyPageBody
