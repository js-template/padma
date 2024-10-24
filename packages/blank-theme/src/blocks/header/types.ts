export type linkItemProps = {
   label: string
   link: string
   type?: string
   target?: string
   icon: string
   disabled?: boolean
   child?: {
      label: string
      link: string
      target: string
      icon: string
      disabled: boolean
   }[]
}
