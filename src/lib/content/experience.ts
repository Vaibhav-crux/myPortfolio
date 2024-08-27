import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'House of Web3',
      companyUrl: 'https://www.houseofweb3.com/',
      role: 'Back-end Developer Intern',
      started: 'March 2024',
      upto: 'June 2024',
      tasks: [
        'Engineered and optimized back-ends for both an Airdrop web application and a crypto influencer platform using TypeScript, and RESTful APIs, boosting performance and user engagement.',
        'Refactored algorithms and designed scalable APIs, reducing server load and improving processing speeds across applications.',
        'Automated data extraction from 10 websites and developed a notification system using Python and FastAPI, enhancing processing speed by 40%.',
        'Integrated the notification system with Wati for WhatsApp API, significantly improving customer engagement.',
        'Enhanced AI image generation pipeline with TensorFlow, cutting processing time by 30% and improving output quality.'
      ],
    },
    {
      company: 'Mastervance',
      companyUrl: 'https://www.mastervance.com/',
      role: 'Freelance Cloud Engineer',
      started: 'February 2024',
      upto: 'April 2024',
      tasks: [
        'Successfully set up and optimized AWS infrastructure for an EdTech website, improving system performance by 35% and reducing operational costs by 25%.',
        'Managed deployment of a high-performance EdTech platform on AWS, utilizing EC2, S3, Load Balancer, Route 53, VPC, SES, and CloudWatch.',
        'Implemented Auto Scaling to ensure 99.99% uptime and optimal performance for the platform.',
      ],
    },
    {
      company: 'LaunchX Labs',
      companyUrl: 'https://launchxlabs.ai/',
      role: 'Software Developer Intern',
      started: 'August 2023',
      upto: 'December 2023',
      tasks: [
        'Designed and implemented the back-end architecture for a mobile application using FastAPI and Python, enabling seamless reading and audio playback of books.',
        'Developed a software using PyQt that transforms text into audio, increasing conversion efficiency by 70%.',
        'Built a web-based application using Python and OpenAI API to convert spoken words in YouTube videos into written text, processing over 1,000 videos.',
      ],
    },
    {
      company: 'Darshil IT',
      companyUrl: 'http://www.darshilit.com/',  // Replace with actual URL if available
      role: 'Python Developer Intern',
      started: 'July 2023',
      upto: 'August 2023',
      tasks: [
        'Enhanced software efficiency, reliability, security, and user experience by 50%, significantly improving overall functionality.',
        'Optimized GUI, database, hardware, server, and cloud components, achieving a 60% increase in loading speed.',
        'Utilized Python and PostgreSQL for robust database management, showcasing expertise in logic implementation, Docker, and GCP resource management.',
      ],
    },
  ],
};
