import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'YouTube Video Transcriber',
      url: 'https://vaibhav-crux-youtube-video-transcriber-appmain-1vr7dw.streamlit.app/',
      repo: 'https://github.com/Vaibhav-crux/youtube-video-transcriber',
      img: 'https://github.com/Vaibhav-crux/video-to-textx/assets/122672330/1b084277-dac1-4815-8ff1-bd421111d1b7',
      year: 2024,
      tags: ['Streamlit', 'AssemblyAI', 'Google Generative AI', 'Python', 'SQLite'],
    },
    {
      id: getId(),
      name: 'DocuChat',
      url: 'https://vaibhav-crux-pdf-chatbot-appmain-nrbqpd.streamlit.app/',
      repo: 'https://github.com/Vaibhav-crux/PDF-Chatbot',
      img: 'https://github.com/Vaibhav-crux/PDF-Chatbot/assets/122672330/f7bf9741-3f11-43af-9015-f1762f0f2f4d',
      year: 2024,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'RFID Tag Management',
      url: 'https://github.com/Vaibhav-crux/Vehicle-RFID-Tag-Registration',
      repo: 'https://github.com/Vaibhav-crux/Vehicle-RFID-Tag-Registration',
      img: 'https://github.com/Vaibhav-crux/driver/assets/122672330/450cb639-1f3e-4fe1-bc58-c2c90386556e',
      year: 2024,
      tags: ['CSS Animations', 'Sass'],
    },
    {
      id: getId(),
      name: 'Library Management',
      url: 'https://github.com/Vaibhav-crux/library-management-system.git',
      repo: 'https://github.com/Vaibhav-crux/library-management-system.git',
      img: 'https://github.com/user-attachments/assets/f75d711a-1948-4a3e-8d65-19728cb790d4',
      year: 2023,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'ATM Management',
      url: 'https://github.com/Vaibhav-crux/ATM_System.git',
      repo: 'https://github.com/Vaibhav-crux/ATM_System.git',
      img: 'https://github.com/user-attachments/assets/c8a9e3c9-15f7-4e3f-9601-ec0c6dc72ac5',
      year: 2023,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'todo app',
      url: 'https://github.com/Vaibhav-crux/todo-list.git',
      repo: 'https://github.com/Vaibhav-crux/todo-list.git',
      img: 'https://github.com/Vaibhav-crux/todo-list/assets/122672330/5556ea21-31a7-41fa-9aa0-4225daf3d3f2',
      year: 2024,
      tags: ['React', 'Sass', 'JS'],
    },
  ],
};
