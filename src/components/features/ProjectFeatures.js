import maizeImg from '../../assets/maize-inventory-ai.png';
import lifeHubImg from '../../assets/task-manager.png';
import taskManagerImg from '../../assets/task-manager.png';
import wifiImg from '../../assets/smart-admin.png';

export const projects = [
  {
    title: 'Maize Inventory Management System',
    category: 'Business Management',
    status: 'In Development',
    desc: 'A business management system for maize procurement, inventory tracking, production, sales, expenses, and financial reporting. Built with React, TypeScript, NestJS, PostgreSQL, and Drizzle ORM, with a focus on connected business workflows and data-driven dashboards.',
    features: [
      'Maize procurement and inventory tracking',
      'Production and sales workflows',
      'Expense management and financial reporting',
      'API integrations and data-driven dashboards',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Drizzle ORM'],
    image: maizeImg,
    link: "#"
  },
  {
    title: 'LifeHub',
    category: 'Productivity Platform',
    status: 'In Development',
    desc: 'A personal productivity platform for managing goals, plans, disciplines, and projects. Its development focuses on authentication, API architecture, database design, and a maintainable application structure.',
    features: [
      'Personal goals and plans',
      'Discipline and project management',
      'Authentication',
      'Maintainable API and database architecture',
    ],
    tech: ['React', 'Vite', 'NestJS', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
    image: lifeHubImg,
    link: "#"
  },
   {
    title: "Task Management Tool",
    category: "Full-Stack Web",
    status: "Live",
    desc: "An enterprise-grade productivity suite focused on team collaboration and real-time state synchronization.",
    features: ["Optimistic UI updates", "Drag-and-drop task kanban", "Multi-user real-time sync", "Advanced activity logging"],
    tech: ["React", "Express", "PostgreSQL"],
    image: taskManagerImg,
    link: "https://task-manager-app-three-mauve.vercel.app/"
    },,
  
  {
    title: 'Wi-Fi Access & Subscription Management System',
    category: 'Network Management',
    status: 'In Development',
    desc: 'A web-based system for managing Wi-Fi users, subscription plans, access credentials, and payment history. The work focuses on authentication, subscription workflows, and dashboard design.',
    features: [
      'Wi-Fi user and access credential management',
      'Subscription plan management',
      'Payment history',
      'Authentication and management dashboard',
    ],
    tech: ['React', 'Express', "TypeScript", 'Drizzle ORM', 'PostgreSQL'],
    image: wifiImg,
    link: "#"
  },
];
