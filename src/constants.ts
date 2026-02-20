import { Experience, Education, Skill, Project } from './types';

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Norman Carriers",
    role: "Transport Allocator",
    location: "Revesby NSW, Australia",
    period: "September 2023 – December 2024",
    responsibilities: [
      "Coordinated and allocated a fleet of vehicles for daily transport operations, ensuring optimal resource utilization and on-time deliveries.",
      "Maintained accurate tracking and monitoring of trailer locations to support efficient operations.",
      "Sent delay notifications and estimated times of arrival (ETAs) to the CSR team.",
      "Updated and maintained wharf slot and empty slot fee spreadsheets.",
      "Coordinated with depots via email to submit and follow up on penalty fee disputes.",
      "Checked and identified reusable containers using Matchbox.",
      "Pre-planned transport operations for the following day.",
      "Prepared and emailed end-of-day (EOD) reports."
    ]
  },
  {
    company: "Municipality of Sibulan",
    role: "Municipal Electrical Maintenance Personnel",
    location: "Negros Oriental, Philippines",
    period: "September 2021 – June 2023",
    responsibilities: [
      "Coordinated with supervisors and other municipal staff to complete electrical tasks efficiently.",
      "Diagnosed and resolved electrical faults and system issues in public facilities and municipal buildings.",
      "Performed routine inspections and preventive maintenance to ensure electrical safety and compliance.",
      "Cleaned, organized, and properly maintained electrical tools and equipment after use."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Negros Oriental State University Main Campus I",
    degree: "Bachelor of Science in Industrial Technology (Major in Electrical Technology)",
    location: "Dumaguete City, Negros Oriental",
    year: "Graduated: 2020"
  }
];

export const TRAINING_DATA = [
  {
    title: "General Virtual Assistant",
    institution: "People Skills and Management Institute",
    period: "December 2025 – January 2026"
  },
  {
    title: "On-The-Job Training",
    institution: "Municipality of Sibulan",
    period: "January 2020 – March 2020"
  },
  {
    title: "On-The-Job Training",
    institution: "Terumo (Philippines) Corporation",
    period: "August 2019 – November 2019"
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    category: "Administrative & Technical",
    items: [
      "Computer Literate (Word, Excel, PowerPoint)",
      "53 wpm / 98% Accuracy",
      "Oral & Written Communication",
      "Transport Allocation",
      "Electrical Maintenance"
    ]
  },
  {
    category: "Creative & Digital",
    items: [
      "Adobe Firefly",
      "Canva",
      "Capcut",
      "Video Editing",
      "Graphic Design"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Video Editing Portfolio",
    description: "A collection of video editing projects showcasing skills in Capcut and other editing software. Includes transitions, color grading, and sound design.",
    tools: ["Capcut", "Adobe Firefly"],
    image: "/Vid edit.png",
    link: "https://drive.google.com/drive/folders/1OXc-YMFQFdxttAB1PVcyQk8I0DrlWrZF?usp=sharing"
  },
  {
    title: "Graphic Design Assets",
    description: "Creative assets designed for social media and marketing purposes using Canva and Adobe tools.",
    tools: ["Canva", "Adobe Firefly"],
    image: "graph des.png",
    link: "https://drive.google.com/drive/folders/1OXc-YMFQFdxttAB1PVcyQk8I0DrlWrZF?usp=sharing"
  },

  {
    title: "Pet's Paradise Website",
    description: "Pet's Paradise offers transparent pet aftercare through individual cremation tracking, private viewing facilities, and integrated grief support resources.",
    tools: ["GoogleAIStudio", "Vercel", "Github", "Typescript"],
    image: "/background.png",
    link: "https://petsparadise-demo.vercel.app/"
  }
];
