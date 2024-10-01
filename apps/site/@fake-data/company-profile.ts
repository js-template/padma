import { ICompanyProfileData } from "@/type/company-profile"

export const companyProfileData: ICompanyProfileData = {
   name: "ABC Company",
   tagline: "Short Text About Company Lorem Ipsum Text",
   phone: "123-456-7890",
   email: "info@example.com",
   logo: "/images/jobs-details/company-logo.png",
   website: "#",
   facebook: "#",
   twitter: "#",
   about: [
      {
         id: 1,
         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      },
      {
         id: 1,
         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      }
   ],
   industry: "Technology",
   companySize: "100-500 ",
   avgSalary: "$5k-$10k",
   location: "New York, NY",
   jobs: [
      {
         id: 1,
         tags: ["Full Time", "Remote"],
         jobTitle: "Senior Product Designer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux1"
      },
      {
         id: 2,
         tags: ["Full Time", "Remote", "Part Time"],
         jobTitle: "Senior UI/UX Designer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux2"
      },
      {
         id: 3,
         tags: ["Full Time", "Remote"],
         jobTitle: "Senior Frontend Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux3"
      },
      {
         id: 4,
         tags: ["Full Time", "Remote"],
         jobTitle: "Senior Backend Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux4"
      },
      {
         id: 5,
         tags: ["Full Time", "Remote", "Part Time"],
         jobTitle: "Senior Fullstack Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux5"
      },
      {
         id: 6,
         tags: ["Full Time", "Contract Base"],
         jobTitle: "Senior MERN Stack Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux6"
      },
      {
         id: 7,
         tags: ["Part Time", "Contract Base", "Freelance"],
         jobTitle: "Senior MEAN Stack Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux7"
      },
      {
         id: 8,
         tags: ["Contract Base", "Freelance"],
         jobTitle: "Senior MEVN Stack Developer",
         location: "Dhaka, Bangladesh",
         vacancy: 2,
         salary: "34K - 38K",
         datePosted: "1d ago",
         logo: "web-ui-ux8"
      }
   ],
   comments: [
      {
         id: 1,
         name: "John Doe",
         rating: 5,
         date: "May 9, 2021 at 10:00 am",
         comment: "Great company to work for. I love the culture and the people.",
         avatar: "/images/candidate/candidate-1.png"
      },
      {
         id: 2,
         name: "John Doe",
         rating: 2,
         date: "May 9, 2021 at 10:00 am",
         comment: "Great company to work for. I love the culture and the people.",
         avatar: "/images/candidate/candidate-2.png"
      },
      {
         id: 3,
         name: "John Doe",
         rating: 4,
         date: "May 9, 2021 at 10:00 am",
         comment: "Great company to work for. I love the culture and the people.",
         avatar: "/images/candidate/candidate-3.png"
      }
   ]
}
