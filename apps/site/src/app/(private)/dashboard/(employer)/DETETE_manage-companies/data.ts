// TODO: This file should fully delete

// *** table head ***
export const headCells = [
   {
      label: "Company",
      sort: true,
      align: "left"
   },
   {
      label: "Created At",
      sort: true,
      align: "left"
   },
   {
      label: "Published At",
      sort: true,
      align: "left"
   },
   // {
   //    label: "Status",
   //    sort: true,
   //    align: "left"
   // },
   {
      label: "Actions",
      sort: false,
      align: "center"
   }
] as {
   label: string
   sort: boolean
   align: "left" | "center" | "right"
}[]

// *** table rows ***
export const rows = [
   {
      id: 1,
      company: "Google",
      createdAt: "2021-09-25",
      publishedAt: "2021-09-25",
      status: "Approved"
   },
   {
      id: 2,
      company: "Facebook",
      createdAt: "2021-09-25",
      publishedAt: "2021-09-25",
      status: "Pending"
   },
   {
      id: 3,
      company: "Amazon",
      createdAt: "2021-09-25",
      publishedAt: "2021-09-25",
      status: "Rejected"
   },
   {
      id: 4,
      company: "Microsoft",
      createdAt: "2021-09-25",
      publishedAt: "2021-09-25",
      status: "Approved"
   },
   {
      id: 5,
      company: "Apple",
      createdAt: "2021-09-25",
      publishedAt: "2021-09-25",
      status: "Pending"
   }
] as {
   id: number
   company: string
   createdAt: string
   publishedAt: string
   status: "Approved" | "Pending" | "Rejected"
}[]

// *** box header data ***
export const boxHeaderData = {
   title: "Manage Companies",
   searchPlaceholder: "Search",
   button: "Add New Company",
   buttonIcon: "mdi:plus",
   buttonLink: "/dashboard/add-company",
   packageLeft: {
      label: "You have 3 Alar listing left",
      button: "Upgrade"
   },
   showingPerPage: {
      label: "Showing per page",
      options: [10, 20, 30, 40, 50],
      default: 10
   }
}

// *** drawer data ***
export const drawerData = {
   title: "Add Note",
   icon: "mdi:clear-circle-outline",
   button: "Add Note",
   placeholder: "Add a note here",
   label: "Note"
}
