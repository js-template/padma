export const mainMenu = [
   {
      title: "Home",
      link: "/",
      target: "_self",
      icon: "home",
      disabled: false
   },
   {
      title: "Find Job",
      link: "/find-job",
      target: "_self",
      icon: "info",
      disabled: false
   },
   {
      title: "Company",
      link: "/company",
      target: "_self",
      icon: "contact",
      disabled: false
   },
   {
      title: "Candidate",
      link: "/candidate",
      target: "_self",
      icon: "info",
      disabled: false
   },
   {
      title: "Career Advice",
      link: "/career-advice",
      target: "_self",
      icon: "contact",
      disabled: false
   },
   {
      title: "Contact Us",
      link: "/contact-us",
      target: "_self",
      icon: "contact",
      disabled: false
   }
]

// *** language menu
export const langMenu = [
   {
      title: "English",
      link: "/",
      target: "_self",
      icon: "en",
      disabled: false
   },
   {
      title: "Arabic",
      link: "/ar",
      target: "_self",
      icon: "ar",
      disabled: false
   },
   {
      title: "Spanish",
      link: "/es",
      target: "_self",
      icon: "es",
      disabled: false
   }
]

export const sidebarMenu = [
   {
      title: "Sign In",
      link: "/login",
      target: "_self",
      icon: "login",
      disabled: false
   },
   {
      title: "Sign Up",
      link: "/register",
      target: "_self",
      icon: "signup",
      disabled: false
   }
]

export const userMenu = [
   {
      title: "Profile",
      link: "/my-profile",
      target: "_self",
      icon: "profile",
      disabled: false
   },
   {
      title: "Dashboard",
      link: "/dashboard",
      target: "_self",
      icon: "dashboard",
      disabled: false
   },
   {
      title: "Bookmarks",
      link: "/dashboard/bookmarks",
      target: "_self",
      icon: "settings",
      disabled: false
   }
   // {
   //    title: "Logout",
   //    link: "/logout",
   //    target: "_self",
   //    icon: "logout",
   //    disabled: false
   // }
]

export type MenuType = {
   title: string
   link: string
   target?: string
   icon: string
   badge?: string
   disabled?: boolean
   child?: {
      title: string
      link: string
      target: string
      icon: string
      disabled: boolean
   }[]
}

// TODO: This menu should be fully dynamics
// *** candidate sidebar menu
export const candidateSidebarMenu = [
   {
      title: "Dashboard",
      link: "/dashboard",
      target: "_self",
      icon: "tabler:layout-dashboard",
      disabled: false
   },
   {
      title: "Messages",
      link: "/dashboard/messages",
      target: "_self",
      icon: "tabler:messages",
      badge: "48",
      disabled: false
   },
   {
      title: "Bookmarks",
      link: "/dashboard/bookmarks",
      target: "_self",
      icon: "tabler:heart",
      disabled: false
   },
   {
      title: "My Resume",
      link: "/dashboard/my-resume",
      target: "_self",
      icon: "tabler:address-book",
      disabled: false
   },
   {
      title: "My Profile",
      link: "/dashboard/my-profile",
      target: "_self",
      icon: "solar:user-linear",
      disabled: false
   }
] as MenuType[]

// *** employer sidebar menu
export const employerSidebarMenu = [
   {
      title: "Dashboard",
      link: "/dashboard",
      target: "_self",
      icon: "tabler:layout-dashboard",
      disabled: false
   },
   {
      title: "My Companies",
      link: "/dashboard/manage-companies",
      target: "_self",
      icon: "tabler:address-book"
      // child: [
      //    {
      //       title: "All Companies",
      //       link: "/dashboard/manage-companies",
      //       target: "_self"
      //    },
      //    {
      //       title: "Add Company",
      //       link: "/dashboard/add-company",
      //       target: "_self"
      //    }
      // ]
   },

   {
      title: "My Jobs",
      link: "/dashboard/manage-jobs",
      target: "_self",
      icon: "tabler:bell",
      disabled: false
   },
   {
      title: "Messages",
      link: "/dashboard/messages",
      target: "_self",
      icon: "tabler:messages",
      badge: "48",
      disabled: false
   },

   {
      title: "My Profile",
      link: "/dashboard/my-profile",
      target: "_self",
      icon: "solar:user-linear",
      disabled: false
   },
   {
      title: "Packages",
      link: "/dashboard/packages",
      target: "_self",
      icon: "solar:settings-linear",
      disabled: false
   }
] as MenuType[]
