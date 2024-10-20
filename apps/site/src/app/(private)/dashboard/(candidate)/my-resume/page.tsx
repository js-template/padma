import type { Metadata } from "next"
import { useSession } from "next-auth/react"
import PageBody from "./PageBody"

// FIXME: Should be deleted
export const metadata: Metadata = {
   title: "My Resume | MetaJobs",
   description: "Add a new resume page seo description"
}

const AddResumePage = async () => {
   return <PageBody useSession={useSession} />
}

export default AddResumePage
