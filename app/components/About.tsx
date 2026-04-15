'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id='about' className='py-20 md:py-24 bg-background'>
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <h2 className=' text-3xl md:text-4xl font-bold mb-8 text-center'>
            About <span className='text-primary'>Me</span>
          </h2>
          <div className='max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed text-center md:text-left'>
            <p>
              I got into coding because I wanted to build the tool I needed —
              and ended up falling in love with the craft. There&apos;s
              something deeply satisfying about turning an idea into a working
              product that real people use every day.
            </p>
            <p>
              Today I focus on building full-stack web applications with React,
              Node.js, and modern cloud infrastructure. I care about
              performance, clean architecture, and user experience in equal
              measure. When I&apos;m not coding, I&apos;m usually exploring new
              frameworks, contributing to open source, or writing about what
              I&apos;ve learned.
            </p>
            <p>
              Right now I&apos;m diving deeper into system design, exploring
              edge computing, and refining my approach to building products that
              scale.
            </p>
            <div className='pt-4 flex justify-center md:justify-start'>
              <button className='gap-2'>
                <Link href={''}>
                  <FileDown size={16} />
                  Download Resume
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
