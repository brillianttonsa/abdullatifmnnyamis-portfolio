import { Cpu, Globe, Smartphone } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import DownloadCVButton from "./DownloadCVButton";

const education = [
  { degree: "BSc in Computer Science", school: "UDSM", years: "2023 - 2026", desc: "Specializing mainly in Software Architecture and Artificial Intelligence, Also in IT infrastructure and Networking" },
  { degree: "Full Stack Web Development Bootcamp", school: "Udemy (Dr. Angela Yu Certification)", years: "2024 - 2025", desc: "Professional certification covering the Full stack, SQL, and modern web deployment." },
  { degree: "Python Engineering & Automation", school: "Udemy (Dr. Angela Yu Certification)", years: "2023 - 2026", desc: "Focused on Python programming, data structures, automation scripts, and foundational AI/ML." },
  { degree: "AI Agents & LLM Engineering", school: "Udemy course", years: "2025 - Present", desc: "Currently learning AI agents, LLM orchestration, RAG systems, and prompt engineering." },
];


const projectsAsExperience = [
  {
    role: "Full-Stack Developer",
    company: "Maize Inventory Management System",
    years: "2026",
    desc: "Developing a business management system for maize procurement, inventory tracking, production, sales, expenses, and financial reporting. Using React, TypeScript, NestJS, PostgreSQL, and Drizzle ORM to build business workflows, API integrations, and data-driven dashboards.",
  },
  {
    role: "Full-Stack Developer",
    company: "LifeHub — Personal Productivity Platform",
    years: "2026",
    desc: "Building a productivity platform that helps users manage personal goals, plans, disciplines, and projects. Using React, Vite, NestJS, TypeScript, PostgreSQL, and Drizzle ORM, with a focus on authentication, API architecture, database design, and maintainable application structure.",
  },
  {
    role: "Python Developer",
    company: "Payment Reconciliation System",
    years: "2026 - Current",
    desc: "Developing a Python-based reconciliation solution to compare expected transactions with payment records, identify discrepancies, and track unmatched payments. Focused on structured transaction data, reconciliation workflows, reporting, and reducing manual financial reconciliation tasks.",
  },
  {
    role: "Full-Stack Developer",
    company: "Wi-Fi Access & Subscription Management System",
    years: "2026",
    desc: "Developing a web-based system for managing Wi-Fi users, subscription plans, access credentials, and payment history. Focused on user authentication, subscription workflows, dashboard design, and preparing the system for future payment gateway integration.",
  },
];


const ResumeAndCapability = () => (
  <section className="bg-white py-20 px-6 font-sans text-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-[#fde047] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Resume</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Capability Summary</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
        <EducationSection education={education} />
        <ExperienceSection experiences={projectsAsExperience} />
      </div>

      <DownloadCVButton />
    </div>
  </section>
);

export default ResumeAndCapability;
