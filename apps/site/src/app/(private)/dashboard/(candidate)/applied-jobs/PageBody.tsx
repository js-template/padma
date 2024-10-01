"use client"
import { useGlobalContext } from "@/context/store"
import { FormControl, MenuItem, Pagination, Select, TextField, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import _ from "lodash"
import { Fragment, useState } from "react"
import { AllAppliedJobsTable, CIcon } from "ui"
import { boxHeaderData, headCells } from "./data"
export type IAppliedJobsData = {
   data: {
      id: number
      attributes: {
         cover_letter: string
         status: "Pending" | "Shortlisted" | "Rejected"
         user: {
            data: {
               id: number
               attributes: {
                  email: string
                  username: string
               }
            }
         }
         job: {
            data: {
               id: number
               attributes: {
                  title: string
                  slug: string
                  location: {
                     description: string
                  }
                  company: {
                     data: {
                        id: number
                        attributes: {
                           name: string
                           slug: string
                        }
                     }
                  }
               }
            }
         }
      }
   }[]
}
export default function AppliedJobsPageBody({ data }: { data: IAppliedJobsData }) {
   const theme = useTheme()
   const { direction } = useGlobalContext()
   const [selectAll, setSelectAll] = useState(false)
   return (
      <Fragment>
         <Box
            sx={{
               p: 3,
               borderBottom: "1px solid",
               borderColor: "divider",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: 3
            }}>
            <Typography
               variant='body1'
               fontWeight={700}
               fontSize={{
                  xs: "1.25rem",
                  sm: "1.5rem"
               }}
               lineHeight={"24px"}>
               {boxHeaderData?.title}
            </Typography>
         </Box>
         {/* table data filter actions input fields */}
         <Box
            sx={{
               px: 3,
               py: 2,
               borderBottom: "1px solid",
               borderColor: "divider",
               display: "flex",
               gap: 3,
               alignItems: "center",
               flexWrap: "wrap"
            }}>
            {/* Search input */}
            <FormControl size='small'>
               <TextField
                  id='outlined-basic'
                  placeholder={boxHeaderData?.searchPlaceholder}
                  variant='outlined'
                  InputProps={{
                     endAdornment: (
                        <CIcon
                           icon='iconoir:search'
                           size={24}
                           sx={{
                              color: theme.palette.text.secondary
                           }}
                        />
                     )
                  }}
                  sx={{
                     "& .MuiInputBase-input": {
                        py: 1.2
                     },
                     "& .MuiInputBase-root": {
                        minHeight: "40px !important",
                        pl: direction === "rtl" ? "10px !important" : "0px !important"
                     }
                  }}
               />
            </FormControl>
            {/* Select status input */}
            <FormControl size='small'>
               <Select
                  labelId='select-status'
                  id='select-status'
                  IconComponent={() => (
                     <CIcon
                        icon='iconamoon:arrow-down-2-duotone'
                        sx={{
                           color: theme.palette.text.secondary,
                           mr: direction === "rtl" ? 0 : 1,
                           ml: direction === "ltr" ? 0 : 1
                        }}
                     />
                  )}
                  defaultValue={boxHeaderData?.selectStatus?.default}
                  sx={{
                     minWidth: {
                        xs: "100%",
                        sm: "270px"
                     },
                     backgroundColor: (theme) => theme.palette.background.default
                  }}>
                  {/* Select status options */}
                  <MenuItem value={0}>Select Status</MenuItem>
                  {_.map(boxHeaderData?.selectStatus?.options, (option, index) => (
                     <MenuItem key={index} value={option.value}>
                        {option.label}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            {/* Package left limit job post */}
            {/* <Box
               sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center"
               }}>
               <Typography variant='body1' fontWeight={500} lineHeight={"24px"}>
                  {boxHeaderData?.packageLeft?.label}
               </Typography>
               <Button
                  color='primary'
                  variant='outlined'
                  sx={{
                     borderRadius: "8px",
                     textTransform: "capitalize",
                     boxShadow: "none"
                  }}>
                  {boxHeaderData?.packageLeft?.button}
               </Button>
            </Box> */}
         </Box>

         {/* Table */}
         <AllAppliedJobsTable
            headCells={headCells}
            rows={data}
            selectAll={selectAll}
            setSelectAll={setSelectAll}
            direction={direction as "ltr" | "rtl"}
         />

         {/* Box Footer */}
         <Box
            sx={{
               py: 2.5,
               px: 3,
               borderTop: "1px solid",
               borderColor: "divider",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center"
            }}>
            <Box
               sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center"
               }}>
               <Typography variant='body1' fontWeight={500} lineHeight={"24px"}>
                  {boxHeaderData?.showingPerPage?.label}
               </Typography>
               <FormControl size='small'>
                  <Select
                     labelId='per_page'
                     id='per_page'
                     autoWidth
                     defaultValue={boxHeaderData?.showingPerPage?.default}
                     IconComponent={() => <CIcon icon='iconamoon:arrow-down-2-duotone' size={36} />}
                     sx={{
                        backgroundColor: (theme) => theme.palette.background.default,
                        borderRadius: "8px",
                        borderColor: "divider",
                        pl: 2,
                        pr: 1.5,
                        "& .MuiSelect-select": {
                           px: 0 + "!important",
                           py: 1
                        }
                     }}>
                     {_.map(boxHeaderData?.showingPerPage?.options, (option, index) => (
                        <MenuItem key={index} value={option}>
                           {option}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </Box>
            <Box>
               <Pagination
                  count={10}
                  variant='text'
                  shape='rounded'
                  color='primary'
                  size='large'
                  siblingCount={0}
                  sx={{
                     "& li": {
                        borderRadius: 0,
                        height: "40px",
                        margin: 0
                     },
                     "& .MuiButtonBase-root": {
                        margin: 0,
                        border: "none",
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        borderRadius: 0,
                        "&:hover": {
                           backgroundColor: (theme) => theme.palette.action.hover
                        }
                     },
                     "& li:last-child .MuiButtonBase-root": {
                        borderRadius: "0px 6px 6px 0px",
                        borderRight: "1px solid",
                        borderColor: "divider"
                     },
                     "& li:first-child .MuiButtonBase-root": {
                        borderRadius: "6px 0px 0px 6px"
                     },
                     "& .MuiPaginationItem-ellipsis": {
                        borderTop: "1px solid",
                        borderBottom: "1px solid",
                        borderLeft: "1px solid",
                        borderColor: "divider",
                        height: "100%",
                        margin: 0,
                        borderRadius: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }
                  }}
               />
            </Box>
         </Box>
      </Fragment>
   )
}
