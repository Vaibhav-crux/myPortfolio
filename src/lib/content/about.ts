import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      // Back-End Technologies
      'FastAPI',
      'Python',

      // Front-End Technologies
      'Next.js',
      'TypeScript',

      // Cloud and DevOps
      'AWS',
      'Google Cloud',
      'Docker',
      'CI/CD (GitHub Actions, Jenkins)',

      // Databases
      'PostgreSQL',
      'MongoDB',

      // Data Processing and Web Scraping
      'Beautiful Soup',
      'Web Scraping',
    ],
  },
  img: '/cOPY-removebg-preview.png',
};
