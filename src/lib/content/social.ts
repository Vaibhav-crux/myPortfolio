import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'tabler:brand-medium', // Adding the Medium icon
      url: socialLinks.medium,     // Linking to your Medium profile
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
  ],
};
