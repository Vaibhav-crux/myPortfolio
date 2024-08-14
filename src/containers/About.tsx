'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
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
            Hi, my name is Vaibhav Tiwari, a recent B.Tech graduate in Computer Science from{' '}
            <Link
              href="https://www.krishnacollege.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Krishna Engineering College
            </Link>
            .<br /> I'm a passionate Full-Stack developer with a strong focus on backend development and cloud computing. I enjoy exploring new technologies and building scalable, high-performance web applications.
          </p>
          <p>
            Over the course of my career, I've had the privilege of working at{' '}
            <Link
              href="https://www.houseofweb3.com/"
              target="_blank"
              className="text-accent"
            >
              House of Web3
            </Link>{' '}
            as a Software Developer and Backend Developer Intern, where I contributed to various projects including an airdrop web application, automated notification systems, and AI-powered document analysis tools.
          </p>
          <p>
            My current focus is on honing my skills in backend development, cloud infrastructure, and exploring opportunities in the tech industry to apply and grow my expertise.
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
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
