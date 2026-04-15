'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    type: 'work' as const,
    title: 'Associate Software Engineer',
    org: 'Fitniti',
    period: '2025 Jan — 2025 December',
    description:
      'Leading the frontend team in building a SaaS platform with React and TypeScript. Improved page load speed by 40% and implemented a design system used across 5 products.',
  },
  {
    type: 'work' as const,
    title: 'Full-Stack Developer',
    org: 'StartupXYZ',
    period: '2020 — 2022',
    description:
      'Built and shipped a customer-facing dashboard from scratch using React, Node.js, and PostgreSQL. Owned the full stack from database design to deployment.',
  },
  {
    type: 'education' as const,
    title: 'B.Tech in Computer Science',
    org: 'Sree Rama Engineering Collage',
    period: '2020 — 2024',
    description:
      "Graduated with distinction. Focused on algorithms, data structures, and web technologies. Led the university's coding club.",
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='py-20 md:py-24 bg-transparent text-white'
    >
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Experience & <span className='text-blue-600'>Education</span>
        </motion.h2>

        <div className='relative'>
          {/* Vertical Central Line */}
          <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5' />

          <div className='space-y-12'>
            {timelineData.map((entry, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start md:items-center gap-4 md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-blue-500/50 to-transparent md:-translate-x-0.5' />

                  {/* Content Card Container */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isLeft
                        ? 'md:pr-12 md:text-right'
                        : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <div className='rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow'>
                      {/* Icon and Date Header */}
                      <div
                        className={`flex items-center gap-2 mb-3 flex-wrap ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {entry.type === 'work' ? (
                          <Briefcase size={16} className='text-blue-600' />
                        ) : (
                          <GraduationCap size={16} className='text-blue-600' />
                        )}
                        <span className='text-xs text-muted-foreground font-mono font-medium'>
                          {entry.period}
                        </span>
                      </div>

                      <h3 className='font-bold text-white text-lg'>
                        {entry.title}
                      </h3>
                      <p className='text-blue-600 font-medium text-sm mb-3'>
                        {entry.org}
                      </p>
                      <p className='text-muted-foreground text-sm leading-relaxed'>
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
