'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contents', href: '#contents' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.pushState({}, '', href);
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-275 mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='#home'
            className='font-syne font-extrabold text-xl text-text-primary tracking-tight'
          >
            gopi<span className='text-brand-green'>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8 '>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  activeSection === href.slice(1)
                    ? 'text-green-600'
                    : 'text-white dark:text-slate-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 text-slate-600 dark:text-slate-300'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden pb-4 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2'>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`block py-3 text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === href.slice(1)
                    ? 'text-blue-600'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
