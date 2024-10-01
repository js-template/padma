import { IJobDetailsPageData } from "@/type/job-deatils"

export const jobDetailsPageData: IJobDetailsPageData = {
   pageTitle: "Job Details",
   backgroundImage: "/images/jobs/findJob.png",
   titleCard: {
      title: "Senior Software Engineer",
      // text: 'Main Category Name / Sub Category Name',
      category: "Software Development",
      subCategory: "Web Development",
      logo: "/images/jobs-details/company-logo.png",
      share: [
         {
            id: 1,
            icon: "ri:facebook-fill",
            link: "#",
            name: "Facebook"
         },
         {
            id: 5,
            icon: "mdi:twitter",
            link: "#",
            name: "Twitter"
         },
         {
            id: 3,
            icon: "mdi:instagram",
            link: "#",
            name: "Instagram"
         },
         {
            id: 4,
            icon: "akar-icons:linkedin-fill",
            link: "#",
            name: "Linkedin"
         },
         {
            id: 2,
            icon: "solar:share-bold",
            link: "#",
            name: "Share"
         }
      ]
   },
   jobOverview: {
      title: "Job Overview",
      data: [
         {
            id: 1,
            title: "Job Posted",
            datePosted: "2 days ago",
            icon: "uil:calender"
         },
         {
            id: 2,
            title: "Deadline",
            datePosted: "2 days ago",
            icon: "iconamoon:clock-light"
         },
         {
            id: 3,
            title: "Job Posted",
            datePosted: "2 days ago",
            icon: "iconamoon:file-document"
         },
         {
            id: 4,
            title: "Job Type",
            datePosted: "2 days ago",
            icon: "pajamas:work"
         },
         {
            id: 5,
            title: "Working Hours",
            datePosted: "2 days ago",
            icon: "ph:watch-light"
         },
         {
            id: 6,
            title: "Salary",
            datePosted: "2 days ago",
            icon: "mdi:dollar"
         },
         {
            id: 7,
            title: "Job Location",
            datePosted: "4529 Feathers Hooves Drive, New York",
            icon: "ph:map-pin"
         }
      ]
   },
   description: {
      title: "Job Description",
      data: [
         {
            id: 1,
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            `
         },
         {
            id: 2,
            text: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' `
         }
      ]
   },
   requirements: {
      title: "Requirements",
      data: [
         {
            id: 1,
            text: "Lorem, ipsum dolor sit amet consectetur."
         },
         {
            id: 2,
            text: "Lorem, ipsum dolor sit amet consectetur."
         },
         {
            id: 3,
            text: "Lorem, ipsum dolor sit amet consectetur."
         },
         {
            id: 4,
            text: "Lorem, ipsum dolor sit amet consectetur."
         },
         {
            id: 5,
            text: "Lorem, ipsum dolor sit amet consectetur."
         }
      ]
   },
   skills: {
      title: "Key Skills",
      data: ["React", "Node", "MongoDB", "Express"]
   },
   company: {
      logo: "/images/jobs-details/company-logo.png",
      companyName: "Company Name",
      tagLine: "loreum ipsum dolor sit amet",
      email: "example@gmail.com",
      phone: "+1234567890",
      website: "www.example.com",
      facebook: "#",
      twitter: "https://twitter.com/"
   }
}
