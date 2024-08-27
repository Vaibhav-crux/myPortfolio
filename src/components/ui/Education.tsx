"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/lib/content/education';
import { fadeIn, slideUp } from '@/styles/animations';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="max-w-6xl py-32 mx-auto text-center">
      <h2 className="heading-secondary mb-12">Education</h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform relative overflow-hidden"
            style={{
              border: '2px solid var(--color-dark-3)',
              borderRadius: '20px',
              backgroundColor: 'var(--color-bg-secondary)',
            }}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={{
              hidden: { ...fadeIn(0).hidden, ...slideUp({ offset: 20 }).hidden },
              show: { ...fadeIn(0).show, ...slideUp({ offset: 20 }).show },
            }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
          >
            <h3 className="font-semibold text-lg mb-2 relative z-10" style={{ color: 'var(--color-dark-1)' }}>
              {edu.institution}
            </h3>
            <p className="relative z-10" style={{ color: 'var(--color-dark-2)' }}>
              {edu.degree} <br /> {edu.date}
            </p>
            <ul className="text-left list-disc list-inside relative z-10">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="mb-2" style={{ color: 'var(--color-dark-3)' }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
