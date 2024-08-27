'use client';
import { aboutSection } from '@/lib/content/about';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Vaibhav Tiwari, a recent B.Tech graduate in Computer Science. I'm a dedicated developer with a strong focus on backend development and software engineering. My passion lies in building efficient, scalable web applications, as well as developing software solutions for both Windows and Mac environments, and continuously exploring new technologies to enhance my skills.
          </p>
          <p>
            Throughout my journey, I've gained valuable experience in backend development, creating robust systems and APIs, and implementing cloud infrastructure solutions. My work involves developing high-performance applications that address real-world challenges and meet the demands of modern web environments.
          </p>
          <p>
            Currently, I'm committed to advancing my knowledge in backend technologies, software engineering for cross-platform applications, and cloud computing, with a keen interest in contributing to innovative and impactful projects in the tech industry.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt="Author" />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
