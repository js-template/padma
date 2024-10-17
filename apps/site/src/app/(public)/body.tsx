"use client"
import { getPublicComponents } from "@padma/metajob-ui"

interface DynamicBlockRendererProps {
   initialData: any
   language?: string
}

export default function DynamicBlockRenderer({ initialData, language }: DynamicBlockRendererProps) {
   // Get blocks from the data
   const blocks = initialData?.data?.attributes?.blocks || []

   return (
      <>
         {/* Render blocks */}
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               return <ComponentToRender key={index} language={language} data={block} {...block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </>
   )
}
