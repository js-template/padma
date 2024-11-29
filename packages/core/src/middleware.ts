export { auth as middleware } from "auth"

// all the dashboard routes are protected
export const config = { matcher: ["/dashboard/:path*"] }
