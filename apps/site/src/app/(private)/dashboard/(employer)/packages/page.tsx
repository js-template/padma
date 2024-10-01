import type { Metadata } from "next"
import PackagesPageBody from "./PageBody"

export const metadata: Metadata = {
   title: "Packages | MetaJobs",
   description: "Packages page for MetaJobs"
}

const PackagesPage = async () => {
   return <PackagesPageBody />
}

export default PackagesPage
