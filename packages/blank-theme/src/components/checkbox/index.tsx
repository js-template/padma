"use client"
import { ICheckboxProps } from "../../types/checkbox"
import { Box, FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material"

export default function Checkbox({ label, checked, onChange, sx, fontSize, fontWeight, color }: ICheckboxProps) {
   return (
      <FormControlLabel
         sx={{
            color: (theme) => color || theme.palette.text.disabled,
            fontSize: fontSize || 16,
            fontWeight: fontWeight || 400,

            ...sx
         }}
         control={
            <MuiCheckbox
               icon={
                  <Box
                     sx={{
                        bgcolor: (theme) => theme.palette.divider,
                        height: 24,
                        width: 24,
                        transform: "scale(0.8)",
                        borderRadius: 1
                     }}
                  />
               }
               sx={{
                  py: 0
               }}
               disableRipple
               checked={checked}
               onChange={onChange}
            />
         }
         label={label}
      />
   )
}
