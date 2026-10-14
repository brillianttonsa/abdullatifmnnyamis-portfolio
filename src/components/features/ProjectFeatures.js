import maizeImg from '../../assets/maize-inventory-ai.png';
import lifeHubImg from '../../assets/task-manager.png';
import paymentImg from '../../assets/fee-student-system.png';
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
    title: 'Payment Reconciliation System',
    category: 'Financial Operations',
    status: 'In Development',
    desc: 'A Python-based reconciliation solution that compares expected transactions with payment records, identifies discrepancies, and tracks unmatched payments to reduce manual reconciliation work.',
    features: [
      'Compare expected transactions with payment records',
      'Identify discrepancies and unmatched payments',
      'Structured transaction data and reconciliation workflows',
      'Reconciliation reporting',
    ],
    tech: ['Python'],
    image: paymentImg,
    link: "#"
  },
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
    tech: [],
    image: wifiImg,
    link: "#"
  },
];
