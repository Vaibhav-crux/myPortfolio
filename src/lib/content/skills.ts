import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'back-end development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, ShadCN, and Prisma',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Nextjs for backend development',
        'Building robust backend services using FastAPI, Django, and Flask',
        'Writing clean, efficient code in Python for backend development',
        'Implementing and managing databases with PostgreSQL, MySQL, and MongoDB',
        'Utilizing Docker for containerization and deploying scalable applications',
        'Managing CI/CD pipelines with GitHub Actions and Jenkins for seamless deployment',
        'Leveraging AWS and Google Cloud for scalable cloud infrastructure',
        'Ensuring security and scalability in backend architectures',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        // Programming Languages
        { name: 'Python', icon: 'logos:python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },

        // Frameworks
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'FastAPI', icon: 'logos:fastapi' },
        { name: 'Django', icon: 'logos:django' },
        { name: 'Flask', icon: 'logos:flask' },

        // ORMs
        { name: 'Prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'TypeORM', icon: 'logos:typeorm' },
        { name: 'Tortoise ORM', icon: 'emojione:turtle' },
        { name: 'Alembic', icon: 'twemoji:test-tube' },

        // Databases
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'MongoDB', icon: 'logos:mongodb' },

        // Tools & Platforms
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Google Cloud', icon: 'logos:google-cloud' },

        // CI/CD
        { name: 'Jenkins', icon: 'logos:jenkins' },
        { name: 'GitHub Actions', icon: 'logos:github-actions' },

      ],
    },
    {
      id: getId(),
      title: 'Software Development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in developing applications using Python and related frameworks',
        'Proficient in creating cross-platform GUI applications with PyQt and Tkinter',
        'Skilled in packaging and distributing Python applications with PyInstaller and cx_Freeze',
        'Experience in version control with Git and GitHub, and writing tests using unittest and pytest',
        'Knowledgeable in creating documentation with Sphinx and creating installers with Inno Setup and NSIS',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Tkinter', icon: 'mdi:turtle' },
        { name: 'PyQt5/PyQt6', icon: 'logos:qt' },
        { name: 'ctypes', icon: 'mdi:code-tags' }, 
        { name: 'PyInstaller', icon: 'mdi:package-variant' },
        { name: 'cx_Freeze', icon: 'mdi:snowflake' },
        { name: 'py2exe', icon: 'mdi:application' },
        { name: 'unittest', icon: 'mdi:checkbox-marked-outline' }, 
        { name: 'pytest', icon: 'mdi:test-tube' },
        { name: 'Git', icon: 'logos:git' },
        { name: 'GitHub', icon: 'logos:github' },
        { name: 'Sphinx', icon: 'mdi:book-open-variant' },
        { name: 'Inno Setup', icon: 'mdi:cube-outline' },
        { name: 'NSIS', icon: 'mdi:box-cutter' },
      ],
    },
  ],
};
