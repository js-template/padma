import type { Metadata } from "next"
import PackagesPageBody from "./PageBody"
// FIXME employer folder shou not be here
export const metadata: Metadata = {
   title: "Packages | MetaJobs",
   description: "Packages page for MetaJobs"
}

const PackagesPage = async () => {
   return <PackagesPageBody />
}

export default PackagesPage
