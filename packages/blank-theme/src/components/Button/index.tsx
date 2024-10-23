import { Button as MuiButton } from "@mui/material"
import { ElementType } from "react"

// mui button props
type MuiButtonProps<C extends ElementType = "button"> = {
   children: React.ReactNode
   component?: C
} & React.ComponentPropsWithoutRef<C> &
   React.ComponentProps<typeof MuiButton>

export const Button = <C extends ElementType = "button">(props: MuiButtonProps<C>) => {
   return <MuiButton {...props}>{props.children}</MuiButton>
}

// import { Button as MuiButton } from "@mui/material"

// // mui button props
// type MuiButtonProps = {
//    children: React.ReactNode
// } & React.ComponentProps<typeof MuiButton>

// export const Button = (props: MuiButtonProps) => {
//    return <MuiButton {...props}>{props.children}</MuiButton>
// }
