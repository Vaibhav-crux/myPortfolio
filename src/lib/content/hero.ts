import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Vaibhav Tiwari.',
  tagline: 'Crafting powerful backend systems for scalable web solutions.',
  description:
    "As a Full-Stack developer with a passion for backend technologies, I specialize in building high-performance, scalable web applications. With a strong command of Next.js, FastAPI, and TypeScript, I create efficient and reliable systems. My expertise also includes optimizing cloud infrastructure on AWS, developing robust RESTful APIs, and streamlining processes through automation with Python.",
  specialText: 'Open to new backend development opportunities',
  cta: {
    title: 'view my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
