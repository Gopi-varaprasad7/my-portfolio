'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';

const roles = ['Full-Stack Developer', 'React Enthusiast', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Refined Scroll Handler for Next.js
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center pt-16 bg-background'
    >
      <div className='max-w-275 mx-auto px-4 md:px-6 w-full'>
        <div className='flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16'>
          {/* Text Content */}
          <motion.div
            className='flex-1 text-center md:text-left'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-muted-foreground text-sm md:text-base font-medium mb-3'>
              Hi, I&apos;m Gopi 👋
            </p>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4'>
              I build fast, scalable web apps that users actually{' '}
              <span className='text-primary'>love.</span>
            </h1>

            <div className='h-8 mb-6'>
              <span className='text-muted-foreground font-mono text-lg'>
                {text}
                <span className='animate-pulse text-primary ml-1'>|</span>
              </span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button onClick={() => scrollTo('#projects')} className='gap-2'>
                View my work <ArrowDown size={16} />
              </button>

              <button className='gap-2'>
                <a href='/resume.pdf' download='Gopi_Resume.pdf'>
                  <FileDown size={16} /> Download resume
                </a>
              </button>
            </div>
          </motion.div>

          {/* Avatar / Image */}
          <motion.div
            className='shrink-0'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary bg-muted flex items-center justify-center text-5xl md:text-7xl shadow-2xl'>
              👨‍💻
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
