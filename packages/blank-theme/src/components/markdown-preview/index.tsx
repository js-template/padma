import { hexToRGBA } from "../../lib/hex-to-rgba"
import { BoxProps, styled } from "@mui/material"

import { MarkdownPreviewProps } from "@uiw/react-markdown-preview/nohighlight"
import MDEditor from "@uiw/react-md-editor"

const CustomStyled = styled(MDEditor.Markdown)(({ theme }) => ({
   "&.wmde-markdown": {
      backgroundColor: "transparent !important",
      color: theme.palette.text.primary
   },
   "& p": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& h1, h2, h3, h4, h5, h6": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "20px",
      fontWeight: 600,
      color: theme.palette.text.primary,

      "& a.anchor": {
         display: "none"
      }
   },
   "& h2": {
      ...(theme.palette.mode === "dark" && {
         borderBottom: `1px solid ${hexToRGBA(theme.palette.primary.contrastText, 0.3)} !important`
      })
   },
   "& blockquote": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary,
      borderLeft: "4px solid",
      borderColor: theme.palette.primary.main,
      padding: "0 0 0 16px",
      margin: "0"
   },
   "& ul": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& ol": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& li": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& a": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.primary.main
   },
   "& table": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& th": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 600,
      color: theme.palette.text.primary
   },
   "& td": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& code": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   },
   "& pre": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
      color: theme.palette.text.secondary
   }
}))

const MarkdownCustomPreview = ({ ...props }: { sx?: BoxProps["sx"] } & MarkdownPreviewProps) => {
   return <CustomStyled {...props} />
}

export default MarkdownCustomPreview
