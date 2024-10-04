# Padma- Multipurpose Listing Solution 

## License and Usage
This project includes a premium theme that is governed by the [End-User License Agreement (EULA)](LICENSE.md). By using or installing the premium theme, you agree to the terms of the EULA.


## **What is Padma?**

**Introduction:**  
Padma is a comprehensive full-stack listing solution designed to be flexible and adaptable for various use cases. Whether you need a platform for job listings, classified ads, property listings, or any other type of directory, Padma has you covered. It provides a ready-to-use system that combines both frontend and backend in a seamless, customizable solution. Our goal is to provide businesses with the tools they need to create a fast, scalable, and user-friendly listing platform.

---

## **Project Goal**

| Theme Name       | Type                        | Status      |
|------------------|-----------------------------|-------------|
| **Metajob**      | [Job Board Solution ]()        | Released    |
| **Metaads**      | Classified Ads Listing       | In Plan     |
| **Metaproperty** | Property Listing Solution    | In Plan     |

---

## **Product Features:**

1. **Full-Stack Solution**  
   Padma includes a complete solution, covering both frontend (Next.js) and backend (Strapi), with all APIs provided for seamless integration.
   
2. **Multilingual Support**  
   The platform is built to support multiple languages, enabling you to reach a global audience with ease.
   
3. **Lightning-Fast Performance**  
   Optimized for speed, Padma ensures that your listing pages load quickly, offering an exceptional user experience.
   
4. **Fully Customizable**  
   Highly flexible architecture allows developers to easily tailor the platform to suit various industries and specific project needs.
   
5. **Full Site Editing**  
   Admins and users can easily manage and edit all aspects of the site, providing full control over content and appearance.
   
6. **Real-Time Features**  
   Padma supports real-time updates, ensuring that new listings, messages, and notifications are instantly reflected on the site.
   
7. **Live Chat**  
   Integrated chat functionality allows users to communicate in real-time, improving engagement and customer support.
   
8. **Paid Membership Support**  
   Monetize your platform with paid memberships or subscriptions, enabling access to exclusive content or services.
   
9. **Dark and Light Mode**  
   Choose between dark or light mode to provide a personalized user experience.
   
10. **Easy to Maintain**  
    Designed with simplicity in mind, the platform is easy to maintain, even for non-technical users.

---

## **Tech Stack:**

- **Backend:**  Powered by a headless Strapi CMS with PostgreSQL as the database. [Learn more about Strapi](https://strapi.io/documentation).
   
- **Frontend:**  Built with Next.js for fast rendering and MUI for a modern, responsive user interface.

### **Core Structure:**

- **`apps/backend:`**  
  └── The backend is built with Strapi, providing APIs to power the frontend.

- **`apps/site:`**  
  └── This is the frontend of the project, built using Next.js and MUI.

- **`apps/packages:`**  
  └── Contains reusable components, such as themes.

    - **`@padma/metajob-ui:`**  
      └── This package includes the theme for the job listing solution.


## **How It Works:**

Padma leverages Strapi as a headless CMS to manage content, while the frontend themes (built with Next.js and MUI) pull data through APIs and render dynamic, high-performance HTML in the browser using React. The backend handles all the business logic and API integrations, while the frontend focuses on displaying content efficiently.

## **Getting Started:**

If you’re new to development, don’t worry! This guide will help you set up the project with ease.

### Step 1: Fork the Repository
Click the "Fork" button at the top right of this GitHub repository to copy it to your account.

### Step 2: Set Up Environment Variables
For both the `apps/backend` and `apps/site` folders, create an `.env` file and add the required environment variables. The `.env.example` files will guide you on what’s needed.

### Step 3: Run the Backend
To start the backend (Strapi CMS), navigate to the `apps/backend` directory and run the following commands:

```bash
pnpm install
pnpm run dev
```

Step 4: Run the Frontend
In another terminal, navigate to the apps/site directory and run:

```bash
pnpm install
pnpm run dev
```
This will launch the frontend, and the site will be accessible at http://localhost:3000.

Step 5: Explore and Customize
Once everything is up and running, you can begin exploring the code, customizing themes, and adding your own content through the Strapi admin panel at http://localhost:1337/admin.

For more details on setting up and customizing the project, please refer to the full documentation linked below.



