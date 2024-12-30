import type { Metadata } from "next"
import RegisterBody from "./body"

export const metadata: Metadata = {
   title: "Register - MetaJobs",
   description: "MetaJobs is a job board for developers, designers, and other tech professionals."
}

const Register = async () => {
   return <RegisterBody />
}
export default Register
