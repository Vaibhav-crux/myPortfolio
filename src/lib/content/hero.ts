import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Vaibhav Tiwari.',
  tagline: 'I engineer robust back-end systems for scalable web applications.',
  description:
    "I'm a skilled Full-Stack developer with a strong focus on backend development. I have extensive experience in creating high-performance, scalable web applications using technologies like Next.js, FastAPI, and TypeScript. My expertise extends to optimizing cloud infrastructure on AWS, developing efficient RESTful APIs, and automating workflows with Python.",
  specialText: 'Currently available for backend-focused projects',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
