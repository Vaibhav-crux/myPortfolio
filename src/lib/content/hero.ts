import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Vaibhav Tiwari.',
  tagline: 'Engineering innovative digital solutions from concept to deployment.',
  description:
    "I’m a versatile professional with a passion for creating robust, scalable, and efficient digital products. My work spans across various domains, ensuring seamless integration and performance in every project I undertake. With a focus on delivering high-quality results, I excel at turning complex challenges into streamlined solutions. Whether it's designing, developing, or optimizing, I bring a holistic approach to building impactful digital experiences.",
  specialText: 'Open to exploring new opportunities in software development, architecture, and engineering',
  cta: {
    title: 'view my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
