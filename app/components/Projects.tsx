'use client';

import { motion, cubicBezier } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    title: 'Planly',
    description:
      'AI-powered SaaS platform that generates personalized learning roadmaps with progress tracking and subscription-based access.',
    image: 'planly.png',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Stripe'],
    liveUrl: 'https://app.gopikoduri.com/app',
    githubUrl: 'https://github.com/Gopi-varaprasad7/daily-progress-hub',
  },
  {
    title: 'ShopEase',
    description:
      'Full-stack e-commerce platform with Stripe payments, admin dashboard, and inventory management.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DevPulse',
    description:
      'Developer productivity tracker that integrates with GitHub and visualizes coding activity over time.',
    tags: ['React', 'D3.js', 'GitHub API', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'WeatherNow',
    description:
      'Minimalist weather app with location-based forecasts, interactive maps, and severe weather alerts.',
    tags: ['React', 'Tailwind', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ChatSphere',
    description:
      'Real-time messaging app with end-to-end encryption, file sharing, and group chat support.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'PortfolioGen',
    description:
      'A portfolio generator that creates stunning developer portfolios from a simple JSON config.',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const Projects = () => {
  return (
    <section id='projects' className='py-20 md:py-24 bg-transparent text-white'>
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Featured <span className='text-blue-600'>Projects</span>
        </motion.h2>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className='group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300'
            >
              {/* Image Placeholder - Replace with <Image /> if you have assets */}
              <div className='h-48 bg-muted flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500'>
                <img src={project.image} alt={project.title} />
              </div>

              <div className='p-5'>
                <h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  {project.title}
                </h3>
                <p className='text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1.5 mb-6 text-blue-600'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2.5 py-0.5 text-[10px] md:text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/10'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex items-center gap-3 '>
                  {/* Live Link Button */}
                  <Link
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-1.5 border rounded px-8 py-2 transition-hover hover:bg-blue-600/10'
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </Link>

                  {/* Code Link Button */}
                  <Link
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-1.5 border rounded px-8 py-2 transition-hover hover:bg-blue-600/10'
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
