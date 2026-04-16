'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Skills = () => {
  return (
    <section id='skills' className='py-20 md:py-24 bg-transparent text-white'>
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Skills & <span className='text-blue-600'>Technologies</span>
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className='rounded-xl border border-border bg-card/50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <h3 className='text-blue-600 font-bold text-lg mb-4'>
                {cat.title}
              </h3>

              <div className='flex flex-wrap gap-2'>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1.5 text-xs md:text-sm rounded-md bg-secondary text-secondary-foreground font-medium border border-transparent hover:border-primary/30 transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
