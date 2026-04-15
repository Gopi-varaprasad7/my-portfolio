'use client'; // Required for form state and Framer Motion

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, X, Send } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: X, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:gopi@example.com', label: 'Email' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated submission for Next.js
    try {
      // Here you would typically call a Next.js API route or Server Action
      console.log('Form data ready for Next.js backend:', form);

      // Artificial delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='py-20 md:py-24 bg-transparent text-white'>
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Get In <span className='text-blue-600'>Touch</span>
        </motion.h2>

        <motion.div
          className='max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <input
                placeholder='Your name'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className='border border-white/20 rounded p-2 bg-blue-950/50 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500'
              />
              <input
                type='email'
                placeholder='Your email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className='border border-white/20 rounded p-2 bg-blue-950/50 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500'
              />
            </div>
            <textarea
              placeholder='Your message'
              rows={5}
              value={form.message}
              onChange={(e: { target: { value: any } }) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className='w-full border rounded pl-2'
            />
            <button
              type='submit'
              className='flex gap-2 w-full sm:w-auto border px-8 py-2 rounded-lg bg-blue-600 text-white'
              disabled={isLoading}
            >
              {isLoading ? (
                <span className='animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent' />
              ) : (
                <Send size={16} className='pt-1' />
              )}
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Social Links Container */}
          <div className='flex justify-center gap-5 mt-12'>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300'
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
