// *** table head ***
export const headCells = [
   {
      label: "Job Title",
      sort: true,
      align: "left"
   },
   {
      label: "Cover Letter",
      sort: true,
      align: "left"
   },
   {
      label: "Company",
      sort: true,
      align: "left"
   },
   {
      label: "Location",
      sort: true,
      align: "left"
   },
   {
      label: "Status",
      sort: true,
      align: "left"
   },
   {
      label: "Action",
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
      title: "Software Engineer",
      coverLetter: "I am a software engineer",
      company: "Google",
      location: "California",
      status: "Applied"
   },
   {
      title: "Frontend Developer",
      coverLetter: "I am a frontend developer. lorem ipsum dolor sit amet, consectetur adipiscing elit",
      company: "Facebook",
      location: "California",
      status: "Applied"
   },
   {
      title: "Backend Developer",
      coverLetter: "I am a backend developer",
      company: "Amazon",
      location: "California",
      status: "Applied"
   },
   {
      title: "Fullstack Developer",
      coverLetter: "I am a fullstack developer",
      company: "Microsoft",
      location: "California",
      status: "Applied"
   },
   {
      title: "DevOps Engineer",
      coverLetter: "I am a devops engineer",
      company: "Apple",
      location: "California",
      status: "Applied"
   },
   {
      title: "Data Scientist",
      coverLetter: "I am a data scientist",
      company: "Netflix",
      location: "California",
      status: "Applied"
   }
] as {
   title: string
   coverLetter: string
   company: string
   location: string
   status: string
}[]

// *** box header data ***
export const boxHeaderData = {
   title: "Applied Jobs",
   searchPlaceholder: "Search",
   packageLeft: {
      label: "You have 3 Alar listing left",
      button: "Upgrade"
   },
   selectStatus: {
      placeholder: "Select Status",
      options: [
         {
            label: "All",
            value: 1
         },
         {
            label: "Shortlisted",
            value: 2
         },
         {
            label: "Rejected",
            value: 3
         },
         {
            label: "Pending",
            value: 4
         }
      ],
      default: 0
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
