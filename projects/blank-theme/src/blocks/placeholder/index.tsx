"use client"
const PlaceholderComponent = ({ block }: { block: any }) => {
   return (
      <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem 0" }}>
         <h1> dddd</h1>
         <pre>{JSON.stringify(block.__component, null, 2)}</pre>
      </div>
   )
}

export default PlaceholderComponent
