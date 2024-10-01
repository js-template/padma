import type { Metadata } from "next";
import { useSession } from "next-auth/react";
import PageBody from "./PageBody";

export const metadata: Metadata = {
   title: "My Resume | MetaJobs",
   description: "Add a new resume page seo description"
};

const AddResumePage = async () => {
   return <PageBody session={useSession} />;
};

export default AddResumePage;
