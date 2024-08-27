import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Web3 Nexus',
      description: 'A platform streamlining crypto transactions with automated systems.',
      tasks:
        "Led the backend development for a crypto platform, ensuring efficient transaction processing and smooth updates. Automated notifications and enhanced image processing, which boosted customer engagement and productivity.",
      url: 'https://www.houseofweb3.com',
      img: '/freepik/Screenshot 2024-08-14 195414.png',
      tags: [
        'NextJs',
        'AI/ML',
        'RESTful API',
        'WhatsApp API',
        'Prisma ORM'
      ],
    },
    {
      id: getId(),
      name: 'Web3 Influence',
      description: 'A dynamic platform for managing digital rewards distribution.',
      tasks:
        "Crafted and fine-tuned the backend for a web app focused on digital rewards. Enhanced speed and scalability while automating data collection from multiple sources, resulting in more efficient operations and faster data handling.",
      url: 'https://www.houseofweb3.ai',
      img: '/freepik/Screenshot 2024-08-14 195235.png',
      tags: [
        'TypeScript', 
        'MetaMask', 
        'AI/ML',
        'RESTful API',
        'CI/CD',
        'Type ORM'
      ],
    },
    {
      id: getId(),
      name: 'Skoob',
      description: 'A mobile app delivering podcasts based on books.',
      tasks:
        "Designed the core structure for a mobile app, ensuring smooth audio playback and fast response times. Developed tools that enhanced content accessibility, improving user experience and increasing efficiency in content delivery.",
      url: 'https://apps.apple.com/us/app/skoob-podcasts-based-on-books/id6473138854',
      img: '/freepik/Screenshot 2024-08-14 194404.png',
      tags: [
        'Python', 
        'FastAPI', 
        'CI/CD', 
        'PostgreSQL', 
        'Alembic ORM'
      ],
    },
  ],
};

export default featuredProjectsSection;
