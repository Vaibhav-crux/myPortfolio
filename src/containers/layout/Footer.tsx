import { footerSection } from '@/lib/content/footer';

import SocialLinks from '../Social/SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />
      <div className="mb-2">
        <p className="transition hover:text-accent">
          {footerSection.title}
        </p>
        <p className="mt-2 text-gray-500">
          {footerSection.description}
        </p>
      </div>
      <a
        href={footerSection.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent"
      >
        Discover more
      </a>
    </footer>
  );
};

export default Footer;
