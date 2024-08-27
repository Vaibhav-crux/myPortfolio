import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'back-end development',
      lottie: {
        light: '/lotties/backend.json',
        dark: '/lotties/backend.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, ShadCN, and Prisma',
        'Developing robust backend services and RESTful APIs using TypeScript, FastAPI, Django, and Flask',
        'Writing clean, efficient code in Python and JavaScript for backend development',
        'Implementing and managing databases with PostgreSQL, MySQL, and MongoDB',
        'Ensuring security and scalability in backend architectures',
      ],      
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'FastAPI', icon: 'logos:fastapi' },
        { name: 'Django', icon: 'logos:django' },
        { name: 'Flask', icon: 'logos:flask' },
        { name: 'Prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'TypeORM', icon: 'logos:typeorm' },
        { name: 'Tortoise ORM', icon: 'emojione:turtle' },
        { name: 'Alembic', icon: 'twemoji:test-tube' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
      ],
    },
    {
      id: getId(),
      title: 'cloud computing & devops',
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
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Google Cloud', icon: 'logos:google-cloud' },
        { name: 'Terraform', icon: 'logos:terraform' },
        { name: 'Jenkins', icon: 'logos:jenkins' },
        { name: 'GitHub Actions', icon: 'logos:github-actions' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'NGINX', icon: 'logos:nginx' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Vercel', icon: 'logos:vercel' },
        { name: 'AWS Lambda', icon: 'logos:aws-lambda' },
        { name: 'Google Cloud Functions', icon: 'logos:google-cloud-functions' },
        { name: 'IAM', icon: 'mdi:shield-account-outline' },
        { name: 'VPC', icon: 'mdi:network-outline' },
      ],
    },
    {
      id: getId(),
      title: 'AI & machine learning',
      lottie: {
        light: '/lotties/ai.json', // Add the appropriate Lottie animation for AI
        dark: '/lotties/ai.json',
      },
      points: [
        'Developing and deploying machine learning models for predictive analytics and automation',
        'Experience with deep learning frameworks such as TensorFlow and PyTorch',
        'Building natural language processing (NLP) systems using Python and related libraries',
        'Implementing AI-driven solutions to enhance user experiences and optimize processes',
        'Applying computer vision techniques for image classification and object detection',
        'Utilizing large language models (LLMs) like ChatGPT and Gemini for AI applications',
        'Integrating AI technologies using LangChain for seamless interactions',
      ],
      softwareSkills: [
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'PyTorch', icon: 'logos:pytorch' },
        { name: 'scikit-learn', icon: 'mdi:chart-line' }, // Placeholder icon for scikit-learn
        { name: 'ChatGPT', icon: 'mdi:chat-processing-outline' }, // Placeholder icon
        { name: 'Gemini', icon: 'mdi:robot-outline' }, // Placeholder icon
        { name: 'LangChain', icon: 'mdi:link-variant' },
        { name: 'LLM', icon: 'mdi:brain' }, // Placeholder icon for Large Language Models
        { name: 'Numpy', icon: 'logos:numpy' },
        { name: 'Pandas', icon: 'logos:pandas' },
      ],
    },    
    {
      id: getId(),
      title: 'front-end development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend.json',
      },
      points: [
        'Building semantic and accessible HTML structures',
        'Styling user interfaces with modern CSS and Bootstrap',
        'Creating responsive designs using Bootstrap',
        'Leveraging Figma for design-to-code workflows and prototyping',
      ],
      softwareSkills: [
        { name: 'HTML', icon: 'logos:html-5' },
        { name: 'CSS', icon: 'logos:css-3' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'Figma', icon: 'logos:figma' },
      ],
    },
    {
      id: getId(),
      title: 'software engineering',
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
  ],
};
