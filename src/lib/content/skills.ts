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
        light: '/lotties/backend.json',
        dark: '/lotties/backend.json',
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
        light: '/lotties/software.json',
        dark: '/lotties/software.json',
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
    {
      id: getId(),
      title: 'Cloud Computing & DevOps',
      lottie: {
        light: '/lotties/cloud.json',
        dark: '/lotties/cloud.json',
      },
      points: [
        'Designing and deploying scalable cloud infrastructure using AWS and Google Cloud',
        'Automating infrastructure with Terraform for efficient and consistent deployments',
        'Implementing CI/CD pipelines using Jenkins and GitHub Actions for automated testing and deployments',
        'Managing containerized applications with Docker on AWS and Google Cloud',
        'Deploying and managing web applications using Firebase and Vercel for serverless and frontend hosting',
        'Setting up and configuring NGINX for high-performance web server environments',
        'Securing cloud environments by implementing best practices in IAM, VPC, and network security',
        'Utilizing Serverless architectures with AWS Lambda and Google Cloud Functions for event-driven computing',
        'Implementing cost management strategies to optimize cloud spending on AWS and Google Cloud',
      ],
      softwareSkills: [
        // Cloud Providers
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Google Cloud', icon: 'logos:google-cloud' },
    
        // Infrastructure as Code
        { name: 'Terraform', icon: 'logos:terraform' },
    
        // CI/CD
        { name: 'Jenkins', icon: 'logos:jenkins' },
        { name: 'GitHub Actions', icon: 'logos:github-actions' },
    
        // Containerization & Web Servers
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'NGINX', icon: 'logos:nginx' },
    
        // Hosting & Serverless
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Vercel', icon: 'logos:vercel' },
        { name: 'AWS Lambda', icon: 'logos:aws-lambda' },
        { name: 'Google Cloud Functions', icon: 'logos:google-cloud-functions' },
    
        // Security
        { name: 'IAM', icon: 'mdi:shield-account-outline' },
        { name: 'VPC', icon: 'mdi:network-outline' },
      ],
    },
    
  ],
};
