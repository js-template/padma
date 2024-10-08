"use client"
import { blockComponentMapping } from "../../lib/component.map"

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
         {blocks?.map((block: any, index: number) => {
            const BlockConfig = blockComponentMapping[block.__component]
            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               return <ComponentToRender key={index} data={block} language={language} {...block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </>
   )
}
