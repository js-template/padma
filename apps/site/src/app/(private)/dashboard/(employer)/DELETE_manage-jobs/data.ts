// *** table head ***

// TODO: Should move to diectionary folder
export const headCells = [
   {
      label: "Job Title",
      sort: true,
      align: "left"
   },
   {
      label: "Date Posted",
      sort: true,
      align: "left"
   },
   {
      label: "Deadline",
      sort: true,
      align: "left"
   },
   {
      label: "Applicants",
      sort: true,
      align: "left"
   },
   {
      label: "Status",
      sort: false,
      align: "left"
   },
   {
      label: "Results",
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
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "In Active"
   },
   {
      id: 2,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "Active"
   },
   {
      id: 3,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "In Active"
   },
   {
      id: 4,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "Active"
   },
   {
      id: 5,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "In Active"
   },
   {
      id: 6,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "Active"
   },
   {
      id: 7,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "Active"
   },
   {
      id: 8,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "In Active"
   },
   {
      id: 9,
      jobTitle: "Software Engineer",
      datePosted: "12/12/2021",
      deadline: "12/12/2021",
      applicants: 10,
      status: "Active"
   }
] as {
   id: number
   jobTitle: string
   datePosted: string
   deadline: string
   applicants: number
   status: "Active" | "In Active"
   results: string
}[]

// *** box header data ***
export const boxHeaderData = {
   title: "Manage Jobs",
   searchPlaceholder: "Search",
   button: "Add New Job",
   buttonIcon: "mdi:plus",
   buttonLink: "/dashboard/post-job",
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
