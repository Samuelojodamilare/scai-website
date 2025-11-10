import gainImage from "../assets/gainImage.jpg";
import testimonyimg1 from "../assets/testimonyimg1.jpg";
import testimonyimg2 from "../assets/testimonyimg2.jpg";
import {
  faBolt,
  faBookOpen,
  faExpandAlt,
  faRobot,
  faSliders,
  faSlidersH,
  faUniversalAccess,
  faUserPlus,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface OfferDetail {
  title: string;
  description: string;
  color: string;
  icon: IconDefinition;
}

export const offerDetails: OfferDetail[] = [
  {
    title: "Onboarding Students",
    description:
      "Add and manage students in just a few clicks. With SatelliteCampusAI, registration is fast, organized, and seamless, helping institutions welcome new students without stress.",
    color: "#874BFC",
    icon: faUserPlus,
  },
  {
    title: "Automation with AI",
    description:
      "Let AI handle routine tasks like grading, reports, couese creation, communication etc. SatelliteCampusAI saves time and boosts efficiency through smart automation",
    color: "#A6C846",
    icon: faRobot,
  },
  {
    title: "Create & Organize Courses",
    description:
      "Easily create, structure, and manage courses in one place. SatelliteCampusAI helps instructors organize materials, set schedules, and update content effortlessly",
    color: "#4E94DC",
    icon: faBookOpen,
  },
  {
    title: "Customization",
    description:
      "Tailor the platform to fit your institution’s unique needs — adjust features, design, and workflow to match your academic structure and branding.",
    color: "#FD5CA9",
    icon: faSliders,
  },
];

export const needItems = [
  {
    number: 1,
    title: "Revenue Generation",
    desc: "With SatelliteCampusAI, institutions can generate steady income by selling their courses or offering exclusive one-on-one learning sessions. Payments go directly into your institution’s account, ensuring transparency and sustainable growth.",
  },
  {
    number: 2,
    title: "Onboarding Staffs",
    desc: "Easily onboard academic and administrative staff through a streamlined interface. Each staff member gets a dedicated account, personalized dashboard, and defined access permissions aligned with their roles.",
  },
  {
    number: 3,
    title: "Role Assignment",
    desc: "Assign roles such as Admin, Instructor, or Support Staff effortlessly. The system ensures each user has only the privileges necessary for their function, maintaining a secure and organized structure.",
  },
  {
    number: 4,
    title: "Management",
    desc: "Monitor and manage all activities within your institution from one place. From course scheduling to student performance tracking, you have full visibility and control over operations.",
  },
  {
    number: 5,
    title: "Easy Payment",
    desc: "Our integrated payment gateway supports multiple currencies and channels. Students can pay for courses easily, while institutions can track transactions in real-time with detailed analytics.",
  },
];

export const educationItems = [
  { title: "Scalability", icon: faExpandAlt },
  { title: "Accessibility", icon: faUniversalAccess },
  { title: "Flexibility", icon: faSlidersH },
  { title: "Impactful", icon: faBolt },
];

export const gainItems = [
  {
    title: "Course Study",
    description:
      "Students can access well-structured course materials, lectures, and assignments designed to enhance their understanding and learning pace.",
    icon: "📘",
    image: gainImage,
  },
  {
    title: "Connect with Peers",
    description:
      "Students don’t just study alone. They can connect with peers through discussion forums, group projects, and live sessions.",
    icon: "🤝",
    image: gainImage,
  },
  {
    title: "Grading",
    description:
      "Grading is automated and transparent. Students receive instant feedback and insights on their performance to help them improve.",
    icon: "📊",
    image: gainImage,
  },
  {
    title: "AI Assistance",
    description:
      "Students get personalized learning assistance through AI-powered tools that guide them through lessons, quizzes, and study plans.",
    icon: "🤖",
    image: gainImage,
  },
];

export const featuresLeft = [
  {
    icon: "📈",
    title: "Scaled Reports",
    desc: "Get insights into each student's individual and overall performance, enabling data-driven teaching strategies for improved learning outcomes.",
  },
  {
    icon: "💬",
    title: "Feedback",
    desc: "Students receive actionable feedback and personalized recommendations from instructors powered by AI insights.",
  },
  {
    icon: "🤝",
    title: "Easy Communication",
    desc: "Facilitate seamless communication with students through integrated messaging tools, ensuring effortless interaction.",
  },
];

export const featuresRight = [
  {
    icon: "⏱️",
    title: "Time Saving",
    desc: "Save valuable teaching time with streamlined tools that automate grading and lesson organization.",
  },
  {
    icon: "🤖",
    title: "AI Assistance",
    desc: "Enhance teaching experiences with AI-powered grading, recommendations, and teaching insights.",
  },
  {
    icon: "❓",
    title: "Moderated Q/A",
    desc: "Enable structured Q&A sessions that allow teachers to manage discussions and guide classroom interactions.",
  },
];

export const testimonyItems = [
  {
    name: "Dr. Amina Yusuf",
    desc: "SatelliteCampusAI has completely transformed how we manage our students and online programs. From onboarding to tracking performance, everything runs smoothly and efficiently. It’s truly an all-in-one platform for modern universities.",
    image: testimonyimg1,
  },
  {
    name: "Prof. Tunde Adewale",
    desc: "With SatelliteCampusAI, we’ve been able to expand our reach beyond physical classrooms. The flexibility and automation features have made student management and course delivery effortless",
    image: testimonyimg2,
  },
];
