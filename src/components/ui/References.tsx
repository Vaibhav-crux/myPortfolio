import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { references } from '@/lib/content/references';

const References = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="references" className="max-w-6xl py-32 mx-auto text-center">
      <h2 className="heading-secondary mb-12">References</h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {references.map((reference, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg transition-all duration-300 ease-in-out transform relative"
            style={{
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '2px solid transparent',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
            <Image
              src={reference.image}
              alt={reference.name}
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="italic mb-4">"{reference.quote}"</p>
            <h3 className="font-semibold text-lg">{reference.name}</h3>
            <p className="text-gray-500">{reference.profession}</p>
            {reference.email && (
              <p className="text-blue-500 mt-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${reference.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in touch for more info
                </a>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default References;
