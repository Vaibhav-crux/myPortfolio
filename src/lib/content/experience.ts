import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'House of Web3',
      companyUrl: 'https://www.houseofweb3.com/',
      role: 'Software Developer I',
      started: 'July 2024',
      upto: 'August 2024',
      tasks: [
        'Engineered and optimized the back-end for an Airdrop web application using Next.js and a RESTful API, improving performance and responsiveness.',
        'Refactored algorithms and designed scalable APIs to enhance processing speed and reduce server load.',
        'Automated data extraction from 10 websites using Python and Beautiful Soup, increasing processing speed by 40%.',
        'Developed a system for extracting data from PDF and DOC files, generating MCQs and summaries using OpenAI API and Gemini API.',
      ],
    },
    {
      company: 'House of Web3',
      companyUrl: 'https://www.houseofweb3.com/',
      role: 'Back-end Developer Intern',
      started: 'March 2024',
      upto: 'June 2024',
      tasks: [
        'Created a back-end for a crypto exchange platform, enabling seamless transactions using MetaMask and implementing a RESTful API with TypeScript.',
        'Developed and automated a notification system using Python and the FastAPI framework, integrated with Wati for WhatsApp API, improving customer engagement.',
        'Enhanced resource allocation for AI image generation pipeline with TensorFlow, cutting processing time by 30% and improving output quality.',
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
        'Improved the efficiency, reliability, security, user-friendliness, and overall functionality of the software by 50%.',
        'Managed the GUI, database, hardware, server, and cloud aspects, leading to a 60% improvement in loading speed.',
        'Employed Python and Streamlit for development and PostgreSQL for database management, demonstrating skills in logic implementation, Docker use, and management of GCP resources.',
      ],
    },
  ],
};
